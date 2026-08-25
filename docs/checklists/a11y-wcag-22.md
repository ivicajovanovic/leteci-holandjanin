# Accessibility — WCAG 2.2 AA

Floor: Generation AI kit §17, plus Dutch semantic HTML and accent `:focus-visible`. Target **WCAG 2.2 Level AA**.

## Before marking UI done

- [ ] Contrast: 4.5:1 normal text, 3:1 large text and essential graphics
- [ ] Focus visible and unobscured; 2px accent outline, 2px offset
- [ ] Full keyboard path; DOM order planned if it diverges from visual order
- [ ] Native elements first; ARIA only when HTML is insufficient
- [ ] Touch targets ≥ 44×44px
- [ ] Reflow at 320 CSS px
- [ ] Hover/focus content is dismissible, hoverable, persistent where WCAG requires it
- [ ] Meaning does not depend on color, motion, or position alone
- [ ] `prefers-reduced-motion` removes spatial motion, keeps state
- [ ] Labels visible; placeholders never replace labels
- [ ] Errors name the problem and the recovery
- [ ] Auth allows paste and password managers
- [ ] Gray is not used for anything clickable
