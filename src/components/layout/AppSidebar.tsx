import { NavLink } from "react-router-dom";
import {
  Bell,
  ClipboardList,
  LayoutDashboard,
  Settings,
  Upload,
  Users,
} from "lucide-react";

import { cn, Separator } from "../../public-api";

export type NavItemId =
  | "dashboard"
  | "waitlist"
  | "patients"
  | "reminders"
  | "import"
  | "settings";

interface NavItem {
  id: NavItemId;
  label: string;
  to: string;
  icon: typeof LayoutDashboard;
}

const primaryNav: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    to: "/x01-dashboard-u47-desktop",
    icon: LayoutDashboard,
  },
  {
    id: "waitlist",
    label: "Väntelista",
    to: "/x02-vantelista-u47-desktop",
    icon: ClipboardList,
  },
  {
    id: "patients",
    label: "Patienter",
    to: "/x07-ny-patient-u47-desktop",
    icon: Users,
  },
  {
    id: "reminders",
    label: "Påminnelser",
    to: "/x09-paminnelser-u47-desktop",
    icon: Bell,
  },
  {
    id: "import",
    label: "Import",
    to: "/x07-ny-patient-u47-desktop",
    icon: Upload,
  },
];

const secondaryNav: NavItem[] = [
  {
    id: "settings",
    label: "Inställningar",
    to: "/components",
    icon: Settings,
  },
];

interface AppSidebarProps {
  active?: NavItemId;
}

function NavItemLink({
  item,
  forceActive,
}: {
  item: NavItem;
  forceActive?: boolean;
}): JSX.Element {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        cn(
          "flex h-10 items-center gap-2.5 rounded-lg px-3 text-body-sm transition-colors duration-fast ease-out",
          forceActive || isActive
            ? "bg-accent font-medium text-accent-foreground"
            : "text-foreground/80 hover:bg-muted hover:text-foreground",
        )
      }
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span>{item.label}</span>
    </NavLink>
  );
}

export function AppSidebar({ active }: AppSidebarProps): JSX.Element {
  return (
    <aside
      className="flex w-full max-w-[var(--sidebar-width)] shrink-0 flex-col gap-2 border-r border-border bg-card px-4 pb-5 pt-6"
      aria-label="Huvudnavigering"
    >
      <div className="mb-2 flex flex-col gap-0.5 px-1">
        <p className="text-lg font-bold tracking-tight text-foreground">
          PhysioQueue
        </p>
        <p className="text-caption text-muted-foreground">Patientväntelista</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1" aria-label="Primär">
        {primaryNav.map((item) => (
          <NavItemLink
            key={item.id}
            item={item}
            forceActive={active === item.id}
          />
        ))}
      </nav>

      <Separator className="my-2" />

      <nav className="flex flex-col gap-1" aria-label="Sekundär">
        {secondaryNav.map((item) => (
          <NavItemLink
            key={item.id}
            item={item}
            forceActive={active === item.id}
          />
        ))}
      </nav>
    </aside>
  );
}
