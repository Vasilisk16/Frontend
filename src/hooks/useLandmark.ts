import { useQuery } from "@tanstack/react-query";
import { fetchLandmark } from "@/lib/api/landmarks";
import { queryKeys } from "@/lib/query-keys";
import type { Landmark } from "@/types/landmark";

export function useLandmark(slug: string, initialData?: Landmark) {
  return useQuery({
    queryKey: queryKeys.landmark(slug),
    queryFn: () => fetchLandmark(slug),
    enabled: Boolean(slug),
    initialData,
  });
}
