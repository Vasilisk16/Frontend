import { useQuery } from "@tanstack/react-query";
import { fetchLandmarks } from "@/lib/api/landmarks";
import { queryKeys } from "@/lib/query-keys";
import type { LandmarksQueryParams } from "@/types/landmark";

export function useLandmarks(params: LandmarksQueryParams) {
  return useQuery({
    queryKey: queryKeys.landmarks(params),
    queryFn: () => fetchLandmarks(params),
  });
}
