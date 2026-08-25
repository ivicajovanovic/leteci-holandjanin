# Generation AI Web Design Style Kit

**Version:** 1.0  
**Status:** Final foundation specification  
**Date:** 25 August 2026  
**Design language:** Controlled Intensity

## 1. Purpose

This document defines a cross-product visual and interaction system for websites and applications intended for **Generation AI**: the first cohort entering adulthood while generative AI, algorithmic media, synthetic content, and personalized interfaces are ordinary parts of digital life.

Generation AI is an operational design term, not a formal demographic category. The initial reference cohort is people born around 2008, demographically late Generation Z. The system is designed around observed behaviors and emerging expectations, not stereotypes about age.

The kit is intended for:

- product and web designers;
- design-system teams;
- frontend developers;
- AI coding and design agents;
- brand, editorial, commerce, community, and productivity products.

It is not a fixed visual skin. It is a layered system that separates universal principles from domain requirements and brand expression.

## 2. Normative language

The keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** describe requirement strength.

- **MUST / MUST NOT:** required for conformance.
- **SHOULD / SHOULD NOT:** recommended unless a documented product reason justifies an exception.
- **MAY:** optional and context-dependent.

## 3. Design thesis

> Capture attention without trapping it. Use AI without mythologizing it. Give users agency, evidence, and a clear way back.

The design language is called **Controlled Intensity**.

It combines:

- rigorous editorial structure;
- selective visual disruption;
- visible human authorship;
- adaptive, tool-like behavior;
- proportional transparency;
- calm task and reading environments.

The entrance may be energetic. The working surface must be controlled. Trust-sensitive steps must be quiet.

## 4. Ten core rules

### 4.1 Stop the scroll, then reduce the noise

The opening state MAY be visually forceful. Reading, comparison, creation, payment, permission, and configuration states MUST reduce visual competition.

### 4.2 Structure is stable; expression is local

Navigation, hierarchy, controls, and state behavior MUST remain predictable. Expressive typography, texture, motion, and composition SHOULD appear in selected zones rather than across every element.

### 4.3 One dominant intention per context

Each page, view, or functional region MUST make its primary intention recognizable. Dashboards MAY contain several peer tasks, but MUST NOT present several competing global calls to action.

### 4.4 AI is a capability, not an aesthetic

AI MUST be identified by its behavior, scope, and state. Purple gradients, sparkles, glowing orbs, and chatbot layouts MUST NOT be used as default evidence of AI functionality.

### 4.5 Show state before spectacle

The interface MUST communicate what the system is doing, waiting for, changing, or unable to complete. Motion MUST NOT substitute for meaningful status.

### 4.6 Provenance follows risk

The visibility of authorship, sources, transformation, and verification MUST increase with the consequence of the content or action.

### 4.7 Personalization requires explanation and control

Personalized content SHOULD provide a concise explanation such as `Why you see this`. Users MUST be able to modify, reset, or disable non-essential personalization.

### 4.8 Every consequential action needs a way back

Undo, version history, review, rollback, or explicit confirmation MUST match the consequence of the action.

### 4.9 Attention is borrowed, not owned

The product MUST NOT use false urgency, deceptive interruption, artificial scarcity, hidden continuation, or compulsive interaction patterns solely to increase engagement.

### 4.10 Authorship must survive the system

Consistency MUST NOT erase character. Each implementation SHOULD establish a recognizable typographic, photographic, compositional, or verbal point of view.

## 5. System architecture

The kit has five layers.

| Layer | Contains | Portability |
|---|---|---|
| Core principles | hierarchy, agency, trust, attention ethics | universal |
| Semantic system | roles, tokens, states, accessibility | highly portable |
| Interaction primitives | navigation, controls, forms, feedback | adaptable |
| Domain modules | commerce, editorial, community, AI tools | product-specific |
| Expressive theme | typefaces, palette, imagery, texture | brand-specific |

