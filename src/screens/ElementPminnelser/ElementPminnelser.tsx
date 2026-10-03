import { AppShell } from "../../components/layout/AppShell";
import { RemindersDashboardSection } from "./sections/RemindersDashboardSection";

export const ElementPminnelser = (): JSX.Element => {
  return (
    <AppShell activeNav="reminders">
      <main className="flex min-h-screen min-w-0 flex-1" aria-label="Påminnelser">
        <RemindersDashboardSection />
      </main>
    </AppShell>
  );
};
