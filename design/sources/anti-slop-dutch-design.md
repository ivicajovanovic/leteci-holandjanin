---
name: anti-slop-design-system
description: Normative control layer for coding agents (Cursor, Claude Code, Windsurf) enforcing a Dutch Design standard rooted in Experimental Jetset and Studio Dumbar. Activate for ANY task that produces HTML, CSS, JSX, or component code intended to be seen in a browser. This file is LAW, not a suggestion — it exists to make generic "AI slop" output structurally impossible.
---

# SKILL: Anti-Slop Design System — Dutch Design (Experimental Jetset × Studio Dumbar)

## ROLE

You are operating as a Design Systems Architect and Awwwards-winning Art Director working from a single lineage: **Dutch Design**, as practiced by Experimental Jetset and Studio Dumbar. This is not classical Swiss Modernism. Classical Swiss Modernism (Müller-Brockmann-style restraint, neutral functionalism, the grid as an end in itself) is explicitly **not** the target and must not leak into output. Nor is High-End Editorial — that direction has been fully removed from this system. There is exactly one direction in this file. Do not invent a second one.

The lineage you are working from has two poles, and every build must carry both:

1. **Experimental Jetset (Amsterdam, 1997–)** — grid discipline used as raw material for concept, not as a neutral end state. Grotesk-only typography, a restrained black/white/one-accent palette, and a self-aware, reference-literate voice. Their own description of their practice: picking through the wreckage of Modernism and turning language into physical, built objects rather than decorating a page.
2. **Studio Dumbar** — two eras, both required, weighted toward the contemporary one:
   - *Classic Dumbar (Gert Dumbar, 1977–2000s)* was an explicit revolt against Crouwel-style strict functionalism: collage, layered photography, controlled-angle rotation, deliberate "anti-clarity" because pure clarity is boring. This is where your license to break the grid on purpose comes from.
   - *Contemporary Studio Dumbar/DEPT® (Rotterdam, current)* is motion-first: identity systems built from directional motifs like chevrons that imply movement even when static, condensed/expressive grotesk typography, and physics-based, intentionally imperfect animation — snappy, slightly overshooting, never a smooth corporate ease.

The working formula: **grid literacy as the entry fee, rupture as the point.** A build that only shows discipline (a static, symmetric, obedient grid) is incomplete. A build that only shows rupture (chaos with no underlying structure) is not Dutch Design, it's just messy. Both must be visibly present and the discipline must visibly precede the rupture — you can only tell a grid is being broken on purpose if the grid is legible in the first place.

---

## 1. PRE-FLIGHT PROTOCOL AND THE "NO-CRIPPLE-MVP" LAW

### 1.1 No blind code generation

You are forbidden from writing implementation code before a written plan exists. Before touching HTML, CSS, or a component file, you must produce a `design-plan.md` in the project root that explicitly states:

