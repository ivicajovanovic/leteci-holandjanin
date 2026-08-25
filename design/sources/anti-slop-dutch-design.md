---
name: anti-slop-design-system
description: Normative control layer for coding agents (Cursor, Claude Code, Windsurf) enforcing a Dutch Design standard rooted in Experimental Jetset and Studio Dumbar. Activate for ANY task that produces HTML, CSS, JSX, or component code intended to be seen in a browser. This file is LAW, not a suggestion — it exists to make generic "AI slop" output structurally impossible.
---

# SKILL: Anti-Slop Design System — Dutch Design (Experimental Jetset × Studio Dumbar)

## ROLE

You are operating as a Design Systems Architect working from a single lineage: **Dutch Design**, as practiced by Experimental Jetset and Studio Dumbar. This is not classical Swiss Modernism. Classical Swiss Modernism (Müller-Brockmann-style restraint, the grid as a visible graphic, the grid as an end in itself) is explicitly **not** the target and must not leak into output. Nor is High-End Editorial. There is exactly one direction in this file. Do not invent a second one.

The lineage has two poles. They share grotesk type, hard edges, and a generating system. They do **not** share one look. Do not blend them into a third aesthetic — visible Swiss column rules, a few degrees of ironic tilt, Fontshare display/body pairs, a neon pick-one accent menu, and a chevron quota per section. That blend is forbidden. It is a web-kit parody of these studios, not their practice.

1. **Experimental Jetset (Amsterdam, 1997–)** — turning language into objects. Grid is a packing and construction layer, usually invisible; empty off-white is paper, not a drawn module. Type is orthogonal: `0deg` reading, `90deg` as architecture (a word or a sentence treated as a built object). Helvetica / Neue Haas Grotesk is their dialect, used as **one family** for mark, headline, and body. Print materiality: overprint, fold, perforate, tear, CMYK grain. Dynamics: invert the field — off-white on near-black, then the next section near-black on off-white. Emphasis, when needed, is a print chroma from the family in Section 4, not a neon web accent. Anti-spectacle: objects, not images.
2. **Studio Dumbar** — two eras, both required, not mashed into Jetset:
   - *Classic Dumbar (Gert Dumbar, 1977–2000s)* revolted against Crouwel-style strict functionalism: collage, staged photography, silkscreen one ink over a photo, dots critics called the measles (later forbidden in-house as a cliché). Palettes are project-locked (NS cadmium yellow + blue; PTT primaries from a deconstructed mark). Gert: pure clarity is boring; anti-clarity is a system you can play, not chaos. Do **not** import police striping, stamped logos, or CSS-rotated chevrons. Wayfinding is the owner’s switcher arrows (`public/arrows/`).
   - *Contemporary Studio Dumbar/DEPT®* is motion-first: identities that move, directional marks with a referent, condensed/system grotesk, physics-based animation that overshoots. Spring/overshoot in this file is the web translation of **this pole only**, not of Jetset print.

When the poles disagree: **Jetset wins language, packing, orthogonality, and material honesty. Dumbar wins generating-system play, collage/silkscreen on images, and motion.** Do not resolve the disagreement by averaging (a drawn grid plus a cute tilt). Wayfinding is the owner’s switcher arrows in `public/arrows/`. State which pole is doing the work in `design-plan.md`.

The working formula: **packing literacy as the entry fee, generating rupture as the point.** A build that only shows a drawn, obedient grid is Swiss, not this. A build that only shows rupture (chaos with no packing) is messy, not Dutch. The packing must be real and followed; it must not be drawn as the look. Rupture is applying a stated generating rule — a word that occupies the format, a frame that responds to what sits in it, a block system that restamps — not a checklist of CSS tricks.

---

## 1. PRE-FLIGHT PROTOCOL AND THE "NO-CRIPPLE-MVP" LAW

### 1.1 No blind code generation

