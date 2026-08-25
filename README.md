# Leteći Holanđanin

Dizajn-vođeni veb sajt. Još nije brendiran proizvod: ovo je **operativni sistem** po kome se sajt gradi — vizuelni zakon, pravila ponašanja, i Astro kostur — pre nego što stigne brif stranica.

**Status:** `design-plan.md` je `AWAITING_BRIEF`. Font, akcent i ruptura nisu izabrani. Produkcijski UI se ne piše dok plan nije `LOCKED`.

Repozitorijum: [ivicajovanovic/leteci-holandjanin](https://github.com/ivicajovanovic/leteci-holandjanin)

Za agenta (engleski): [`HANDOFF.md`](HANDOFF.md).

## Jezik

| Sloj | Jezik |
|---|---|
| Zakon, skillovi, šabloni, komentari u kodu | Engleski. Dva izvorna zakona se ne prevode. |
| Ovaj README | Srpski, **ekavica** |
| Copy na sajtu | Jedan locale, posle brifa. Ako je srpski: samo ekavica. |

---

## O čemu se radi

Ovo nije šablon, nije UI kit sa dugmadima, i nije „vibe coding“ folder. Tri sloja rade zajedno:

1. **Vizuelni zakon — Dutch Design** (Experimental Jetset × Studio Dumbar). Mreža je ulaznica, ruptura je poenta: grotesk tipografija, crno/belo + tačno jedan akcent, oštri uglovi, planirani prelazi preko kolona. Zabranjuje generički AI slop (Inter, serif, krem platno, identične kartice, `scale-105`, lažne metrike).
2. **Zakon ponašanja — Controlled Intensity** (Generation AI style kit). Jedna dominantna namera po kontekstu. Forme, plaćanje i dozvole ostaju `quiet`. AI je sposobnost, ne ljubičasti sjaj. WCAG 2.2 AA. Core Web Vitals. Bez lažne hitnosti.
3. **Implementacija — [Astro](https://astro.build)** 7, TypeScript, Tailwind 4. Podrazumevano nula klijentskog JavaScript-a. Ostrva (`client:*`) samo kad HTML/CSS ne mogu da obave interakciju.

Kad se prva dva zakona raziđu, forma pobeđuje Dutch, ponašanje i usklađenost pobeđuju Generation AI kit. Tabela je u [`design/CONFLICTS.md`](design/CONFLICTS.md).

Ime *Leteći Holanđanin* nije slučajno: vizuelni jezik je holandski dizajn; sajt treba da se kreće (mreža, ševroni, fizika prelaza), a ne da stoji kao korporativni plakat.

---

## Šta ovaj sistem obavezuje

Pre bilo kog produkcijskog HTML/CSS/komponente postoji **design plan** (`design-plan.md`). Zaključava:

- tačno jedan od četiri odobrena grotesk para
- tačno jedan akcent (signal crvena, kobalt, ili circuit narandžasta)
- kolone, gutere, baseline jedinicu
- matematiku tipa (`clamp`, modularna skala)
- strategiju rupture (ugao rotacije, bleed, ševroni)
- potpis pokreta (overshoot spring)
- mašine stanja za svaki interaktivni element
- izjavu o poštenju podataka (`SAMPLE DATA` ako broj nije izvor)

Komponenta nije gotova ako ima samo srećnu putanju. Prvi prolaz mora da pokrije hover, focus, disabled, loading, error, empty, tastaturu i smanjeni motion. To je No-Cripple-MVP.

---

## Tehnički okvir

| Deo | Izbor | Zašto |
|---|---|---|
| Framework | Astro 7 | Sadržaj i HTML prvo; JS je izuzetak |
| Jezik | TypeScript (strict) | Šeme kolekcija i props bez nagađanja |
| CSS | Tailwind 4 (`@theme` u CSS) | Tokeni iz design plana, ne magični pikseli |
| Kolekcije | `src/content/pages`, `src/content/copy` | Copy i stranice van komponente |
| A11y pod | WCAG 2.2 AA | Stroži od Dutch 2.1; 44×44 mete |
| Performanse | LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 | I expressive režim ima isti budžet |

Komponente:

- `src/components/primitives/` — dugme, pravilo, indeks, ševron (bez JS)
- `src/components/sections/` — sekcije stranice (bez JS)
- `src/components/islands/` — samo `client:*`, uz razlog u specifikaciji

---

## Agentski sloj

Kodiranje preko Cursor agenta nije opciono ukrašavanje. `AGENTS.md` i `.cursor/` teraju svaku sesiju da čita zakon pre koda:

| Kada | Šta |
|---|---|
| Bilo koji UI | `.cursor/skills/design-led-build/SKILL.md` |
| Naslovi, CTA, greške | `.cursor/skills/manifesto-copy/SKILL.md` |
| `.astro`, fontovi, slike | `.cursor/skills/astro-islands-cwv/SKILL.md` |
| Forme, fokus, dijalog | `.cursor/skills/a11y-wcag-22/SKILL.md` |
| Strelice / wayfinding | `.cursor/skills/chevron-svg/SKILL.md` |

Šabloni su u `design/templates/`. Checkliste pre „gotovo“ su u `docs/checklists/`.

---

## Struktura

```text
design/sources/     dva nepromenljiva zakona
design/             glas, intenzitet, ševron, provenance, konflikti
design-plan.md      katanac projekta (sada prazan)
docs/checklists/    a11y, CWV, preflight, Dutch enforcement
docs/specs/         brifovi stranica posle brifa sajta
src/pages/          rute
src/layouts/        RootLayout
src/styles/tokens/  crno / belo / sivo; akcent i tip otključani
src/content/        kolekcije
.cursor/            pravila i skillovi za agente
```

---

## Pokretanje

Potreban je Node ≥ 22.12.

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # astro check
npm run build    # dist/
npm run preview
```

---

## Sledeći korak

Pošalji brif sajta. Posle toga se `design-plan.md` zaključava, pa se tek onda grade stranice. Do tada tokeni smeju da nose samo crno, belo, strukturno sivo, kvadratne uglove i overshoot easing.
