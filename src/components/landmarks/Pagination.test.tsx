import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "@/components/landmarks/Pagination";

describe("Pagination", () => {
  it("does not render when only one page exists", () => {
    const { container } = render(
      <Pagination page={1} totalPages={1} onPageChange={vi.fn()} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("changes page on button click", async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(<Pagination page={2} totalPages={3} onPageChange={onPageChange} />);

    await user.click(screen.getByRole("button", { name: "Назад" }));
    expect(onPageChange).toHaveBeenCalledWith(1);

    await user.click(screen.getByRole("button", { name: "Вперёд" }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
