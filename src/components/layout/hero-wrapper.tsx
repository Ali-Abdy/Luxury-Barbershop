import * as React from "react";

import { cn } from "@/lib/utils";

interface HeroWrapperProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function HeroWrapper({ eyebrow, title, description, actions, className, children, ...props }: HeroWrapperProps) {
  return (
    <section className={cn("relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-accent-gold/10 via-surface to-elevated px-6 py-12 shadow-[var(--shadow-md)] sm:px-10 lg:px-14 lg:py-16", className)} {...props}>
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-gold">{eyebrow}</p> : null}
          <h1 className="text-display-xl text-foreground">{title}</h1>
          {description ? <p className="max-w-xl text-base leading-8 text-secondary-text">{description}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
      </div>
      {children ? <div className="relative z-10 mt-8">{children}</div> : null}
    </section>
  );
}
