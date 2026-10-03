import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Input,
  ToggleGroup,
  ToggleGroupItem,
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
    urgent: true,
  },
  {
    date: "8 okt 09:00",
    description: "Kontrollera remiss",
    urgent: false,
  },
  {
    date: "15 okt",
    description: "Följ upp väntelistan",
    urgent: false,
  },
];

const patientBadges = [
  {
    label: "Väntar",
    className: "bg-[#eef6ff] text-blue-600",
  },
  {
    label: "Köplats #14",
    className: "bg-[#eff4f9] text-slate-700",
  },
  {
    label: "47 dagar",
    className: "bg-[#eff4f9] text-[#0f162a]",
  },
];

export const PatientProfileSection = (): JSX.Element => {
  return (
    <section className="flex min-h-screen w-full flex-col bg-[#f8f9fb] font-['Inter',Helvetica] text-[#0f162a]">
      <header className="flex min-h-[72px] w-full items-center justify-between gap-5 border border-solid border-slate-200 bg-white px-5 py-3 sm:px-[30px]">
        <div className="flex shrink-0 flex-col gap-0.5">
          <h1 className="text-xl font-bold leading-normal">Patient</h1>
          <p className="text-[11px] font-normal leading-normal text-slate-500">
            Administrativ översikt
          </p>
        </div>
        <div className="flex min-w-0 items-center gap-2.5">
          <Input
            className="h-9 w-40 border-slate-200 bg-[#f8f9fb] text-xs text-slate-500 sm:w-60"
            placeholder="Sök patient…"
            aria-label="Sök patient"
          />
          <Button
            className="h-auto shrink-0 rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
            type="button"
          >
            + Ny patient
          </Button>
          <span className="shrink-0 rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700">
            JL
          </span>
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col gap-[22px] bg-white px-5 pb-7 pt-[26px] sm:px-[30px]">
        <Link
          className="w-fit text-[11px] font-medium leading-normal text-blue-600 hover:underline"
          to="#"
        >
          ← Tillbaka till väntelistan
        </Link>
        <div className="flex w-full max-w-[1080px] flex-col justify-between gap-5 sm:min-h-[92px] sm:flex-row sm:items-center">
          <div className="flex flex-col items-start gap-[5px]">
            <h2 className="text-[22px] font-bold leading-normal sm:text-[26px]">
              Anna Andersson&nbsp;&nbsp; ★&nbsp;&nbsp;⚑
            </h2>
            <p className="text-[11px] font-normal leading-normal text-slate-500">
              PAT-000124
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {patientBadges.map((badge) => (
                <span
                  className={`rounded-full px-[9px] py-[5px] text-[11px] font-medium leading-normal ${badge.className}`}
                  key={badge.label}
                >
                  {badge.label}
                </span>
              ))}
              <span className="text-[11px] font-normal leading-normal text-slate-500">
                Väntar sedan 17 aug 2026
              </span>
            </div>
          </div>
          <div className="flex shrink-0 items-start gap-2">
            <Link
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
              to="/x10-ny-paminnelse-u47-dialog"
            >
              + Påminnelse
            </Link>
            <Button
              className="h-auto rounded-lg border border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a] hover:bg-slate-50"
              type="button"
              aria-label="Fler patientåtgärder"
            >
              ⋯
            </Button>
          </div>
        </div>
        <div className="grid w-full max-w-[1080px] grid-cols-1 items-start gap-[18px] lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="flex flex-col gap-4">
            <Card className="h-[360px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex h-full flex-col gap-2.5 p-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-semibold leading-normal">
                    Anteckningar
                  </h3>
                  <span className="text-[11px] font-normal leading-normal text-amber-600">
                    ! Konflikt
                  </span>
                </div>
                <div className="rounded-lg border border-amber-100 bg-[#fffbeb] px-3.5 py-2 text-[10px] leading-[15px] text-amber-700">
                  <p className="font-semibold">
                    Anteckningar har ändrats av en annan användare.
                  </p>
                  <p>Visa ny version · Behåll min text · Kopiera min text</p>
                </div>
                <div
                  className="min-h-0 flex-1 rounded-lg border border-slate-200 bg-[#fdfdfe] p-3.5 text-[13px] leading-normal text-slate-700"
                  role="textbox"
                  aria-label="Patientanteckningar"
                  tabIndex={0}
                >
                  Patienten önskar helst tider efter kl. 14.
                  <br />
                  <br />
                  Kontaktad 29 september, kunde inte svara då. Följ upp möjlig
                  återbudstid.
                </div>
              </CardContent>
            </Card>
            <Card className="h-60 overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col items-start gap-3 p-4">
                <h3 className="text-base font-semibold leading-normal">
                  Historik
                </h3>
                <div className="flex flex-col gap-2 text-[11px] leading-normal text-slate-700">
                  {historyItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <aside className="flex flex-col gap-3.5">
            <Card className="h-[150px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col items-start gap-2.5 p-4">
                <h3 className="text-sm font-semibold leading-normal">
                  Kontakt
                </h3>
                <a
                  className="text-[13px] font-medium leading-normal text-blue-600 hover:underline"
                  href="tel:0701234567"
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
            <Card className="h-[280px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col items-start gap-2.5 p-4">
                <div className="flex w-full items-start justify-between">
                  <h3 className="text-sm font-semibold leading-normal">
                    Påminnelser
                  </h3>
                  <button
                    className="text-[11px] font-medium leading-normal text-blue-600 hover:underline"
                    type="button"
                  >
                    + Lägg till
                  </button>
                </div>
                {reminders.map((reminder) => (
                  <div
                    className="flex flex-col gap-0.5 text-[11px] leading-normal"
                    key={`${reminder.date}-${reminder.description}`}
                  >
                    <span
                      className={
                        reminder.urgent
                          ? "font-semibold text-amber-600"
                          : "font-semibold text-[#0f162a]"
                      }
                    >
                      {reminder.date}
                    </span>
                    <span className="font-normal text-slate-700">
                      {reminder.description}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="h-[130px] overflow-hidden rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col items-start gap-2.5 p-4">
                <h3 className="text-sm font-semibold leading-normal">
                  Synlighet
                </h3>
                <ToggleGroup
                  className="gap-1.5"
                  defaultValue="normal"
                  type="single"
                  aria-label="Synlighet"
                >
                  <ToggleGroupItem
                    className="h-auto rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-500 data-[state=on]:bg-[#eef6ff] data-[state=on]:text-blue-600"
                    value="high"
                    aria-label="Hög synlighet"
                  >
                    Hög
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="h-auto rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-500 data-[state=on]:bg-[#eef6ff] data-[state=on]:text-blue-600"
                    value="normal"
                    aria-label="Normal synlighet"
                  >
                    Normal
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="h-auto rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-500 data-[state=on]:bg-[#eef6ff] data-[state=on]:text-blue-600"
                    value="low"
                    aria-label="Låg synlighet"
                  >
                    Låg
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </section>
  );
};
