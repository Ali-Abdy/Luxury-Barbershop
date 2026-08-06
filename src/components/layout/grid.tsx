import * as React from "react";

import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export function Grid({ cols = 3, gap = "md", className, ...props }: GridProps) {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  } as const;

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  } as const;

  return <div className={cn("grid", colsClasses[cols], gapClasses[gap], className)} {...props} />;
}
