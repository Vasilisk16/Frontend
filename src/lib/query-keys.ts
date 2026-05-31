import type { LandmarksQueryParams } from "@/types/landmark";

export const queryKeys = {
  landmarks: (params: LandmarksQueryParams) => ["landmarks", params] as const,
  landmark: (slug: string) => ["landmark", slug] as const,
  eras: () => ["eras"] as const,
  categories: () => ["categories"] as const,
};
