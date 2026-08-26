# Motion choreography

Extends Dutch Design §6. Covers sequenced reveals on Dumbar/DEPT surfaces. Jetset-led surfaces are still — they do not sequence.

## Dumbar/DEPT surfaces

When multiple elements reveal in a section, they enter in a **declared order** with a fixed stagger. The sequence is stated in the page brief, not improvised.

### Rules

- **Entrance order**: stated per section in the page brief (e.g. heading → rule → body → arrow).
- **Stagger**: a fixed delay between elements, typically `40ms`–`80ms`. Declared once in `design-plan.md`, not varied per section unless the brief says so.
- **Curve**: the locked spring `cubic-bezier(0.34, 1.56, 0.64, 1)` for every element in the sequence. Do not mix easings within one reveal.
- **Trigger**: `scroll-into-view` (default for sections), `page-load` (hero only), or `user-action` (disclosure, tab switch). Stated in the page brief.
- **Direction**: each element enters along a packing line — horizontal or vertical, `0°` or `90°`. Not radial, not diagonal, not random.
- **Intentional asynchrony**: slight stagger variation is allowed (±10ms) to avoid corporate-smooth choreography. Symmetric simultaneous entrance is not Dumbar.

### Implementation

```css
/* Example: 4-element stagger on a Dumbar/DEPT section */
[data-intensity="expressive"] .reveal-group > * {
  opacity: 0;
  transform: translateY(var(--unit));
  transition:
    opacity var(--duration-spring) var(--ease-overshoot),
    transform var(--duration-spring) var(--ease-overshoot);
}

[data-intensity="expressive"] .reveal-group.is-visible > *:nth-child(1) { transition-delay: 0ms; }
[data-intensity="expressive"] .reveal-group.is-visible > *:nth-child(2) { transition-delay: 60ms; }
[data-intensity="expressive"] .reveal-group.is-visible > *:nth-child(3) { transition-delay: 120ms; }
[data-intensity="expressive"] .reveal-group.is-visible > *:nth-child(4) { transition-delay: 180ms; }

[data-intensity="expressive"] .reveal-group.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

Trigger `is-visible` via `IntersectionObserver` in an island (`src/components/islands/`) — this is a valid reason for client JS.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  [data-intensity="expressive"] .reveal-group > * {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
```

## Jetset surfaces

No choreography. Elements are present. State feedback (hover inversion, focus ring) uses `--duration-snap` with the locked spring. No entrance animation, no stagger, no reveal.

## Quiet surfaces

No choreography. State feedback only (instant or snap inversion). Spring is allowed for micro-feedback (button press, toggle), not for section reveals.
