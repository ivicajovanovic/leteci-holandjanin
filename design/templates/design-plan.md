# Design plan template

Copy to `/design-plan.md` and fill **before** any production HTML, CSS, or component. Status must become `LOCKED`.

## Status

`AWAITING_BRIEF` | `DRAFT` | `LOCKED`

## Product

- Domain:
- Primary user decision:
- Default intensity by journey stage: discovery `expressive` | task `quiet` | …

## Font pairing (exactly one)

- [ ] Tanker Regular + Switzer Light
- [ ] Cabinet Grotesk Extrabold + General Sans Regular
- [ ] Clash Grotesk Semibold + Switzer Regular
- [ ] Space Grotesk Bold + Neue Montreal Regular

Files: locally hosted, subsetted, `font-display: swap`, metric-matched fallbacks.

## Accent (exactly one)

- [ ] Signal Red `#FF2A00` / dark `#CC2200` / light `#FF7A52`
- [ ] Cobalt Blue `#0033CC` / dark `#002499` / light `#3D5FDB`
- [ ] Circuit Orange `#FF6600` / dark `#CC5200` / light `#FF944D`

Delete the other two from CSS `@theme` after lock.

## Grid scale

- Columns:
- Gutter:
- Margin:
- Baseline unit:
- Visible rules: yes (structural gray or black)

## Type mathematics

- Ratio: Major Third `1.250` | Perfect Fourth `1.333`
- Base size:
- `clamp()` steps:

## Rupture strategy

- Bleed elements:
- Rotation angle (one value):
- Chevron count and referents:
- Collage / layered image moments:

## Motion signature

- Snap duration:
- Spring duration:
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` unless a documented spring API is used
- Reduced-motion behavior: strip spatial motion, keep state feedback

## State machines

For every interactive element: `default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, `empty`.

## Data-honesty declaration

| Surface | Real / sourced | Illustrative (must show `SAMPLE DATA`) | Omitted |
|---|---|---|---|
| | | | |
