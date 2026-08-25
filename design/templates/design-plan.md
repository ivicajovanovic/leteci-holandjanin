# Design plan template

Copy to `/design-plan.md` and fill **before** any production HTML, CSS, or component. Status must become `LOCKED`.

## Status

`AWAITING_BRIEF` | `DRAFT` | `LOCKED`

## Product

- Domain:
- Primary user decision:
- Default intensity by journey stage: discovery `expressive` | task `quiet` | …
- Product locale: `en` | `sr` (ekavian) | other (one only). Agent/law docs stay English.
- Which pole leads form on this product: Jetset (language, packing, grain) | Dumbar (generating play, collage/grain, motion)

## Type family (exactly one, all roles)

- [ ] Helvetica / Neue Haas Grotesk (Jetset dialect)
- [ ] Univers (SMCS / PTT / historic NS)
- [ ] Futura (only if the mark must be embedded in the face)
- [ ] Named custom / condensed system grotesk (Dumbar identity-face pattern): ________

Files: locally hosted, subsetted, `font-display: swap`, metric-matched fallbacks. Substitute cut must name which lineage choice it stands in for. No Fontshare display/body pair. No alien logotype family.

## Micro-palette

Inversion pair (stub): near-black `#141414`, off-white `#F3F3EE`, structural `#E5E5E5`. Not `#000000` / `#FFFFFF`. Not Gen-AI cream.

Emphasis (≤2, after lock), from this family only:

- [ ] Soft red (meka crvena)
- [ ] Kiwi
- [ ] Dark yellow
- [ ] Orange
- [ ] Grass green (trava)

Hexes (print-like, not Signal/Cobalt/Circuit):

- Chroma A:
- Chroma A dark / light (states only):
- Chroma B (if used):
- Chroma B dark / light:

## Field inversion

- Expressive: adjacent major sections flip off-white ↔ near-black. 90° type rides those fields.
- Quiet: one field only.

## Packing grid

- Columns:
- Gutter:
- Margin:
- Baseline unit:
- Drawn rules: **no** by default. Print-mark rules only if the generating rule names them:

## Angle lock

- Text / words / object-sentences: `0deg` and `90deg` only
- Switcher arrows: `public/arrows/` (diagonal is in the path; no CSS rotate)

## Generating rule

One system that produces rupture (frame that responds, block that restamps, word that occupies). Not a per-section chevron quota.

- Rule:
- Where it fires:
- Print grain / silkscreen / overprint moments:
- Chevron referents (optional, each must point at something):

## Type mathematics

- Ratio: Major Third `1.250` | Perfect Fourth `1.333`
- Base size:
- `clamp()` steps:

## Motion signature

- Snap duration:
- Spring duration:
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` unless a documented spring API is used
- Where spring may play: Dumbar/DEPT surfaces and UI state feedback only
- Reduced-motion behavior: strip spatial motion, keep state feedback

## State machines

For every interactive element: `default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, `empty`.

## Data-honesty declaration

| Surface | Real / sourced | Illustrative (must show `SAMPLE DATA`) | Omitted |
|---|---|---|---|
| | | | |
