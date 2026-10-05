# ADR 0001 — Behålla Vite + React Router (ej Next.js / TanStack Router)

## Status

Accepterad (2026-10-03)

## Kontext

Uppdraget specificerar Next.js eller TanStack Router. Kodbasen är en Anima-genererad Vite-app med package-export (`build:package`) och screen-graph-plugin.

## Beslut

Behålla **Vite 7 + React Router 6**. Använda `next-themes` med class-strategi för dark mode. Introducera TanStack Query/Table; skjuta TanStack Router till senare.

## Konsekvenser

- (+) Bevarar Anima-route-id:n och package-pipeline
- (+) Snabbare, lägre risk-migration
- (−) Saknar RSC/Server Actions
- (−) next-themes namn är Next-centrerat men fungerar i Vite