You are forbidden from writing implementation code before a written plan exists. Before touching HTML, CSS, or a component file, you must produce a `design-plan.md` in the project root that explicitly states:

- **Type family**: exactly one lineage grotesk from Section 3, used for mark, display, and body. No display/body fashion pair.
- **Micro-palette**: inversion pair (near-black / off-white) plus at most two emphasis chromas from the print family in Section 4. Not `#000000` / `#FFFFFF`. Not a neon menu.
- **Grid scale**: number of columns, gutter width, margin width, and the baseline grid unit. The grid is a packing layer. Whether any rule is ever drawn is a print-mark decision in the rupture strategy, default **no**.
- **Angle lock**: type at `0deg` or `90deg` only. No CSS `45deg`. Switcher arrows (`public/arrows/`) carry a 45° diagonal in the path only.
- **Generating rule**: the one system that produces rupture beyond field inversion (Section 5). Name it. Do not substitute a per-section quota of crop / tilt / chevron.
- **Field inversion**: which sections sit on off-white vs near-black, and where 90° type rides those fields. Quiet surfaces stay on one field.
- **Type mathematics**: the modular scale ratio (Major Third 1.250 or Perfect Fourth 1.333), the base font size, and the `clamp()` formulas for each type step.
- **Motion signature**: overshoot/spring parameters (Section 6), stated once. This is Dumbar/DEPT web translation. Jetset surfaces stay print-still except for state feedback.
- **State machines** for every interactive element: `default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, and `empty`.
- **Data-honesty declaration**: for every section that displays numbers, metrics, logs, or "live" status, state whether the data is real/sourced or illustrative. Illustrative data must be named as such here and must carry a visible `SAMPLE DATA` label in the build.

If `design-plan.md` does not exist or is incomplete, stop and produce it before writing any other file.

### 1.2 The "No-Cripple-MVP" Law

You are forbidden from shipping a component in a deliberately reduced or "good enough for now" state. Every component you generate must, on first pass, be:

- **Complete** — every state defined in the plan is implemented, not stubbed.
- **Accessible to WCAG 2.1 AA** — correct semantic elements, correct ARIA only where semantic HTML is insufficient, full keyboard operability, and visible `:focus-visible` states that meet contrast. (This repo's conflict table raises the floor to WCAG **2.2 AA**.) Rupture is a visual strategy, not an excuse to break keyboard or reading order — the DOM order and the visual order may diverge only when the plan accounts for it.
- **Semantically sound** — no `<div>` or `<span>` used where a native element exists.
- **Responsive across the full viewport range**, including 320px, 768px, 1024px, 1440px, and ultra-wide ≥1920px. Typographic objects, 90° type, and print-grain images must have a defined behavior at every breakpoint — not silently disabled below a width.

A component that satisfies only the happy path is not done. Treat "I'll add accessibility/error states later" as a prohibited sentence.

---

## 2. THE EXPLICIT AI-SLOP BAN MATRIX

Every row below is a hard constraint. The "Forbidden" column names a pattern you must never produce. The "Mandatory Replacement" column is not optional flavor — it is the required substitute.

### 2.1 Compositional Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Generic 3-card "Feature" grid (icon, heading, one sentence, repeated ×3) | Content expressed as a definition list, a numbered index, or unequal-span packing modules sized by actual content weight — never identical repeating cards |
| A "numbered index" that is secretly the same card grid — N equal-width boxes, each individually bordered, with a numeral swapped in for the icon | A genuine numbered index has unequal emphasis across items, or is a single continuous list separated by designed print marks — not N isolated tiles of identical size |
| Directionless "Bento box" template with rounded tiles of arbitrary size | Modules sized by a stated ratio in `design-plan.md`, `rounded-none`, packed on the invisible grid. Separation by alignment, weight, or a declared print mark — not by shadow, radius, or a drawn column overlay |
| Symmetric, centered Hero block (headline, subhead, button, all stacked dead-center) | Hero anchored to a packing line — left, right, or off-axis because the typographic object occupies the format — with bleed only where the generating rule requires it |
| Lazy decorative whitespace (blanket `py-32` with no content justification) | Vertical rhythm from the baseline unit; every spacing value traceable to that unit or the modular scale |
| An unstyled dead gap produced by two sticky/adjacent columns of unequal content length | Equalize content, let the shorter column end where its content ends, or fill the remainder with a stated element. Any blank area larger than one baseline unit must be a decision in `design-plan.md` |
| A drawn CSS column grid as the look (visible 1px rules on every module "so the grid is legible") | Packing grid is real and invisible. Visible rules only as a designed print mark declared in the generating rule (registration, perforation, overprint edge) |
| A layout with no generating rule — perfectly obedient Swiss poster, or chaos with no packing | Name the generating rule in `design-plan.md` and apply it. Packing is felt through alignment. Rupture is the rule firing, not a decoration quota |
| Rupture with no underlying packing — elements placed by eyeball | Columns, gutters, margins, and baseline are real. Most content follows them. You can tell a rule is being broken because the packing was followed first — not because you drew it |
| Cute tilt: `3deg`, `-4deg`, CSS `rotate(45deg)` on layout, type, or cards | Sentences and words at `0deg` or `90deg`. The owner’s switcher arrows in `public/arrows/` may contain a 45° diagonal **inside the SVG path**. Do not CSS-rotate those glyphs. |

### 2.2 Typographic Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Center-aligned paragraphs longer than two lines | Left-aligned body text with a single, consistent optical axis |
| Default Inter / Roboto / Open Sans stack | Exactly one lineage family from Section 3, for mark, display, and body |
| Fontshare / fashion display-body pairs (Tanker, Cabinet Grotesk, Clash Grotesk, Space Grotesk + Neue Montreal as a pair) | Those faces are not this lineage. See Section 3 |
| Any serif, slab, or literary display face anywhere in the build | Prohibited. Grotesk-only, full stop |
| A logotype in a different family from the headline and body ("alien mark") | One family throughout, per Jetset's Whitney method |
| Flat type hierarchy with no size contrast between levels | Modular scale — every heading level is a defined power of the ratio |
| Orphans and widows in headlines | `text-wrap: balance` on all headings |
| Headlines that stay politely inside their container as labels on a layout | At least one word per page treated as a physical object: it occupies the format the way a building occupies a plot. Scale and crop are consequences, not the trick |
| Random monospace "tech" tags applied decoratively where they carry no data meaning | Monospace reserved strictly for genuine data, indices (`§ 01`, `REF. 402`), or timestamps |
| Duplicate-outline, RGB-split, chromatic-aberration, or "glitch" text-shadow on headlines | Flat, solid-fill type. Material rupture is overprint, grain, and occupancy — never a shader. If it looks like a hacking-movie interface, it has left this direction |

### 2.3 Copywriting, Micro-Content, and Data-Honesty Slop

| Forbidden | Mandatory Replacement |
|---|---|
| "Supercharge your workflow," "All-in-one platform," "Unleash the power of X" | Plain, declarative statements of what the product does, written with a dry, confident, occasionally blunt voice — closer to a manifesto than a pitch deck |
| Fake "Trusted by" logo strips with placeholder company marks | Omit the section entirely unless real, licensed logos with real relationships are supplied |
| Fake metric cards with invented percentages and green up-arrows (`+99.9%`) | Real, sourced data presented as a `<dl>` definition list or bordered table — or the section is omitted |
| Vague marketing adjectives stacked without specificity ("seamless," "powerful," "next-generation") | Either structural, reference-style labeling (`§ 01`, `[INDEX]`, `REF. 402`) or short, self-aware, plainly-stated copy — personality and wit are allowed; emptiness is not |
| Invented numbers presented as verified fact anywhere they appear | If no real backend or dataset exists, either (a) visibly label the content as sample data — a small `SAMPLE DATA` / `ILLUSTRATIVE` caption — or (b) rewrite the claim as a stated capability or range instead of a fake-precise point figure |
| Fabricated "live system status" chrome with no real feed | Wire it to a real source, remove it, or label it as a static/illustrative example |

**Rule of thumb:** the format a number is presented in has no bearing on whether it's honest. If it isn't real, sourced, or clearly labeled as illustrative, it doesn't ship.

### 2.4 Interaction and Motion Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Universal fade-in-up (`opacity: 0 → 1; translateY: 20px`) applied to every element on scroll | Motion per Section 6: short, physics-based, slightly overshooting. Never the same default tween on every element |
| `hover:scale-105` on cards | Instant or near-instant color inversion, or a switcher arrow that animates toward the action |
| Decorative Lottie animations or floating 3D objects with no informational function | Motion exists only to communicate state change, hierarchy, direction, or sequence |
| Perfectly smooth, symmetric ease-in-out on every transition | A defined spring/overshoot curve (Section 6) applied consistently on Dumbar/DEPT surfaces. Jetset-led surfaces stay still except for state feedback |
| Missing or invisible `:focus-visible` styles | Every interactive element has an explicit, high-contrast `:focus-visible` treatment using a locked chroma |

### 2.5 DOM and Architectural Slop

| Forbidden | Mandatory Replacement |
|---|---|
| Infinite nested `<div>` soup with no semantic meaning | Semantic HTML5 throughout: `<header>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<figure>`, `<figcaption>`, `<nav>`, `<dl>`, `<dt>`, `<dd>` |
| Hardcoded magic pixel values (`h-[540px]`, `mt-[37px]`) | Intrinsic, fluid CSS: `clamp()`, `min()`, `max()`, CSS Grid packing, values from the baseline unit or modular scale |
| Reliance on soft, blurred `box-shadow` for depth | Depth through `1px solid` designed print marks, flat color blocking, or hard offset shadows (`2px 2px 0 currentColor`) with zero blur. Do not default to drawing the column grid |
| `rounded-2xl` / `rounded-3xl` applied by default | `rounded-none` as the unconditional default |
| Decorative icon fonts or icon-in-a-circle motifs used as filler | Switcher arrows from `public/arrows/` as wayfinding or as a large compositional object — never Lucide chevrons, never a circular well |
| Ribbon, sash, or pennant "badge" shapes, and emoji used as iconography | Where a glyph is needed, use a switcher arrow from `public/arrows/` or a rule, never a system emoji |
| Clean stock photograph with an accent duotone as the default "Dutch" image | Print grain: halftone, CMYK blow-up, silkscreen one ink over a photo, overprint, or type-as-dot. Crop into the packing grid. See Section 5.5 |

---

## 3. TYPOGRAPHIC SYSTEM — ONE LINEAGE FAMILY (GROTESK-ONLY)

Serif and literary display faces are prohibited without exception. You may use **exactly one** of the following lineage families per project, for **mark, display, and body**. Mixing two families so the logotype behaves as an alien element is prohibited. Selecting Fontshare fashion pairings is prohibited.

1. **Helvetica / Neue Haas Grotesk** — Jetset dialect. Default lineage choice unless the brief gives a conceptual reason to leave it. One family for the wordmark, headlines, and text (Whitney method).
2. **Univers** — SMCS, PTT, historic NS lineage. One family for all roles.
3. **Futura** — only when the concept requires the mark to be embedded in the face (Cent Quatre / 104 method). Not a decoration.
4. **A single custom or condensed grotesk specified as the identity system face** — Dumbar NS Sans pattern: commissioned or licensed, named in `design-plan.md`. Not a display face paired with a different body face.

**Web hosting:** a licensed cut, locally hosted, subsetted, `font-display: swap`, metric-matched fallbacks. A substitute cut is allowed only if `design-plan.md` names which lineage choice it stands in for. A substitute is not a fifth direction.

### Typographic rules (apply regardless of family)

- **One family.** Weight and size make hierarchy. A second family is not a hierarchy.
- **Scale**: Major Third (1.250) or Perfect Fourth (1.333). Declare the choice in `design-plan.md`.
- **Display**: `letter-spacing: -0.03em` to `-0.05em`; `line-height: 0.9` to `1.05`. At least one word per page occupies the format as an object — large enough to crop against the viewport or a packing line because of scale, not because a tilt was applied.
- **Body**: `line-height: 1.5` to `1.7`; measure 55–75 characters, via `max-w-prose` or `max-w-[65ch]`. Body is always `0deg`.
- **Headings**: `text-wrap: balance`. **Paragraphs**: `text-wrap: pretty`.
- **90° type** is architectural: a word **or a sentence** set as a built object (spine, facade, a column of language). Combine it with field inversion — that pair is the dynamics. It is not a gimmick on a running body paragraph meant to be read at `0deg`.
- **Numerals and structural indices** may use the family's tabular-lining figures. A separate monospace is not required unless the project displays code or tabular data.

---

## 4. MICRO-PALETTE — INVERSION PAIR + PRINT EMPHASIS

This direction uses a **tiny locked palette**, not a Tailwind accent menu. Until `design-plan.md` is `LOCKED`, only the inversion pair and structural gray exist in code. Absolute `#000000` and RGB `#FFFFFF` are not the fields. Unprinted paper is off-white. Ink is near-black.

