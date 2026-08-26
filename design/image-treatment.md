# Image treatment

Owner prepares all raster with print grain (halftone, CMYK blow-up, silkscreen, overprint, type-as-dot) before delivery. Files land in `public/` as production assets.

## Owner

- Halftone / tačkasti raster
- CMYK blow-up until grain is the picture
- Silkscreen: one ink over a full-color photo
- Overprint, fold, perforate, tear as graphic facts
- Type-as-dot (contemporary Dumbar / Sinfonietta method)
- Crop and composition decisions

## Agent

- Places the owner-prepared image into the packing grid.
- Applies `object-fit`, `object-position`, and responsive `srcset` / `sizes`.
- Wraps in `<figure>` with `<figcaption>` when context requires it.
- Reserves dimensions before loading (CLS ≤ 0.1).
- Does **not** apply CSS `filter`, `backdrop-filter`, SVG `<feImage>`, canvas halftone, or any procedural grain simulation. If a raster needs treatment, ask the owner.

## Forbidden

- CSS duotone / grayscale / sepia as a substitute for print grain.
- `mix-blend-mode` on an untreated stock photo to fake silkscreen.
- AI-generated halftone overlays.
- Placeholder images with `/* TODO: add grain */` comments shipped as done.

## In templates

`design-plan.md` → Image treatment section.
`page-brief.md` → per-page image and collage fields.