Implementations MUST preserve the first two layers. The final three MAY be adapted to product context.

## 6. Intensity modes

| Mode | Typical use | Behavior |
|---|---|---|
| `quiet` | checkout, healthcare, finance, settings, permissions | minimal motion, restrained color, explicit hierarchy |
| `expressive` | brand, commerce discovery, editorial, portfolio | authored composition, strong type, selective texture |
| `immersive` | culture, music, campaigns, entertainment | richer motion and media, while navigation and controls remain stable |

One product MAY move between modes. A commerce experience, for example, may use `expressive` discovery and `quiet` checkout.

Forms, authentication, destructive actions, payment, privacy, and permission controls MUST remain `quiet` in every product.

## 7. Semantic color system

### 7.1 Required roles

Every theme MUST define:

```text
canvas
surface
surface-raised
ink
ink-muted
border
action
action-foreground
context
success
warning
error
focus
```

`action` identifies the dominant user action. `context` identifies adaptive, AI-mediated, personalized, or mode-specific information. Neither role may rely on color alone.

### 7.2 Reference theme

The following palette demonstrates Controlled Intensity. It is a reference, not a mandatory brand palette.

#### Light

| Token | Value |
|---|---:|
| `canvas` | `#F2F0EA` |
| `surface` | `#FAFAF7` |
| `surface-raised` | `#FFFFFF` |
| `ink` | `#11110F` |
| `ink-muted` | `#6B675F` |
| `border` | `#C9C4B8` |
| `action` | `#FF5A1F` |
| `action-foreground` | `#11110F` |
| `context` | `#005FCC` |

#### Dark

| Token | Value |
|---|---:|
| `canvas` | `#0E0F0D` |
| `surface` | `#171815` |
| `surface-raised` | `#22231F` |
| `ink` | `#F4F1EA` |
| `ink-muted` | `#B7B2A8` |
| `border` | `#3B3C36` |
| `action` | `#FF6A32` |
| `action-foreground` | `#0E0F0D` |
| `context` | `#78A9FF` |

### 7.3 Color rules

- Each functional region SHOULD contain no more than one dominant action color.
- Status MUST be communicated through text or iconography in addition to color.
- Light and dark themes MUST be designed independently, not produced through automatic inversion.
- Reading surfaces SHOULD remain chromatically calm.
- Decorative color MUST NOT reduce hierarchy or obscure state.

## 8. Typography

### 8.1 Functional roles

| Role | Purpose |
|---|---|
| `Interface` | navigation, controls, forms, body text |
| `Voice` | display type, editorial hierarchy, brand character |
| `Evidence` | source, time, status, version, machine-readable context |

Reference stack:

- Interface: Inter Variable
- Voice: Source Serif 4
- Evidence: IBM Plex Mono

These typefaces are implementation examples. A project-specific Voice face is encouraged. Interface and Evidence MAY use one family when performance, language support, or product density makes a third font unnecessary.

### 8.2 Fluid scale

| Token | Size | Line height |
|---|---|---:|
| `display` | `clamp(4rem, 10vw, 9rem)` | `0.88-0.94` |
| `h1` | `clamp(2.75rem, 6vw, 6.5rem)` | `0.94` |
| `h2` | `clamp(2rem, 4vw, 4.5rem)` | `1.00` |
| `h3` | `clamp(1.5rem, 2.2vw, 2.25rem)` | `1.08` |
| `lead` | `clamp(1.125rem, 1.6vw, 1.5rem)` | `1.35` |
| `body` | `1rem` | `1.55` |
| `small` | `0.875rem` | `1.45` |
| `micro` | `0.75rem` | `1.30` |

### 8.3 Typography rules

- Body measure SHOULD remain between 55 and 75 characters.
- Display text MUST NOT be the only carrier of essential information.
- Uppercase SHOULD be limited to short labels and metadata.
- Monospace MUST NOT be used merely to imply technology.
- Fluid type MUST preserve browser zoom and user font preferences.
- Critical text MUST remain readable before web fonts load.

