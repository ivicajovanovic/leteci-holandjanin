# Responsive typographic object

Extends Dutch Design §5.3. On a fluid viewport the word- or sentence-as-object must remain the composition at every breakpoint — not by staying the same size, but by having a declared behavior per breakpoint range.

## Principle

A typographic object that silently shrinks into an ordinary large heading on mobile has lost its function. It must still **dominate** — but the method of domination may change.

## Allowed adaptations

| Strategy | What changes | When to use |
|---|---|---|
| **Scale** | `clamp()` keeps the object proportionally large for the viewport | Default. Works when the word is short (1–3 words). |
| **Reorient** | Switch between `0°` and `90°` by breakpoint | When the object is a single word that fits vertically on mobile but fills horizontally on desktop. |
| **Split** | Break a sentence into stacked lines that each dominate their line | When the object is a sentence (3+ words) that cannot stay on one line at 320px. |
| **Crop** | `overflow: hidden` on a container edge — the word bleeds off-screen | Jetset method. The object is larger than the viewport and that is the point. |
| **Reframe** | The object occupies a different grid area by breakpoint | When the packing grid changes column count (e.g. 12 → 4). |

## Forbidden adaptations

- Silently reducing to `step-3` or smaller so it becomes a normal heading.
- Hiding the object entirely on mobile (`display: none` below a breakpoint).
- Adding a 3° tilt or decorative transform to "compensate" for lost scale.
- Substituting a different word or sentence on mobile.

## In the page brief

Each page brief must declare the object's behavior:

```
## Word-as-object responsive behavior

- Object text:
- Desktop (≥1024):
- Tablet (600–1023):
- Mobile (320–599):
- Changes orientation by breakpoint: yes / no
- Crops (overflow hidden): yes / no, at which breakpoints
```

The owner decides the strategy. The agent implements it. If no strategy is stated, the agent must ask — not guess.
