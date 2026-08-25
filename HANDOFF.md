# HANDOFF

You are an LLM coding agent landing in **Leteći Holanđanin** (`leteci-holandjanin`). This file is the session start. Read it before changing anything. Then follow `AGENTS.md`.

If `design-plan.md` is not `LOCKED`, freeze visual identity. The owner will send the site brief; lock the plan before any production UI.

Remote: https://github.com/ivicajovanovic/leteci-holandjanin  
Local path: `/home/ivica1979/projekti/leteci-holandjanin`  
Owner: speaks Serbian **ekavian**. Address the owner in that register. Agent docs, law, skills, and code comments stay **English**.

---

## What this is

A design-led website **operating system**, not a finished site and not a UI kit.

Three layers, all required:

1. **Form (law):** Dutch Design — Experimental Jetset × Studio Dumbar. Grotesk-only, black/white/one accent, `rounded-none`, grid then planned rupture, spring/overshoot motion. File: `design/sources/anti-slop-dutch-design.md`.
2. **Behavior (law):** Generation AI *Controlled Intensity*. Intensity modes, agency, provenance, WCAG 2.2 AA, Core Web Vitals, no dark patterns, AI is a capability not a glow. File: `design/sources/gen-ai-web-design-style-kit.md`.
3. **Implementation:** Astro 7, TypeScript strict, Tailwind 4. Zero client JS by default. Islands only in `src/components/islands/` with a written reason.

When the two laws disagree: **Dutch wins form. Generation AI kit wins behavior and compliance.** Table: `design/CONFLICTS.md`. Do not invent a third aesthetic.

The name is the brief for the visual lineage (Dutch, motion), not a product brand yet.

---

## Current freeze

`design-plan.md` status is **`AWAITING_BRIEF`**.

Until it is `LOCKED` you must **not**:

- pick a font pair, accent hue, rupture angle, or baseline unit
- build production pages, sections, or branded components
- copy Inter, Source Serif, cream canvas (`#F2F0EA`), pills, or a second brand hue from the Gen-AI *reference* theme
- treat the holding page as a design to extend

You **may**: structure, schemas, agent docs, and the waiting page only if they add no identity.

Owner will send the **site brief** later. First action after the brief: fill and lock `design-plan.md` from `design/templates/design-plan.md`. Then page briefs in `docs/specs/`. Then UI.

---

## Language

See `design/LANGUAGE.md`.

| Layer | Language |
|---|---|
| Law, `AGENTS.md`, skills, templates, this file, code comments | English. Never translate `design/sources/`. |
| `README.md` | Serbian, ekavian (owner) |
| Product UI | One locale, locked in `design-plan.md`. If Serbian: **ekavian only** — not ijekavian, not ikavian. |

The holding page is `lang="sr"` because it is owner-facing, like the README. That is **not** the product locale.

---

## Read order (every session that produces UI or copy)

1. This file
2. `design-plan.md` — stop visual work if not `LOCKED`
3. `design/CONFLICTS.md`
4. `design/sources/anti-slop-dutch-design.md` (form)
5. `design/sources/gen-ai-web-design-style-kit.md` (behavior)
6. `design/voice.md`, `design/intensity-modes.md`, `design/chevron-system.md` as needed
7. Project skill: `.cursor/skills/design-led-build/SKILL.md`

---

## Hard gates

- No-Cripple-MVP: every interactive state on first pass (`default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, `empty`). No “a11y later”.
- Semantic HTML. `rounded-none`. Visible grid before rupture. At least one planned rupture per major section once building.
- Numbers sourced or labelled `SAMPLE DATA`.
- Skip Inter, serifs, purple AI chrome, identical 3-card grids, `scale-105`, fade-in-up, emoji-as-icon, fake urgency.
- Checklists before “done”: `docs/checklists/design-preflight.md`, `dutch-enforcement.md`, `a11y-wcag-22.md`, `cwv-astro.md`.

---

## Layout (where to put work)

```text
design/sources/     two immutable laws
design/             conflicts, voice, intensity, chevron, provenance, language
design-plan.md      project lock (empty on purpose)
docs/specs/         page/component briefs after the site brief
docs/checklists/    gates
src/pages/          routes (holding page only, for now)
src/layouts/        RootLayout — `lang` and skip label are required props, no assumed locale
src/components/
  primitives/       no JS
  sections/         no JS
  islands/          client:* only
src/styles/tokens/  black / white / structural gray only; accent and type unlocked
src/content/        collections (pages, copy) — empty until brief
.cursor/            rules and skills
```

---

## Commands

Node ≥ 22.12.

```sh
npm install
npm run dev      # http://localhost:4321
npm run check
npm run build
npm run preview
```

Astro 7 background server, if used: `astro dev --background` then `astro dev stop` / `status` / `logs`.

Do not leave a leftover process on 4321.

---

## After the brief (do this, in order)

1. Lock `design-plan.md` (pairing, one accent, grid, type math, rupture, motion, states, data honesty, **product locale**).
2. Delete the two unused accent options from CSS `@theme`. Wire Voice/Interface faces locally, subsetted.
3. Write page briefs in `docs/specs/` from `design/templates/`.
4. Implement Astro-first. Islands only with a reason.
5. Run the four checklists. Do not claim Core Web Vitals without a measurement.

There is no golden visual example in the repo yet. Do not substitute a generic Awwwards clone. Execute the locked plan against the Dutch forbidden/mandatory tables.

---

## Do not

- Open a second design direction (“a bit more editorial”, shadcn, Swiss-only, serif display).
- Translate or paraphrase the two law files into a new spec that can drift.
- Commit secrets. Push only when the owner asks (this session: owner asked).
- Rename the project back to `cijenik`. That was a working folder name. The product/system name is Leteći Holanđanin.
