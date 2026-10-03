import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const historyItems = [
  "Idag 11:25  ·  Patient flaggad  ·  av Johan",
  "Idag 10:43  ·  Anteckningar uppdaterades",
  "3 okt 09:00  ·  Påminnelse skapad: Kontrollera remiss",
  "1 okt 14:22  ·  Flyttades från köplats #21 till #14",
];

const reminders = [
  {
    date: "Idag 14:00",
    label: "Kontrollera återbudstid",
    urgent: true,
  },
  {
    date: "8 okt 09:00",
    label: "Kontrollera remiss",
    urgent: false,
  },
];

const visibilityOptions = ["Hög", "Normal", "Låg"];

export const PatientWorkspaceSection = (): JSX.Element => {
  const [visibility, setVisibility] = useState("Normal");

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#f8f9fb] font-['Inter',Helvetica] text-[#0f162a]">
      <header className="flex min-h-[72px] w-full items-center justify-between gap-5 border border-slate-200 bg-white px-5 py-3 sm:px-[30px]">
        <div className="flex shrink-0 flex-col gap-0.5">
          <h1 className="text-xl font-bold leading-normal">Patient</h1>
          <p className="text-[11px] leading-normal text-slate-500">
            Administrativ översikt
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <Input
            aria-label="Sök patient"
            defaultValue=""
            placeholder="Sök patient…"
            className="h-9 w-[180px] border-slate-200 bg-[#f8f9fb] text-xs placeholder:text-slate-500 sm:w-60"
          />
          <Button
            type="button"
            className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
          >
            + Ny patient
          </Button>
          <Badge className="rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
            JL
          </Badge>
        </div>
      </header>
      <div className="flex w-full flex-1 flex-col gap-[22px] bg-white px-5 pb-7 pt-[26px] sm:px-[30px]">
        <button
          type="button"
          className="w-fit text-left text-[11px] font-medium leading-normal text-blue-600 hover:underline"
        >
          ← Tillbaka till väntelistan
        </button>
        <section className="flex w-full max-w-[1080px] flex-col justify-between gap-5 lg:min-h-[92px] lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-[5px]">
            <h2 className="text-[26px] font-bold leading-normal">
              Anna Andersson&nbsp;&nbsp; ★&nbsp;&nbsp;⚑
            </h2>
            <p className="text-[11px] leading-normal text-slate-500">
              PAT-000124
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full bg-[#eef6ff] px-[9px] py-[5px] text-[11px] font-medium text-blue-600 hover:bg-[#eef6ff]">
                Väntar
              </Badge>
              <Badge className="rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
                Köplats #14
              </Badge>
              <Badge className="rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-[#0f162a] hover:bg-[#eff4f9]">
                47 dagar
              </Badge>
              <span className="text-[11px] leading-normal text-slate-500">
                Väntar sedan 17 aug 2026
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Button
              type="button"
              className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
            >
              + Påminnelse
            </Button>
            <Button
              type="button"
              variant="outline"
              aria-label="Fler patientåtgärder"
              className="h-auto rounded-lg border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a]"
            >
              ⋯
            </Button>
          </div>
        </section>
        <div className="grid w-full max-w-[1080px] grid-cols-1 items-start gap-[18px] lg:grid-cols-[minmax(0,720px)_minmax(280px,340px)]">
          <div className="flex flex-col gap-4">
            <Card className="h-[360px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardHeader className="flex h-12 flex-row items-start justify-between space-y-0 p-4 pb-0">
                <CardTitle className="text-base font-semibold">
                  Anteckningar
                </CardTitle>
                <span className="text-[11px] font-normal text-amber-600">
                  ! Konflikt
                </span>
              </CardHeader>
              <CardContent className="flex flex-col gap-2.5 p-4 pt-2.5">
                <div className="flex h-[62px] flex-col gap-[5px] rounded-lg bg-[#fffaeb] px-3 py-2.5">
                  <p className="text-xs font-semibold text-amber-600">
                    Anteckningen har ändrats av en annan användare.
                  </p>
                  <p className="text-[11px] text-slate-700">
                    Visa ny version · Behåll min text · Kopiera min text
                  </p>
                </div>
                <div className="min-h-[169px] flex-1 rounded-lg border border-slate-200 bg-[#fdfdfe] p-3.5 text-[13px] leading-normal text-slate-700">
                  Patienten önskar helst tider efter kl. 14.
                  <br />
                  <br />
                  Kontaktad 29 september, kunde inte svara då. Följ upp möjlig
                  återbudstid.
                </div>
              </CardContent>
            </Card>
            <Card className="h-60 overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-base font-semibold">
                  Historik
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 p-4 pt-2.5">
                {historyItems.map((item) => (
                  <p
                    key={item}
                    className="text-[11px] leading-normal text-slate-700"
                  >
                    {item}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
          <aside className="flex flex-col gap-3.5">
            <Card className="h-[150px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-sm font-semibold">Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2.5 p-4 pt-2.5">
                <a
                  href="tel:070-1234567"
                  className="text-[13px] font-medium text-blue-600 hover:underline"
                >
                  ☎ 070-123 45 67
                </a>
                <a
                  href="mailto:anna@example.se"
                  className="text-[13px] font-medium text-blue-600 hover:underline"
                >
                  ✉ anna@example.se
                </a>
              </CardContent>
            </Card>
            <Card className="h-[220px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardHeader className="flex h-[42px] flex-row items-start justify-between space-y-0 p-4 pb-0">
                <CardTitle className="text-sm font-semibold">
                  Påminnelser
                </CardTitle>
                <button
                  type="button"
                  className="text-[11px] font-medium text-blue-600 hover:underline"
                >
                  + Lägg till
                </button>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 p-4 pt-2.5">
                {reminders.map((reminder) => (
                  <div key={reminder.date} className="flex flex-col gap-0.5">
                    <span
                      className={`text-[11px] font-semibold ${
                        reminder.urgent ? "text-amber-600" : "text-[#0f162a]"
                      }`}
                    >
                      {reminder.date}
                    </span>
                    <span className="text-[11px] text-slate-700">
                      {reminder.label}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="h-[130px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-sm font-semibold">
                  Synlighet
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-start gap-1.5 p-4 pt-2.5">
                {visibilityOptions.map((option) => (
                  <Button
                    key={option}
                    type="button"
                    variant="ghost"
                    onClick={() => setVisibility(option)}
                    className={`h-auto rounded-full px-[9px] py-[5px] text-[11px] font-medium ${
                      visibility === option
                        ? "bg-[#eef6ff] text-blue-600 hover:bg-[#eef6ff]"
                        : "bg-[#eff4f9] text-slate-500 hover:bg-[#eff4f9]"
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
};
