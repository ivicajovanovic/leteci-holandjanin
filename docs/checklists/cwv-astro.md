# Core Web Vitals — Astro

Targets at p75 (Generation AI kit §18): LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1. Expressive mode does not get a larger budget.

## Island budget

- [ ] Page ships zero client JS unless an island is listed below with a reason
- [ ] Island is in `src/components/islands/`
- [ ] Directive is the weakest that works (`visible` / `idle` before `load`)
- [ ] No barrel imports into islands
- [ ] Third-party scripts deferred until after hydration / idle

## LCP / CLS

- [ ] LCP element is in the initial HTML (usually display type or hero image)
- [ ] Images have width/height or `aspect-ratio` reserved
- [ ] Fonts local, subsetted, `font-display: swap`, preloaded only if above-fold Voice face
- [ ] No client fetch for above-fold content
- [ ] Video on demand unless it *is* the opening proposition

## After implementation

Trace the page (Chrome performance or equivalent). Do not claim CWV without a measurement. If DevTools MCP is available, use the web-perf workflow; otherwise `npm run build` + Lighthouse / WebPageTest on preview.
