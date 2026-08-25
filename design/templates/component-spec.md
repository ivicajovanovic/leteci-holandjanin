# Component: [Name]

Astro-first. Client island only if interaction cannot be HTML/CSS.

## Purpose

One sentence.

## File

`src/components/[primitives|sections|islands]/[Name].astro`

## Intensity

Allowed modes: `quiet` | `expressive` | `immersive`

## Props

```ts
interface Props {
  // …
}
```

## States

| State | Visual | Behavior |
|---|---|---|
| default | | |
| hover | Instant inversion or chevron-axis translate. No `scale`. | |
| focus-visible | 2px accent outline, 2px offset | |
| active | Accent dark | |
| disabled | Structural gray border, not gray-as-clickable | Explain why |
| loading | Tabular counter or rule fill on a grid line | |
| error | Text + recovery | |
| empty | | |

## Responsive

320 / 768 / 1024 / 1440 / ≥1920. Rupture has a defined behavior at each, not “disabled on mobile”.

## Accessibility

- Native element first (`button`, `nav`, `dl`, `figure`, `time`)
- Keyboard: Tab, Enter/Space, Escape where relevant
- Touch target ≥ 44×44px
- `prefers-reduced-motion`

## Motion

Uses locked `--duration-snap` / `--duration-spring` / `--ease-overshoot` only.

## Acceptance

- [ ] All states implemented (No-Cripple-MVP)
- [ ] Tokens only, no magic pixels
- [ ] `rounded-none`
- [ ] Data honesty if numbers appear
