import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export function Modal({ open, onClose, title, description, children, className, ...props }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-overlay p-4" role="dialog" aria-modal="true" aria-label={title ?? "Dialog"}>
      <div className={cn("w-full max-w-lg rounded-4xl border border-border/70 bg-surface p-6 shadow-xl", className)} {...props}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {title ? <h2 className="text-xl font-semibold text-foreground">{title}</h2> : null}
            {description ? <p className="mt-2 text-sm leading-7 text-muted-text">{description}</p> : null}
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close dialog">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  title?: string;
}

export function Drawer({ open, onClose, side = "right", title, children, className, ...props }: DrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex bg-overlay" role="dialog" aria-modal="true" aria-label={title ?? "Drawer"}>
      <div className={cn("h-full w-full max-w-sm border-l border-border/70 bg-surface p-6 shadow-xl", side === "left" ? "ml-0 border-r" : "ml-auto", className)} {...props}>
        <div className="flex items-center justify-between">
          {title ? <h2 className="text-lg font-semibold text-foreground">{title}</h2> : null}
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close drawer">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  label?: string;
}

export function Popover({ open, label, children, className, ...props }: PopoverProps) {
  if (!open) return null;
  return (
    <div className={cn("rounded-[1.25rem] border border-border/70 bg-surface p-4 shadow-md", className)} role="dialog" aria-label={label ?? "Popover"} {...props}>
      {children}
    </div>
  );
}

interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  content: string;
}

export function Tooltip({ content, children, className, ...props }: TooltipProps) {
  return (
    <span className={cn("group relative inline-flex", className)} {...props}>
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
        {content}
      </span>
    </span>
  );
}

export function Dropdown({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[1.25rem] border border-border/70 bg-elevated p-3 shadow-sm", className)} {...props}>{children}</div>;
}