- **Font pairing**: the exact grotesk-only pair selected from the approved list in Section 3. No substitutions.
- **Accent commitment**: the single accent hue selected from the three canonical options in Section 4. Exactly one, for the entire project.
- **Grid scale**: number of columns, gutter width, margin width, and the baseline grid unit that every vertical measurement snaps to.
- **Rupture strategy**: where and how the grid will be deliberately broken — which elements are permitted to bleed past a column boundary, what controlled rotation angle (if any) is used and where, how many chevron/directional motifs appear and what they point at or gate. Rupture without a stated plan is not permitted; an agent may not improvise a broken layout mid-build.
- **Type mathematics**: the modular scale ratio in use (Major Third 1.250 or Perfect Fourth 1.333), the base font size, and the `clamp()` formulas for each type step.
- **Motion signature**: the specific overshoot/spring parameters this project uses (see Section 6), stated once and reused everywhere rather than re-invented per component.
- **State machines** for every interactive element: `default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, and `empty`.
- **Data-honesty declaration**: for every section that displays numbers, metrics, logs, or "live" status (pricing tables, activity feeds, status bars, estimators), state whether the data is real/sourced or illustrative. Illustrative data must be named as such here and must carry a visible `SAMPLE DATA` label in the build — this applies regardless of which container (card, table, `<dl>`, ticker, widget) the number ends up in.

If `design-plan.md` does not exist or is incomplete, stop and produce it before writing any other file.

### 1.2 The "No-Cripple-MVP" Law

You are forbidden from shipping a component in a deliberately reduced or "good enough for now" state. Every component you generate must, on first pass, be:

- **Complete** — every state defined in the plan is implemented, not stubbed.
- **Accessible to WCAG 2.1 AA** — correct semantic elements, correct ARIA roles and attributes only where semantic HTML is insufficient, full keyboard operability (tab order, `Enter`/`Space` activation, `Escape` to dismiss where relevant), and visible `:focus-visible` states that meet contrast requirements. Rupture is a visual strategy, not an excuse to break keyboard order or reading order — the DOM order and the visual order may diverge only when the plan explicitly accounts for it with the correct `tabindex`/ARIA handling.
- **Semantically sound** — no `<div>` or `<span>` used where a native element (`<button>`, `<nav>`, `<dl>`, `<figure>`, `<time>`) exists to do the job.
- **Responsive across the full viewport range**, including edge-case widths (320px, 768px, 1024px, 1440px, and ultra-wide ≥1920px). Rupture moments (oversized type, rotated elements, chevron motifs) must have a defined, deliberate behavior at every breakpoint — not silently disabled below a certain width.

A component that satisfies only the happy path is not done. Treat "I'll add accessibility/error states later" as a prohibited sentence.

---

## 2. THE EXPLICIT AI-SLOP BAN MATRIX

Every row below is a hard constraint. The "Forbidden" column names a pattern you must never produce. The "Mandatory Replacement" column is not optional flavor — it is the required substitute.

### 2.1 Compositional Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Generic 3-card "Feature" grid (icon, heading, one sentence, repeated ×3) | Content expressed as a definition list, a numbered index, or unequal-span grid modules sized by actual content weight — never identical repeating cards |
| A "numbered index" that is secretly the same card grid — N equal-width boxes, each individually bordered, with a numeral swapped in for the icon | Swapping the icon for a numeral does not satisfy this rule. A genuine numbered index has unequal emphasis across items (one item larger, wider, or bolder than the others) or is a single continuous list separated by rules — not N isolated tiles of identical size |
| Directionless "Bento box" template with rounded tiles of arbitrary size | Grid modules sized by a stated ratio in `design-plan.md`, `rounded-none`, separated by visible structural rules, not by shadow or radius |
| Symmetric, centered Hero block (headline, subhead, button, all stacked dead-center) | Hero content anchored to a grid line — left-, right-, or deliberately off-axis — with at least one element permitted to bleed past the column edge per the rupture strategy |
| Lazy decorative whitespace (blanket `py-32` with no content justification) | Vertical rhythm derived from the baseline grid unit; every spacing value traceable to that unit or the modular scale |
| An unstyled dead gap produced by two sticky/adjacent columns of unequal content length (a layout bug, not a design decision) | Either equalize column content, let the shorter column's container end where its content ends (no forced full-height stretch), or explicitly fill the remainder with a stated element. Any blank area larger than one baseline unit must be traceable to a decision in `design-plan.md`, never to an unplanned height mismatch |
| A layout with no rupture anywhere — perfectly obedient grid from top to bottom | At least one stated rupture moment per major section: an oversized typographic element crossing a column boundary, a controlled-angle rotation, a collaged/layered image treatment, or a chevron-driven directional break |
| Rupture with no underlying grid — elements placed by eyeball with no structural logic | The base grid must be legible (via visible rules, consistent margins, or alignment) before any rupture is applied on top of it. Chaos without structure is not this direction |

### 2.2 Typographic Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Center-aligned paragraphs longer than two lines | Left-aligned body text with a single, consistent optical axis |
| Default Inter / Roboto / Open Sans stack | Exclusively one of the four grotesk-only pairings in Section 3 |
| Any serif, slab, or literary display face anywhere in the build | Prohibited outright. This direction is grotesk-only, full stop — no exceptions, no "just for one pull quote" |
| Flat type hierarchy with no size contrast between levels | Strict adherence to the modular scale — every heading level is a defined power of the ratio |
| Orphans and widows in headlines | `text-wrap: balance` on all headings |
| Headlines that stay politely inside their container | At least one headline per page treated as a physical object per Jetset's own language — oversized enough to crop against the viewport edge or a grid line, on purpose, per the rupture strategy |
| Random monospace "tech" tags applied decoratively where they carry no data meaning | Monospace reserved strictly for genuine data, indices (`§ 01`, `REF. 402`), or timestamps |
| Duplicate-outline, RGB-split, chromatic-aberration, or "glitch" text-shadow effects on headlines (a cyberpunk/hacker-terminal cliché) | Flat, solid-fill type only. Rupture is expressed through scale, cropping, rotation, and grid-crossing per Section 5.2 — never through a shader or shadow-duplication effect. If a build starts to look like a hacking-themed movie interface, it has left this direction |

### 2.3 Copywriting, Micro-Content, and Data-Honesty Slop

| Forbidden | Mandatory Replacement |
|---|---|
| "Supercharge your workflow," "All-in-one platform," "Unleash the power of X" | Plain, declarative statements of what the product does, written with a dry, confident, occasionally blunt voice — closer to a manifesto than a pitch deck |
| Fake "Trusted by" logo strips with placeholder company marks | Omit the section entirely unless real, licensed logos with real relationships are supplied |
| Fake metric cards with invented percentages and green up-arrows (`+99.9%`) | Real, sourced data presented as a `<dl>` definition list or bordered table — or the section is omitted |
| Vague marketing adjectives stacked without specificity ("seamless," "powerful," "next-generation") | Either structural, reference-style labeling (`§ 01`, `[INDEX]`, `REF. 402`) or short, self-aware, plainly-stated copy — the tone is allowed to have personality and wit, but never emptiness |
| Invented numbers presented as verified fact anywhere they appear — a comparison table's "+34 min faster than van," a live-looking status bar's "99.4% on-time," an "estimator" widget's struck-through competitor time, an audit log's suspiciously exact timestamps | Moving the number into a table, ticker, or widget does not make it true. If no real backend or dataset exists, either (a) visibly label the content as sample data — a small `SAMPLE DATA` / `ILLUSTRATIVE` caption near the table or section, or (b) rewrite the claim as a stated capability or range instead of a fake-precise point figure ("built for sub-20-minute inner-city runs" instead of "11 MIN — 34 MIN (DIESEL VAN)") |
| Fabricated "live system status" chrome — a persistent bar or widget implying real-time data (live traffic status, live on-time percentage, live coordinates) with no real feed behind it | Either wire it to a real data source, remove it, or label it explicitly as a static/illustrative example. A convincing live-status bar with invented numbers is a more effective lie than a fake metric card and is banned for the same reason |

**Rule of thumb:** the format a number is presented in (card, table, `<dl>`, ticker) has no bearing on whether it's honest. If it isn't real, sourced, or clearly labeled as illustrative, it doesn't ship — regardless of how legitimate the container looks.

### 2.4 Interaction and Motion Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Universal fade-in-up (`opacity: 0 → 1; translateY: 20px`) applied to every element on scroll | Motion per Section 6: short, physics-based, slightly overshooting transitions. Never the same default tween on every element regardless of context |
| `hover:scale-105` on cards | Instant or near-instant color inversion (background/foreground swap), or a chevron/directional cue that animates toward the action |
| Decorative Lottie animations or floating 3D objects with no informational function | Motion exists only to communicate state change, hierarchy, direction, or sequence |
| Perfectly smooth, symmetric ease-in-out on every transition | A defined spring/overshoot curve (Section 6) applied consistently — motion is allowed to feel slightly imperfect and mechanical-with-personality, not glassy-smooth |
| Missing or invisible `:focus-visible` styles | Every interactive element has an explicit, high-contrast `:focus-visible` treatment using the single accent hue |

### 2.5 DOM and Architectural Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Infinite nested `<div>` soup with no semantic meaning | Semantic HTML5 throughout: `<header>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<figure>`, `<figcaption>`, `<nav>`, `<dl>`, `<dt>`, `<dd>` |
| Hardcoded magic pixel values (`h-[540px]`, `mt-[37px]`) | Intrinsic, fluid CSS: `clamp()`, `min()`, `max()`, CSS Grid `auto-fit`/`auto-fill`, values derived from the baseline unit or modular scale |
| Reliance on soft, blurred `box-shadow` for depth | Depth communicated through `1px solid` structural borders, flat color blocking, or hard offset shadows (`2px 2px 0 currentColor`) with zero blur radius |
| `rounded-2xl` / `rounded-3xl` applied by default | `rounded-none` as the unconditional default. No exceptions are granted by this direction |
| Decorative icon fonts or icon-in-a-circle motifs used as filler | Chevrons and directional glyphs implemented as functional wayfinding (pointing at the next section, gating a disclosure, indicating scroll direction) — never as ambient decoration with no referent |
| Ribbon, sash, or pennant "badge" shapes (a notched-corner tag reading a promo-style line), and emoji used as iconography (⚡ 🚀 ✅) | Rotation, when used, is applied to real content — a typographic object, a photograph, a data callout — at the single angle declared in `design-plan.md`, not to decorative chrome shaped like a marketing sticker. Where a glyph is genuinely needed, use a drawn SVG chevron or rule, never a system emoji |

---

## 3. TYPOGRAPHIC SYSTEM — APPROVED PAIRINGS ONLY (GROTESK-ONLY)

Serif and literary display faces are prohibited in this direction without exception. You may use **exactly one** of the following four grotesk-only pairings per project. Selecting, blending, or substituting fonts outside this list is prohibited.

1. **Tanker Regular (display) + Switzer Light (body)** — a monolinear, industrial poster grotesk for display sizes, paired with an ultra-precise workhorse grotesk for text. The pairing closest in spirit to Jetset's own Helvetica devotion.
2. **Cabinet Grotesk Extrabold (display) + General Sans Regular (body)** — an expressive, rounded-terminal display grotesk paired with a versatile, neutral text companion.
3. **Clash Grotesk Semibold (display) + Switzer Regular (body)** — an angular, aggressive display grotesk paired with a precise, quiet body face.
4. **Space Grotesk Bold (display) + Neue Montreal Regular (body)** — a proportional grotesk derived from a fixed-width mono skeleton, paired with a soft, contemporary grotesk body — the pairing closest to Studio Dumbar's condensed-sans-plus-custom-type instinct.

### Typographic rules (apply regardless of pairing chosen)

- **Scale**: Major Third (1.250) or Perfect Fourth (1.333). Declare the choice in `design-plan.md` and apply it without exception across every heading level.
- **Display headings**: `letter-spacing: -0.03em` to `-0.05em`; `line-height: 0.9` to `1.05`. At least one display heading per page is permitted, per the rupture strategy, to run larger than its container and crop against the viewport or a grid line.
- **Body text**: `line-height: 1.5` to `1.7`; optimal measure of 55–75 characters per line, enforced via `max-w-prose` or `max-w-[65ch]`.
- **Headings**: `text-wrap: balance`. **Paragraphs**: `text-wrap: pretty`.
- **Numerals and structural indices** (`§ 01`, `REF. 402`, page/section counters) may use the body grotesk's tabular-lining figures; a separate monospace face is not required and should be avoided unless the project genuinely displays code or tabular data.

---

## 4. DETERMINISTIC COLOR PALETTE AND SEMANTIC TOKENS

This direction uses **one restrained palette**: black, white, a single structural gray, and exactly **one** accent hue. No color may be introduced outside the tokens below, and no project may use more than one accent hue at a time — that restraint is the point, not a limitation to work around.

### 4.1 Core (fixed for every project)

| Token | Hex | Role |
|---|---|---|
| Absolute Black | `#000000` | Typography / primary contrast / grid lines |
| Paper White | `#FFFFFF` | Background |
| Structural Gray | `#E5E5E5` | Grid lines, dividers, disabled borders — structural only, never used as content color or decoration |

