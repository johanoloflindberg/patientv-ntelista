import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../public-api";

type WaitingPatient = {
  queue: string;
  name: string;
  patientId: string;
  waitingTime: string;
  waitingSince: string;
  status: string;
  phone: string;
  reminder: string;
  markings: string;
  expired?: boolean;
  muted?: boolean;
};

const patients: WaitingPatient[] = [
  {
    queue: "#4",
    name: "Anna Andersson",
    patientId: "PAT-000124",
    waitingTime: "94 dagar",
    waitingSince: "1 juli 2026",
    status: "Väntar",
    phone: "070-123 45 67",
    reminder: "Idag 14:00",
    markings: "★ ⚑  3",
  },
  {
    queue: "#5",
    name: "Erik Svensson",
    patientId: "PAT-000125",
    waitingTime: "78 dagar",
    waitingSince: "17 juli 2026",
    status: "Väntar",
    phone: "070-222 11 33",
    reminder: "8 okt",
    markings: "☆ ⚑",
  },
  {
    queue: "#8",
    name: "Maria Nilsson",
    patientId: "PAT-000126",
    waitingTime: "47 dagar",
    waitingSince: "17 aug 2026",
    status: "Väntar",
    phone: "072-445 66 77",
    reminder: "Ingen",
    markings: "★",
  },
  {
    queue: "#14",
    name: "Johan Berg",
    patientId: "PAT-000127",
    waitingTime: "34 dagar",
    waitingSince: "30 aug 2026",
    status: "Kontaktad",
    phone: "073-998 77 11",
    reminder: "Förfallen",
    markings: "⚑  2",
    expired: true,
  },
  {
    queue: "#21",
    name: "Karin Lund",
    patientId: "PAT-000128",
    waitingTime: "18 dagar",
    waitingSince: "15 sep 2026",
    status: "Väntar",
    phone: "076-112 23 34",
    reminder: "15 okt",
    markings: "☆",
    muted: true,
  },
];

const columns = [
  { label: "Kö", className: "w-[7%]" },
  { label: "Patient", className: "w-[21%]" },
  { label: "Väntetid", className: "w-[10%]" },
  { label: "Väntat sedan", className: "w-[12%]" },
  { label: "Status", className: "w-[10%]" },
  { label: "Telefon", className: "w-[14%]" },
  { label: "Påminnelse", className: "w-[14%]" },
  { label: "Markeringar", className: "w-[12%]" },
];

export const WaitingListSection = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  const filteredPatients = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const matchingPatients = patients.filter((patient) =>
      [
        patient.queue,
        patient.name,
        patient.patientId,
        patient.waitingTime,
        patient.waitingSince,
        patient.status,
        patient.phone,
        patient.reminder,
        patient.markings,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch),
    );

    return sortAscending ? matchingPatients : [...matchingPatients].reverse();
  }, [search, sortAscending]);

  return (
    <main className="flex min-h-[1000px] w-full flex-col bg-[#f8f9fb] font-[Inter,Helvetica]">
      <header className="flex min-h-[72px] w-full items-center justify-between gap-6 border border-slate-200 bg-white px-7 py-3">
        <div className="flex shrink-0 flex-col gap-0.5">
          <h1 className="text-xl font-bold leading-normal tracking-normal text-[#0f162a]">
            Väntelista
          </h1>
          <p className="text-[11px] font-normal leading-normal text-slate-500">
            42 väntande patienter
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <Input
            aria-label="Sök patient"
            className="h-9 w-60 rounded-lg border-slate-200 bg-[#f8f9fb] px-3 text-xs text-slate-500 shadow-none"
            defaultValue=""
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Sök patient…"
          />
          <Button
            type="button"
            className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
          >
            + Ny patient
          </Button>
          <Badge className="h-auto rounded-full bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
            JL
          </Badge>
        </div>
      </header>
      <section className="flex w-full flex-1 flex-col gap-[22px] bg-white px-7 pb-7 pt-[26px]">
        <div className="flex min-h-10 w-full items-center justify-between gap-4">
          <Input
            aria-label="Filtrera patientlista"
            className="h-10 w-full max-w-[360px] rounded-lg border-slate-200 bg-white px-3 text-xs text-slate-500 shadow-none"
            defaultValue=""
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Sök patient…"
          />
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-lg border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a]"
            >
              Filter
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSortAscending((current) => !current)}
              className="h-auto rounded-lg border-slate-200 bg-white px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a]"
            >
              Sortera
            </Button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <Table className="w-full min-w-[900px] table-fixed border-collapse">
            <colgroup>
              {columns.map((column) => (
                <col key={column.label} className={column.className} />
              ))}
            </colgroup>
            <TableHeader>
              <TableRow className="h-10 border border-slate-200 bg-[#fbfbfd] hover:bg-[#fbfbfd]">
                {columns.map((column) => (
                  <TableHead
                    key={column.label}
                    className="h-10 px-3 text-left text-[11px] font-semibold leading-normal text-slate-500"
                  >
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient, index) => (
                <TableRow
                  key={patient.patientId}
                  className={`h-[58px] border border-slate-200 bg-white hover:bg-slate-50 ${
                    patient.muted ? "opacity-[0.72]" : ""
                  }`}
                >
                  <TableCell className="px-3 py-0 text-[11px] font-normal text-slate-700">
                    {index === 0 ? (
                      <Link
                        className="block outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                        to="/x04-patientdetalj-u47-desktop"
                      >
                        {patient.queue}
                      </Link>
                    ) : (
                      patient.queue
                    )}
                  </TableCell>
                  <TableCell className="px-3 py-0 text-[11px] font-medium leading-[normal] text-slate-700">
                    {patient.name}
                    <br />
                    {patient.patientId}
                  </TableCell>
                  <TableCell className="px-3 py-0 text-xs font-semibold text-[#0f162a]">
                    {patient.waitingTime}
                  </TableCell>
                  <TableCell className="px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.waitingSince}
                  </TableCell>
                  <TableCell className="px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.status}
                  </TableCell>
                  <TableCell className="px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.phone}
                  </TableCell>
                  <TableCell
                    className={`px-3 py-0 text-[11px] font-normal ${
                      patient.expired ? "text-red-600" : "text-slate-700"
                    }`}
                  >
                    {patient.reminder}
                  </TableCell>
                  <TableCell className="px-3 py-0 text-[11px] font-normal text-slate-700">
                    {patient.markings}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className="h-[42px] border-0 hover:bg-white">
                <TableCell
                  colSpan={4}
                  className="px-0 py-0 text-[11px] font-normal text-slate-500"
                >
                  Visar 1–5 av 42
                </TableCell>
                <TableCell
                  colSpan={4}
                  className="px-0 py-0 text-right text-xs font-medium text-slate-700"
                >
                  ‹&nbsp;&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;…&nbsp;&nbsp;9&nbsp;&nbsp;›
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
};
