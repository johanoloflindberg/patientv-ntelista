import { AppShell } from "../../components/layout/AppShell";
import { WaitingListSection } from "./sections/WaitingListSection/WaitingListSection";

export const ElementVntelistaDesktop = (): JSX.Element => {
  return (
    <AppShell activeNav="waitlist">
      <WaitingListSection />
    </AppShell>
  );
};
