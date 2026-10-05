import { AppShell } from "../../components/layout/AppShell";
import { NewPatientFormSection } from "./sections/NewPatientFormSection/NewPatientFormSection";

export const ElementNyPatient = (): JSX.Element => {
  return (
    <AppShell activeNav="patients">
      <NewPatientFormSection />
    </AppShell>
  );
};
