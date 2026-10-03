<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-10-03
- Fixed unresolved module import in `src/screens/ElementDashboardDesktop/ElementDashboardDesktop.tsx` by using explicit path for `DashboardNavigationSidebarSection`.
- Removed temporary `__ANIMA_DBG__` runtime debug log from `src/App.tsx`.
- Pattern confirmed: multiple screen/section folders require explicit file imports when no root `index.ts` exists.
- Updated knowledge notes in `workspace/CODER.md` for import-resolution and debug-log cleanup conventions.
<!-- NEXT_ENTRY_HERE -->
</changelog>