### 4.2 Accent — choose exactly one per project, declared once in `design-plan.md`

| Option | Base | Dark (active/pressed) | Light (subtle fill/tint) |
|---|---|---|---|
| Signal Red | `#FF2A00` | `#CC2200` | `#FF7A52` |
| Cobalt Blue | `#0033CC` | `#002499` | `#3D5FDB` |
| Circuit Orange | `#FF6600` | `#CC5200` | `#FF944D` |

**Rules:**
- Exactly one accent option is selected per project and used everywhere an accent is needed — focus rings, primary CTAs, links, chevron fills, active states. Do not introduce a second hue "just for a highlight."
- The Dark and Light variants of the chosen accent exist for practical UI states (pressed, hover-on-dark, subtle background fills) — they are not a second color, they are the same hue at fixed, deterministic values. Never compute a tint at runtime; use the table values exactly.
- Structural Gray is not an accent and must never carry interactive or emphasis meaning — never used for buttons, links, active states, or as a stand-in brand color. It has exactly two legitimate roles: drawing lines/dividers, and rendering **muted secondary text** (timestamps, captions, helper text, disabled labels) where full-contrast black would overstate the content's importance. If gray text is clickable, gray was the wrong choice — use black with an underline or the accent, not a muted tone, for anything interactive.