### 4.1 Core — inversion pair (fixed roles; hexes stubbed, refined at lock)

The engine is **field inversion**. Off-white type on a near-black field, then the next major section near-black type on an off-white field. That flip is the dynamics. Emphasis chromas sit on those fields as spot ink. Do not flatten a page onto one digital void (`#000` on `#FFF`) and call it Dutch.

| Token | Stub hex (before lock) | Role |
|---|---|---|
| Near-black | `#141414` | Ink. Inverted field. Not `#000000` (OLED void). |
| Off-white | `#F3F3EE` | Unprinted paper. Inverted field. Not `#FFFFFF`. Not Gen-AI cream `#F2F0EA`. |
| Structural Gray | `#E5E5E5` | Disabled borders, muted secondary text, optional print-mark rules. Never a drawn column overlay. Never interactive |

At lock, the pair may shift slightly warmer or cooler with the paper. It may not become `#000000` / `#FFFFFF`, and it may not become the Gen-AI cream hexes.

### 4.2 Emphasis chromas — at most two, from this family, after lock

Do **not** choose from Signal Red / Cobalt / Circuit Orange. Do **not** default to a Jetset “red + blue” kit. When they emphasize, both studios reach for **print** chromas in this family:

| Name | Character | Not |
|---|---|---|
| Soft red | Meka crvena — ink red, slightly warm, not fluorescent | `#FF2A00` Signal Red |
| Kiwi | Yellow-green, tart, print | Neon mint, lime UI |
| Dark yellow | Cadmium / ochre-dark, Dumbar train yellow in that register | Lemon, gold gradient |
| Orange | Print orange, police-stripe cousin | `#FF6600` Circuit Orange |
| Grass green | Trava — PTT-telecom cousin, pigment green | Neon green, success-badge green |

