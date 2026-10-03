import { PatientProfileSection } from "./sections/PatientProfileSection/PatientProfileSection";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";

export const ElementPatientdetaljScreen = (): JSX.Element => {
  return (
    <div
      className="flex min-h-screen w-full items-stretch bg-[#f8f9fb]"
      data-model-id="5:420"
    >
      <aside className="w-[17%] shrink-0">
        <PrimaryNavigationSection />
      </aside>
      <main className="min-w-0 flex-1">
        <PatientProfileSection />
      </main>
    </div>
  );
};