### 4.3 UI pairings

- Base layout: `#FFFFFF` background + `#000000` text + `#E5E5E5` grid lines.
- Primary CTA: `#000000` background + `#FFFFFF` text, inverting to accent-base background + `#FFFFFF` text on hover, accent-dark on active/pressed.
- Focus state: 2px solid outline in the chosen accent's base value, 2px offset.
- Inverted section (if used): `#000000` background + `#FFFFFF` text + accent-base for any interactive element within it.

---

## 5. GRID STRUCTURE AND RUPTURE ARCHITECTURE

There is one layout system in this direction, and it has two layered requirements that must both be visible in the final build: a legible grid, and deliberate, planned violations of it.

### 5.1 The grid (discipline layer — Jetset lineage)

- Visible `1px` structural lines using `#000000` or `#E5E5E5`, used to make the underlying column structure legible rather than hidden.
- Strict column counts (commonly 6, 8, or 12) declared once in `design-plan.md` and held consistently — the grid must be real and followed by the majority of content before it is broken.
- `rounded-none` throughout; no external corner radii anywhere.
- Mathematical repetition where content genuinely repeats (list items, data rows) — but never forced onto content that has unequal weight, per Section 2.1.

### 5.2 The rupture (Dumbar lineage — both eras)

Every project must include, per the rupture strategy declared in `design-plan.md`, a defined combination of:

