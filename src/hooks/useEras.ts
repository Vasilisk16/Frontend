import { useQuery } from "@tanstack/react-query";
import { fetchEras } from "@/lib/api/references";
import { queryKeys } from "@/lib/query-keys";

export function useEras() {
  return useQuery({
    queryKey: queryKeys.eras(),
    queryFn: fetchEras,
  });
}
