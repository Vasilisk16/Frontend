import { afterEach, describe, expect, it, vi } from "vitest";
import { ApiError, buildQueryString } from "./client";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("buildQueryString", () => {
  it("builds query string from defined params", () => {
    const query = buildQueryString({
      eraId: 1,
      search: "gostinye",
      page: 2,
    });

    expect(query).toContain("eraId=1");
    expect(query).toContain("page=2");
    expect(query).toContain("search=gostinye");
  });

  it("returns empty string when no params provided", () => {
    expect(buildQueryString({})).toBe("");
  });
});

describe("apiFetch", () => {
  it("throws ApiError when response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        statusText: "Not Found",
      }),
    );

    const { apiFetch } = await import("./client");

    await expect(apiFetch("/api/test")).rejects.toMatchObject({
      name: "ApiError",
      status: 404,
    });
  });

  it("returns parsed json on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ status: "ok" }),
      }),
    );

    const { apiFetch } = await import("./client");
    await expect(apiFetch("/api/test")).resolves.toEqual({ status: "ok" });
  });
});

describe("ApiError", () => {
  it("stores status code", () => {
    const error = new ApiError("failed", 500);
    expect(error.status).toBe(500);
    expect(error.message).toBe("failed");
  });
});