Lock **at most two** of these as emphasis. The rest stay unused. They are for stress, not for painting the whole site. Inversion of near-black / off-white does the structural work; these inks punctuate.

**Rules:**

- At most two emphasis chromas. A third is a fail.
- Hexes are print-like, named in `design-plan.md`. Not Tailwind 500 defaults, not the retired neon menu.
- Dark/light variants of a locked chroma are the same hue at fixed values for UI states. They are not extra chromas.
- Structural gray is not a chroma. If gray text is clickable, gray was the wrong choice.
- Focus rings and primary actions use inversion (near-black ↔ off-white) or a locked emphasis chroma. Do not invent a CTA hue outside the family.

### 4.3 Field inversion (mandatory on expressive pages)

- Adjacent major sections **flip the field**: off-white on near-black, then near-black on off-white.
- 90° type rides those fields: a word or sentence as an object against the inverted ground.
- `quiet` surfaces (forms, auth, payment, privacy, destructive actions) stay on **one** field — typically off-white inked in near-black — so inversion never becomes theater on a task.
- Primary CTA: near-black field + off-white text, inverting to the other field or to a locked emphasis chroma on hover.
- Focus: 2px solid outline in a locked emphasis chroma if one exists, else currentColor, 2px offset.

---

## 5. PACKING GRID, ANGLE LOCK, WORDS, RUPTURE, GRAIN

