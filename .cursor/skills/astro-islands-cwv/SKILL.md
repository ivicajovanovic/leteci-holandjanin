---
name: astro-islands-cwv
description: Astro islands and Core Web Vitals rules for this repo. Use when writing .astro files, adding client directives, fonts, images, or third-party scripts.
---

# Astro islands and CWV

Default: static HTML and CSS. JavaScript is an exception.

## Islands

- Put client components in `src/components/islands/`.
- Choose the weakest directive: `client:visible` or `client:idle` before `client:load`.
- No barrel imports. Dynamic-import heavy islands.
- Do not fetch above-fold content on the client.

## Media and fonts

- Images: real dimensions, Astro `<Image>` when processed, no layout shift.
- Fonts: local, subset, `font-display: swap`. Preload only the above-fold Voice face after `design-plan.md` is locked.
- Video: on demand unless it is the opening proposition.

## Budget

LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Checklist: `docs/checklists/cwv-astro.md`.