## 9. Layout and spacing

### 9.1 Responsive grid

| Viewport | Columns | Outer margin | Gutter |
|---|---:|---:|---:|
| 320-599 px | 4 | 16 px | 12-16 px |
| 600-1023 px | 6 | 24-40 px | 20 px |
| 1024-1439 px | 12 | 40-64 px | 24 px |
| 1440+ px | 12 | 80 px or fluid | 24-32 px |

Marketing and editorial canvases SHOULD use a maximum working width around `1600px`. Application shells MAY use the full viewport when information density requires it.

### 9.2 Spacing scale

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160
```

- Components SHOULD use `4-32`.
- Content groups SHOULD use `24-64`.
- Sections SHOULD use `64-160`.
- Values outside the scale require a documented optical or functional reason.

### 9.3 Composition rules

- Use a stable grid with deliberate asymmetry inside it.
- Each viewport SHOULD contain one visually dominant object or region.
- Full-bleed media MAY interrupt the rhythm, but MUST NOT interrupt navigation or task continuity.
- Do not center every major section.
- Do not convert every content unit into a card.

## 10. Shape, border, and depth

| Token | Value | Use |
|---|---:|---|
| `radius-none` | `0` | structural panels, editorial objects |
| `radius-control` | `4px` | inputs and controls |
| `radius-soft` | `12px` | selected media, modal surfaces |
| `radius-full` | `999px` | tags, filters, status, avatars |

- Borders are the primary method of explaining structure.
- Shadows indicate actual overlap or elevation, not generic polish.
- Pill shapes MUST NOT be the default for buttons, inputs, panels, and cards simultaneously.
- Components do not need to share one universal silhouette.

## 11. Motion

### 11.1 Timing tokens

| Token | Duration |
|---|---:|
| `instant` | `80ms` |
| `fast` | `140ms` |
| `standard` | `220ms` |
| `slow` | `360ms` |
| `scene` | `600ms` |

Reference easing:

```css
--ease-ui: cubic-bezier(.2, .8, .2, 1);
--ease-exit: cubic-bezier(.4, 0, 1, 1);
--ease-expressive: cubic-bezier(.16, 1, .3, 1);
```

### 11.2 Motion rules

- Controls MUST respond immediately.
- Transform and opacity SHOULD be preferred over layout-triggering animation.
- Motion during reading MUST stop.
- Persistent floating, pulsing, or decorative looping SHOULD NOT be used.
- Scroll hijacking MUST NOT be used.
- Long transitions MUST be interruptible.
- `prefers-reduced-motion` MUST remove spatial and non-essential motion while preserving state feedback.

## 12. Core interaction primitives

### 12.1 Navigation

- Provide no more than five to seven primary destinations.
- Make the current location visible.
- Search MUST be presented as a real capability when it is central to the product.
- Mobile bottom navigation SHOULD be limited to applications with three to five persistent destinations.
- Sticky elements MUST NOT obscure focused or anchored content.

### 12.2 Hero or opening state

An expressive website opening SHOULD contain:

- a concise proposition;
- proof or context;
- one primary action;
- no more than one secondary action;
- an image, type treatment, or interactive object that carries the concept.

Application home views are not required to use a marketing hero.

### 12.3 Content object

Use a content object instead of a generic card. It MAY contain media, title, author, origin, time, status, and one relevant action. It does not automatically require a filled background, rounded corners, or shadow.

### 12.4 Buttons

- Practical pointer target SHOULD be at least `44 x 44px`.
- Use clear action verbs.
- Primary buttons use the action role.
- Secondary buttons use a border or lower-emphasis surface.
- Tertiary actions use meaningful text.
- A disabled control SHOULD explain why it is unavailable.
- Avoid vague labels such as `Learn more`, `Continue`, or `Submit` when a precise action is possible.

### 12.5 Forms

- Labels MUST remain visible.
- Placeholder text MAY provide an example but MUST NOT replace a label.
- Errors MUST identify the problem and suggest recovery.
- User input MUST survive validation failure.
- Paste, password managers, and accessible authentication MUST remain functional.
- Validation SHOULD occur near the relevant field without punishing normal typing.

### 12.6 Search and command interfaces

- Natural-language input MAY complement structured search.
- Command interfaces MUST expose available actions and scope.
- Command input MUST NOT be the only path to essential functionality.
- The interface MUST distinguish asking for information from authorizing an action.

### 12.7 Feeds and collections

- Utility and research contexts SHOULD use finite groups, pagination, or explicit continuation.
- Infinite scroll MAY be used in discovery or entertainment contexts.
- Infinite experiences MUST preserve position, expose feed controls, and provide meaningful session boundaries.
- Personalized feeds SHOULD support `Why you see this` and reset or chronological alternatives.

## 13. AI-native interaction system

### 13.1 AI composer

An AI composer SHOULD provide:

- a clear field for intent;
- optional context attachment;
- no more than three relevant starter suggestions;
- format or scope controls when they materially affect output;
- a visible distinction between `Ask`, `Generate`, and `Execute`.

### 13.2 Required states

```text
idle
interpreting
planning
queued
delegated
permission-required
waiting-for-input
background-running
partial-result
review-required
completed
uncertain
blocked
failed
cancelled
rolled-back
```

Do not simulate typing when the system is planning, searching, or executing.

### 13.3 Before execution

For consequential actions, show:

- the intended operation;
- affected data or systems;
- requested permission;
- whether the operation is reversible;
- estimated time or cost when relevant.

### 13.4 During execution

Show:

- current state;
- completed and pending work;
- blockers;
- whether the user may leave safely;
- stop or cancel controls when technically possible.

### 13.5 After execution

Show:

- result and changed state;
- a diff for modified content or data;
- sources and assumptions;
- unresolved uncertainty;
- undo, edit, retry, or rollback according to consequence;
- version or action history.

### 13.6 Uncertainty

Do not display unsupported confidence percentages. Prefer:

- supporting sources;
- explicit assumptions;
- missing information;
- disputed or unverified claims;
- items requiring human review.

## 14. Provenance

Provenance is described on four independent axes.

| Axis | Values |
|---|---|
| Origin | `human`, `AI-generated`, `mixed`, `unknown` |
| Transformation | `edited`, `translated`, `summarized`, `enhanced` |
| Verification | `verified`, `unverified`, `disputed` |
| History | `original`, `updated`, `corrected` |

### 14.1 Disclosure levels

| Risk | Surface disclosure |
|---|---|
| Low | available on demand |
| Medium | compact visible label |
| High | visible label plus source or review summary |
| Consequential | full review step before action or reliance |

The interface SHOULD expose only the provenance necessary for the current decision. A detail panel MAY reveal author, date, sources, tools, transformations, verification, and edit history.

Provenance MUST NOT be reduced to a decorative `HUMAN` or `AI` badge.

## 15. Domain modules

### 15.1 Commerce

Commerce implementations MUST make price, availability, shipping, returns, product variation, and total cost visible at the relevant decision point.

- Discovery MAY be expressive.
- Product comparison SHOULD be structured and evidence-led.
- Reviews SHOULD expose verification and relevant context.
- AI recommendations MUST NOT conceal original product data.
- Checkout MUST use quiet mode.
- Checkout MUST NOT introduce surprise fees, preselected extras, or disruptive recommendations.

### 15.2 Editorial and media

- Reading surfaces MUST prioritize measure, contrast, and continuity.
- Author, publication time, update time, and corrections SHOULD be available.
- Distinguish reporting, opinion, syndicated material, and AI summaries.
- AI summaries MUST link to or reveal the source material they summarize.
- Recommendation systems SHOULD explain why an item is present.
- Autoplay media MUST NOT interrupt reading.

### 15.3 Community and social

- The identity of participants SHOULD be stronger than the identity of the platform.
- Audience visibility MUST be explicit before publishing.
- Remix, quote, and fork actions MUST retain a visible relationship to the source.
- Privacy, moderation, reporting, and blocking MUST be available near the affected content.
- Engagement counts SHOULD NOT automatically dominate content quality or meaning.
- Notification and recommendation controls MUST be understandable and reversible.

### 15.4 AI productivity

- The working surface SHOULD default to quiet mode.
- Chat MUST NOT be the only interface when structured controls improve precision.
- Agent plans, permissions, background work, blockers, diffs, and history MUST be inspectable.
- Destructive or external actions MUST require appropriate review.
- Cost, data access, retention, and external destination MUST be visible when relevant.
- Long-running work MUST support safe departure and resumption.

## 16. Content design

### 16.1 Voice

The product voice SHOULD be direct, informed, and specific. It MUST NOT imitate youth slang or manufacture casualness to appear relevant.

### 16.2 Information sequence

Important content SHOULD follow:

1. orientation;
2. value or claim;
3. proof or context;
4. action;
5. deeper detail.

### 16.3 Labels

- Use verbs for actions.
- Use nouns for destinations.
- State consequence in confirmations.
- Replace `Are you sure?` with the specific result of proceeding.
- Error messages MUST support recovery.
- AI copy MUST distinguish proposal, execution, result, and uncertainty.

## 17. Accessibility baseline

Conforming implementations MUST target **WCAG 2.2 Level AA** at minimum.

- Normal text contrast: at least `4.5:1`.
- Large text contrast: at least `3:1`.
- Essential graphical objects, controls, and focus indicators: at least `3:1` against adjacent colors where WCAG requires it.
- Practical touch targets SHOULD be at least `44 x 44px`, exceeding the WCAG 2.2 minimum target criterion in ordinary cases.
- All functionality MUST be keyboard operable.
- Focus MUST be visible and unobscured.
- Content MUST reflow at `320 CSS px` except for legitimate two-dimensional content.
- Hover or focus content MUST be dismissible, hoverable, and persistent where applicable.
- Meaning MUST NOT depend on color, sound, shape, position, or motion alone.
- Speech and meaningful video SHOULD provide captions or transcripts as appropriate.
- Reduced-motion preferences MUST be respected.
- Authentication MUST allow accessible recognition and assistance methods, including paste and password managers.

## 18. Performance baseline

At the 75th percentile of real-user visits, target:

| Metric | Good threshold |
|---|---:|
| LCP | `<= 2.5s` |
| INP | `<= 200ms` |
| CLS | `<= 0.1` |

Additional requirements:

- Critical content MUST NOT depend on unnecessary client-side JavaScript.
- Images and media MUST reserve dimensions before loading.
- The LCP resource SHOULD be discoverable and prioritized.
- Personalized content MUST NOT cause avoidable layout shift.
- Web fonts SHOULD be locally hosted, subsetted, and limited above the fold.
- Video SHOULD load on demand unless it is essential to the opening proposition.
- Expressive and immersive modes do not receive a larger performance budget.

## 19. Prohibited patterns

The following patterns are non-conforming unless a documented exception proves user benefit:

- card soup;
- centered marketing sections repeated without compositional reason;
- chatbot-only navigation;
- AI action without visible scope;
- autonomous change without review, history, or recovery;
- personalization without explanation or control;
- infinite scroll in task-focused utility workflows;
- autoplay audio;
- hover-only functionality;
- hidden total cost or obligation;
- preselected consent or paid extras;
- false social proof, urgency, scarcity, progress, or live status;
- generic AI gradients used as meaning;
- infantilizing gamification;
- decorative motion that delays repeated tasks;
- fake imperfection intended to simulate authenticity;
- unlabelled synthetic media where origin is material to trust.

## 20. Implementation procedure

1. Identify the primary product domain and user decisions.
2. Select the default intensity mode for each major journey stage.
3. Implement core semantic roles before choosing expressive values.
4. Define Interface, Voice, and Evidence typography roles.
5. Build the stable grid, spacing scale, navigation, controls, and state system.
6. Add only the required domain modules.
7. Define AI states, permission boundaries, provenance, and recovery.
8. Apply brand expression in selected zones.
9. Test mobile, keyboard, zoom, reduced motion, low bandwidth, and interrupted tasks.
10. Validate accessibility, performance, and trust-sensitive flows before visual polish is approved.

## 21. Conformance checklist

### Hierarchy and composition

- [ ] The dominant intention is recognizable in every context.
- [ ] Functional structure remains predictable across expressive sections.
- [ ] The layout avoids repetitive centered sections and card soup.
- [ ] Mobile views preserve hierarchy rather than merely stack desktop elements.

### Attention and agency

- [ ] The experience provides a natural endpoint or resumable state.
- [ ] Discovery patterns do not trap the user.
- [ ] Personalization is explained and controllable.
- [ ] Consequential actions have proportionate review and recovery.

### AI behavior

- [ ] Asking, generating, and executing are visually distinct.
- [ ] Plans, permissions, running state, blockers, and results are visible.
- [ ] AI output exposes sources, assumptions, or missing information when relevant.
- [ ] The product avoids unsupported confidence percentages.
- [ ] External or destructive actions require appropriate authorization.

### Trust and provenance

- [ ] Provenance visibility matches risk.
- [ ] Synthetic and transformed content is disclosed when material.
- [ ] Corrections and updates remain discoverable.
- [ ] Reviews, testimonials, and social proof are not misleading.

### Accessibility and performance

- [ ] WCAG 2.2 AA requirements are tested.
- [ ] Keyboard, focus, zoom, reflow, and reduced motion work.
- [ ] Touch targets are practical on mobile.
- [ ] Core Web Vitals targets are measured with real-user data where possible.
- [ ] Brand expression does not create a larger performance or accessibility exception.

### Authorship

- [ ] The product has a recognizable point of view.
- [ ] Texture and irregularity have a real conceptual purpose.
- [ ] AI aesthetics are not reduced to familiar visual cliches.
- [ ] The result does not resemble an unmodified template or generic AI-generated interface.

## 22. Final design test

Before approval, ask:

> Is the interface strong enough to interrupt habitual scrolling, clear enough to explain itself immediately, honest enough to support a decision, and controlled enough to let the user leave?

If any answer is no, the design is not complete.

## 23. Research basis

The system is informed by current research on youth technology use, AI adoption, social-media saturation, trust, media behavior, accessibility, and web performance. Trend reports were used only as cultural signals, not as universal usability evidence.

- [Pew Research Center: Teens, Social Media and AI Chatbots 2025](https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/)
- [Pew Research Center: How Teens Use and View AI](https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/)
- [Pew Research Center: Teens, Social Media and Mental Health](https://www.pewresearch.org/internet/2025/04/22/teens-social-media-and-mental-health/)
- [Pew Research Center: Teens and Video Games Today](https://www.pewresearch.org/internet/2024/05/09/teens-and-video-games-today/)
- [Common Sense Media: Teens, Trust, and Technology in the Age of AI](https://www.commonsensemedia.org/research/research-brief-teens-trust-and-technology-in-the-age-of-ai)
- [Ofcom: Children's Media Use and Attitudes](https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/childrens)
- [W3C: WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [Canva: Design Trends 2026](https://www.canva.com/newsroom/news/design-trends-2026/)
- [Adobe: Creative Trends 2026](https://business.adobe.com/resources/creative-trends-report.html)
- [Interrogating Design Homogenization in Web Vibe Coding](https://arxiv.org/html/2603.13036v1)