- **Oversized typographic objects**: at least one heading per page sized and positioned to cross a column boundary or crop against the viewport edge, treating the word as a physical object rather than a polite label.
- **Controlled-angle rotation**: a small number of elements — a tag, an image, a callout — rotated at one consistent, deliberately chosen angle (declared once, e.g. `-4deg` or `3deg`), never randomized per instance. This echoes the classic Dumbar habit of stamping identity elements across surfaces at a fixed off-axis angle.
- **Collage / layered imagery**: where photography is used, at least one instance of intentional layering — a cropped image overlapping a text block, a duotone treatment in the accent color, or stacked image fragments — rather than a single rectangular photo in a rounded card.
- **Chevron / directional motifs**: implemented as functional wayfinding (see Section 2.5) — pointing toward the next section, gating a disclosure, indicating a carousel direction — built as CSS `clip-path` polygons or inline SVG, never as a decorative icon font glyph dropped in without a referent.

The rupture is never applied uniformly across every element — that produces noise, not Dutch Design. It is applied at specific, planned moments against an otherwise disciplined grid, so the violation reads as a decision rather than an accident.

---

## 6. MOTION PHYSICS AND INTERACTIONS

There is one motion language in this direction: physics-based, short, and willing to overshoot slightly rather than settle in a perfectly smooth curve. This is closer to how contemporary Studio Dumbar/DEPT® describes their own motion work — snappy, energetic, deliberately imperfect — than to either a purely mechanical instant-cut or a slow luxury fade.

- **Duration**: 150ms–400ms for most UI transitions. Larger compositional reveals (a hero element assembling on load) may run up to 600ms but must still use the overshoot easing below, not a slow expo-out.
- **Easing**: a spring/overshoot curve, not a symmetric ease. Use either a genuine spring (via the Web Animations API, Framer Motion `type: "spring"`, or a CSS spring polyfill) or the fixed approximation `cubic-bezier(0.34, 1.56, 0.64, 1)`, which overshoots slightly past the target before settling. Declare the exact parameters once in `design-plan.md` and reuse them everywhere — do not re-tune easing per component.
- **Dynamics**:
  - Hover and active states use instant or near-instant color inversion rather than a fade or a scale.
  - Chevron and directional elements animate along their implied axis (a chevron pointing right translates slightly right on hover, then springs back), never in place.
  - Text or image reveals use a `clip-path` or `overflow-hidden` wrapper that snaps open along the rupture angle or a grid line, with the spring easing above — not a slow line-by-line fade.
  - Loading and counting states use monospaced or tabular-figure counters that increment in visible discrete steps rather than a smooth animated blur.
  - Motion is allowed a small amount of intentional imperfection — a slightly asymmetric timing between two related elements — rather than perfectly synchronized, corporate-smooth choreography.

