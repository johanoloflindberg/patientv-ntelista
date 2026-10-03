import { DashboardNavigationSidebarSection } from "./sections/DashboardNavigationSidebarSection/DashboardNavigationSidebarSection";
import { PatientQueueDashboardSection } from "./sections/PatientQueueDashboardSection";

export const ElementDashboardDesktop = (): JSX.Element => {
  return (
    <div
      className="relative flex h-[1000px] w-full min-w-[1440px] items-start bg-[#f8f9fb] [&>*:first-child]:h-full [&>*:first-child]:w-[17%] [&>*:first-child]:shrink-0 [&>*:last-child]:h-full [&>*:last-child]:w-[83%]"
      data-model-id="5:2"
    >
      <DashboardNavigationSidebarSection />
      <PatientQueueDashboardSection />
    </div>
  );
};
