import { AppShell } from "../../components/layout/AppShell";
import { PatientQueueDashboardSection } from "./sections/PatientQueueDashboardSection";

export const ElementDashboardDesktop = (): JSX.Element => {
  return (
    <AppShell activeNav="dashboard">
      <PatientQueueDashboardSection />
    </AppShell>
  );
};
