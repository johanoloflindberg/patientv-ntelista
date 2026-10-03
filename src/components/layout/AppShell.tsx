import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "../../public-api";
import { AppSidebar, type NavItemId } from "./AppSidebar";

interface AppShellProps {
  children: ReactNode;
  activeNav?: NavItemId;
  className?: string;
}

export function AppShell({
  children,
  activeNav,
  className,
}: AppShellProps): JSX.Element {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "flex min-h-screen w-full bg-background text-foreground",
        className,
      )}
    >
      <div className="hidden md:flex">
        <AppSidebar active={activeNav} />
      </div>
      <motion.div
        className="flex min-w-0 flex-1 flex-col"
        initial={reduceMotion ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
