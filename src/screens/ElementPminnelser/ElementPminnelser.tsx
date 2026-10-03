import { PatientWaitlistNavigationSection } from "./sections/PatientWaitlistNavigationSection";
import { RemindersDashboardSection } from "./sections/RemindersDashboardSection";

export const ElementPminnelser = (): JSX.Element => {
  return (
    <div
      className="flex min-h-screen w-full min-w-0 items-stretch overflow-x-auto bg-[#f8f9fb]"
      data-model-id="5:745"
    >
      <aside
        className="flex min-h-screen w-[17%] shrink-0"
        aria-label="Patient waitlist navigation"
      >
        <PatientWaitlistNavigationSection />
      </aside>
      <main
        className="flex min-h-screen min-w-0 flex-1"
        aria-label="Reminders dashboard"
      >
        <RemindersDashboardSection />
      </main>
    </div>
  );
};
