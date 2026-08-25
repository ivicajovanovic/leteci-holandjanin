# Switcher arrows (skretničari)

These eight glyphs are the site’s **wayfinding and design arrows**. The owner supplied the form. They are not generic chevrons, not cards, and not a 45° layout rotation.

Files: `public/arrows/`. Rebuild: `node scripts/build-switcher-arrows.mjs`.

| File | Form | Points |
|---|---|---|
| `01-outline-se.svg` | Outline | South-east |
| `02-outline-ne.svg` | Outline | North-east |
| `03-outline-sw.svg` | Outline | South-west |
| `04-outline-nw.svg` | Outline | North-west |
| `05-fill-se.svg` | Fill | South-east |
| `06-fill-ne.svg` | Fill | North-east |
| `07-fill-sw.svg` | Fill | South-west |
| `08-fill-nw.svg` | Fill | North-west |
| `sprite.svg` | Symbols `outline-se` … `fill-nw` | Same eight |

## Geometry

- Built on a square packing module. Orthogonal arms at **0° / 90°**. One **45° diagonal** lives **inside the path**.
- Do not `transform: rotate(45deg)` the SVG. Do not tilt a card or a sentence to match it.
- `currentColor`. Inherits ink, off-white, or a locked emphasis chroma.
- `rounded-none`. No circular well. No icon font. No emoji.
- Legal at **any scale**: UI control, section gate, or a typographic-scale object in the composition.

## Use

Inline (color follows text):

```html
<svg class="switcher" aria-hidden="true" viewBox="0 0 64 64">
  <use href="/arrows/sprite.svg#fill-se"/>
</svg>
```

Large as design: the same file, width up to a column or the viewport. Fill from `currentColor` on the inverted field.

Each instance must point at a **referent** (next section, disclosure, carousel, primary action) unless it is itself the composition (a page-scale object). Ambient arrows with nothing to switch are forbidden.

## Motion

Hover on a control: translate the **wrapper** along the implied axis (SE → down+right), then spring back with `--ease-overshoot`. Do not scale. Do not animate the `<svg>` node.

## Accessibility

| Use | Markup |
|---|---|
| Companion to visible text | `aria-hidden="true"` |
| Control whose only label is the arrow | `role="img"` + `<title>`, or `aria-label` on the button |
| Reveals more content | Button with `aria-expanded` |

Clickable target at least 44×44px.

## Forbidden

- CSS `rotate(45deg)` on layout, type, cards, or this glyph.
- Substituting a Lucide / Heroicons chevron.
- Glow, blur, rounded joins, circular icon buttons.
