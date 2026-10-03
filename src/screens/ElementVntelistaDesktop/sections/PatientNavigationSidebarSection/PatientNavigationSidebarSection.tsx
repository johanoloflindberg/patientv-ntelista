import { useState } from "react";
import { Button } from "../../../../public-api";

const primaryNavigationItems = [
  { label: "Dashboard", active: false },
  { label: "Väntelista", active: true },
  { label: "Patienter", active: false },
  { label: "Påminnelser", active: false },
  { label: "Import", active: false },
];

const secondaryNavigationItems = [{ label: "Inställningar" }];

export const PatientNavigationSidebarSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Väntelista");

  return (
    <aside className="flex min-h-screen w-60 shrink-0 flex-col border border-solid border-slate-200 bg-white px-5 pb-5 pt-6">
      <header className="flex h-14 flex-col items-start gap-0.5">
        <h1 className="[font-family:'Inter',Helvetica] text-lg font-bold leading-normal tracking-[0] text-[#0f162a]">
          PhysioQueue
        </h1>
        <p className="[font-family:'Inter',Helvetica] whitespace-nowrap text-[11px] font-normal leading-normal tracking-[0] text-slate-500">
          Patientväntelista
        </p>
      </header>
      <nav aria-label="Huvudnavigation" className="mt-2 flex flex-col gap-2">
        {primaryNavigationItems.map((item) => {
          const isActive = activeItem === item.label;

          return (
            <Button
              key={item.label}
              type="button"
              variant="ghost"
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveItem(item.label)}
              className={`h-10 w-full justify-start gap-2.5 overflow-hidden rounded-lg px-3 py-0 text-left hover:bg-slate-50 ${
                isActive
                  ? "bg-[#eef6ff] font-medium text-blue-600 hover:bg-[#eef6ff]"
                  : "font-normal text-slate-700"
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 shrink-0 rounded ${
                  isActive ? "bg-blue-600" : "bg-slate-500"
                }`}
              />
              <span className="[font-family:'Inter',Helvetica] text-[13px] leading-normal tracking-[0]">
                {item.label}
              </span>
            </Button>
          );
        })}
      </nav>
      <div className="flex-1" />
      <nav aria-label="Sekundärnavigation" className="flex flex-col gap-2">
        {secondaryNavigationItems.map((item) => {
          const isActive = activeItem === item.label;

          return (
            <Button
              key={item.label}
              type="button"
              variant="ghost"
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveItem(item.label)}
              className={`h-10 w-full justify-start gap-2.5 overflow-hidden rounded-lg px-3 py-0 text-left hover:bg-slate-50 ${
                isActive
                  ? "bg-[#eef6ff] font-medium text-blue-600 hover:bg-[#eef6ff]"
                  : "font-normal text-slate-700"
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 shrink-0 rounded ${
                  isActive ? "bg-blue-600" : "bg-slate-500"
                }`}
              />
              <span className="[font-family:'Inter',Helvetica] text-[13px] leading-normal tracking-[0]">
                {item.label}
              </span>
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};
