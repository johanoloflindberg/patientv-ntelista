import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button.tsx";

describe("Button", () => {
  it("renders label and handles click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button type="button" onClick={onClick}>
        Spara
      </Button>,
    );

    await user.click(screen.getByRole("button", { name: "Spara" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports destructive variant", () => {
    render(
      <Button type="button" variant="destructive">
        Ta bort
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Ta bort" })).toHaveClass(
      "bg-destructive",
    );
  });
});
