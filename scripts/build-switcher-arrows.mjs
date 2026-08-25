#!/usr/bin/env node
/**
 * Rebuilds public/arrows switcher glyphs from the locked geometry.
 * The 45° exists only as the diagonal in the path — never as CSS rotate.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'arrows');

const t = 8;
const pad = 8;
const arm = 34;
const diag = 56;
const inner = pad + t;
const hEnd = pad + arm;
const o = t / Math.SQRT2;
const far = diag / Math.SQRT2;
const c = pad + t / 2;
const fc = c + far;
const cap = t / 2 / Math.SQRT2;
const fmt = (n) => Number(n.toFixed(3));

const seD = [
  [pad, pad],
  [hEnd, pad],
  [hEnd, inner],
  [inner + o, inner],
  [fc + cap, fc - cap],
  [fc - cap, fc + cap],
  [inner, inner + o],
  [inner, pad + arm],
  [pad, pad + arm],
]
  .map(([x, y]) => [fmt(x), fmt(y)])
  .reduce((d, p, i) => d + (i === 0 ? `M ${p[0]} ${p[1]}` : ` L ${p[0]} ${p[1]}`), '')
  + ' Z';

const wraps = {
  se: (inner) => inner,
  ne: (inner) => `<g transform="translate(0,64)"><g transform="scale(1,-1)">${inner}</g></g>`,
  sw: (inner) => `<g transform="translate(64,0)"><g transform="scale(-1,1)">${inner}</g></g>`,
  nw: (inner) => `<g transform="translate(64,64)"><g transform="scale(-1,-1)">${inner}</g></g>`,
};

const meta = {
  se: { outline: '01', fill: '05', title: 'Switcher arrow south-east' },
  ne: { outline: '02', fill: '06', title: 'Switcher arrow north-east' },
  sw: { outline: '03', fill: '07', title: 'Switcher arrow south-west' },
  nw: { outline: '04', fill: '08', title: 'Switcher arrow north-west' },
};

const path = `<path d="${seD}"/>`;

function file(kind, dir) {
  const paint =
    kind === 'fill'
      ? 'fill="currentColor"'
      : 'fill="none" stroke="currentColor" stroke-width="2.25" stroke-linejoin="miter" stroke-miterlimit="4"';
  const title = `${meta[dir].title}, ${kind === 'fill' ? 'filled' : 'outline'}`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" role="img" aria-labelledby="title">
  <title id="title">${title}</title>
  <g ${paint}>
    ${wraps[dir](path)}
  </g>
</svg>
`;
}

const names = [];
for (const dir of Object.keys(wraps)) {
  for (const kind of ['outline', 'fill']) {
    const name = `${meta[dir][kind]}-${kind}-${dir}.svg`;
    writeFileSync(join(root, name), file(kind, dir));
    names.push(name);
  }
}

const symbols = Object.keys(wraps)
  .flatMap((dir) =>
    ['outline', 'fill'].map((kind) => {
      const paint =
        kind === 'fill'
          ? 'fill="currentColor"'
          : 'fill="none" stroke="currentColor" stroke-width="2.25" stroke-linejoin="miter" stroke-miterlimit="4"';
      return `  <symbol id="${kind}-${dir}" viewBox="0 0 64 64">
    <g ${paint}>${wraps[dir](path)}</g>
  </symbol>`;
    }),
  )
  .join('\n');

writeFileSync(
  join(root, 'sprite.svg'),
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
${symbols}
</svg>
`,
);

console.log(names.join('\n'));
console.log('sprite.svg');