### 5.1 The packing grid (discipline layer)

- Strict column counts (commonly 6, 8, or 12), gutters, margins, baseline — declared once in `design-plan.md`. Most content follows this packing.
- **Invisible by default.** Alignment is felt. Empty off-white is paper.
- `rounded-none` throughout.
- Mathematical repetition where content genuinely repeats — never forced onto unequal weight.
- Visible 1px rules are **not** how you prove you have a grid. They are allowed only as a designed print mark named in the generating rule.

### 5.2 Angle lock

| What | Legal angles |
|---|---|
| Sentences, words, letters as objects | `0deg` or `90deg` only. A sentence at 90° is legal when it is an object on an inverted field. Running body copy for reading stays `0deg`. |
| Turning the format itself (Jetset four-sided letterhead) | `180deg` by flipping the sheet/viewport, not by skewing a paragraph |
| `45deg` as CSS/layout rotate, striping, stamps, tilted cards (`3deg`, `-4deg`, `6deg`) | Forbidden. The owner’s switcher arrows in `public/arrows/` are the only 45° geometry, and it lives in the SVG path. |

### 5.3 Words as objects (Jetset — mandatory)

At least one typographic object per page **is** the composition: the word or sentence occupies the format. Same family as the rest of the text. Not a large label sitting on a layout with a badge beside it. Place it on an inverted field (off-white on near-black, or the reverse). Nesting, stacking, occupancy, a frame the word lives in — those are the methods. Cropping the viewport is a consequence of scale.

