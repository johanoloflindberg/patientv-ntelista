import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Input } from "../../public-api";

const navigationItems = [
  "Dashboard",
  "Väntelista",
  "Patienter",
  "Påminnelser",
  "Import",
];

export const ElementPotentiell = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Patienter");

  return (
    <main
      className="flex min-h-screen w-full bg-[#f8f9fb] font-[Inter,Helvetica]"
      data-model-id="5:696"
    >
      <aside className="flex w-60 shrink-0 flex-col border border-slate-200 bg-white px-5 pb-5 pt-6">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-lg font-bold leading-normal text-[#0f162a]">
            PhysioQueue
          </h1>
          <p className="text-[11px] leading-normal text-slate-500">
            Patientväntelista
          </p>
        </div>
        <nav aria-label="Huvudnavigation" className="mt-4 flex flex-col gap-2">
          {navigationItems.map((item) => {
            const isActive = activeItem === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setActiveItem(item)}
                className={`flex h-10 w-full items-center gap-2.5 rounded-lg px-3 text-left text-[13px] transition-colors ${
                  isActive
                    ? "bg-[#eef6ff] font-medium text-blue-600"
                    : "font-normal text-slate-700 hover:bg-slate-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded ${
                    isActive ? "bg-blue-600" : "bg-slate-500"
                  }`}
                />
                {item}
              </button>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setActiveItem("Inställningar")}
          className={`mt-auto flex h-10 w-full items-center gap-2.5 rounded-lg px-3 text-left text-[13px] transition-colors ${
            activeItem === "Inställningar"
              ? "bg-[#eef6ff] font-medium text-blue-600"
              : "font-normal text-slate-700 hover:bg-slate-50"
          }`}
          aria-current={activeItem === "Inställningar" ? "page" : undefined}
        >
          <span
            aria-hidden="true"
            className={`h-2 w-2 rounded ${
              activeItem === "Inställningar" ? "bg-blue-600" : "bg-slate-500"
            }`}
          />
          Inställningar
        </button>
      </aside>
      <section className="flex min-w-0 flex-1 flex-col bg-[#f8f9fb]">
        <header className="flex min-h-[72px] flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 md:px-[30px]">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-xl font-bold leading-normal text-[#0f162a]">
              Ny patient
            </h2>
            <p className="text-[11px] leading-normal text-slate-500">
              Möjlig befintlig patient hittades
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Input
              className="h-9 w-60 border-slate-200 bg-[#f8f9fb] text-xs shadow-none placeholder:text-slate-500"
              placeholder="Sök patient…"
              aria-label="Sök patient"
            />
            <Button
              type="button"
              className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold hover:bg-blue-700"
            >
              + Ny patient
            </Button>
            <span className="rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700">
              JL
            </span>
          </div>
        </header>
        <section className="flex-1 bg-white px-6 pb-7 pt-[26px] md:px-[30px]">
          <Card className="w-full max-w-[900px] rounded-xl border-[#ffdb93] bg-[#fffaeb] shadow-none">
            <CardContent className="flex flex-col gap-3.5 p-6">
              <h3 className="text-lg font-semibold leading-normal text-amber-600">
                Möjlig befintlig patient
              </h3>
              <p className="text-xs leading-normal text-slate-700">
                Systemet hittade en patient som kan vara samma person.
                Kontrollera innan du fortsätter.
              </p>
              <Card className="rounded-xl border-slate-200 bg-white shadow-none">
                <CardContent className="flex min-h-[110px] flex-col gap-1.5 p-4">
                  <h4 className="text-[15px] font-semibold leading-normal text-[#0f162a]">
                    Anna Andersson
                  </h4>
                  <p className="text-[11px] leading-normal text-slate-500">
                    PAT-000093 · Telefon slutar på 4567
                  </p>
                  <p className="text-[11px] leading-normal text-slate-700">
                    Status: Väntar · 21 dagar
                  </p>
                </CardContent>
              </Card>
              <div className="flex flex-wrap items-center gap-2.5">
                <Button
                  asChild
                  className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold hover:bg-blue-700"
                >
                  <Link to="/x04-patientdetalj-u47-desktop">
                    Öppna befintlig patient
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto rounded-lg border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a] hover:bg-slate-50"
                >
                  Fortsätt ändå
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
};
