import { useMemo, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

type Reminder = {
  id: number;
  time: string;
  status: "Förfallen" | "Idag";
  title: string;
  patient: string;
  overdue: boolean;
};

const reminders: Reminder[] = [
  {
    id: 1,
    time: "Igår 14:00",
    status: "Förfallen",
    title: "Kontrollera återbudstid",
    patient: "Anna Andersson · PAT-000124",
    overdue: true,
  },
  {
    id: 2,
    time: "30 sep",
    status: "Förfallen",
    title: "Kontrollera remiss",
    patient: "Johan Berg · PAT-000127",
    overdue: true,
  },
  {
    id: 3,
    time: "09:00",
    status: "Idag",
    title: "Kontrollera remiss",
    patient: "Maria Nilsson · PAT-000126",
    overdue: false,
  },
  {
    id: 4,
    time: "14:00",
    status: "Idag",
    title: "Följ upp återbudstid",
    patient: "Anna Andersson · PAT-000124",
    overdue: false,
  },
];

const filters = [
  {
    id: "overdue",
    label: "Förfallna 3",
    className: "bg-[#fdf1f1] text-red-600",
  },
  {
    id: "today",
    label: "Idag 5",
    className: "bg-[#eef6ff] text-blue-600",
  },
  {
    id: "upcoming",
    label: "Kommande 8",
    className: "bg-[#eff4f9] text-slate-700",
  },
  {
    id: "completed",
    label: "Klarmarkerade",
    className: "bg-[#eff4f9] text-slate-500",
  },
] as const;

export const RemindersDashboardSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("overdue");
  const [search, setSearch] = useState("");
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  const visibleReminders = useMemo(() => {
    const query = search.trim().toLowerCase();

    return reminders.filter((reminder) => {
      const isCompleted = completedIds.includes(reminder.id);
      const matchesSearch =
        !query ||
        reminder.title.toLowerCase().includes(query) ||
        reminder.patient.toLowerCase().includes(query);

      if (!matchesSearch) {
        return false;
      }

      if (activeFilter === "completed") {
        return isCompleted;
      }

      if (isCompleted) {
        return false;
      }

      if (activeFilter === "overdue") {
        return reminder.overdue;
      }

      if (activeFilter === "today") {
        return reminder.status === "Idag";
      }

      return false;
    });
  }, [activeFilter, completedIds, search]);

  const toggleCompleted = (id: number) => {
    setCompletedIds((current) =>
      current.includes(id)
        ? current.filter((completedId) => completedId !== id)
        : [...current, id],
    );
  };

  return (
    <section className="flex min-h-[1000px] w-full flex-col bg-[#f8f9fb] font-[Inter,Helvetica]">
      <header className="flex min-h-[72px] w-full flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white px-5 py-4 sm:px-[30px]">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-bold leading-normal text-[#0f162a]">
            Påminnelser
          </h1>
          <p className="text-[11px] font-normal leading-normal text-slate-500">
            Interna påminnelser till personalen
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2.5">
          <Input
            aria-label="Sök patient"
            defaultValue=""
            placeholder="Sök patient…"
            onChange={(event) => setSearch(event.target.value)}
            className="h-9 w-full rounded-lg border-slate-200 bg-[#f8f9fb] px-3 text-xs text-slate-500 placeholder:text-slate-500 sm:w-60"
          />
          <Button
            type="button"
            className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
          >
            + Ny patient
          </Button>
          <Badge className="rounded-full border-0 bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
            JL
          </Badge>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-start gap-[22px] bg-white px-5 pb-7 pt-[26px] sm:px-[30px]">
        <nav
          aria-label="Påminnelsefilter"
          className="flex flex-wrap items-center gap-1.5"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
              className={`h-auto rounded-full border-0 px-[9px] py-[5px] text-[11px] font-medium shadow-none hover:opacity-90 ${filter.className}`}
            >
              {filter.label}
            </Button>
          ))}
        </nav>
        <div className="flex w-full max-w-[660px] flex-col gap-2.5">
          {visibleReminders.map((reminder) => (
            <Card
              key={reminder.id}
              className="w-full rounded-xl border-slate-200 bg-white shadow-none"
            >
              <CardContent className="flex min-h-[72px] items-center gap-3.5 px-3.5 py-0">
                <div className="flex w-[78px] shrink-0 flex-col items-start gap-0.5">
                  <span
                    className={`text-xs font-semibold leading-normal ${
                      reminder.overdue ? "text-red-600" : "text-[#0f162a]"
                    }`}
                  >
                    {reminder.time}
                  </span>
                  <span
                    className={`text-[10px] font-normal leading-normal ${
                      reminder.overdue ? "text-red-600" : "text-slate-500"
                    }`}
                  >
                    {reminder.status}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium leading-normal text-[#0f162a]">
                    {reminder.title}
                  </p>
                  <p className="truncate text-[11px] font-normal leading-normal text-slate-500">
                    {reminder.patient}
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => toggleCompleted(reminder.id)}
                  className="h-auto shrink-0 rounded-lg border border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a] hover:bg-slate-50"
                >
                  ✓ Klar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </section>
  );
};
