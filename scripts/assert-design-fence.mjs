#!/usr/bin/env node
/**
 * Machine fence for Dutch form + Generation AI kit conflicts.
 * Scans implementation, not the law files (those name banned patterns on purpose).
 *
 * Until design-plan.md is LOCKED, production UI files are forbidden.
 * That is the freeze: useful docs/schema work still passes; a sketched hero does not.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const SRC_EXTS = new Set([
  '.astro',
  '.css',
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.svg',
  '.md',
  '.mdx',
  '.html',
]);

const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  '.astro',
  '.github',
]);

/** Patterns that leak if an agent reads only the Gen-AI kit or generic Tailwind. */
const FORBIDDEN = [
  {
    id: 'banned-face',
    re: /\bInter\b|\bRoboto\b|\bOpen Sans\b|\bComic Sans\b|\bSource Serif\b|\bPlayfair\b|\bFraunces\b|\bCormorant\b|\bInstrument Serif\b|\bIBM Plex\b/i,
    msg: 'Banned typeface. After lock, use exactly one Dutch grotesk pair.',
  },
  {
    id: 'cream-canvas',
    re: /#F2F0EA|#FAFAF7|#F4F1EA|#F5F0E8/i,
    msg: 'Cream/paper canvas from the Gen-AI reference theme. Dutch canvas is #FFFFFF.',
  },
  {
    id: 'tailwind-radius',
    re: /rounded-(sm|md|lg|xl|2xl|3xl|full)\b/,
    msg: 'Non-zero Tailwind radius. rounded-none only.',
  },
  {
    id: 'css-radius',
    re: /border-radius\s*:\s*(?!0\b)/i,
    msg: 'Non-zero border-radius.',
  },
  {
    id: 'scale-hover',
    re: /hover:scale-|scale-105|scale-110/,
    msg: 'Scale-on-hover. Use inversion or chevron-axis translate.',
  },
  {
    id: 'fade-in-up',
    re: /fade-in-up|translateY\(\s*20px\s*\)/i,
    msg: 'Generic fade-in-up. Use locked overshoot, not the default tween.',
  },
  {
    id: 'soft-shadow',
    re: /shadow-(sm|md|lg|xl|2xl)\b|box-shadow\s*:\s*\d+px\s+\d+px\s+[1-9]/i,
    msg: 'Soft/blurred shadow. Use 1px rules or hard offset (0 blur).',
  },
  {
    id: 'purple-ai',
    re: /#6366[Ff]1|#8[Bb]5[Cc][Ff]6|#[Aa]855[Ff]7|from-purple|to-violet|to-purple/i,
    msg: 'Purple/violet AI-cliché chroma.',
  },
  {
    id: 'accent-token-triplet',
    re: /accent-signal[\s\S]{0,200}accent-cobalt|accent-cobalt[\s\S]{0,200}accent-circuit/i,
    msg: 'More than one accent option wired. Keep one; delete the other two.',
  },
  {
    id: 'ijekavian',
    re: /\bmjestu\b|\bprije\b|\buvijek\b|\bizmjenu\b|\btko\b|\bvjerojatno\b/i,
    msg: 'Ijekavian in implementation. Product Serbian is ekavian; agent layer is English.',
  },
];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const abs = join(dir, name);
    const st = statSync(abs);
    if (st.isDirectory()) {
      walk(abs, acc);
      continue;
    }
    acc.push(abs);
  }
  return acc;
}

