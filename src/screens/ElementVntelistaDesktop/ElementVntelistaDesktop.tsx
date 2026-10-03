import { PatientNavigationSidebarSection } from "./sections/PatientNavigationSidebarSection/PatientNavigationSidebarSection";
import { WaitingListSection } from "./sections/WaitingListSection/WaitingListSection";

export const ElementVntelistaDesktop = (): JSX.Element => {
  return (
    <div
      className="flex h-[1000px] items-start relative bg-[#f8f9fb] w-full min-w-[1440px]"
      data-model-id="5:147"
    >
      <PatientNavigationSidebarSection />
      <WaitingListSection />
    </div>
  );
};
