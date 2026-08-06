import * as React from "react";

import { cn } from "@/lib/utils";

interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function ContentWrapper({ narrow = false, className, ...props }: ContentWrapperProps) {
  return <div className={cn("mx-auto w-full", narrow ? "max-w-3xl" : "max-w-6xl", className)} {...props} />;
}
