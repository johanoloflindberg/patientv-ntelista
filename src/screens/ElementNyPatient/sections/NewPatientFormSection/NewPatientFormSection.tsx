import { useId, useState, useTransition, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AppHeader } from "../../../../components/layout/AppHeader";
import { createPatient } from "../../../../api/mock-data";
import { queryKeys } from "../../../../lib/query-client";
import {
  newPatientSchema,
  type NewPatientInput,
} from "../../../../schemas/patient";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "../../../../public-api";

export const NewPatientFormSection = (): JSX.Element => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const formId = useId();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPendingTransition, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPatientInput>({
    resolver: zodResolver(newPatientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      personalNumber: "",
      phone: "",
      email: "",
      waitingSince: new Date().toISOString().slice(0, 10),
      source: "Manuell",
      note: "",
    },
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: createPatient,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.waitlist() });
      await queryClient.invalidateQueries({ queryKey: queryKeys.dashboard });
      startTransition(() => {
        navigate("/x04-patientdetalj-u47-desktop");
      });
    },
    onError: () => {
      setSubmitError("Patienten kunde inte sparas. Försök igen.");
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    await mutation.mutateAsync(values);
  });

  const busy = isSubmitting || mutation.isPending || isPendingTransition;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader
        title="Ny patient"
        subtitle="Lägg till patient i väntelistan"
        primaryAction={{
          label: "+ Ny patient",
          to: "/x07-ny-patient-u47-desktop",
        }}
      />

      <main className="flex w-full flex-1 items-start px-5 py-6 xl:px-8">
        <Card className="w-full max-w-[900px] shadow-elevation-sm">
          <CardHeader>
            <CardTitle>Patientuppgifter</CardTitle>
            <CardDescription>
              Obligatoriska fält valideras innan patienten läggs till.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id={formId}
              className="flex flex-col gap-4"
              onSubmit={onSubmit}
              noValidate
            >
              {submitError ? (
                <Alert variant="destructive">
                  <AlertTitle>Kunde inte spara</AlertTitle>
                  <AlertDescription>{submitError}</AlertDescription>
                </Alert>
              ) : null}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  id={`${formId}-firstName`}
                  label="Förnamn"
                  error={errors.firstName?.message}
                >
                  <Input
                    id={`${formId}-firstName`}
                    autoComplete="given-name"
                    aria-invalid={Boolean(errors.firstName)}
                    {...register("firstName")}
                  />
                </Field>
                <Field
                  id={`${formId}-lastName`}
                  label="Efternamn"
                  error={errors.lastName?.message}
                >
                  <Input
                    id={`${formId}-lastName`}
                    autoComplete="family-name"
                    aria-invalid={Boolean(errors.lastName)}
                    {...register("lastName")}
                  />
                </Field>
                <Field
                  id={`${formId}-personalNumber`}
                  label="Personnummer"
                  error={errors.personalNumber?.message}
                >
                  <Input
                    id={`${formId}-personalNumber`}
                    placeholder="ÅÅÅÅMMDD-XXXX"
                    inputMode="numeric"
                    aria-invalid={Boolean(errors.personalNumber)}
                    {...register("personalNumber")}
                  />
                </Field>
                <Field
                  id={`${formId}-phone`}
                  label="Telefonnummer"
                  error={errors.phone?.message}
                >
                  <Input
                    id={`${formId}-phone`}
                    type="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone")}
                  />
                </Field>
                <Field
                  id={`${formId}-waitingSince`}
                  label="Väntar sedan"
                  error={errors.waitingSince?.message}
                >
                  <Input
                    id={`${formId}-waitingSince`}
                    type="date"
                    aria-invalid={Boolean(errors.waitingSince)}
                    {...register("waitingSince")}
                  />
                </Field>
                <Field
                  id={`${formId}-source`}
                  label="Källa"
                  error={errors.source?.message}
                >
                  <Input
                    id={`${formId}-source`}
                    list={`${formId}-source-options`}
                    aria-invalid={Boolean(errors.source)}
                    {...register("source")}
                  />
                  <datalist id={`${formId}-source-options`}>
                    <option value="Manuell" />
                    <option value="Import" />
                    <option value="Remiss" />
                  </datalist>
                </Field>
              </div>

              <Field
                id={`${formId}-email`}
                label="E-postadress"
                error={errors.email?.message}
              >
                <Input
                  id={`${formId}-email`}
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
              </Field>

              <Field
                id={`${formId}-note`}
                label="Anteckning"
                error={errors.note?.message}
              >
                <Input
                  id={`${formId}-note`}
                  placeholder="Valfri administrativ anteckning"
                  aria-invalid={Boolean(errors.note)}
                  {...register("note")}
                />
              </Field>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="soft">Initial köplats: sist</Badge>
                <Badge variant="accent">Synlighet: Normal</Badge>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  disabled={busy}
                  onClick={() => navigate(-1)}
                >
                  Avbryt
                </Button>
                <Button type="submit" disabled={busy}>
                  {busy ? "Sparar…" : "Lägg till patient"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}): JSX.Element {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5" data-invalid={Boolean(error) || undefined}>
      <Label htmlFor={id} className="text-caption font-medium text-foreground">
        {label}
      </Label>
      <div aria-describedby={error ? errorId : undefined}>{children}</div>
      {error ? (
        <p id={errorId} role="alert" className="text-caption text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
