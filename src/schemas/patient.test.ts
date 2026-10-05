import { describe, expect, it } from "vitest";

import { newPatientSchema } from "./patient";

describe("newPatientSchema", () => {
  it("accepts a valid patient payload", () => {
    const result = newPatientSchema.safeParse({
      firstName: "Anna",
      lastName: "Andersson",
      personalNumber: "19900101-1234",
      phone: "070-123 45 67",
      email: "anna@example.se",
      waitingSince: "2026-10-03",
      source: "Manuell",
      note: "Test",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid personal number", () => {
    const result = newPatientSchema.safeParse({
      firstName: "Anna",
      lastName: "Andersson",
      personalNumber: "900101-1234",
      phone: "070-123 45 67",
      email: "",
      waitingSince: "2026-10-03",
      source: "Manuell",
      note: "",
    });

    expect(result.success).toBe(false);
  });
});
