import * as React from "react";
import { ArrowRight, Clock3, MapPin, Phone, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServicePriceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
}

export function ServicePriceItem({ label, value, className, ...props }: ServicePriceItemProps) {
  return (
    <div className={cn("flex items-center justify-between rounded-2xl border border-border/70 bg-surface/70 px-4 py-3", className)} {...props}>
      <span className="text-sm text-secondary-text">{label}</span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

interface OpeningHoursCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  hours: Array<{ day: string; time: string }>;
}

export function OpeningHoursCard({ title = "Opening Hours", hours, className, ...props }: OpeningHoursCardProps) {
  return (
    <div className={cn("rounded-3xl border border-border/70 bg-elevated p-5", className)} {...props}>
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent-gold">
        <Clock3 className="h-4 w-4" aria-hidden="true" />
        {title}
      </div>
      <div className="mt-4 space-y-2">
        {hours.map((entry) => (
          <div key={entry.day} className="flex items-center justify-between text-sm text-secondary-text">
            <span>{entry.day}</span>
            <span>{entry.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SocialIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

export function SocialIconButton({ icon, label, className, ...props }: SocialIconButtonProps) {
  return (
    <Button variant="ghost" size="icon" aria-label={label} className={className} {...props}>
      {icon}
    </Button>
  );
}

export function CallButton({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant="gold" className={cn("gap-2", className)} {...props}>
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call us
    </Button>
  );
}

export function ReserveButton({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant="gold" className={cn("gap-2", className)} {...props}>
      <Sparkles className="h-4 w-4" aria-hidden="true" />
      Reserve now
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
}

interface LocationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  address: string;
  cta?: React.ReactNode;
}

export function LocationCard({ title, address, cta, className, ...props }: LocationCardProps) {
  return (
    <div className={cn("rounded-3xl border border-border/70 bg-surface p-5", className)} {...props}>
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent-gold">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        {title}
      </div>
      <p className="mt-4 text-sm leading-7 text-secondary-text">{address}</p>
      {cta ? <div className="mt-4">{cta}</div> : null}
    </div>
  );
}
