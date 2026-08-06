import * as React from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type SpinnerProps = Omit<React.ComponentPropsWithoutRef<typeof LoaderCircle>, "size"> & {
  size?: "sm" | "md" | "lg";
};

export function Spinner({ size = "md", className, ...props }: SpinnerProps) {
  const sizes = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-8 w-8" } as const;
  return <LoaderCircle className={cn("animate-spin text-accent-gold", sizes[size], className)} aria-label="Loading" {...props} />;
}

export function LoadingSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-2xl bg-border/70", className)} {...props} />;
}

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export function ProgressBar({ value, max = 100, className, ...props }: ProgressBarProps) {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-border", className)} role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={value} {...props}>
      <div className="h-full rounded-full bg-accent-gold transition-all duration-300" style={{ width: `${percentage}%` }} />
    </div>
  );
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  const variants = {
    default: "bg-accent-gold/15 text-accent-gold",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger",
    info: "bg-info/10 text-info",
  } as const;

  return <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]", variants[variant], className)} {...props} />;
}

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
}

export function Alert({ variant = "info", title, children, className, ...props }: AlertProps) {
  const icons = {
    info: <Sparkles className="h-4 w-4" aria-hidden="true" />,
    success: <CheckCircle2 className="h-4 w-4" aria-hidden="true" />,
    warning: <AlertCircle className="h-4 w-4" aria-hidden="true" />,
    danger: <AlertCircle className="h-4 w-4" aria-hidden="true" />,
  } as const;

  const variants = {
    info: "border-info/20 bg-info/10 text-info",
    success: "border-success/20 bg-success/10 text-success",
    warning: "border-warning/20 bg-warning/10 text-warning",
    danger: "border-danger/20 bg-danger/10 text-danger",
  } as const;

  return (
    <div className={cn("flex items-start gap-3 rounded-[1.2rem] border px-4 py-3 text-sm", variants[variant], className)} role="status" {...props}>
      <div className="mt-0.5">{icons[variant]}</div>
      <div className="space-y-1">
        {title ? <p className="font-semibold">{title}</p> : null}
        <div>{children}</div>
      </div>
    </div>
  );
}

export function EmptyState({ title, description, action, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-4xl border border-dashed border-border bg-surface/70 px-8 py-12 text-center", className)} {...props}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/15 text-accent-gold"><Sparkles className="h-5 w-5" /></div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description ? <p className="mt-2 max-w-md text-sm leading-7 text-muted-text">{description}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
