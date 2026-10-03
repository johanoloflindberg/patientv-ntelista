import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

const filters = [
  {
    label: "Flaggade ×",
    className: "bg-[#fffaeb] text-amber-600",
  },
  {
    label: "> 60 dagar ×",
    className: "bg-[#eef6ff] text-blue-600",
  },
  {
    label: "Påminnelse idag ×",
    className: "bg-[#eff4f9] text-slate-700",
  },
];

const columns = [
  { label: "Kö", className: "w-[70px]" },
  { label: "Patient", className: "w-[230px]" },
  { label: "Väntetid", className: "w-[105px]" },
  { label: "Väntat sedan", className: "w-[120px]" },
  { label: "Status", className: "w-[100px]" },
  { label: "Telefon", className: "w-[145px]" },
  { label: "Påminnelse", className: "w-[145px]" },
  { label: "Markeringar", className: "w-[110px]" },
];

const patients = [
  {
    queue: "#4",
    name: "Anna Andersson",
    id: "PAT-000124",
    wait: "94 dagar",
    since: "1 juli 2026",
    status: "Väntar",
    phone: "070-123 45 67",
    reminder: "Idag 14:00",
    markers: "★ ⚑  3",
  },
  {
    queue: "#5",
    name: "Erik Svensson",
    id: "PAT-000125",
    wait: "78 dagar",
    since: "17 juli 2026",
    status: "Väntar",
    phone: "070-222 11 33",
    reminder: "Idag 15:30",
    markers: "⚑",
  },
];

export const WaitingListSection = (): JSX.Element => {
  const [activeFilters, setActiveFilters] = useState(filters);

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <section className="flex min-h-screen w-full flex-col bg-[#f8f9fb] font-['Inter',Helvetica]">
      <header className="flex min-h-[72px] w-full flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white px-5 py-4 sm:px-[30px]">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-bold leading-normal tracking-normal text-[#0f162a]">
            Väntelista
          </h1>
          <p className="text-[11px] font-normal leading-normal text-slate-500">
            8 patienter matchar filtren
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2.5">
          <Input
            aria-label="Sök patient"
            defaultValue=""
            placeholder="Sök patient…"
            className="h-9 w-60 border-slate-200 bg-[#f8f9fb] text-xs text-slate-500 placeholder:text-slate-500"
          />
          <Button
            type="button"
            className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
          >
            + Ny patient
          </Button>
          <span className="rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium leading-normal text-slate-700">
            JL
          </span>
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col gap-[22px] bg-white px-5 pb-7 pt-[26px] sm:px-[30px]">
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              aria-label={`Ta bort filtret ${filter.label.replace(" ×", "")}`}
              onClick={() =>
                setActiveFilters((currentFilters) =>
                  currentFilters.filter(
                    (currentFilter) => currentFilter.label !== filter.label,
                  ),
                )
              }
              className={`rounded-full px-[9px] py-[5px] text-[11px] font-medium leading-normal ${filter.className}`}
            >
              {filter.label}
            </button>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={clearFilters}
            className="h-auto rounded-lg border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a]"
          >
            Rensa filter
          </Button>
        </div>
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[1080px] table-fixed border-collapse">
            <TableHeader>
              <TableRow className="h-10 border border-slate-200 bg-[#fbfbfd] hover:bg-[#fbfbfd]">
                {columns.map((column) => (
                  <TableHead
                    key={column.label}
                    className={`${column.className} px-3 py-0 text-left text-[11px] font-semibold leading-normal text-slate-500`}
                  >
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow
                  key={patient.id}
                  className="h-[58px] border border-slate-200 bg-white hover:bg-slate-50"
                >
                  <TableCell className="w-[70px] px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.queue}
                  </TableCell>
                  <TableCell className="w-[230px] px-3 py-0 text-[11px] font-medium leading-normal text-slate-700">
                    <Link
                      className="block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      to="/x04-patientdetalj-u47-desktop"
                    >
                      {patient.name}
                      <br />
                      {patient.id}
                    </Link>
                  </TableCell>
                  <TableCell className="w-[105px] px-3 py-0 text-xs font-semibold text-[#0f162a]">
                    {patient.wait}
                  </TableCell>
                  <TableCell className="w-[120px] px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.since}
                  </TableCell>
                  <TableCell className="w-[100px] px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.status}
                  </TableCell>
                  <TableCell className="w-[145px] px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.phone}
                  </TableCell>
                  <TableCell className="w-[145px] px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.reminder}
                  </TableCell>
                  <TableCell className="w-[110px] px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.markers}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Card className="w-full rounded-xl border-slate-200 bg-white shadow-none">
          <CardContent className="flex min-h-[150px] flex-col items-start gap-2 px-5 pb-5 pt-5">
            <h2 className="text-sm font-semibold leading-normal text-[#0f162a]">
              Aktiva filter
            </h2>
            <p className="text-xs font-normal leading-normal text-slate-700">
              Flaggade patienter som väntat mer än 60 dagar och har en
              påminnelse idag.
            </p>
          </CardContent>
        </Card>
      </main>
    </section>
  );
};
