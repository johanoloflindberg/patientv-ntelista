import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("shows CTA and invokes action", async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();

    render(
      <EmptyState
        title="Tom lista"
        description="Inga poster ännu."
        actionLabel="Skapa"
        onAction={onAction}
      />,
    );

    expect(screen.getByText("Tom lista")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Skapa" }));
    expect(onAction).toHaveBeenCalledTimes(1);
  });
});
