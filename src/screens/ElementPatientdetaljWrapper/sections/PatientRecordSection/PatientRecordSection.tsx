import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
  Textarea,
} from "../../../../public-api";

const historyItems = [
  "Idag 11:25  ·  Patient flaggad  ·  av Johan",
  "Idag 10:43  ·  Anteckningar uppdaterades",
  "3 okt 09:00  ·  Påminnelse skapad: Kontrollera remiss",
  "1 okt 14:22  ·  Flyttades från köplats #21 till #14",
];

const reminders = [
  {
    date: "Idag 14:00",
    description: "Kontrollera återbudstid",
    highlighted: true,
  },
  {
    date: "8 okt 09:00",
    description: "Kontrollera remiss",
    highlighted: false,
  },
];

const visibilityOptions = ["Hög", "Normal", "Låg"];

export const PatientRecordSection = (): JSX.Element => {
  const [visibility, setVisibility] = useState("Normal");

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#f8f9fb] font-['Inter',Helvetica] text-[#0f162a]">
      <header className="flex min-h-[72px] w-full flex-wrap items-center justify-between gap-4 border border-solid border-slate-200 bg-white px-5 py-4 sm:px-[30px]">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-bold leading-normal">Patient</h1>
          <p className="text-[11px] font-normal leading-normal text-slate-500">
            Administrativ översikt
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2.5">
          <Input
            aria-label="Sök patient"
            className="h-9 w-60 border-slate-200 bg-[#f8f9fb] text-xs shadow-none"
            placeholder="Sök patient…"
          />
          <Button className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold hover:bg-blue-700">
            + Ny patient
          </Button>
          <Badge className="rounded-full border-0 bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
            JL
          </Badge>
        </div>
      </header>
      <section className="flex w-full flex-col gap-[22px] bg-white px-5 pb-7 pt-[26px] sm:px-[30px]">
        <Link
          className="w-fit text-[11px] font-medium leading-normal text-blue-600 hover:underline"
          to="#"
        >
          ← Tillbaka till väntelistan
        </Link>
        <div className="flex w-full flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-[5px]">
            <h2 className="text-[26px] font-bold leading-normal">
              Anna Andersson&nbsp;&nbsp; ★&nbsp;&nbsp;⚑
            </h2>
            <p className="text-[11px] font-normal leading-normal text-slate-500">
              PAT-000124
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full border-0 bg-[#eef6ff] px-[9px] py-[5px] text-[11px] font-medium text-blue-600 hover:bg-[#eef6ff]">
                Väntar
              </Badge>
              <Badge className="rounded-full border-0 bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
                Köplats #14
              </Badge>
              <Badge className="rounded-full border-0 bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-[#0f162a] hover:bg-[#eff4f9]">
                47 dagar
              </Badge>
              <span className="text-[11px] font-normal leading-normal text-slate-500">
                Väntar sedan 17 aug 2026
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Link to="/x10-ny-paminnelse-u47-dialog">
              <Button className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold hover:bg-blue-700">
                + Påminnelse
              </Button>
            </Link>
            <Button
              aria-label="Fler patientalternativ"
              className="h-auto rounded-lg border border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a] hover:bg-slate-50"
              variant="outline"
            >
              ⋯
            </Button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-[18px] lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.945fr)]">
          <div className="flex min-w-0 flex-col gap-4">
            <Card className="rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-2.5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold leading-normal">
                    Anteckningar
                  </h3>
                  <span className="whitespace-nowrap text-[11px] font-normal text-amber-600">
                    ! Konflikt
                  </span>
                </div>
                <div className="rounded-lg border border-amber-100 bg-amber-50 px-3.5 py-2.5 text-[10px] leading-normal text-amber-700">
                  <p className="font-semibold">
                    Anteckningar har ändrats av en annan användare.
                  </p>
                  <p>Visa ny version · Behåll min text · Kopiera min text</p>
                </div>
                <Textarea
                  aria-label="Patientanteckningar"
                  className="min-h-[168px] resize-none rounded-lg border-slate-200 bg-[#fdfdfe] p-3.5 text-[13px] leading-normal text-slate-700 shadow-none"
                  defaultValue={`Patienten önskar helst tider efter kl. 14.

Kontaktad 29 september, kunde inte svara då. Följ upp möjlig återbudstid.`}
                />
              </CardContent>
            </Card>
            <Card className="min-h-[170px] rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-3 p-4">
                <h3 className="text-base font-semibold leading-normal">
                  Historik
                </h3>
                <div className="flex flex-col gap-2">
                  {historyItems.map((item) => (
                    <p
                      className="text-[11px] font-normal leading-normal text-slate-700"
                      key={item}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <aside className="flex min-w-0 flex-col gap-3.5">
            <Card className="min-h-[107px] rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-2.5 p-4">
                <h3 className="text-sm font-semibold leading-normal">
                  Kontakt
                </h3>
                <a
                  className="text-[13px] font-medium leading-normal text-blue-600 hover:underline"
                  href="tel:070-1234567"
                >
                  ☎ 070-123 45 67
                </a>
                <a
                  className="text-[13px] font-medium leading-normal text-blue-600 hover:underline"
                  href="mailto:anna@example.se"
                >
                  ✉ anna@example.se
                </a>
              </CardContent>
            </Card>
            <Card className="min-h-[157px] rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-2.5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold leading-normal">
                    Påminnelser
                  </h3>
                  <Button
                    className="h-auto p-0 text-[11px] font-medium text-blue-600 hover:bg-transparent hover:text-blue-700"
                    variant="ghost"
                  >
                    + Lägg till
                  </Button>
                </div>
                {reminders.map((reminder) => (
                  <div className="flex flex-col gap-0.5" key={reminder.date}>
                    <p
                      className={`text-[11px] font-semibold leading-normal ${
                        reminder.highlighted
                          ? "text-amber-600"
                          : "text-[#0f162a]"
                      }`}
                    >
                      {reminder.date}
                    </p>
                    <p className="text-[11px] font-normal leading-normal text-slate-700">
                      {reminder.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="min-h-[93px] rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-2.5 p-4">
                <h3 className="text-sm font-semibold leading-normal">
                  Synlighet
                </h3>
                <div className="flex items-center gap-1.5">
                  {visibilityOptions.map((option) => (
                    <Button
                      aria-pressed={visibility === option}
                      className={`h-auto rounded-full border-0 px-[9px] py-[5px] text-[11px] font-medium ${
                        visibility === option
                          ? "bg-[#eef6ff] text-blue-600 hover:bg-[#eef6ff]"
                          : "bg-[#eff4f9] text-slate-500 hover:bg-[#eff4f9]"
                      }`}
                      key={option}
                      onClick={() => setVisibility(option)}
                      type="button"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </main>
  );
};
