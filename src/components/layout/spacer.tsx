import * as React from "react";

import { cn } from "@/lib/utils";

interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

export function Spacer({ size = "md", className, ...props }: SpacerProps) {
  const sizeClasses = {
    sm: "h-4",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
  } as const;

  return <div className={cn(sizeClasses[size], className)} {...props} />;
}
