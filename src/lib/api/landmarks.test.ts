import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchLandmark, fetchLandmarks } from "./landmarks";

describe("landmarks api", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fetchLandmarks requests paginated list", async () => {
    const mockResponse = {
      items: [],
      total: 0,
      page: 1,
      limit: 12,
      totalPages: 0,
    };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      }),
    );

    await expect(fetchLandmarks({ page: 1, limit: 12 })).resolves.toEqual(
      mockResponse,
    );
  });

  it("fetchLandmark requests object by slug", async () => {
    const mockLandmark = { id: "gostinye-dvory", title: "Гостиные дворы" };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockLandmark,
      }),
    );

    await expect(fetchLandmark("gostinye-dvory")).resolves.toEqual(mockLandmark);
  });
});
