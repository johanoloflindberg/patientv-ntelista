import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const reminderFields = {
  patient: "Anna Andersson · PAT-000124",
  subject: "Kontrollera remiss",
  date: "2026-10-08",
  time: "09:00",
  note: "Valfritt",
};

export const ElementNyPminnelse = (): JSX.Element => {
  return (
    <main
      className="flex min-h-screen w-full items-start justify-center bg-[#f8f9fb] px-4 py-[60px] sm:px-8"
      data-model-id="5:828"
    >
      <Card className="w-full max-w-[906px] rounded-[24px] border border-slate-200 bg-white shadow-none">
        <CardHeader className="space-y-0 px-6 pt-10 sm:px-11 sm:pt-11">
          <CardTitle className="font-[Inter] text-[32px] font-bold leading-[40px] tracking-[-0.5px] text-[#0f162a] sm:text-[40px] sm:leading-[48px]">
            Ny påminnelse
          </CardTitle>
          <CardDescription className="mt-6 font-[Inter] text-[20px] font-normal leading-7 text-slate-500 sm:mt-6 sm:text-[22px]">
            {reminderFields.patient}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-8 sm:px-11 sm:pb-8">
          <form className="mt-7" onSubmit={(event) => event.preventDefault()}>
            <div className="space-y-2">
              <Label
                htmlFor="reminder-subject"
                className="font-[Inter] text-[18px] font-medium leading-6 text-slate-700 sm:text-[22px]"
              >
                Vad ska påminnas om?
              </Label>
              <Input
                id="reminder-subject"
                name="subject"
                defaultValue={reminderFields.subject}
                className="h-[78px] rounded-[15px] border-2 border-slate-200 px-6 font-[Inter] text-[22px] text-slate-500 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 sm:text-[24px]"
              />
            </div>
            <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="reminder-date"
                  className="font-[Inter] text-[18px] font-medium leading-6 text-slate-700 sm:text-[22px]"
                >
                  Datum
                </Label>
                <Input
                  id="reminder-date"
                  name="date"
                  defaultValue={reminderFields.date}
                  className="h-[78px] rounded-[15px] border-2 border-slate-200 px-6 font-[Inter] text-[22px] text-slate-500 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 sm:text-[24px]"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="reminder-time"
                  className="font-[Inter] text-[18px] font-medium leading-6 text-slate-700 sm:text-[22px]"
                >
                  Tid
                </Label>
                <Input
                  id="reminder-time"
                  name="time"
                  defaultValue={reminderFields.time}
                  className="h-[78px] rounded-[15px] border-2 border-slate-200 px-6 font-[Inter] text-[22px] text-slate-500 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 sm:text-[24px]"
                />
              </div>
            </div>
            <div className="mt-11 space-y-2">
              <Label
                htmlFor="reminder-note"
                className="font-[Inter] text-[18px] font-medium leading-6 text-slate-700 sm:text-[22px]"
              >
                Anteckning
              </Label>
              <Input
                id="reminder-note"
                name="note"
                defaultValue={reminderFields.note}
                className="h-[78px] rounded-[15px] border-2 border-slate-200 px-6 font-[Inter] text-[22px] text-slate-500 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 sm:text-[24px]"
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                type="button"
                variant="outline"
                className="h-auto min-h-[70px] rounded-[15px] border-2 border-slate-200 bg-white px-7 font-[Inter] text-[22px] font-semibold text-[#0f162a] shadow-none hover:bg-slate-50 sm:px-8"
              >
                Avbryt
              </Button>
              <Button
                type="submit"
                className="h-auto min-h-[70px] rounded-[15px] bg-blue-600 px-7 font-[Inter] text-[22px] font-semibold text-white shadow-none hover:bg-blue-700 sm:px-8"
              >
                Skapa påminnelse
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};
