import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { NewPatientFormSection } from "./NewPatientFormSection";

function renderForm(): void {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });

  render(
    <QueryClientProvider client={client}>
      <MemoryRouter>
        <NewPatientFormSection />
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

describe("NewPatientFormSection", () => {
  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(screen.getByRole("button", { name: "Lägg till patient" }));

    await waitFor(() => {
      expect(screen.getByText("Förnamn krävs")).toBeInTheDocument();
    });
    expect(screen.getByText("Efternamn krävs")).toBeInTheDocument();
  });
});
