---
name: chevron-svg
description: Functional chevron and structural SVG wayfinding for this Dutch Design site. Use when adding arrows, section gates, disclosure cues, or directional glyphs.
---

# Chevron SVG

Read `/design/chevron-system.md`.

- Inline SVG, `viewBox`, `currentColor`. No icon fonts, no emoji, no circular icon wells.
- Must point at a referent (next section, disclosure, carousel, action).
- Decorative: `aria-hidden="true"`. Control: name it (`aria-label` or `<title>`).
- Hover translates on the implied axis with `--ease-overshoot`. Animate a wrapper, not the `<svg>`.
- One stroke weight. `rounded-none`.
