# Steg 1 — Analysfas (PhysioQueue / Anima-export)

## 1. Nulägesanalys

**Fungerar**
- Tydlig klinisk informationsarkitektur (dashboard, väntelista, patient, påminnelser)
- Delvis Shadcn/ui-primitives (Button, Card, Input, Table, Toggle)
- Package-gräns (`src/package` → `public-api`) och Component Playground

**Svagt**
- Anima-pixel-layout: `min-w-[1440px]`, fasta `h-[1000px]`, hårdkodade hex-färger
- Duplicerade sidebars per skärm utan gemensam navigering
- Formulär utan validering (defaultValue + Link som “submit”)
- Ingen server-state, loading/error/empty eller dark mode i appen
- Inter/Helvetica och råa `bg-blue-600` bryter mot token-systemet

**Saknas**
- Design tokens i Shadcn-namnkonvention för hela appen
- RHF+Zod, Query, Storybook-stories, CI, env-typer, ErrorBoundary

## 2. Identifierade problem (≥10)

1. **Tillgänglighet:** Sidebar-länkar är icke-semantiska `div` utan fokussroller.
2. **Hierarki:** Flera lokala “Badge”-komponenter konkurrerar med Shadcn Badge.
3. **Spacing:** Mix av px-värden (`py-[9px]`, `px-[30px]`) utan 4/8-skala.
4. **Typografi:** Fast 11/13/32px utan fluid `clamp()`.
5. **Kontrast:** Ljusblå text på ljus bakgrund i aktiva nav-states riskerar <4.5:1.
6. **Responsivitet:** `min-w-[1440px]` blockerar mobil (320–768).
7. **Prestanda:** Ingen code-splitting / lazy routes; stora skärmträd laddas alltid.
8. **Arkitektur:** Kopierade navigation-sektioner (5+ varianter).
9. **Formulär-UX:** Ingen validering eller `aria-invalid` (WCAG 3.3.1/3.3.2).
10. **Feedback:** Saknar skeleton/empty/error → förtroendetapp vid latens.
11. **Tema:** Package har dark tokens men appen tvingar light hex.
12. **Data:** Mock-arrayer inne i komponenter → svår testbarhet.

## 3. Prioriteringsmatris

| Åtgärd | Påverkan | Insats |
| --- | --- | --- |
| Centralisera tokens + ta bort hex | Hög | Medel |
| AppShell + gemensam nav | Hög | Medel |
| RHF+Zod på Ny patient | Hög | Medel |
| TanStack Query + skeletons | Hög | Medel |
| TanStack Table + URL-filter | Hög | Medel |
| Dark mode toggle (next-themes) | Medel | Låg |
| ErrorBoundary + QueryError | Medel | Låg |
| Storybook + tester + CI | Medel | Medel |
| Fluid typografi / elevation | Medel | Låg |
| Lazy routes / bundle analyzer | Låg | Medel |
| Full i18n/RTL | Låg | Hög |

## 4. Designsystem-gap

| Behov | Status före | Åtgärd |
| --- | --- | --- |
| Shadcn color tokens | Delvis i package | Utökad `styles.css` + clinical primary |
| Skeleton / Alert / Dialog / Separator | Saknas | Tillagda primitives |
| Badge-varianter (soft/accent/warning) | Saknas | CVA-utökning |
| Form field pattern | Saknas | Label + error + aria |
| Layout primitives | Saknas | AppShell / Header / Sidebar |

## 5. UX-flaskhalsar (kopplat till lagar)

- **Hick:** För många konkurrerande listor på dashboard utan tydlig primär CTA → förenklad header-CTA “+ Ny patient”.
- **Fitts:** Små textlänkar i tabell → större kö-länkar + tydlig focus-ring.
- **Miller:** Metrics 4 + listor → behåller chunking men tar bort lokal badge-brus.
- **Gestalt (proximity/similarity):** Gemensam shell gör att skärmar hör till samma produkt.

## 6. Teknisk skuld

- Duplicerad UI under `src/components/ui` och `src/package/components/ui`
- `any`-risk låg men defaultValue-forms saknar typer
- Route `/*` före specifika routes i original → catch-all kunde skugga (rättat)
- Saknad env-validering och ADR

## 7. Förbättringsplan (prioriterad)

1. Tokens + Tailwind semantic colors
2. AppShell / providers (theme, query, error)
3. Dashboard via Query + skeletons
4. Väntelista via Table + URL-state
5. Ny patient via RHF+Zod + mutation/invalidation
6. Storybook, tester, CI, dokumentation