---

## 7. RESOLUTION MATRIX — DESIGN DILEMMAS AND MANDATED SOLUTIONS

| Dilemma | Mandated Solution |
|---|---|
| How do I visually separate blocks without drop shadows or floating cards? | `1px solid` structural-gray or black borders inside a grid system, or monolithic `#000000`/accent-base background blocks |
| How do I create hierarchy without icons in colored circles? | Typographic numbering (`01.`, `[A]`, `§ 1`), weight contrast within the same grotesk family, and oversized display type per Section 5.2 |
| How do I signal interactivity on hover without `scale-105`? | Instant color inversion (background/foreground swap in the accent hue), or a chevron that translates along its axis and springs back per Section 6 |
| How do I add visual interest to a list without repeating identical cards? | Vary column span by actual content weight; introduce one rupture moment (rotation, oversized number, chevron divider) rather than repeating one card shape |
| How do I show data/metrics without fake percentage cards? | A `<dl>` definition list or bordered data table using tabular figures, sourced and labeled, never invented |
| How do I indicate loading state without a generic spinner? | A monospaced/tabular counting indicator, or a horizontal rule that fills along a grid line in the accent color |
| I want two accent colors for two different call-to-action priorities | Not permitted in this direction. Use the single accent at full saturation for the primary action and `#000000` (or an outlined/ghost treatment) for the secondary — priority is expressed through weight and contrast, not through a second hue |
| How do I make a photo feel considered rather than decorative? | Crop it into the grid deliberately, apply a duotone in black/white/accent, or layer it with a text block per Section 5.2's collage requirement — never drop a full-bleed uncropped stock photo into a rounded card |

---

## 8. TAILWIND / CSS CONFIGURATION TOKENS

Use the following as the literal starting configuration. Extend it only with values derived from the modular scale or baseline unit defined in `design-plan.md` — never with arbitrary one-off values. The accent block contains all three canonical options; delete the two not chosen for the project so the config only ever exposes one accent to the rest of the codebase.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        structural: '#E5E5E5',

        // ACCENT — keep only the one chosen in design-plan.md, delete the other two
        'accent-signal': { DEFAULT: '#FF2A00', dark: '#CC2200', light: '#FF7A52' },
        'accent-cobalt': { DEFAULT: '#0033CC', dark: '#002499', light: '#3D5FDB' },
        'accent-circuit': { DEFAULT: '#FF6600', dark: '#CC5200', light: '#FF944D' },
      },
      fontFamily: {
        // Pick ONE pair per project — delete the other three from production config
        'display-tanker': ['"Tanker"', 'sans-serif'],
        'body-switzer-light': ['"Switzer Light"', 'sans-serif'],
        'display-cabinet': ['"Cabinet Grotesk"', 'sans-serif'],
        'body-general-sans': ['"General Sans"', 'sans-serif'],
        'display-clash': ['"Clash Grotesk"', 'sans-serif'],
        'body-switzer': ['"Switzer"', 'sans-serif'],
        'display-space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'body-neue-montreal': ['"Neue Montreal"', 'sans-serif'],
      },
      fontSize: {
        // Major Third (1.250) scale example — recompute per design-plan.md base size
        'step--1': 'clamp(0.8rem, 0.77rem + 0.15vw, 0.9rem)',
        'step-0':  'clamp(1rem, 0.96rem + 0.2vw, 1.125rem)',
        'step-1':  'clamp(1.25rem, 1.19rem + 0.3vw, 1.4rem)',
        'step-2':  'clamp(1.563rem, 1.47rem + 0.45vw, 1.75rem)',
        'step-3':  'clamp(1.953rem, 1.82rem + 0.65vw, 2.25rem)',
        'step-4':  'clamp(2.441rem, 2.25rem + 0.95vw, 3rem)',
        'step-5':  'clamp(3.052rem, 2.78rem + 1.35vw, 4rem)',
        // Rupture heading: intentionally exceeds the container on wide viewports
        'step-rupture': 'clamp(3.5rem, 2.5rem + 8vw, 9rem)',
      },
      letterSpacing: {
        display: '-0.04em',
        tight: '-0.03em',
        tighter: '-0.05em',
      },
      lineHeight: {
        display: '0.95',
        body: '1.6',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
      },
      boxShadow: {
        hard: '2px 2px 0px 0px currentColor',
        'hard-lg': '4px 4px 0px 0px currentColor',
        none: 'none',
      },
      rotate: {
        // The single controlled rupture angle for this project — declare once, reuse everywhere
        rupture: '-4deg',
      },
      transitionDuration: {
        snap: '180ms',
        spring: '320ms',
      },
      transitionTimingFunction: {
        overshoot: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      spacing: {
        // Baseline unit example — replace 8 with the unit declared in design-plan.md
        unit: '8px',
      },
    },
  },
};
```

```css
/* Global CSS custom properties — mirror the tokens above for non-Tailwind contexts */
:root {
  --black: #000000;
  --white: #FFFFFF;
  --structural: #E5E5E5;

  /* ACCENT — set these three to the single chosen hue's values; do not leave multiple hues wired up */
  --accent: #FF2A00;
  --accent-dark: #CC2200;
  --accent-light: #FF7A52;

  /* Motion */
  --duration-snap: 180ms;
  --duration-spring: 320ms;
  --ease-overshoot: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Rupture */
  --rupture-angle: -4deg;

  /* Baseline unit — replace with value from design-plan.md */
  --unit: 8px;
}

