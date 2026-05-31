import { apiFetch, buildQueryString } from "@/lib/api/client";
import type {
  Landmark,
  LandmarksQueryParams,
  PaginatedResponse,
} from "@/types/landmark";

export async function fetchLandmarks(
  params: LandmarksQueryParams = {},
): Promise<PaginatedResponse<Landmark>> {
  const query = buildQueryString({
    eraId: params.eraId,
    categoryId: params.categoryId,
    search: params.search,
    page: params.page ?? 1,
    limit: params.limit ?? 12,
  });

  return apiFetch<PaginatedResponse<Landmark>>(`/api/landmarks${query}`, {
    cache: "no-store",
  });
}

export async function fetchLandmark(slug: string): Promise<Landmark> {
  return apiFetch<Landmark>(`/api/landmarks/${slug}`, {
    cache: "no-store",
  });
}
