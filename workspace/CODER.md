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
- Import pattern note: top-level screen folders may also lack root `index.ts` barrels, so imports should target explicit files (for example `./screens/ElementVntelistaAktiva/ElementVntelistaAktiva`) when unresolved-module errors occur.
- Import pattern note: several folders under `src/screens/**/sections/*` do not expose root `index.ts` barrels, so imports must often target explicit file paths like `./SectionName/SectionName`.
- Debug hygiene note: remove temporary `__ANIMA_DBG__` logs after fixing runtime/build issues.
</coder>
