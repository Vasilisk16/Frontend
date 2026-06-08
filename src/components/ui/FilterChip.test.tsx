import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FilterChip } from "@/components/ui/FilterChip";

describe("FilterChip", () => {
  it("renders label and handles click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<FilterChip label="XVII век" isActive={false} onClick={onClick} />);

    await user.click(screen.getByRole("button", { name: "XVII век" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies active styles", () => {
    render(<FilterChip label="Все" isActive onClick={vi.fn()} />);

    expect(screen.getByRole("button", { name: "Все" })).toHaveClass(
      "bg-brand-dark",
    );
  });
});
