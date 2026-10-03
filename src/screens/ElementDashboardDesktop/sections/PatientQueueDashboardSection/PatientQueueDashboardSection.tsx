import { Link } from "react-router-dom";
import { Flag, Star } from "lucide-react";

import { AppHeader } from "../../../../components/layout/AppHeader";
import { EmptyState } from "../../../../components/feedback/EmptyState";
import { QueryErrorState } from "../../../../components/feedback/QueryErrorState";
import { useDashboard } from "../../../../features/dashboard/useDashboard";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
  cn,
} from "../../../../public-api";

function MetricSkeleton(): JSX.Element {
  return (
    <Card className="shadow-none">
      <CardContent className="flex flex-col gap-2 p-4">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-3 w-36" />
      </CardContent>
    </Card>
  );
}

export const PatientQueueDashboardSection = (): JSX.Element => {
  const { data, isLoading, isError, refetch, isFetching } = useDashboard();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader
        title="Dashboard"
        subtitle="Översikt över väntelista och påminnelser"
        primaryAction={{
          label: "+ Ny patient",
          to: "/x07-ny-patient-u47-desktop",
        }}
      />

      <main className="flex flex-1 flex-col gap-6 px-5 py-6 xl:px-8">
        {isError ? (
          <QueryErrorState
            title="Dashboard kunde inte laddas"
            onRetry={() => void refetch()}
          />
        ) : null}

        <section aria-labelledby="metrics-heading" className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <h2 id="metrics-heading" className="text-base font-semibold">
              Nyckeltal
            </h2>
            {isFetching && !isLoading ? (
              <span className="text-caption text-muted-foreground">Uppdaterar…</span>
            ) : null}
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <MetricSkeleton key={index} />
                ))
              : data?.metrics.map((metric) => (
                  <Card
                    key={metric.id}
                    className="border-border shadow-elevation-sm transition-shadow duration-base ease-out hover:shadow-elevation-md"
                  >
                    <CardContent className="flex flex-col gap-1 p-4">
                      <p className="text-caption text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="text-display text-foreground">{metric.value}</p>
                      <p className="text-caption text-muted-foreground">
                        {metric.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <Card className="shadow-none">
            <CardHeader className="flex-row items-center justify-between gap-2 space-y-0 pb-3">
              <CardTitle className="text-base">Påminnelser</CardTitle>
              <Badge variant="soft">{data?.reminders.length ?? "—"}</Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-4 pt-0">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-16 w-full" />
                ))
              ) : data?.reminders.length ? (
                data.reminders.map((reminder) => (
                  <div
                    key={reminder.id}
                    className={cn(
                      "flex items-start justify-between gap-3 rounded-lg border border-border px-3 py-3 transition-colors duration-fast",
                      reminder.overdue
                        ? "border-destructive/30 bg-destructive/5"
                        : "bg-card hover:bg-muted/40",
                    )}
                  >
                    <div className="flex min-w-0 flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant={reminder.overdue ? "destructive" : "accent"}>
                          {reminder.dateLabel}
                        </Badge>
                        <span className="text-caption text-muted-foreground">
                          {reminder.time}
                        </span>
                      </div>
                      <p className="truncate text-sm font-medium">{reminder.title}</p>
                      <p className="truncate text-caption text-muted-foreground">
                        {reminder.patient}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyState
                  title="Inga påminnelser"
                  description="När du skapar påminnelser visas de här."
                  actionLabel="Skapa påminnelse"
                  onAction={() => {
                    window.location.assign("/x10-ny-paminnelse-u47-dialog");
                  }}
                />
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="shadow-none">
              <CardHeader className="flex-row items-center justify-between gap-2 space-y-0 pb-3">
                <CardTitle className="text-base">Flaggade patienter</CardTitle>
                <Badge variant="soft">{data?.flaggedPatients.length ?? "—"}</Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 p-4 pt-0">
                {isLoading
                  ? Array.from({ length: 2 }).map((_, index) => (
                      <Skeleton key={index} className="h-14 w-full" />
                    ))
                  : data?.flaggedPatients.map((patient) => (
                      <Link
                        key={patient.id}
                        to="/x04-patientdetalj-u47-desktop"
                        className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-3 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            {patient.starred ? (
                              <Star className="size-3.5 fill-warning text-warning" />
                            ) : null}
                            {patient.flagged ? (
                              <Flag className="size-3.5 text-destructive" />
                            ) : null}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">
                              {patient.name}
                            </p>
                            <p className="truncate text-caption text-muted-foreground">
                              {patient.details}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline">{patient.status}</Badge>
                      </Link>
                    ))}
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Längst väntande</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 p-4 pt-0">
                {isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton key={index} className="h-8 w-full" />
                    ))
                  : data?.longestWaiting.map((row) => (
                      <p
                        key={row}
                        className="rounded-md bg-muted/50 px-3 py-2 text-sm text-foreground"
                      >
                        {row}
                      </p>
                    ))}
                <Button asChild variant="outline" size="sm" className="mt-1 w-fit">
                  <Link to="/x02-vantelista-u47-desktop">Öppna väntelista</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
