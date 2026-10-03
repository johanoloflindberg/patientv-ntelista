import { QueryClient } from "@tanstack/react-query";

/**
 * Shared QueryClient defaults.
 * - staleTime 30s: clinic dashboards tolerate short freshness windows
 * - gcTime 5m: keep inactive lists warm during navigation
 * - retry 1: avoid noisy retries on 4xx; user can explicit-retry
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      gcTime: 5 * 60_000,
      retry: 1,
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

export const queryKeys = {
  dashboard: ["dashboard"] as const,
  waitlist: (filter?: string) => ["waitlist", filter ?? "all"] as const,
  patient: (id: string) => ["patient", id] as const,
  reminders: ["reminders"] as const,
} as const;