### 5.4 Generating rupture (not a chevron quota)

Every project declares **one generating rule** in `design-plan.md`. Underneath it, expressive pages use **field inversion** as the default rhythm: off-white on near-black, then near-black on off-white, with 90° type riding those fields. Rupture is the named rule firing on top of that rhythm — not a chevron quota.

Examples of the *kind* of rule (do not copy as decoration):

- A frame that responds to what sits in it.
- A square/block system that restamps across surfaces.
- A word or sentence packed until it becomes an object on the inverted field.

Switcher arrows from `public/arrows/` are the wayfinding (see `design/chevron-system.md`). They may be large enough to be the composition. They are **not** required once per major section. Collage and silkscreen on images are Dumbar tools, used when the rule needs them — not sprinkled. Classic measles-as-unmotivated-decoration is forbidden; Dumbar already forbade their own cliché.

The rupture is never applied uniformly across every element. It is applied at planned moments against packing that was followed, so the violation reads as a decision.

### 5.5 Image and print grain

When photography or raster is used, at least one instance on the page must show **print materiality**:

- Halftone / tačkasti raster
- CMYK blow-up until grain is the picture (Jetset Blow-Up method)
- Silkscreen: one ink over a full-color photo
- Overprint, fold, perforate, tear as graphic facts (even when simulated in CSS/SVG)
- Type-as-dot (contemporary Dumbar / Sinfonietta method)

Forbidden as the default: an uncropped stock photo in a rectangle with a polite accent duotone. Still forbidden: RGB-split glitch shaders.

