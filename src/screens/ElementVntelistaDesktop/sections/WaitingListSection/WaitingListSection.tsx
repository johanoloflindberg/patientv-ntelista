import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { Flag, Star } from "lucide-react";

import { AppHeader } from "../../../../components/layout/AppHeader";
import { EmptyState } from "../../../../components/feedback/EmptyState";
import { QueryErrorState } from "../../../../components/feedback/QueryErrorState";
import { useWaitlist } from "../../../../features/waitlist/useWaitlist";
import type { WaitingPatient } from "../../../../schemas/patient";
import {
  Badge,
  Button,
  Input,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  ToggleGroup,
  ToggleGroupItem,
  cn,
} from "../../../../public-api";

export const WaitingListSection = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusFilter =
    searchParams.get("status") === "active" ? "active" : "all";
  const [sorting, setSorting] = useState<SortingState>([
    { id: "waitingDays", desc: true },
  ]);
  const [globalFilter, setGlobalFilter] = useState("");

  const { data = [], isLoading, isError, refetch } = useWaitlist(statusFilter);

  const columns = useMemo<ColumnDef<WaitingPatient>[]>(
    () => [
      {
        accessorKey: "queue",
        header: "Kö",
        cell: ({ row }) => (
          <Link
            to="/x04-patientdetalj-u47-desktop"
            className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {row.original.queue}
          </Link>
        ),
      },
      {
        accessorKey: "name",
        header: "Patient",
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="font-medium">{row.original.name}</span>
            <span className="text-caption text-muted-foreground">
              {row.original.patientId}
            </span>
          </div>
        ),
      },
      {
        accessorKey: "waitingDays",
        header: "Väntetid",
        cell: ({ row }) => (
          <span
            className={cn(
              row.original.waitingDays >= 90 && "font-semibold text-destructive",
            )}
          >
            {row.original.waitingDays} dagar
          </span>
        ),
      },
      {
        accessorKey: "waitingSince",
        header: "Väntat sedan",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant="outline">{row.original.status}</Badge>,
      },
      {
        accessorKey: "phone",
        header: "Telefon",
      },
      {
        accessorKey: "reminder",
        header: "Påminnelse",
        cell: ({ row }) => (
          <span
            className={cn(
              row.original.overdueReminder && "font-medium text-destructive",
            )}
          >
            {row.original.reminder}
          </span>
        ),
      },
      {
        id: "markings",
        header: "Markeringar",
        cell: ({ row }) => (
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            {row.original.starred ? (
              <Star className="size-3.5 fill-warning text-warning" aria-label="Stjärnmärkt" />
            ) : null}
            {row.original.flagged ? (
              <Flag className="size-3.5 text-destructive" aria-label="Flaggad" />
            ) : null}
            {row.original.reminderCount > 0 ? (
              <Badge variant="soft">{row.original.reminderCount}</Badge>
            ) : null}
          </span>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader
        title="Väntelista"
        subtitle="Aktiva och historiska köplatser"
        primaryAction={{
          label: "+ Ny patient",
          to: "/x07-ny-patient-u47-desktop",
        }}
      />

      <main className="flex flex-1 flex-col gap-4 px-5 py-6 xl:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ToggleGroup
            type="single"
            value={statusFilter}
            onValueChange={(value) => {
              if (!value) return;
              const next = new URLSearchParams(searchParams);
              if (value === "all") next.delete("status");
              else next.set("status", value);
              setSearchParams(next, { replace: true });
            }}
            aria-label="Filtrera väntelista"
          >
            <ToggleGroupItem value="all">Alla</ToggleGroupItem>
            <ToggleGroupItem value="active">Endast aktiva</ToggleGroupItem>
          </ToggleGroup>

          <Input
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            placeholder="Filtrera i tabell…"
            aria-label="Filtrera väntelista"
            className="h-9 max-w-xs"
          />
        </div>

        {isError ? (
          <QueryErrorState
            title="Väntelistan kunde inte laddas"
            onRetry={() => void refetch()}
          />
        ) : null}

        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-elevation-sm">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 font-semibold"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </button>
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <TableRow key={index}>
                      {columns.map((_, cellIndex) => (
                        <TableCell key={`${index}-${cellIndex}`}>
                          <Skeleton className="h-5 w-full" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                : null}

              {!isLoading && table.getRowModel().rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    <EmptyState
                      title="Inga patienter matchar filtret"
                      description="Ändra filter eller lägg till en ny patient."
                      actionLabel="Ny patient"
                      onAction={() => {
                        window.location.assign("/x07-ny-patient-u47-desktop");
                      }}
                    />
                  </TableCell>
                </TableRow>
              ) : null}

              {!isLoading
                ? table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/x03-vantelista-u47-aktiva-filter">Visa aktivt filter</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};
