import { describe, expect, it } from "vitest";
import { canUseNextImage } from "./image-hosts";

describe("canUseNextImage", () => {
  it("allows configured hostnames", () => {
    expect(
      canUseNextImage(
        "https://pomorland.travel/upload/iblock/c3c/image.jpg",
      ),
    ).toBe(true);
    expect(canUseNextImage("https://placehold.co/800x600")).toBe(true);
  });

  it("rejects unknown hostnames", () => {
    expect(canUseNextImage("https://unknown.example.com/image.jpg")).toBe(
      false,
    );
  });

  it("rejects invalid urls", () => {
    expect(canUseNextImage("not-a-url")).toBe(false);
  });
});
