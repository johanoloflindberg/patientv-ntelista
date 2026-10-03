import type { DashboardData, WaitingPatient } from "../schemas/patient";

export const mockDashboard: DashboardData = {
  metrics: [
    {
      id: "waiting",
      label: "Väntande patienter",
      value: "42",
      detail: "+8 senaste 7 dagarna",
    },
    {
      id: "avg",
      label: "Genomsnittlig väntetid",
      value: "38 dagar",
      detail: "−2 dagar mot förra veckan",
    },
    {
      id: "median",
      label: "Medianväntetid",
      value: "31 dagar",
      detail: "Stabil nivå",
    },
    {
      id: "longest",
      label: "Längsta väntetid",
      value: "94 dagar",
      detail: "1 patient över 90 dagar",
    },
  ],
  reminders: [
    {
      id: "r1",
      time: "Igår 14:00",
      dateLabel: "Förfallen",
      title: "Kontrollera återbudstid",
      patient: "Anna Andersson · PAT-000124",
      overdue: true,
    },
    {
      id: "r2",
      time: "30 sep",
      dateLabel: "Förfallen",
      title: "Kontrollera remiss",
      patient: "Erik Svensson · PAT-000125",
      overdue: true,
    },
    {
      id: "r3",
      time: "09:00",
      dateLabel: "Idag",
      title: "Kontrollera remiss",
      patient: "Maria Nilsson · PAT-000126",
      overdue: false,
    },
    {
      id: "r4",
      time: "14:00",
      dateLabel: "Idag",
      title: "Följ upp återbudstid",
      patient: "Anna Andersson · PAT-000124",
      overdue: false,
    },
  ],
  flaggedPatients: [
    {
      id: "PAT-000124",
      name: "Anna Andersson",
      details: "PAT-000124 · 47 dagar",
      status: "Väntar",
      starred: true,
      flagged: true,
    },
    {
      id: "PAT-000127",
      name: "Johan Berg",
      details: "PAT-000127 · 63 dagar",
      status: "Väntar",
      starred: false,
      flagged: true,
    },
  ],
  starredPatients: [
    {
      id: "PAT-000126",
      name: "Maria Nilsson",
      details: "PAT-000126 · 21 dagar",
      status: "Väntar",
    },
    {
      id: "PAT-000125",
      name: "Erik Svensson",
      details: "PAT-000125 · 34 dagar",
      status: "Bokad",
    },
  ],
  longestWaiting: [
    "Anna Andersson · 94 dagar · köplats #4",
    "Johan Berg · 78 dagar · köplats #9",
    "Karin Lund · 71 dagar · köplats #15",
  ],
};

export const mockWaitlist: WaitingPatient[] = [
  {
    queue: "#4",
    name: "Anna Andersson",
    patientId: "PAT-000124",
    waitingDays: 94,
    waitingSince: "1 juli 2026",
    status: "Väntar",
    phone: "070-123 45 67",
    reminder: "Idag 14:00",
    starred: true,
    flagged: true,
    reminderCount: 3,
  },
  {
    queue: "#5",
    name: "Erik Svensson",
    patientId: "PAT-000125",
    waitingDays: 78,
    waitingSince: "17 juli 2026",
    status: "Väntar",
    phone: "070-222 11 33",
    reminder: "8 okt",
    starred: false,
    flagged: true,
    reminderCount: 0,
  },
  {
    queue: "#8",
    name: "Maria Nilsson",
    patientId: "PAT-000126",
    waitingDays: 47,
    waitingSince: "17 aug 2026",
    status: "Väntar",
    phone: "072-445 66 77",
    reminder: "Ingen",
    starred: true,
    flagged: false,
    reminderCount: 0,
  },
  {
    queue: "#14",
    name: "Johan Berg",
    patientId: "PAT-000127",
    waitingDays: 34,
    waitingSince: "30 aug 2026",
    status: "Kontaktad",
    phone: "073-998 77 11",
    reminder: "Förfallen",
    starred: false,
    flagged: true,
    reminderCount: 2,
    overdueReminder: true,
  },
  {
    queue: "#21",
    name: "Karin Lund",
    patientId: "PAT-000128",
    waitingDays: 18,
    waitingSince: "15 sep 2026",
    status: "Väntar",
    phone: "076-112 23 34",
    reminder: "15 okt",
    starred: false,
    flagged: false,
    reminderCount: 0,
  },
];

function delay<T>(value: T, ms = 450): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(value), ms);
  });
}

export async function fetchDashboard(): Promise<DashboardData> {
  return delay(mockDashboard);
}

export async function fetchWaitlist(
  filter: "all" | "active" = "all",
): Promise<WaitingPatient[]> {
  const data =
    filter === "active"
      ? mockWaitlist.filter((patient) => patient.status === "Väntar")
      : mockWaitlist;
  return delay(data);
}

export async function createPatient(
  input: unknown,
): Promise<{ id: string }> {
  // Schema validation happens at the call site; this simulates a network write.
  void input;
  return delay({ id: "PAT-000129" }, 600);
}
