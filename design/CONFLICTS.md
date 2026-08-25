# Conflict resolution

**Precedence:** Dutch Design wins **form**. Generation AI kit wins **behavior and compliance**. Neither file is optional.

Read this before writing any page, component, token, or copy.

## Stack

| Layer | Source | Portable? |
|---|---|---|
| Visual identity (type faces, palette values, radius, grid, rupture, motion curve) | Dutch Design | Project-locked after `design-plan.md` |
| Semantic roles (canvas, ink, action, context, intensity modes, provenance, AI states) | Generation AI kit | Names stay; values map onto Dutch tokens |
| Accessibility floor | Generation AI kit §17 | WCAG **2.2 AA** (stricter than Dutch 2.1) |
| Performance floor | Generation AI kit §18 + Astro islands | LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 |
| Copy on brand surfaces | Dutch §2.3 | Dry, declarative, data-honest |
| Copy on UI chrome, forms, AI, confirmations | Generation AI kit §13, §16 | Verbs for actions, recovery, no dark patterns |

## Who wins

| Concern | Dutch | Generation AI kit | Decision |
|---|---|---|---|
| Typefaces | One lineage grotesk family (Helvetica/Neue Haas Grotesk, Univers, Futura, or a named system face) for mark, display, and body. No serif. | Interface / Voice / Evidence roles. Reference: Inter, Source Serif 4, IBM Plex Mono. | **Dutch family.** Map Voice / Interface / Evidence onto weights of that one family. Monospace only for real code or tabular data. |
| Color values | Near-black `#141414` / off-white `#F3F3EE` inversion pair + at most two print emphasis chromas (soft red, kiwi, dark yellow, orange, grass green). | Richer reference theme including cream canvas and a second “context” blue. | **Dutch values.** Map Gen-AI role *names* onto the inversion pair. Never ship `#F2F0EA` cream, `#000000`/`#FFFFFF` as the fields, Inter, purple, or a third chroma. |
| Radius | `rounded-none` unconditional. | `0 / 4 / 12 / 999`. | **Dutch.** Controls stay square. No pills. |
| Motion curve | Spring / overshoot `cubic-bezier(0.34, 1.56, 0.64, 1)`. | `ease-ui` / intensity modes / reduced motion. | **Dutch curve** in `expressive` and `immersive`. **Gen-AI intensity + `prefers-reduced-motion`** always. In `quiet`, spring is for state feedback only, not rupture theater. |
| Grid / rupture | Invisible packing. Field inversion + 90° type as dynamics. Generating rule on top. No 45° marks unless the owner asks. | Stable structure, local expression. | Aligned. Inversion is expressive/immersive. Quiet stays on one field. Do not draw the grid. |
| Cards | Ban identical 3-card grids. | Ban card soup. | Aligned. Content objects, not cards. |
| Accessibility | WCAG 2.1 AA. | WCAG 2.2 AA, 44×44 targets. | **2.2 AA.** |
| Fake metrics / urgency | Banned. | Banned. | Aligned. Label illustrative numbers `SAMPLE DATA`. |
| AI look | Grotesk, no glitch/RGB-split. | AI is a capability, not purple glow. | Aligned. No sparkles, orbs, chatbot-only nav. |

## Overrides of adjunct skills

Adjunct skills in this repo were extracted surgically. These defaults from elsewhere are **void** here:

- “No bounce / elastic easing” → Dutch **requires** a slight overshoot on Dumbar/DEPT surfaces and for UI state feedback. Jetset-led compositions stay still.
- “Tinted neutrals / cream paper” → Dutch uses **off-white** (`#F3F3EE` stub) and **near-black** (`#141414`), not Gen-AI cream `#F2F0EA` and not `#000`/`#FFF` digital void.
- “Space Grotesk is a banned personality default” → remains banned as a fashion pair. Lineage faces only (Section 3 of the Dutch source).
- shadcn / pill UI / Inter stacks → not this project.

## Locked after brief

Until `design-plan.md` status is `LOCKED`, do not choose a type family, emphasis chroma, generating rule, or baseline unit in production code. Token files may contain the inversion pair (near-black / off-white) and structural gray only. Leaks in `src/` and `public/` (Inter, Gen-AI cream hexes, radius, retired neon accent menu, cute 3° tilt, a sketched hero before lock) fail `npm run fence` and CI.
