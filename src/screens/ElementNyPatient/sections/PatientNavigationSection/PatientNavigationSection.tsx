import { useState } from "react";
import { Button } from "../../../../public-api";

const navigationItems = [
  { label: "Dashboard", active: false },
  { label: "Väntelista", active: false },
  { label: "Patienter", active: true },
  { label: "Påminnelser", active: false },
  { label: "Import", active: false },
];

const settingsItem = { label: "Inställningar" };

export const PatientNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Patienter");

  return (
    <aside className="flex min-h-screen w-60 flex-col border border-solid border-slate-200 bg-white px-5 pb-5 pt-6">
      <header className="flex h-14 flex-col items-start gap-0.5">
        <h1 className="font-['Inter'] text-lg font-bold leading-normal tracking-[0] text-[#0f162a]">
          PhysioQueue
        </h1>
        <p className="whitespace-nowrap font-['Inter'] text-[11px] font-normal leading-normal tracking-[0] text-slate-500">
          Patientväntelista
        </p>
      </header>
      <nav aria-label="Huvudnavigation" className="flex flex-col gap-2">
        {navigationItems.map((item) => {
          const isActive = activeItem === item.label;

          return (
            <Button
              key={item.label}
              type="button"
              variant="ghost"
              onClick={() => setActiveItem(item.label)}
              className={`h-10 w-full justify-start gap-2.5 overflow-hidden rounded-lg px-3 py-0 font-['Inter'] text-[13px] font-normal leading-normal tracking-[0] ${
                isActive
                  ? "bg-[#eef6ff] font-medium text-blue-600 hover:bg-[#eef6ff] hover:text-blue-600"
                  : "text-slate-700 hover:bg-transparent hover:text-slate-700"
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 shrink-0 rounded ${
                  isActive ? "bg-blue-600" : "bg-slate-500"
                }`}
              />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </nav>
      <div className="flex-1" />
      <nav aria-label="Inställningar">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setActiveItem(settingsItem.label)}
          className={`h-10 w-full justify-start gap-2.5 overflow-hidden rounded-lg px-3 py-0 font-['Inter'] text-[13px] leading-normal tracking-[0] ${
            activeItem === settingsItem.label
              ? "bg-[#eef6ff] font-medium text-blue-600 hover:bg-[#eef6ff] hover:text-blue-600"
              : "font-normal text-slate-700 hover:bg-transparent hover:text-slate-700"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-2 w-2 shrink-0 rounded ${
              activeItem === settingsItem.label ? "bg-blue-600" : "bg-slate-500"
            }`}
          />
          <span>{settingsItem.label}</span>
        </Button>
      </nav>
    </aside>
  );
};
