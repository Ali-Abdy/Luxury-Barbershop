import * as React from "react";

import { cn } from "@/lib/utils";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "sm" | "md" | "lg" | "xl";
}

export function Stack({ gap = "md", className, ...props }: StackProps) {
  const gapClasses = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  } as const;

  return <div className={cn("flex flex-col", gapClasses[gap], className)} {...props} />;
}
