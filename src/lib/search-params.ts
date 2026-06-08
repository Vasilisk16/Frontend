import type { LandmarksQueryParams } from "@/types/landmark";

export function parseLandmarksParams(
  searchParams: Record<string, string | string[] | undefined>,
): LandmarksQueryParams {
  const getValue = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const eraId = getValue("eraId");
  const categoryId = getValue("categoryId");
  const search = getValue("search");
  const page = getValue("page");

  return {
    eraId: eraId ? Number(eraId) : undefined,
    categoryId: categoryId ? Number(categoryId) : undefined,
    search: search || undefined,
    page: page ? Number(page) : 1,
    limit: 12,
  };
}

export function buildLandmarksUrl(params: LandmarksQueryParams): string {
  const searchParams = new URLSearchParams();

  if (params.eraId) {
    searchParams.set("eraId", String(params.eraId));
  }

  if (params.categoryId) {
    searchParams.set("categoryId", String(params.categoryId));
  }

  if (params.search) {
    searchParams.set("search", params.search);
  }

  if (params.page && params.page > 1) {
    searchParams.set("page", String(params.page));
  }

  const query = searchParams.toString();
  return query ? `/?${query}` : "/";
}
