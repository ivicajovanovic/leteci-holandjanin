---
name: design-led-build
description: Orchestrates design-led Astro implementation for this repo. Use when building or changing any page, layout, component, token, or visual CSS. Enforces Dutch Design form, Generation AI kit behavior, locked design-plan, and No-Cripple-MVP.
---

# Design-led build

## Before any UI code

1. Read `/HANDOFF.md`, then `/design-plan.md`. If status is not `LOCKED`, stop visual work. Only structure, content schema, or the waiting page may change.
2. Read `/design/CONFLICTS.md`.
3. Read the relevant sections of `/design/sources/anti-slop-dutch-design.md` and `/design/sources/gen-ai-web-design-style-kit.md`.
4. Write or update a page brief / component spec in `docs/specs/` from `design/templates/`.

## While building

- Tokens only. No magic pixels. `rounded-none`.
- Semantic HTML. Astro components in `primitives/` or `sections/`. Islands only in `islands/` with a written reason.
- Intensity via `data-intensity`. Quiet for forms, payment, permissions.
- Rupture is planned. Grid stays legible.
- States: default, hover, focus, focus-visible, active, disabled, loading, error, empty.
- Copy: `design/voice.md`. Chevrons: `design/chevron-system.md`.

## Before done

1. `npm run fence`
2. `docs/checklists/design-preflight.md`, `dutch-enforcement.md`, `a11y-wcag-22.md`, `cwv-astro.md`
3. Imitate `docs/canon/this-is.html` / `this-is.png` — not a generic card layout.
