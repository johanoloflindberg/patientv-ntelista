import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const metrics = [
  {
    label: "Väntande patienter",
    value: "42",
    detail: "+8 senaste 7 dagarna",
  },
  {
    label: "Genomsnittlig väntetid",
    value: "38 dagar",
    detail: "−2 dagar mot förra veckan",
  },
  {
    label: "Medianväntetid",
    value: "31 dagar",
    detail: "Stabil nivå",
  },
  {
    label: "Längsta väntetid",
    value: "94 dagar",
    detail: "1 patient över 90 dagar",
  },
];

const reminders = [
  {
    time: "Igår 14:00",
    dateLabel: "Förfallen",
    title: "Kontrollera återbudstid",
    patient: "Anna Andersson · PAT-000124",
    overdue: true,
  },
  {
    time: "30 sep",
    dateLabel: "Förfallen",
    title: "Kontrollera remiss",
    patient: "Erik Svensson · PAT-000125",
    overdue: true,
  },
  {
    time: "09:00",
    dateLabel: "Idag",
    title: "Kontrollera remiss",
    patient: "Maria Nilsson · PAT-000126",
    overdue: false,
  },
  {
    time: "14:00",
    dateLabel: "Idag",
    title: "Följ upp återbudstid",
    patient: "Anna Andersson · PAT-000124",
    overdue: false,
  },
];

const flaggedPatients = [
  {
    icon: "★ ⚑",
    name: "Anna Andersson",
    details: "PAT-000124 · 47 dagar",
    status: "Väntar",
  },
  {
    icon: "⚑",
    name: "Johan Berg",
    details: "PAT-000127 · 63 dagar",
    status: "Väntar",
  },
];

const starredPatients = [
  {
    name: "Maria Nilsson",
    details: "PAT-000126 · 21 dagar",
    status: "Väntar",
  },
  {
    name: "Erik Svensson",
    details: "PAT-000125 · 34 dagar",
    status: "Bokad",
  },
];

const longestWaiting = [
  "Anna Andersson · 94 dagar · köplats #4",
  "Johan Berg · 78 dagar · köplats #9",
  "Karin Lund · 71 dagar · köplats #15",
];

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-[#eff4f9] px-[9px] py-[5px] font-['Inter',Helvetica] text-[11px] font-medium leading-none text-slate-700">
    {children}
  </span>
);

const SectionTitle = ({
  children,
  count,
}: {
  children: React.ReactNode;
  count?: string;
}) => (
  <div className="flex items-center gap-2">
    <h2 className="font-['Inter',Helvetica] text-base font-semibold leading-normal text-[#0f162a]">
      {children}
    </h2>
    {count && <Badge>{count}</Badge>}
  </div>
);

const PatientRow = ({
  icon,
  name,
  details,
  status,
}: {
  icon: string;
  name: string;
  details: string;
  status: string;
}) => (
  <div className="flex min-h-[60px] w-full items-center gap-2">
    <span className="w-[34px] shrink-0 font-['Inter',Helvetica] text-[13px] font-semibold text-amber-600">
      {icon}
    </span>
    <div className="min-w-0 flex-1">
      <p className="font-['Inter',Helvetica] text-[13px] font-medium leading-normal text-[#0f162a]">
        {name}
      </p>
      <p className="whitespace-nowrap font-['Inter',Helvetica] text-[11px] leading-normal text-slate-500">
        {details}
      </p>
    </div>
    <span className="rounded-full bg-[#eef6ff] px-[9px] py-[5px] font-['Inter',Helvetica] text-[11px] font-medium leading-none text-blue-600">
      {status}
    </span>
  </div>
);

