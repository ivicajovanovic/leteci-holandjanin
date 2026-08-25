# Design plan

**Status:** `AWAITING_BRIEF`

Do not write production UI until this file is `LOCKED`. Fixed Dutch constants (near-black / off-white inversion pair, structural gray, `rounded-none`, overshoot easing) may exist as token stubs. Type family, emphasis chromas, packing grid, generating rule, and type math are empty on purpose.

Fill from `design/templates/design-plan.md` after the site brief arrives.

## Product

- Domain: _awaiting brief_
- Primary user decision: _awaiting brief_
- Default intensity by journey stage: _awaiting brief_
- Product locale: _awaiting brief_ (one language; if Serbian, ekavian)
- Which pole leads form: _awaiting brief_ (Jetset | Dumbar)

## Type family

Not selected. Choose exactly one lineage grotesk from `design/sources/anti-slop-dutch-design.md` §3, used for mark, display, and body. No Fontshare pair.

## Micro-palette

Not selected. Inversion pair is stubbed (near-black `#141414` / off-white `#F3F3EE`). Then at most two emphasis chromas from soft red, kiwi, dark yellow, orange, grass green. Not Signal / Cobalt / Circuit. Not `#000` / `#FFF` fields.

## Packing grid

- Columns: _awaiting brief_
- Gutter: _awaiting brief_
- Margin: _awaiting brief_
- Baseline unit: _awaiting brief_
- Drawn rules: no by default

## Angle lock

Text `0deg` / `90deg`. A sentence at 90° is legal as an object on an inverted field. Switcher arrows: `public/arrows/` (no CSS `45deg`).

## Field inversion

Expressive pages flip adjacent major sections (off-white ↔ near-black) with 90° type on those fields. Quiet: one field. Map _awaiting brief_.

## Generating rule

_awaiting brief_

## Type mathematics

- Ratio: _awaiting brief_
- Base size: _awaiting brief_
- `clamp()` steps: _awaiting brief_

## Motion signature

- Easing (fixed): `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Snap / spring durations: _awaiting brief_
- Spring plays on Dumbar/DEPT surfaces and for state feedback only
- Reduced-motion: strip spatial motion, keep state feedback

## State machines

Defined per component after the brief. Required states: `default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, `empty`.

## Data-honesty declaration

_awaiting brief_
