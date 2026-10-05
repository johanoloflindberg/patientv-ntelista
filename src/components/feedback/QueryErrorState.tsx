import { AlertCircle } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
} from "../../public-api";

interface QueryErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function QueryErrorState({
  title = "Kunde inte hämta data",
  message = "Kontrollera nätverksanslutningen och försök igen.",
  onRetry,
}: QueryErrorStateProps): JSX.Element {
  return (
    <Alert variant="destructive">
      <AlertCircle />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex flex-col gap-3">
        <p>{message}</p>
        {onRetry ? (
          <Button type="button" size="sm" variant="outline" onClick={onRetry}>
            Försök igen
          </Button>
        ) : null}
      </AlertDescription>
    </Alert>
  );
}
