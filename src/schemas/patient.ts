import { z } from "zod";

/** Shared client/server schema for new patient intake. */
export const newPatientSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Förnamn krävs")
    .max(80, "Förnamn får vara högst 80 tecken"),
  lastName: z
    .string()
    .trim()
    .min(1, "Efternamn krävs")
    .max(80, "Efternamn får vara högst 80 tecken"),
  personalNumber: z
    .string()
    .trim()
    .regex(/^\d{8}-\d{4}$/, "Ange personnummer som ÅÅÅÅMMDD-XXXX"),
  phone: z
    .string()
    .trim()
    .min(6, "Telefonnummer krävs")
    .max(20, "Telefonnummer är för långt"),
  email: z
    .string()
    .trim()
    .email("Ogiltig e-postadress")
    .or(z.literal("")),
  waitingSince: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Ange datum som ÅÅÅÅ-MM-DD"),
  source: z.enum(["Manuell", "Import", "Remiss"], {
    errorMap: () => ({ message: "Välj källa" }),
  }),
  note: z.string().trim().max(500, "Anteckning får vara högst 500 tecken"),
});

export type NewPatientInput = z.infer<typeof newPatientSchema>;

export const waitingPatientSchema = z.object({
  queue: z.string(),
  name: z.string(),
  patientId: z.string(),
  waitingDays: z.number().int().nonnegative(),
  waitingSince: z.string(),
  status: z.enum(["Väntar", "Bokad", "Kontaktad", "Avslutad"]),
  phone: z.string(),
  reminder: z.string(),
  starred: z.boolean(),
  flagged: z.boolean(),
  reminderCount: z.number().int().nonnegative(),
  overdueReminder: z.boolean().optional(),
});

export type WaitingPatient = z.infer<typeof waitingPatientSchema>;

export const dashboardMetricSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  detail: z.string(),
});

export const reminderSchema = z.object({
  id: z.string(),
  time: z.string(),
  dateLabel: z.string(),
  title: z.string(),
  patient: z.string(),
  overdue: z.boolean(),
});

export const dashboardSchema = z.object({
  metrics: z.array(dashboardMetricSchema),
  reminders: z.array(reminderSchema),
  flaggedPatients: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      details: z.string(),
      status: z.string(),
      starred: z.boolean(),
      flagged: z.boolean(),
    }),
  ),
  starredPatients: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      details: z.string(),
      status: z.string(),
    }),
  ),
  longestWaiting: z.array(z.string()),
});

export type DashboardData = z.infer<typeof dashboardSchema>;
