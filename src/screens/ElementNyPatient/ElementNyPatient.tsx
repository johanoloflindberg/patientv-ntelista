import { NewPatientFormSection } from "./sections/NewPatientFormSection/NewPatientFormSection";
import { PatientNavigationSection } from "./sections/PatientNavigationSection/PatientNavigationSection";

export const ElementNyPatient = (): JSX.Element => {
  return (
    <div
      className="flex min-h-screen w-full items-stretch bg-[#f8f9fb]"
      data-model-id="5:612"
    >
      <aside
        className="w-[17%] shrink-0 border-r border-[#e2263f]"
        aria-label="Patient navigation"
      >
        <PatientNavigationSection />
      </aside>
      <main className="min-w-0 flex-1">
        <NewPatientFormSection />
      </main>
    </div>
  );
};
