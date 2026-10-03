import { useQuery } from "@tanstack/react-query";

import { fetchWaitlist } from "../../api/mock-data";
import { queryKeys } from "../../lib/query-client";
import { waitingPatientSchema } from "../../schemas/patient";
import { z } from "zod";

export type WaitlistFilter = "all" | "active";

export function useWaitlist(filter: WaitlistFilter = "all") {
  return useQuery({
    queryKey: queryKeys.waitlist(filter),
    queryFn: async () => {
      const data = await fetchWaitlist(filter);
      return z.array(waitingPatientSchema).parse(data);
    },
  });
}
