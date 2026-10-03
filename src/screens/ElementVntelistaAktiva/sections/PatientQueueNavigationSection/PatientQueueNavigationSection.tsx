import { useState } from "react";
import { Button } from "../../../../public-api";

const navigationItems = [
  { label: "Dashboard", active: false },
  { label: "Väntelista", active: true },
  { label: "Patienter", active: false },
  { label: "Påminnelser", active: false },
  { label: "Import", active: false },
];

export const PatientQueueNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Väntelista");

  return (
    <aside className="flex min-h-screen w-full max-w-60 flex-col items-start border border-solid border-slate-200 bg-white px-5 pb-5 pt-6">
      <header className="flex h-14 w-full flex-col items-start gap-0.5 bg-white">
        <h1 className="font-bold text-lg leading-normal tracking-[0] text-[#0f162a] [font-family:'Inter',Helvetica]">
          PhysioQueue
        </h1>
        <p className="whitespace-nowrap text-[11px] font-normal leading-normal tracking-[0] text-slate-500 [font-family:'Inter',Helvetica]">
          Patientväntelista
        </p>
      </header>
      <nav aria-label="Huvudnavigation" className="flex w-full flex-col gap-2">
        {navigationItems.map((item) => {
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
              <span className="text-[13px] leading-normal tracking-[0] [font-family:'Inter',Helvetica]">
                {item.label}
              </span>
            </Button>
          );
        })}
      </nav>
      <div className="flex-1" />
      <Button
        type="button"
        variant="ghost"
        onClick={() => setActiveItem("Inställningar")}
        aria-current={activeItem === "Inställningar" ? "page" : undefined}
        className={`h-10 w-full justify-start gap-2.5 overflow-hidden rounded-lg px-3 py-0 text-left hover:bg-slate-50 ${
          activeItem === "Inställningar"
            ? "bg-[#eef6ff] font-medium text-blue-600 hover:bg-[#eef6ff]"
            : "font-normal text-slate-700"
        }`}
      >
        <span
          aria-hidden="true"
          className={`h-2 w-2 shrink-0 rounded ${
            activeItem === "Inställningar" ? "bg-blue-600" : "bg-slate-500"
          }`}
        />
        <span className="text-[13px] leading-normal tracking-[0] [font-family:'Inter',Helvetica]">
          Inställningar
        </span>
      </Button>
    </aside>
  );
};
