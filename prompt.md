# Session prompt

Owner-facing. Serbian ekavian around the paste block. The block itself is English so the agent lands in the same register as `HANDOFF.md`, `AGENTS.md`, and the two law files.

Copy **one** block. Fill only the marked fields. Do not paste the Dutch or Generation AI law into the chat — the repo already is the law.

Remote: https://github.com/ivicajovanovic/leteci-holandjanin  
Local: `/home/ivica1979/projekti/leteci-holandjanin` (open this folder, not `cijenik`)

---

## How to use

1. Open this repo in Cursor.
2. New agent chat.
3. Paste **Default start** below.
4. Replace every `«…»` field. Delete unused optional blocks.
5. Send.

If you only write a task without this wrapper, a generic agent will sketch a hero, pick a font, and invent a third aesthetic. The wrapper exists to stop that.

Speak to the agent in ekavian. It answers you in ekavian. It writes law, skills, templates, and code comments in English.

---

## Default start

Paste this. Keep the fences. Fill the fields.

```text
You are an LLM coding agent in Leteći Holanđanin (leteci-holandjanin).

This is a design-led website operating system, not a finished product site and not a UI kit. Three layers, all required:

1. Form (law): Dutch Design — Experimental Jetset × Studio Dumbar. File: design/sources/anti-slop-dutch-design.md
2. Behavior (law): Generation AI Controlled Intensity. File: design/sources/gen-ai-web-design-style-kit.md
3. Implementation: Astro 7, TypeScript strict, Tailwind 4. Zero client JS by default. Islands only in src/components/islands/ with a written reason.

When the two laws disagree: Dutch wins form. Generation AI kit wins behavior and compliance. Table: design/CONFLICTS.md. Do not invent a third aesthetic. Do not translate or paraphrase the two source law files.

START
1. Read HANDOFF.md first. Then AGENTS.md. Then design-plan.md.
2. If design-plan.md is not LOCKED, freeze visual identity. Allowed: design/, docs/, scripts/, .github/, .cursor/, agent markdown, token stubs, RootLayout.astro, src/pages/index.astro, content schemas/holding entries. Forbidden: any .astro or island under src/components/, any extra route under src/pages/. A sketched hero fails CI.
3. Follow .cursor/skills/design-led-build/SKILL.md for any visible UI. Other skills as the task requires (manifesto-copy, astro-islands-cwv, a11y-wcag-22, chevron-svg).
4. Address me in Serbian ekavian. Law, skills, templates, and code comments stay English. Product locale only from a LOCKED design-plan.md. If that locale is Serbian: ekavian only.

LOCKED FORM (do not revert)
- Invisible packing grid. Do not draw 1px CSS column rules.
- Type 0° and 90° only. A word or a sentence as an object on an inverted field. No 3° / −4°. No CSS rotate(45deg) on layout, type, cards, or glyphs.
- Exactly one lineage grotesk for mark + display + body. No Fontshare display/body pairs.
- Fields: near-black #141414 / off-white #F3F3EE / structural #E5E5E5. Not #000, not #FFF, not Gen-AI cream #F2F0EA.
- Expressive pages: adjacent major sections flip the field, combined with 90° type. Quiet (forms, auth, payment): one field only.
- Emphasis chromas after lock, at most two, from: soft red, kiwi, dark yellow, orange, grass green. Not Signal Red / Cobalt / Circuit Orange.
- Print grain on photos. Switcher arrows only from public/arrows/ (diagonal lives in the SVG path).
- Golden PNGs public/dutch-1.png, dutch-2.png, dutch-3.png: look with vision when they exist. Do not invent a substitute canon.

HARD GATES
- No-Cripple-MVP: default, hover, focus, focus-visible, active, disabled, loading, error, empty on first pass.
- rounded-none. Semantic HTML. Numbers sourced or labelled SAMPLE DATA.
- npm run fence is law in code. Before done on UI: docs/checklists/design-preflight.md, dutch-enforcement.md, a11y-wcag-22.md, cwv-astro.md.
- Do not commit unless I ask. Do not push unless I ask. Do not leave a leftover process on port 4321.

THIS SESSION
Mode: «CONTINUE | LOCK_PLAN | BUILD_PAGE | SYSTEM_ONLY»
Task: «one concrete outcome»
Done when: «acceptance, in one sentence»
Out of scope: «what not to touch»

«optional SITE BRIEF block — paste only in LOCK_PLAN mode, see below»

«optional PAGE block — paste only in BUILD_PAGE mode, see below»
```

---

## Mode: what to put in `THIS SESSION`

Use **one** mode. The rest of the prompt stays the same.

### `CONTINUE`

Plan still `AWAITING_BRIEF`. Work that does not pick identity.

```text
Mode: CONTINUE
Task: «e.g. tighten HANDOFF after CI, add a checklist item, document arrows»
Done when: «fence still green, no production UI»
Out of scope: type family, chromas, routes, components, inventing dutch-*.png
```

### `LOCK_PLAN`

The site brief has arrived. First action is lock, not pages.

Paste this as the optional SITE BRIEF block, filled:

```text
SITE BRIEF
- Domain:
- Primary user decision:
- Audience:
- Product locale: en | sr (ekavian) | other (one only)
- Which pole leads form: Jetset | Dumbar
- Type family (exactly one): Helvetica/Neue Haas Grotesk | Univers | Futura | named custom grotesk: ________
- Emphasis chromas (≤2): soft red / kiwi / dark yellow / orange / grass green
- Packing: columns, gutter, margin, baseline unit
- Generating rule (one system that produces rupture — not a chevron quota):
- Field-inversion map (which expressive sections flip):
- Type math: ratio Major Third 1.250 | Perfect Fourth 1.333; base size
- Motion: snap duration, spring duration (spring only on Dumbar/DEPT surfaces and state feedback)
- Data honesty: what is real vs SAMPLE DATA

Then: fill and lock design-plan.md from design/templates/design-plan.md. Do not add production UI in the same turn unless I explicitly say lock then build.
```

### `BUILD_PAGE`

Only after `design-plan.md` is `LOCKED`.

```text
Mode: BUILD_PAGE
Task: implement route «/…» from a page brief
Done when: four checklists pass, fence green, states complete, matches locked plan and dutch-*.png if present

PAGE
- Route:
- Dominant intention (one):
- Intensity: quiet | expressive | immersive
- Primary action:
- Word- or sentence-as-object:
- Field inversion (which sections flip):
- Generating rule on this page:
- Switcher arrow (public/arrows/ file + referent, or page-scale object):
- Content source:
- Island needed? no | yes, reason:
```

Write or update `docs/specs/` from `design/templates/page-brief.md` **before** HTML.

### `SYSTEM_ONLY`

Fence, CI, tokens stubs, skills, arrows, holding page — freeze holds.

```text
Mode: SYSTEM_ONLY
Task: «e.g. regenerate package-lock, bump Actions, rebuild public/arrows»
Done when: npm run ci is green locally (and GitHub Actions if I asked to push)
Out of scope: locking the plan, production components
```

---

## After the reply

If the work is right and you want it on GitHub, say so in one line, in ekavian:

```text
Spremi i gurni na GitHub.
```

Do not put “commit and push” inside the start prompt by default. Push is an explicit later turn.

---

## What this prompt is not

- Not a rewrite of `design/sources/`. If a session needs the law, it reads the files.
- Not a third aesthetic. If you catch yourself adding “make it more editorial / Swiss / shadcn”, delete that sentence.
- Not a product locale. Until lock, do not assume `hr`, `sr`, or `en` on the site.
- Not permission to sketch. Freeze is enforced by `npm run fence` and Actions, not by tone.
