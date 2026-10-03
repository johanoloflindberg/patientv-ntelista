import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  cn,
  type BadgeProps,
  type ButtonProps,
} from "anima-project";
import "anima-project/styles.css";

const badgeProps: BadgeProps = {
  children: "Active",
  variant: "secondary",
};

const buttonProps: ButtonProps = {
  children: "Save patient",
  type: "button",
};

function ConsumerApp(): JSX.Element {
  return (
    <main className={cn("min-h-screen bg-background p-8 text-foreground")}>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle>Package consumer</CardTitle>
            <Badge {...badgeProps} />
          </div>
          <CardDescription>
            This screen imports components, types, utilities, and styles from
            the built package.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="patient-name">Patient name</Label>
            <Input id="patient-name" defaultValue="Ada Lovelace" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="patient-note">Note</Label>
            <Textarea
              id="patient-note"
              defaultValue="Consumer verification note"
            />
          </div>

          <ToggleGroup type="single" defaultValue="active" aria-label="Status">
            <ToggleGroupItem value="active">Active</ToggleGroupItem>
            <ToggleGroupItem value="waiting">Waiting</ToggleGroupItem>
          </ToggleGroup>

          <Toggle aria-label="Pin patient">Pin</Toggle>

          <Table>
            <TableCaption>Package export verification</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Export</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Components and types</TableCell>
                <TableCell>Resolved</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bundled stylesheet</TableCell>
                <TableCell>Resolved</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter>
          <Button {...buttonProps} />
        </CardFooter>
      </Card>
    </main>
  );
}

const rootElement = document.getElementById("consumer-root");

if (!rootElement) {
  throw new Error("Consumer root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <ConsumerApp />
  </StrictMode>,
);
