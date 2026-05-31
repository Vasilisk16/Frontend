import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LandmarkCard } from "@/components/landmarks/LandmarkCard";
import type { Landmark } from "@/types/landmark";

vi.mock("next/image", () => ({
  default: ({ alt }: { alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

const landmark: Landmark = {
  id: "gostinye-dvory",
  title: "Гостиные дворы",
  subtitle: "Бывшие Русский и Немецкий гostinye дворы",
  shortDescription: "Один из главных торговых комплексов города.",
  fullDescription: "Полное описание.",
  yearOfConstruction: "1684 г.",
  address: "Набережная СД, 85",
  imageUrl: "https://placehold.co/800x600?text=Gostinye+Dvory",
  eraId: 1,
  era: { id: 1, name: "XVII век", sortOrder: 1 },
  styleId: 1,
  style: { id: 1, name: "Московское барокко" },
  purposeId: 1,
  purpose: { id: 1, name: "Музей" },
  legalStatusId: 1,
  legalStatus: { id: 1, name: "Федеральный ОКН" },
  categories: [{ id: 3, name: "Гражданские", slug: "civil" }],
  createdAt: "2026-05-31T19:44:35.582Z",
  updatedAt: "2026-05-31T19:44:35.582Z",
};

describe("LandmarkCard", () => {
  it("renders landmark information and link", () => {
    render(<LandmarkCard landmark={landmark} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/objects/gostinye-dvory",
    );
    expect(screen.getByText("Гостиные дворы")).toBeInTheDocument();
    expect(screen.getByText("1684 г.")).toBeInTheDocument();
    expect(screen.getByText("Московское барокко")).toBeInTheDocument();
  });
});
