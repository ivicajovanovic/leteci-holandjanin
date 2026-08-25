---
name: chevron-svg
description: Switcher arrows (skretničari) for this Dutch Design site. Use when adding wayfinding, section gates, disclosure cues, or large directional objects.
---

# Switcher SVG

Read `/design/chevron-system.md`. Glyphs live in `/public/arrows/`.

- Inline SVG or `<use href="/arrows/sprite.svg#fill-se">`. `currentColor`. No Lucide, no emoji, no circular wells.
- Same files at UI size or as a page-scale object.
- Must point at a referent, unless the arrow itself is the composition.
- Decorative: `aria-hidden="true"`. Control: name it.
- Hover translates the wrapper on the implied axis with `--ease-overshoot`. Animate a wrapper, not the `<svg>`.
- Never CSS `rotate(45deg)`. The 45° is already in the path.
