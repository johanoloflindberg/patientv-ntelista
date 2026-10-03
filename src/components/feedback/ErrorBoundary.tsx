import { Component, type ErrorInfo, type ReactNode } from "react";

import { Button } from "../../public-api";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    message: "",
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error.message || "Ett oväntat fel inträffade.",
    };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    // Hook for Sentry/logging in production.
    console.error("ErrorBoundary caught", error, info.componentStack);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, message: "" });
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center"
        >
          <h1 className="text-xl font-semibold text-foreground">
            {this.props.fallbackTitle ?? "Något gick fel"}
          </h1>
          <p className="max-w-md text-sm text-muted-foreground">
            {this.state.message}
          </p>
          <Button type="button" onClick={this.handleReset}>
            Försök igen
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
