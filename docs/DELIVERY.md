# Leverans — Shadcn/ui professionell uppgradering

## 1. Sammanfattning av analysen

- Anima-exporten hade rätt domänflöden men svag teknisk/designmässig hållbarhet.
- Hårdkodade layoutmått och hex-färger blockerade responsivitet och dark mode.
- Formulär saknade validering; data saknade loading/error-kontrakt.
- Duplicerad navigation ersattes med `AppShell`.
- Se `docs/ANALYSIS.md` och `docs/DESIGN_SPEC.md`.

## 2. Designspecifikation

Centraliserad i `src/package/styles.css` + `docs/DESIGN_SPEC.md`:

- Shadcn-tokens light/dark
- Fluid typografi, 4/8 spacing, elevation
- Brytpunkter 320→2560

## 3. Filstruktur (övergripande)

```
src/
  api/mock-data.ts
  app/providers/AppProviders.tsx
  components/layout/{AppShell,AppSidebar,AppHeader,ThemeToggle}.tsx
  components/feedback/{ErrorBoundary,EmptyState,QueryErrorState}.tsx
  features/{dashboard,waitlist}/
  schemas/patient.ts
  package/components/ui/*          # Shadcn primitives
  package/styles.css               # tokens
  screens/...                      # app views
docs/{ANALYSIS,DESIGN_SPEC,DELIVERY,ADR}/
.storybook/
.github/workflows/ci.yml
```

## 4. Före / Efter (mätvärden)

| Mått | Före | Efter | Verifiering |
| --- | --- | --- | --- |
| Design tokens (Shadcn-namn) | Delvis / oanvända i skärmar | Full light+dark i `styles.css` | Manuell + playground |
| Hårdkodad `min-w-[1440px]` på dashboard | Ja | Nej (fluid shell) | Responsiv manuell |
| Formulärvalidering Ny patient | Ingen | Zod + RHF + aria | `patient.test.ts` |
| Server-state | Inline arrays | TanStack Query | Network delay mock |
| Tabellkapabilitet | Statisk map | TanStack Table sort/filter | UI |
| Dark mode i app | Saknas | next-themes + toggle | ThemeToggle |
| Enhetstester | 0 | Button, EmptyState, schema | `npm test` |
| CI-gate | Saknas | typecheck+test+build | `.github/workflows/ci.yml` |
| Kontrast text/primary | Blandat | Primary på vit ≥ 4.5:1 (blue-600) | Design review |
| Bundle (JS gzip) | Ej mätt | ~193 kB gzip / 662 kB raw | `npm run build` |
| Lighthouse | Ej mätt | Mål ≥95 (ej kört i CI ännu) | Nästa steg |

## 5. Motivering av designval

| Förändring | Princip / lag |
| --- | --- |
| Gemensam AppShell | Consistency + Gestalt (common region) |
| Semantic tokens istället för hex | Single source of truth / theming |
| Primär CTA i header | Hick — minska val per viewport |
| Skeleton states | Perceived performance |
| Focus rings via `--ring` | WCAG 2.4.7 Focus Visible |
| `prefers-reduced-motion` | WCAG 2.3.3 Animation from Interactions |
| URL `?status=` | Shareable state / deep linking |

## 6. Antaganden

1. **Antagande:** Behåll Vite, migrera inte till Next.js. **Motivering:** Package-build + Anima screen-graph. **Påverkan:** Ingen RSC; SEO via `index.html` meta/JSON-LD.
2. **Antagande:** React Router behålls (ej TanStack Router i v1). **Motivering:** Lägre migrationsrisk. **Påverkan:** Loaders saknas; Query används istället.
3. **Antagande:** Mock-API räcker (ingen backend). **Motivering:** Scope är UI/arkitektur. **Påverkan:** Query pekar på `src/api/mock-data.ts`.
4. **Antagande:** Inter behålls. **Motivering:** Befintligt klinikdesignsystem. **Påverkan:** Avsteg från generella “undvik Inter”-heuristik för greenfield.
5. **Antagande:** Zustand behövs inte. **Motivering:** URL + Query täcker state. **Påverkan:** Ingen global client store.

## 7. Nästa steg (prioriterade)

1. **Lazy routes + `@next/bundle-analyzer`-motsvarighet (`rollup-plugin-visualizer`)** — medel insats; sänker initial bundle.
2. **Migrera kvarvarande patientdetalj-skärmar till AppShell + tokens** — medel–hög; tar bort sista hex-dupliceringen.
3. **Lighthouse CI + axe i Storybook test-runner** — medel; gör a11y/prestanda mätbara i PR.

## 8. Avgränsning

Medvetet **utanför scope**: riktig backend/databas, autentisering/autorisering, FHIR/journalintegration, e-post/SMS-utskick, produktions-Sentry-projekt, GDPR consent-banner implementation (endast hook-punkter), fullständig migrering av alla legacy-sektioner.

## 9. Internationella aspekter

- **i18n:** Medvetet uteslutet i v1 (UI redan på svenska). Förberedelse: copy i komponenter kan senare lyftas till dictionaries.
- **RTL:** Uteslutet (sv-SE LTR). Tokens/layout undviker spegel-antaganden där möjligt.
- **Datumformat:** ISO i formulär (`type="date"`); visningsdatum i mock är svenska strängar — lokaliseras när i18n införs.
