# PhysioQueue

Klinisk patientväntelista byggd med **React 18 + TypeScript (strict)**, **Vite 7**, **Tailwind CSS** och **Shadcn/ui-komponenter** (CSS-variabler + CVA).

## Stack

| Paket | Version | Roll |
| --- | --- | --- |
| React / React DOM | ^18.2 | UI |
| TypeScript | 5.9.3 | Strict typing |
| Vite | 7.3.1 | Dev/build |
| Tailwind CSS | 3.4.16 | Utility styling |
| TanStack Query | 5.66.9 | Server-state |
| TanStack Table | 8.21.2 | Datatabeller |
| react-hook-form + Zod | 7.54 / 3.24 | Formulär + schema |
| next-themes | 0.4.4 | Dark mode (class) |
| framer-motion | 11.18.2 | Motion |
| Storybook | 9.1 | Komponentkatalog |
| Node | ≥20 (rekommenderat 22) | Runtime |

> **Antagande:** Vite behålls i stället för Next.js — se `docs/ADR/0001-keep-vite-react-router.md`.

## Kom igång

```bash
npm install
npm run dev
```

App: [http://localhost:5173/](http://localhost:5173/)  
Komponentkatalog (in-app): [/components](http://localhost:5173/components)

```bash
npm run storybook   # :6006
npm run test
npm run typecheck
npm run ci
```

## Arkitektur

- **Package boundary:** återanvändbara primitives i `src/package`, exporterade via `src/public-api.ts`
- **App shell:** `src/components/layout` (sidebar/header/theme)
- **Features:** hooks för dashboard/waitlist (`TanStack Query`)
- **Schemas:** `src/schemas` (Zod, delbara)
- **State:** lokal UI-state · URL för filter · Query för server-state · ingen Zustand i v1

Dokumentation:

- `docs/ANALYSIS.md` — analysfas
- `docs/DESIGN_SPEC.md` — tokens & mönster
- `docs/DELIVERY.md` — leveransrapport
- `docs/ADR/` — beslutslogg

## Package-konsumtion

```bash
npm run build:package
npm run verify:package
```

```tsx
import "anima-project/styles.css";
import { Button, Card, CardContent } from "anima-project";
```

## Definition of Done

- [x] Tokens light/dark
- [x] Shadcn-migration av kärnflöden (dashboard, väntelista, ny patient)
- [x] RHF+Zod, Query, Table
- [x] Loading/empty/error + ErrorBoundary
- [x] Tester + CI-workflow
- [x] Storybook stories (Button, Badge)
- [x] Dokumenterad avgränsning och antaganden