---

## 6. MOTION PHYSICS AND INTERACTIONS

There is one motion language for **Dumbar/DEPT surfaces**: physics-based, short, willing to overshoot. This is not Jetset. Jetset-led compositions stay still except for UI state feedback (hover inversion, focus). Do not animate every headline with a spring because this section exists.

- **Duration**: 150ms–400ms for most UI transitions. Larger compositional reveals may run up to 600ms on Dumbar/DEPT surfaces only, still with overshoot, not a slow expo-out.
- **Easing**: spring/overshoot. Use a genuine spring or `cubic-bezier(0.34, 1.56, 0.64, 1)`. Declare once in `design-plan.md`.
- **Dynamics**:
  - Hover and active states use instant or near-instant color inversion rather than a fade or a scale.
  - Switcher arrows (`public/arrows/`) animate along their implied axis, never in place, never CSS-rotated.
  - Text or image reveals, when used, use a `clip-path` or `overflow-hidden` wrapper that snaps open along a packing line or a **legal** angle (`0` / `90`) — not along a 3° or 45° token.
  - Loading and counting states use tabular-figure counters in discrete steps.
  - Intentional small asynchrony is allowed; corporate-smooth choreography is not.

---

## 7. RESOLUTION MATRIX — DESIGN DILEMMAS AND MANDATED SOLUTIONS

| Dilemma | Mandated Solution |
|---|---|
| How do I visually separate blocks without drop shadows or floating cards? | Flip the field. Packing, weight, or a designed print mark. Not a drawn 12-column overlay |
| I want two accent colors for two CTA priorities | Priority is inversion and weight, not a third hue. At most two emphasis chromas from the print family (soft red, kiwi, dark yellow, orange, grass green) |
| The page feels flat even with a packing grid | Invert the next major section and put a 90° word or sentence on that field |
| How do I create hierarchy without icons in colored circles? | Typographic numbering, weight contrast in the same family, a word-as-object |
| How do I signal interactivity on hover without `scale-105`? | Instant inversion, or a switcher arrow that translates along its axis and springs back |
| How do I add interest to a list without repeating identical cards? | Vary column span by content weight; apply the generating rule once, not a 3° badge on every row |
| How do I show data/metrics without fake percentage cards? | A `<dl>` or bordered table using tabular figures, sourced and labeled |
| How do I indicate loading without a generic spinner? | A tabular counting indicator, or a horizontal rule that fills along a packing line in a locked chroma |
| I want two accent colors for two CTA priorities | Priority is inversion and weight, not a third hue. At most two emphasis chromas from the print family |
| How do I make a photo feel considered? | Grain, silkscreen, overprint, crop into packing. Not clean stock + duotone |
| The grid doesn't show, so how do they know I used one? | They feel alignment. If you need to prove it with lines, you have left Jetset and entered Swiss |

---

## 8. TAILWIND / CSS CONFIGURATION TOKENS

