import { PatientNavigationSection } from "./sections/PatientNavigationSection/PatientNavigationSection";
import { PatientRecordSection } from "./sections/PatientRecordSection/PatientRecordSection";

export const ElementPatientdetaljWrapper = (): JSX.Element => {
  return (
    <main
      className="grid min-h-screen w-full grid-cols-[170px_minmax(0,1fr)] items-stretch bg-[#f8f9fb]"
      data-model-id="5:327"
    >
      <nav aria-label="Patient navigation" className="min-w-0">
        <PatientNavigationSection />
      </nav>
      <section aria-label="Patient record" className="min-w-0">
        <PatientRecordSection />
      </section>
    </main>
  );
};
