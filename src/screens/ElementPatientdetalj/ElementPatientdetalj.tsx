import { PatientNavigationSection } from "../ElementNyPatient/sections/PatientNavigationSection/PatientNavigationSection";
import { PatientProfileSection } from "../ElementPatientdetaljScreen/sections/PatientProfileSection/PatientProfileSection";
import { PrimaryNavigationSection } from "../ElementPatientdetaljScreen/sections/PrimaryNavigationSection";
import { PatientRecordSection } from "../ElementPatientdetaljWrapper/sections/PatientRecordSection/PatientRecordSection";
import { ApplicationLayoutSection } from "./sections/ApplicationLayoutSection/ApplicationLayoutSection";
import { PatientWorkspaceSection } from "./sections/PatientWorkspaceSection/PatientWorkspaceSection";

export const ElementPatientdetalj = (): JSX.Element => {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-[#f8f9fb] font-body-regular text-color-color-text-primary"
      data-model-id="5:516"
    >
      <aside className="absolute inset-y-0 left-0 w-[17%]">
        <ApplicationLayoutSection />
        <PrimaryNavigationSection />
        <PatientNavigationSection />
      </aside>
      <section className="absolute inset-y-0 left-[17%] right-0">
        <PatientWorkspaceSection />
        <PatientProfileSection />
        <PatientRecordSection />
      </section>
    </main>
  );
};
