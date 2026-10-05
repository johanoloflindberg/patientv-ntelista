# Designspecifikation — PhysioQueue

## Stack-baseline (låsta val)

| Lager | Val | Version | Motivering |
| --- | --- | --- | --- |
| Runtime | Node.js | ≥ 20 (CI: 22) | Vite 7 + moderna ESM-verktyg |
| UI | React + TypeScript (strict) | React 18.2 / TS 5.9 | Befintlig Anima-export |
| App-shell | **Vite** (ej Next.js) | Vite 7.3 | Package-build + screen-graph kräver Vite |
| Routing | React Router DOM | 6.30 | Behåller Anima-route-id:n; TanStack Router flaggas som nästa steg |
| Styling | Tailwind CSS + Shadcn/ui tokens | Tailwind 3.4 | CSS-variabler, ej "Shadcn CSS" |
| Server-state | TanStack Query | 5.66 | Cache, retry, invalidation |
| Tabeller | TanStack Table | 8.21 | Sortering/filter utan UI-lock-in |
| Formulär | react-hook-form + Zod | 7.54 / 3.24 | Schema delat klient/server |
| Tema | next-themes | 0.4.4 | Class-strategi fungerar utan Next.js |
| Motion | framer-motion | 11.18 | Page enter + reduced-motion (12.x bröt Vite-build) |
| Katalog | Storybook | 9.1 | Komponentdokumentation + a11y-addon |

## Färgtokens (light / dark)

Alla värden är HSL-kanaler (`hsl(var(--token))`).

| Token | Light | Dark | Användning |
| --- | --- | --- | --- |
| `--background` | `210 40% 98%` | `224 47% 6%` | Sidbakgrund |
| `--foreground` | `222 47% 11%` | `210 40% 96%` | Primär text |
| `--card` | `0 0% 100%` | `222 47% 9%` | Ytor |
| `--primary` | `221 83% 53%` | `217 91% 60%` | CTA / länkar |
| `--muted` | `210 40% 96%` | `217 33% 14%` | Subtila ytor |
| `--muted-foreground` | `215 16% 47%` | `215 20% 65%` | Sekundär text |
| `--accent` | `214 95% 93%` | `217 33% 17%` | Aktiv nav |
| `--destructive` | `0 72% 51%` | `0 63% 45%` | Fel / förfallen |
| `--success` / `--warning` | kliniska statusfärger | samma semantik | Badge/Alert |
| `--ring` | = primary | = primary | Focus |

Källa: `src/package/styles.css`.

## Typografi

Fluid skala via `clamp()`:

- caption → body-sm → body → heading-m/l/xl → display
- Radhöjd: tight 1.2 / snug 1.35 / normal 1.5
- Font: Inter (befintligt designsystem; behålls medvetet)

## Spacing

4/8-px-bas: `--space-1` … `--space-12` (0.25rem → 3rem). Komponenter använder Tailwind `gap-*` / `p-*` som mappar till samma bas.

## Radier & elevation

- `--radius: 0.625rem`
- `--shadow-sm|md|lg` som elevation-system (`shadow-elevation-*`)

## Brytpunkter

| Bredd | Beteende |
| --- | --- |
| 320px | Enkolumn, header wrappar, sidebar dold |
| 768px | Sidebar synlig, två kolumner där relevant |
| 1024px | Dashboard-grid stabil |
| 1440px | Full klinikdesktop (originalbredd) |
| 2560px | Innehåll maxas via padding, ingen stretch-artefakt |

## State management

| State | Plats | Exempel |
| --- | --- | --- |
| UI | `useState` / `useTransition` | sortering, busy |
| Delbart | URL (`useSearchParams`) | `?status=active` |
| Server | TanStack Query | dashboard, waitlist |
| Global store | **ej** Zustand i v1 | ingen cross-route client cache behövs |

## Query-cache

- `staleTime`: 30s
- `gcTime`: 5 min
- `retry`: 1 (queries), 0 (mutations)
- Invalidation: efter `createPatient` → `waitlist` + `dashboard`
