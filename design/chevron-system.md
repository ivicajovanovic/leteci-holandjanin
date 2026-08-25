# Chevron system

Chevrons are **wayfinding**, not decoration. Each instance must point at a real referent: next section, disclosure, carousel direction, or primary action.

## Grammar

- Implement as inline SVG or CSS `clip-path` polygon. Never an icon font. Never emoji.
- Fill with `currentColor`. Inherit ink or accent from the parent state.
- One stroke weight per project, declared in `design-plan.md` after the brief.
- `rounded-none` on every wrapper. No circular icon buttons.
- Hover: translate along the implied axis, then spring back using `--ease-overshoot`. Do not scale.

## Accessibility

| Use | Markup |
|---|---|
| Decorative companion to visible text | `aria-hidden="true"` |
| Control whose only label is the chevron | `role="img"` + `<title>`, or `aria-label` on the button |
| Reveals more content | Button with `aria-expanded` |

Practical target: at least 44×44px for any clickable chevron.

## Forbidden

- Ambient chevrons with no referent.
- Multiple rotation angles. One rupture angle for the project, declared once.
- Animating the SVG element itself for motion. Animate a wrapper (`div` / `span`).
- Soft drop shadows, glow, or gradient fills on the glyph.
