import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Dashboard", active: false },
  { label: "Väntelista", active: false },
  { label: "Patienter", active: false },
  { label: "Påminnelser", active: true },
  { label: "Import", active: false },
];

export const PatientWaitlistNavigationSection = (): JSX.Element => {
  return (
    <aside className="flex min-h-screen w-44 shrink-0 flex-col border border-solid border-slate-200 bg-white px-2.5 pb-5 pt-6">
      <header className="mb-2 flex min-h-14 flex-col items-start gap-0.5">
        <h1 className="[font-family:'Inter',Helvetica] text-lg font-bold leading-normal tracking-[0] text-[#0f162a]">
          PhysioQueue
        </h1>
        <p className="whitespace-nowrap [font-family:'Inter',Helvetica] text-[11px] font-normal leading-normal tracking-[0] text-slate-500">
          Patientväntelista
        </p>
      </header>
      <nav aria-label="Huvudnavigation" className="flex flex-col gap-2">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            type="button"
            variant="ghost"
            aria-current={item.active ? "page" : undefined}
            className={`h-10 w-full justify-start gap-2.5 overflow-hidden rounded-lg px-3 py-0 text-left hover:bg-slate-50 ${
              item.active
                ? "bg-[#eef6ff] text-blue-600 hover:bg-[#eef6ff]"
                : "text-slate-700"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded ${
                item.active ? "bg-blue-600" : "bg-slate-500"
              }`}
            />
            <span
              className={`[font-family:'Inter',Helvetica] text-[13px] leading-normal tracking-[0] ${
                item.active ? "font-medium" : "font-normal"
              }`}
            >
              {item.label}
            </span>
          </Button>
        ))}
      </nav>
      <div className="flex-1" aria-hidden="true" />
      <Button
        type="button"
        variant="ghost"
        className="h-10 w-full justify-start gap-2.5 overflow-hidden rounded-lg px-3 py-0 text-left text-slate-700 hover:bg-slate-50"
      >
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded bg-slate-500"
        />
        <span className="[font-family:'Inter',Helvetica] text-[13px] font-normal leading-normal tracking-[0]">
          Inställningar
        </span>
      </Button>
    </aside>
  );
};
