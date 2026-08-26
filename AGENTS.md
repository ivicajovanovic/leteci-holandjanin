# AGENTS

Start here after `HANDOFF.md`. Design-led Astro site. Two source files are law. Adjunct docs in `design/` are upgrades, not a third aesthetic.

## Language

- Law, skills, templates, code comments: **English**. Do not translate `design/sources/`.
- `README.md` and `prompt.md`: Serbian (ekavian), for the owner. The paste block in `prompt.md` is English.
- Product UI locale: locked in `design-plan.md`. Until then, do not assume `hr` / `sr` / `en`.
- Serbian product copy, if chosen: **ekavian only**. See `design/LANGUAGE.md`.

## Read order (every session that produces UI or copy)

1. `HANDOFF.md` — current freeze, what not to do
2. `design-plan.md` — if status is not `LOCKED`, do not implement visual identity. Scaffold and content architecture only.
3. `design/CONFLICTS.md`
4. `design/sources/anti-slop-dutch-design.md` (form)
5. `design/sources/gen-ai-web-design-style-kit.md` (behavior, a11y 2.2, CWV, AI, copy for chrome)
6. `design/voice.md`, `design/intensity-modes.md`, `design/chevron-system.md`, `design/image-treatment.md`, `design/motion-choreography.md`, `design/responsive-object.md`, `design/collage.md` as relevant
7. `public/dutch-1.png`, `public/dutch-2.png`, `public/dutch-3.png`

## Precedence

- Visual HTML/CSS/Astro/JSX → Dutch Design.
- Intensity modes, provenance, AI states, WCAG version, Core Web Vitals, anti-dark-pattern → Generation AI kit.
- Where both speak: Dutch wins form; Generation AI kit wins behavior and compliance.

## Hard gates

- No production component before a locked `design-plan.md`.
- No-Cripple-MVP: every state on first pass. No “add a11y later”.
- Astro default is zero client JS. Islands live in `src/components/islands/` and need a reason.
- `rounded-none`. Grotesk-only. One lineage family. Near-black / off-white inversion. ≤2 print emphasis chromas. Invisible packing. Type 0°/90°. No Inter, no serif, no Gen-AI cream, no purple AI glow, no 3° tilt.
- Numbers are sourced or labelled `SAMPLE DATA`.

## Skills

| When | Skill |
|---|---|
| Any UI build | `.cursor/skills/design-led-build/SKILL.md` |
| Page or UI copy | `.cursor/skills/manifesto-copy/SKILL.md` |
| `.astro` / islands / fonts / images | `.cursor/skills/astro-islands-cwv/SKILL.md` |
| Interactive elements | `.cursor/skills/a11y-wcag-22/SKILL.md` |
| Directional glyphs | `.cursor/skills/chevron-svg/SKILL.md` |

Templates: `design/templates/`. Checklists: `docs/checklists/`. Specs after brief: `docs/specs/`.

## Astro

Use background mode for the dev server:

```
astro dev --background
```

`astro dev stop` · `astro dev status` · `astro dev logs`

Docs: https://docs.astro.build