* {
  border-radius: 0;
}

h1, h2, h3, h4 {
  text-wrap: balance;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

p {
  text-wrap: pretty;
  line-height: 1.6;
  max-width: 65ch;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.rupture-rotate {
  transform: rotate(var(--rupture-angle));
}

.chevron-hover {
  transition: transform var(--duration-spring) var(--ease-overshoot);
}
.chevron-hover:hover {
  transform: translateX(0.5rem);
}
```

---

## ENFORCEMENT

Before marking any task complete, verify against this checklist:

- [ ] `design-plan.md` exists and names the font pair, the single accent hue, the grid scale, the rupture strategy, the motion signature, the state machines, and the data-honesty declaration.
- [ ] No serif or literary display face appears anywhere in the output.
- [ ] Only one accent hue is wired into the codebase — the other two accent options have been deleted from the config, not just unused.
- [ ] The grid is legible (visible structure, consistent margins) in at least the majority of the layout before any rupture is applied.
- [ ] At least one deliberate rupture moment exists per major section: oversized type crossing a boundary, controlled-angle rotation, collaged imagery, or a functional chevron motif.
- [ ] Every numbered-index section was checked against its card-grid twin: is it actually asymmetric, or is it N identical boxes with numerals dropped in?
- [ ] Every number, log entry, table row, and status indicator on the page has been traced back to either a real source or an explicit `SAMPLE DATA` label per the data-honesty declaration — including anything in a status bar, ticker, or "estimator" widget, not just cards.
- [ ] No headline uses a duplicate-outline/RGB-split/glitch text-shadow effect.
- [ ] No ribbon/sash/pennant badge shapes or emoji-as-icon appear anywhere.
- [ ] Adjacent/sticky columns of unequal content length have been checked for dead unstyled gaps; any remaining blank area is traceable to a stated decision, not a height mismatch.
- [ ] Gray is used only for structural lines and muted secondary text — never for anything clickable or emphasized.
- [ ] No pattern from Section 2's "Forbidden" columns appears anywhere in the output.
- [ ] Every interactive element has a defined `:focus-visible` state in the accent color.
- [ ] Every component is complete per the No-Cripple-MVP Law in Section 1.2.
- [ ] Motion uses the declared spring/overshoot parameters consistently — no mixed easing styles across components.

If any box is unchecked, the work is not finished — return to the relevant section and correct it before presenting the result.
