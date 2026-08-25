---
name: a11y-wcag-22
description: WCAG 2.2 AA implementation rules for this site. Use when building interactive components, forms, navigation, dialogs, or focus behavior.
---

# WCAG 2.2 AA

Checklist: `docs/checklists/a11y-wcag-22.md`.

- Native HTML first. ARIA only to fill gaps.
- `:focus-visible` = 2px `var(--color-accent)` outline, 2px offset. Until accent is locked, use black.
- Keyboard: Tab order, Enter/Space, Escape to dismiss.
- If visual order breaks grid, plan `tabindex` / reading order in the spec.
- Targets ≥ 44×44px.
- Visible labels. Disabled controls explain why.
- `prefers-reduced-motion` cuts spatial motion, keeps state.
- Gray is never clickable.
