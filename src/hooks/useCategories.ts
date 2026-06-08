import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/lib/api/references";
import { queryKeys } from "@/lib/query-keys";

export function useCategories() {
  return useQuery({
    queryKey: queryKeys.categories(),
    queryFn: fetchCategories,
    staleTime: 0,
  });
}
