import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Badge, Button, Input } from "../../public-api";
import { ThemeToggle } from "./ThemeToggle";

interface AppHeaderProps {
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
  primaryAction?: {
    label: string;
    to: string;
  };
  trailing?: ReactNode;
}

export function AppHeader({
  title,
  subtitle,
  searchPlaceholder = "Sök patient…",
  primaryAction,
  trailing,
}: AppHeaderProps): JSX.Element {
  return (
    <header className="flex min-h-[var(--header-height)] w-full flex-wrap items-center justify-between gap-4 border-b border-border bg-card px-5 py-3 xl:px-8">
      <div className="flex min-w-0 flex-col gap-0.5">
        <h1 className="truncate text-xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-caption text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>

      <div className="flex min-w-0 flex-wrap items-center gap-2.5">
        <Input
          type="search"
          aria-label="Sök patient"
          placeholder={searchPlaceholder}
          className="h-9 w-40 bg-muted/60 text-body-sm sm:w-60"
        />
        {primaryAction ? (
          <Button asChild size="sm">
            <Link to={primaryAction.to}>{primaryAction.label}</Link>
          </Button>
        ) : null}
        <ThemeToggle />
        {trailing}
        <Badge variant="soft" aria-label="Inloggad användare JL">
          JL
        </Badge>
      </div>
    </header>
  );
}
