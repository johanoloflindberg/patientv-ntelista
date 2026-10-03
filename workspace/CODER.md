<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-10-03
- Playground convention: the searchable public component catalog is available at `/components` and lives in `src/screens/ComponentPlayground/ComponentPlayground.tsx`.
- Playground coverage: document each public primitive, all CVA variants and sizes, light/dark/custom themes, interactive states, and realistic compositions.
## 2026-10-03
- Module resolution convention: reusable package source uses explicit `.ts`/`.tsx` extensions because Sandpack does not reliably resolve its extensionless relative imports.
- Verification convention: `npm run verify:package` builds the package, type-checks `verification/main.tsx` against emitted declarations, and bundles it against emitted ESM/CSS files.
- Consumer convention: import `anima-project/styles.css` once; bundled styles provide component utilities and overridable light/dark CSS variables.
- Package build convention: `npm run build:package` emits ESM/CJS bundles through `vite.lib.config.ts` and declarations through `tsconfig.lib.json`.
- Distribution convention: package metadata exports `dist/index.js`, `dist/index.cjs`, and `dist/types/public-api.d.ts`; React remains external and is declared as a peer dependency.
- Package boundary convention: reusable source lives under `src/package`, application code lives under `src/screens`, and screens consume only `src/public-api.ts`.
- Package API convention: reusable UI primitives, public prop types, variant helpers, and `cn` are exposed through `src/public-api.ts`; application screens remain internal.
- Import pattern note: top-level screen folders may also lack root `index.ts` barrels, so imports should target explicit files (for example `./screens/ElementVntelistaAktiva/ElementVntelistaAktiva`) when unresolved-module errors occur.
- Import pattern note: several folders under `src/screens/**/sections/*` do not expose root `index.ts` barrels, so imports must often target explicit file paths like `./SectionName/SectionName`.
- Debug hygiene note: remove temporary `__ANIMA_DBG__` logs after fixing runtime/build issues.
</coder>
