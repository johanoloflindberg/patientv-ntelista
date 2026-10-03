import { PatientQueueNavigationSection } from "./sections/PatientQueueNavigationSection/PatientQueueNavigationSection";
import { WaitingListSection } from "./sections/WaitingListSection/WaitingListSection";

export const ElementVntelistaAktiva = (): JSX.Element => {
  return (
    <div
      className="flex h-[1000px] items-start relative bg-[#f8f9fb] w-full min-w-[1440px]"
      data-model-id="5:250"
    >
      <PatientQueueNavigationSection />
      <WaitingListSection />
    </div>
  );
};