function planStatus() {
  const text = readFileSync(join(ROOT, 'design-plan.md'), 'utf8');
  const match = text.match(/\*\*Status:\*\*\s*`([^`]+)`/);
  return match?.[1] ?? 'UNKNOWN';
}

function shouldScan(rel) {
  if (rel.startsWith('src/')) return true;
  if (rel.startsWith('public/')) return true;
  if (rel === 'docs/canon/this-is.html') return true;
  return false;
}

function isProductionUi(rel) {
  if (rel.endsWith('.gitkeep') || rel.endsWith('/README.md') || rel === 'src/components/README.md') {
    return false;
  }
  if (rel === 'src/pages/index.astro') return false;
  if (rel === 'src/layouts/RootLayout.astro') return false;
  if (rel.startsWith('src/styles/')) return false;
  if (rel.startsWith('src/lib/')) return false;
  if (rel === 'src/content.config.ts') return false;
  if (rel.startsWith('src/content/') && rel.endsWith('.md')) return false;
  if (rel.startsWith('src/components/') && /\.(astro|tsx|jsx|vue|svelte)$/.test(rel)) {
    return true;
  }
  if (rel.startsWith('src/pages/') && /\.(astro|md|mdx)$/.test(rel)) {
    return true;
  }
  return false;
}

function extOf(file) {
  const base = file.split('/').pop() ?? '';
  const dot = base.lastIndexOf('.');
  return dot === -1 ? '' : base.slice(dot);
}

function scanText(text, rel) {
  const hits = [];
  for (const rule of FORBIDDEN) {
    if (rule.id === 'css-radius') {
      const flagged = text.split('\n').some(
        (line) => /border-radius\s*:/i.test(line) && !/border-radius\s*:\s*0\b/i.test(line),
      );
      if (flagged) {
        hits.push({ file: rel, id: rule.id, msg: rule.msg });
      }
      continue;
    }
    if (rule.re.test(text)) {
      hits.push({ file: rel, id: rule.id, msg: rule.msg });
    }
  }
  return hits;
}

function selfTest() {
  const fixture = readFileSync(join(ROOT, 'scripts/fixtures/leaks.css'), 'utf8');
  const hits = scanText(fixture, 'scripts/fixtures/leaks.css');
  const ids = new Set(hits.map((h) => h.id));
  const required = ['banned-face', 'cream-canvas', 'tailwind-radius', 'scale-hover', 'purple-ai'];
  const missing = required.filter((id) => !ids.has(id));
  if (missing.length > 0) {
    console.error(`fence self-test failed; missed: ${missing.join(', ')}`);
    process.exit(1);
  }
  console.log(`fence self-test ok (${hits.length} hits on fixture)`);
}

function main() {
  if (process.argv.includes('--self-test')) {
    selfTest();
    return;
  }

  const status = planStatus();
  const errors = [];

  const files = walk(ROOT).filter((abs) => {
    const rel = relative(ROOT, abs).replaceAll('\\', '/');
    return shouldScan(rel) && SRC_EXTS.has(extOf(rel));
  });

  for (const abs of files) {
    const rel = relative(ROOT, abs).replaceAll('\\', '/');
    const text = readFileSync(abs, 'utf8');
    errors.push(...scanText(text, rel));
  }

  if (status !== 'LOCKED') {
    const ui = walk(ROOT)
      .map((abs) => relative(ROOT, abs).replaceAll('\\', '/'))
      .filter((rel) => isProductionUi(rel));
    for (const rel of ui) {
      errors.push({
        file: rel,
        id: 'freeze',
        msg: `Production UI is forbidden while design-plan.md is ${status}. Lock the plan after the site brief. Allowed: docs, design, scripts, CI, tokens, RootLayout, holding page, content schemas.`,
      });
    }

    const tokenCss = readFileSync(join(ROOT, 'src/styles/tokens/color.css'), 'utf8');
    if (/--(?:color-)?accent\s*:\s*#/.test(tokenCss)) {
      errors.push({
        file: 'src/styles/tokens/color.css',
        id: 'accent-before-lock',
        msg: 'Accent hex is set before design-plan.md is LOCKED.',
      });
    }
  }

  if (errors.length > 0) {
    console.error(`design fence failed (${errors.length})  plan=${status}\n`);
    for (const err of errors) {
      console.error(`  [${err.id}] ${err.file}\n    ${err.msg}`);
    }
    process.exit(1);
  }

  console.log(`design fence ok  plan=${status}  scanned=${files.length}`);
}

main();
