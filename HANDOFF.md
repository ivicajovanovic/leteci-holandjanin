# HANDOFF

You are an LLM coding agent landing in **Leteći Holanđanin** (`leteci-holandjanin`). This file is the session start. Read it before changing anything. Then follow `AGENTS.md`.

If `design-plan.md` is not `LOCKED`, freeze visual identity. The owner will send the site brief; lock the plan before any production UI.

Remote: https://github.com/ivicajovanovic/leteci-holandjanin  
Local path: `/home/ivica1979/projekti/leteci-holandjanin` (the old folder name `cijenik` is retired; Cursor may still show it — open this path)  
Owner: speaks Serbian **ekavian**. Address the owner in that register. Agent docs, law, skills, and code comments stay **English**.

---

## Where we left off (2026-08-25)

GitHub Actions on `main` is **green**: `npm ci`, fence self-test, fence, `astro check`, build.

CI `npm ci` previously failed on missing optional `@emnapi/core` / `@emnapi/runtime` 1.11.3. Fix: regenerate `package-lock.json` and run Actions on Node **24** from `.nvmrc` (matches the lockfile machine). Do not pin CI to Node 20.

Golden PNGs are **not in the repo yet**. Do not invent a substitute canon. When the owner drops `public/dutch-1.png`, `dutch-2.png`, `dutch-3.png`, add / commit / push when asked.

Optional, not blocking: `actions/checkout@v4` and `actions/setup-node@v4` still emit a GitHub annotation that those action versions run on deprecated Node 20. Bump majors when convenient. That is not a CI failure.

Dutch source law was **tightened** (2026-08-25) toward Jetset/Dumbar primary practice: packing grid is invisible; type 0°/90° only (no 45° marks, striping, stamps, or rotated chevrons unless the owner asks); one lineage family; **field inversion** (off-white ↔ near-black) plus 90° type as dynamics; emphasis from soft red / kiwi / dark yellow / orange / grass green (≤2); print grain; rupture is a generating rule, not a chevron quota. Retired neon menu, `#000`/`#FFF` as fields, and 3° tilt are out. Freeze below still holds.

---

## What this is

A design-led website **operating system**, not a finished site and not a UI kit.

Three layers, all required:

1. **Form (law):** Dutch Design — Experimental Jetset × Studio Dumbar. Grotesk-only, one lineage family, **near-black / off-white inversion** (not `#000`/`#FFF`), at most two print emphasis chromas (soft red, kiwi, dark yellow, orange, grass green), `rounded-none`, invisible packing, 90° type on inverted fields, print grain. Wayfinding: owner switcher arrows in `public/arrows/` (45° only inside the path). File: `design/sources/anti-slop-dutch-design.md`. Do not blend the two studios into a visible Swiss grid + 3° tilt.
2. **Behavior (law):** Generation AI *Controlled Intensity*. Intensity modes, agency, provenance, WCAG 2.2 AA, Core Web Vitals, no dark patterns, AI is a capability not a glow. File: `design/sources/gen-ai-web-design-style-kit.md`.
3. **Implementation:** Astro 7, TypeScript strict, Tailwind 4. Zero client JS by default. Islands only in `src/components/islands/` with a written reason.

When the two laws disagree: **Dutch wins form. Generation AI kit wins behavior and compliance.** Table: `design/CONFLICTS.md`. Do not invent a third aesthetic.

The name is the brief for the visual lineage (Dutch, motion), not a product brand yet.

---

## Current freeze

`design-plan.md` status is **`AWAITING_BRIEF`**.

Until `design-plan.md` is `LOCKED` you must **not** pick identity or add production UI. The freeze is enforced by `npm run fence` and GitHub Actions, not by prose alone.

**Allowed without lock:** `design/`, `docs/`, `scripts/`, `.github/`, `.cursor/`, agent markdown, token stubs, `RootLayout.astro`, `src/pages/index.astro`, content schemas/holding entries.

**Forbidden without lock:** any `.astro` / island under `src/components/`, any extra route under `src/pages/`. A sketched hero fails CI. Filling `HANDOFF.md` does not.

Owner will send the **site brief** later. First action after the brief: fill and lock `design-plan.md` from `design/templates/design-plan.md`. Then page briefs in `docs/specs/`. Then UI.

Golden visual examples (owner-made, PNG): `public/dutch-1.png`, `public/dutch-2.png`, `public/dutch-3.png`. They are expected, not present. Look at them with vision when they exist. Do not invent a substitute fragment. Do not treat them as product pages.

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
7. `public/dutch-1.png`, `public/dutch-2.png`, `public/dutch-3.png` (vision; owner-made)
8. Project skill: `.cursor/skills/design-led-build/SKILL.md`

---

## Hard gates

- No-Cripple-MVP: every interactive state on first pass (`default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, `empty`). No “a11y later”.
- Semantic HTML. `rounded-none`. Invisible packing grid. Generating rule named in the plan. Type at 0°/90° only.
- Numbers sourced or labelled `SAMPLE DATA`.
- Skip Inter, serifs, purple AI chrome, identical 3-card grids, `scale-105`, fade-in-up, emoji-as-icon, fake urgency. Enforced in `src/` and `public/` by `npm run fence`.
- Checklists before “done”: `docs/checklists/design-preflight.md`, `dutch-enforcement.md`, `a11y-wcag-22.md`, `cwv-astro.md`. CI runs fence + `astro check` + build on every push.

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
src/styles/tokens/  near-black / off-white inversion pair + structural gray; emphasis chromas and type unlocked
src/content/        collections (holding entries only, for now)
public/             dutch-1.png, dutch-2.png, dutch-3.png (golden examples, owner-made); arrows/ (switcher SVGs)
.cursor/            rules and skills
```

---

## Commands

Node ≥ 22.12. Local and CI: **24** (`.nvmrc`).

```sh
npm ci           # after clone; do not hand-edit the lockfile
npm run dev      # http://localhost:4321
npm run fence    # Dutch / Gen-AI machine bans + freeze
npm run fence:selftest
npm run check
npm run build
npm run ci       # selftest + fence + check + build (same as Actions)
```

Astro 7 background server, if used: `astro dev --background` then `astro dev stop` / `status` / `logs`.

Do not leave a leftover process on 4321.

---

## After the brief (do this, in order)

1. Lock `design-plan.md` (one lineage family, inversion pair, ≤2 print emphasis chromas, packing grid, angle lock, field inversion map, generating rule, type math, motion, states, data honesty, **product locale**).
2. Wire the one lineage family locally, subsetted. Map Voice/Interface/Evidence onto weights of that family. Lock ≤2 chroma hexes into `@theme`. Do not wire the retired Signal/Cobalt/Circuit menu.
3. Write page briefs in `docs/specs/` from `design/templates/`.
4. Implement Astro-first. Islands only with a reason.
5. Run the four checklists. Do not claim Core Web Vitals without a measurement.

Look at `public/dutch-1.png`, `dutch-2.png`, `dutch-3.png`. Do not invent a replacement canon. Execute the locked plan against those frames and the Dutch forbidden/mandatory tables. CI must stay green.

---

## Do not

- Open a second design direction (“a bit more editorial”, shadcn, Swiss-only, serif display).
- Translate or paraphrase the two law files into a new spec that can drift.
- Commit secrets. Push only when the owner asks.
- Rename the project back to `cijenik`. That was a working folder name. The product/system name is Leteći Holanđanin.
