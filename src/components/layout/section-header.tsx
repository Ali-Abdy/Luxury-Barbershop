import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <header className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left", className)} {...props}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-gold">{eyebrow}</p> : null}
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-display-md text-foreground">{title}</h2>
          {description ? <p className="max-w-2xl text-sm leading-7 text-muted-text sm:text-base">{description}</p> : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}