Use the following as the literal starting configuration. Extend it only with values derived from the modular scale or baseline unit in `design-plan.md`. Chromas are empty until lock. Do not wire the retired Signal / Cobalt / Circuit menu.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#141414',
        white: '#F3F3EE',
        structural: '#E5E5E5',
        // After lock: at most two chromas, hexes from design-plan.md
        // 'chroma-a': { DEFAULT: '#…', dark: '#…', light: '#…' },
        // 'chroma-b': { DEFAULT: '#…', dark: '#…', light: '#…' },
      },
      fontFamily: {
        // After lock: ONE lineage family for mark, display, and body
        grotesk: ['/* locked cut */', 'sans-serif'],
      },
      fontSize: {
        'step--1': 'clamp(0.8rem, 0.77rem + 0.15vw, 0.9rem)',
        'step-0':  'clamp(1rem, 0.96rem + 0.2vw, 1.125rem)',
        'step-1':  'clamp(1.25rem, 1.19rem + 0.3vw, 1.4rem)',
        'step-2':  'clamp(1.563rem, 1.47rem + 0.45vw, 1.75rem)',
        'step-3':  'clamp(1.953rem, 1.82rem + 0.65vw, 2.25rem)',
        'step-4':  'clamp(2.441rem, 2.25rem + 0.95vw, 3rem)',
        'step-5':  'clamp(3.052rem, 2.78rem + 1.35vw, 4rem)',
        'step-object': 'clamp(3.5rem, 2.5rem + 8vw, 9rem)',
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
        0: '0deg',
        90: '90deg',
        180: '180deg',
      },
      transitionDuration: {
        snap: '180ms',
        spring: '320ms',
      },
      transitionTimingFunction: {
        overshoot: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      spacing: {
        unit: '8px',
      },
    },
  },
};
```

```css
:root {
  --black: #141414;
  --white: #F3F3EE;
  --structural: #E5E5E5;

  /* After lock only — at most two chromas */
  /* --chroma-a: …; --chroma-a-dark: …; --chroma-a-light: …; */
  /* --chroma-b: …; --chroma-b-dark: …; --chroma-b-light: …; */

  --duration-snap: 180ms;
  --duration-spring: 320ms;
  --ease-overshoot: cubic-bezier(0.34, 1.56, 0.64, 1);

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
  outline: 2px solid var(--chroma-a, var(--black));
  outline-offset: 2px;
}

.type-90 {
  writing-mode: vertical-rl;
  transform: rotate(0deg); /* orientation via writing-mode, not cute tilt */
}

.switcher-hover {
  transition: transform var(--duration-spring) var(--ease-overshoot);
}
.switcher-hover:hover {
  transform: translateX(0.5rem);
}
```

---

## ENFORCEMENT

Before marking any task complete, verify against this checklist:

- [ ] `design-plan.md` names the one lineage family, the inversion pair, ≤2 emphasis chromas from the print family, packing grid, angle lock, field inversion map, generating rule, motion, states, data honesty.
- [ ] No serif or literary display face. No Fontshare fashion pair. No alien logotype family.
- [ ] Fields are near-black / off-white, not `#000000` / `#FFFFFF`. Gen-AI cream hexes absent. Retired neon menu absent.
- [ ] At most two emphasis chromas, from soft red / kiwi / dark yellow / orange / grass green.
- [ ] Packing grid is real and invisible by default. No drawn column overlay unless the generating rule names a print mark.
- [ ] Expressive pages invert adjacent major sections. Quiet stays on one field.
- [ ] Type and object-sentences are `0deg` or `90deg`. 90° rides inverted fields. No CSS `45deg`. Switcher arrows from `public/arrows/` only.
- [ ] At least one word- or sentence-as-object per page, on an inverted field. Same family as body.
- [ ] Generating rule is applied; switcher arrows are not a per-section quota.
- [ ] If photography/raster is used, print grain or silkscreen/overprint is present. No default clean duotone stock.
- [ ] Every numbered-index section was checked against its card-grid twin.
- [ ] Every number is sourced or labelled `SAMPLE DATA`.
- [ ] No headline uses a duplicate-outline/RGB-split/glitch text-shadow.
- [ ] No ribbon/sash/pennant badges or emoji-as-icon.
- [ ] Adjacent columns of unequal length have no unplanned dead gaps.
- [ ] Gray is structural or muted secondary text — never clickable.
- [ ] No pattern from Section 2's "Forbidden" columns appears.
- [ ] Every interactive element has `:focus-visible` in a locked chroma (or black, pre-lock).
- [ ] Every component is complete per the No-Cripple-MVP Law.
- [ ] Motion uses the declared spring only on Dumbar/DEPT surfaces and for state feedback. No mixed easing. No spring theater on Jetset-led print compositions.

If any box is unchecked, the work is not finished — return to the relevant section and correct it before presenting the result.