export const PatientQueueDashboardSection = (): JSX.Element => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#f8f9fb] font-['Inter',Helvetica]">
      <header className="flex min-h-[72px] w-full flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white px-5 py-4 sm:px-[30px]">
        <div>
          <h1 className="text-xl font-bold leading-normal text-[#0f162a]">
            Dashboard
          </h1>
          <p className="text-[11px] leading-normal text-slate-500">
            Överblick över väntelistan och dagens uppgifter
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <Input
            aria-label="Sök patient"
            className="h-9 w-[180px] border-slate-200 bg-[#f8f9fb] text-xs sm:w-60"
            defaultValue=""
            placeholder="Sök patient…"
          />
          <Button
            asChild
            className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
          >
            <Link to="/x07-ny-patient-u47-desktop">+ Ny patient</Link>
          </Button>
          <span className="rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium leading-none text-slate-700">
            JL
          </span>
        </div>
      </header>
      <div className="flex w-full flex-col gap-[22px] bg-white px-5 pb-7 pt-[26px] sm:px-[30px]">
        <section
          aria-label="Väntelista statistik"
          className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className="rounded-xl border-slate-200 shadow-none"
            >
              <CardContent className="flex min-h-28 flex-col gap-[7px] p-4">
                <p className="text-[11px] font-medium leading-normal text-slate-500">
                  {metric.label}
                </p>
                <p className="text-[28px] font-bold leading-normal text-[#0f162a]">
                  {metric.value}
                </p>
                <p className="text-[10px] leading-normal text-slate-500">
                  {metric.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
        <div className="grid w-full grid-cols-1 items-start gap-[18px] xl:grid-cols-[minmax(0,720px)_minmax(320px,400px)]">
          <section
            className="flex min-w-0 flex-col gap-3"
            aria-labelledby="reminders-title"
          >
            <div id="reminders-title" className="flex items-center gap-2">
              <h2 className="text-base font-semibold leading-normal text-[#0f162a]">
                Förfallna påminnelser
              </h2>
              <Badge>3</Badge>
            </div>
            {reminders.slice(0, 2).map((reminder) => (
              <Card
                key={`${reminder.time}-${reminder.patient}`}
                className="rounded-xl border-slate-200 shadow-none"
              >
                <CardContent className="flex min-h-[72px] items-center gap-3.5 px-3.5 py-0">
                  <div className="w-[78px] shrink-0">
                    <p className="text-xs font-semibold leading-normal text-red-600">
                      {reminder.time}
                    </p>
                    <p className="text-[10px] leading-normal text-red-600">
                      {reminder.dateLabel}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium leading-normal text-[#0f162a]">
                      {reminder.title}
                    </p>
                    <p className="truncate text-[11px] leading-normal text-slate-500">
                      {reminder.patient}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-auto shrink-0 rounded-lg border-slate-200 px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a]"
                  >
                    ✓ Klar
                  </Button>
                </CardContent>
              </Card>
            ))}

            <div className="flex items-center gap-2 pt-1">
              <h2 className="text-base font-semibold leading-normal text-[#0f162a]">
                Idag
              </h2>
              <Badge>5</Badge>
            </div>
            {reminders.slice(2).map((reminder) => (
              <Card
                key={`${reminder.time}-${reminder.patient}`}
                className="rounded-xl border-slate-200 shadow-none"
              >
                <CardContent className="flex min-h-[72px] items-center gap-3.5 px-3.5 py-0">
                  <div className="w-[78px] shrink-0">
                    <p className="text-xs font-semibold leading-normal text-[#0f162a]">
                      {reminder.time}
                    </p>
                    <p className="text-[10px] leading-normal text-slate-500">
                      {reminder.dateLabel}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium leading-normal text-[#0f162a]">
                      {reminder.title}
                    </p>
                    <p className="truncate text-[11px] leading-normal text-slate-500">
                      {reminder.patient}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-auto shrink-0 rounded-lg border-slate-200 px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a]"
                  >
                    ✓ Klar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </section>
          <aside className="flex flex-col gap-3.5">
            <Card className="rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-2 p-4">
                <SectionTitle count="3">Flaggade patienter</SectionTitle>
                {flaggedPatients.map((patient) => (
                  <PatientRow key={patient.name} {...patient} />
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-2 p-4">
                <SectionTitle count="3">Stjärnmärkta</SectionTitle>
                {starredPatients.map((patient) => (
                  <PatientRow key={patient.name} icon="★" {...patient} />
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-xl border-slate-200 shadow-none">
              <CardContent className="flex flex-col gap-2 p-4">
                <SectionTitle>Längst väntande</SectionTitle>
                {longestWaiting.map((patient, index) => (
                  <p
                    key={patient}
                    className={`whitespace-nowrap text-[11px] leading-normal ${
                      index === 0
                        ? "font-medium text-[#0f162a]"
                        : "text-slate-700"
                    }`}
                  >
                    {patient}
                  </p>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
};
