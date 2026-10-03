import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

const pairedFields = [
  [
    { id: "first-name", label: "Förnamn", value: "Anna" },
    { id: "last-name", label: "Efternamn", value: "Andersson" },
  ],
  [
    {
      id: "personal-number",
      label: "Personnummer",
      value: "ÅÅÅÅMMDD-XXXX",
    },
    {
      id: "phone-number",
      label: "Telefonnummer",
      value: "070-123 45 67",
    },
  ],
  [
    { id: "waiting-since", label: "Väntar sedan", value: "2026-10-03" },
    { id: "source", label: "Källa", value: "Manuell" },
  ],
];

const fullWidthFields = [
  {
    id: "email",
    label: "E-postadress",
    value: "anna@example.se",
  },
  {
    id: "note",
    label: "Anteckning",
    value: "Valfri administrativ anteckning",
  },
];

export const NewPatientFormSection = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8f9fb] font-['Inter',Helvetica]">
      <header className="flex min-h-[72px] w-full items-center justify-between gap-6 border border-solid border-slate-200 bg-white px-5 py-3 sm:px-[30px]">
        <div className="flex shrink-0 flex-col items-start gap-0.5">
          <h1 className="text-xl font-bold leading-normal tracking-[0] text-[#0f162a]">
            Ny patient
          </h1>
          <p className="text-[11px] font-normal leading-normal tracking-[0] text-slate-500">
            Lägg till patient i väntelistan
          </p>
        </div>
        <div className="flex min-w-0 items-center gap-2.5">
          <Input
            aria-label="Sök patient"
            className="h-9 w-40 bg-[#f8f9fb] text-xs text-slate-500 sm:w-60"
            placeholder="Sök patient…"
          />
          <Button
            type="button"
            className="h-auto shrink-0 rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
          >
            + Ny patient
          </Button>
          <Badge className="shrink-0 rounded-full border-0 bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
            JL
          </Badge>
        </div>
      </header>
      <main className="flex w-full flex-1 items-start bg-white px-5 pb-7 pt-[26px] sm:px-[30px]">
        <Card className="w-full max-w-[900px] overflow-hidden rounded-xl border border-solid border-slate-200 bg-white p-6 shadow-none">
          <CardHeader className="p-0">
            <CardTitle className="text-lg font-semibold leading-normal tracking-[0] text-[#0f162a]">
              Patientuppgifter
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-0 pt-4">
            {pairedFields.map((fieldGroup) => (
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {fieldGroup.map((field) => (
                  <div key={field.id} className="flex flex-col gap-1.5">
                    <Label
                      htmlFor={field.id}
                      className="text-[11px] font-medium leading-normal text-slate-700"
                    >
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      defaultValue={field.value}
                      className="h-10 rounded-lg border-slate-200 bg-white px-3 text-xs text-slate-500"
                    />
                  </div>
                ))}
              </div>
            ))}

            {fullWidthFields.map((field) => (
              <div key={field.id} className="flex w-full flex-col gap-1.5">
                <Label
                  htmlFor={field.id}
                  className="text-[11px] font-medium leading-normal text-slate-700"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  defaultValue={field.value}
                  className="h-10 rounded-lg border-slate-200 bg-white px-3 text-xs text-slate-500"
                />
              </div>
            ))}

            <div className="flex flex-wrap items-start gap-3">
              <Badge className="rounded-full border-0 bg-[#eff4f9] px-[9px] py-[5px] text-[11px] font-medium text-slate-700 hover:bg-[#eff4f9]">
                Initial köplats: sist
              </Badge>
              <Badge className="rounded-full border-0 bg-[#eef6ff] px-[9px] py-[5px] text-[11px] font-medium text-blue-600 hover:bg-[#eef6ff]">
                Synlighet: Normal
              </Badge>
            </div>
            <div className="flex items-start gap-2.5">
              <Button
                type="button"
                variant="outline"
                className="h-auto rounded-lg border-slate-200 px-3.5 py-[9px] text-[13px] font-semibold text-[#0f162a]"
              >
                Avbryt
              </Button>
              <Button
                asChild
                className="h-auto rounded-lg bg-blue-600 px-3.5 py-[9px] text-[13px] font-semibold text-white hover:bg-blue-700"
              >
                <Link to="/x04-patientdetalj-u47-desktop">
                  Lägg till patient
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
