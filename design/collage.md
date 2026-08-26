# Collage (Classic Dumbar surfaces)

Extends Dutch Design §5.5. Collage is a Classic Dumbar tool — staged or found photography layered with type, silkscreen ink, or color blocks. The owner composes; the agent implements.

## Owner

- Decides which layers exist and their visual relationship.
- Prepares raster layers with print treatment (see `design/image-treatment.md`).
- States the blend intent (silkscreen ink, hard overlap, overprint).
- States which grid columns the collage occupies.

## Agent — allowed CSS methods

| Method | Use | Notes |
|---|---|---|
| **CSS Grid overlap** | Overlapping `grid-area` declarations with `z-index` | Primary method. Layers are real grid children. |
| **`mix-blend-mode: multiply`** | Silkscreen ink effect (dark ink on photo) | The Dumbar silkscreen translation. |
| **`mix-blend-mode: screen`** | Light ink / reversed silkscreen | Use sparingly. |
| **`mix-blend-mode: darken`** | Overprint simulation | When two opaque layers meet. |
| **`clip-path`** | Hard crop along a packing line (`0°` or `90°` edge) | Not curved, not diagonal. |
| **`object-fit` + `object-position`** | Crop raster into its grid area | Standard image placement. |

## Agent — forbidden methods

- `opacity < 1` as a blending substitute. A fade is not a print layer.
- `mix-blend-mode: overlay` or `soft-light`. Those are photo filters, not print.
- Gradient overlay pretending to be silkscreen.
- More than **3 layers** in one collage. Print has physical limits; CSS should too.
- `filter: grayscale()` or `sepia()` on an untreated photo.
- Collage on `quiet` surfaces. Collage is expressive or immersive only.
- `position: absolute` floating over an image without grid structure.

## Responsive

Collage layers follow the packing grid. When the grid changes column count by breakpoint, layers restack or simplify. The page brief states behavior per breakpoint. On mobile, a collage may reduce to its strongest single layer rather than cramming all layers into 320px.

## In the page brief

```
## Collage (Classic Dumbar surfaces only)

- Layers (order = z-index, bottom to top):
- Owner delivers:
- Blend intent per layer:
- Grid columns occupied:
- Mobile behavior:
```

## Accessibility

- Decorative collage layers use `aria-hidden="true"`.
- The primary image layer carries `alt` text.
- If the collage conveys meaning beyond decoration, wrap in `<figure>` with `<figcaption>`.
- Contrast of any text layer against its background must meet WCAG 2.2 AA (4.5:1 normal, 3:1 large).
