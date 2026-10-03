import { useQuery } from "@tanstack/react-query";

import { fetchDashboard } from "../../api/mock-data";
import { queryKeys } from "../../lib/query-client";
import { dashboardSchema } from "../../schemas/patient";

export function useDashboard() {
  return useQuery({
    queryKey: queryKeys.dashboard,
    queryFn: async () => {
      const data = await fetchDashboard();
      return dashboardSchema.parse(data);
    },
  });
}
