import * as React from "react";

import { cn } from "../../lib/utils.ts";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Loading placeholder — use for data-dependent views. */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("animate-pulse rounded-md bg-muted", className)}
      aria-hidden="true"
      {...props}
    />
  ),
);

Skeleton.displayName = "Skeleton";
