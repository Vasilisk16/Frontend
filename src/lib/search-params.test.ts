import { describe, expect, it } from "vitest";
import { buildLandmarksUrl, parseLandmarksParams } from "@/lib/search-params";

describe("parseLandmarksParams", () => {
  it("parses filters and pagination from search params", () => {
    expect(
      parseLandmarksParams({
        eraId: "2",
        categoryId: "3",
        search: "дворы",
        page: "2",
      }),
    ).toEqual({
      eraId: 2,
      categoryId: 3,
      search: "дворы",
      page: 2,
      limit: 12,
    });
  });

  it("returns defaults when params are missing", () => {
    expect(parseLandmarksParams({})).toEqual({
      eraId: undefined,
      categoryId: undefined,
      search: undefined,
      page: 1,
      limit: 12,
    });
  });
});

describe("buildLandmarksUrl", () => {
  it("builds url with active filters", () => {
    const url = buildLandmarksUrl({
      eraId: 1,
      categoryId: 2,
      search: "museum",
      page: 2,
      limit: 12,
    });

    expect(url).toBe("/?eraId=1&categoryId=2&search=museum&page=2");
  });

  it("returns root path without query when filters are empty", () => {
    expect(buildLandmarksUrl({ page: 1, limit: 12 })).toBe("/");
  });
});
