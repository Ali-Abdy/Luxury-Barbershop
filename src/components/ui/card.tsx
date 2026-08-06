import * as React from "react";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "feature";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants: Record<NonNullable<CardProps["variant"]>, string> = {
      default: "rounded-[28px] border border-border/80 bg-surface/90 p-6 shadow-[var(--shadow-sm)] backdrop-blur",
      glass: "rounded-[28px] border border-white/30 bg-white/10 p-6 shadow-[var(--shadow-md)] backdrop-blur-2xl",
      elevated: "rounded-[28px] border border-border/70 bg-elevated p-6 shadow-[var(--shadow-md)]",
      feature: "rounded-[24px] border border-accent-gold/20 bg-gradient-to-br from-accent-gold/8 via-surface to-transparent p-6 shadow-[var(--shadow-sm)]",
    };

    return <div ref={ref} className={cn(variants[variant], className)} {...props} />;
  },
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />,
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-xl font-semibold text-foreground", className)} {...props} />,
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm leading-6 text-muted-text", className)} {...props} />,
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mt-4", className)} {...props} />,
);
CardContent.displayName = "CardContent";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  price?: string;
  eyebrow?: string;
}

function ServiceCard({ title, description, price, eyebrow, className, ...props }: ServiceCardProps) {
  return (
    <Card className={cn("group flex h-full flex-col gap-4", className)} {...props}>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.32em] text-accent-gold">{eyebrow ?? "Signature Service"}</span>
        <Sparkles className="h-4 w-4 text-accent-gold" aria-hidden="true" />
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-6 text-muted-text">{description}</p>
      </div>
      {price ? <div className="flex items-center justify-between border-t border-border/70 pt-4">
        <span className="text-sm font-medium text-foreground">Starting at {price}</span>
        <Button variant="ghost" size="sm" className="px-0 text-accent-gold">
          Explore
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div> : null}
    </Card>
  );
}

interface BarberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  bio: string;
  initials?: string;
}

function BarberCard({ name, role, bio, initials, className, ...props }: BarberCardProps) {
  return (
    <Card className={cn("flex flex-col gap-4", className)} {...props}>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/15 text-sm font-semibold text-accent-gold">
          {initials ?? name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-text">{role}</p>
        </div>
      </div>
      <p className="text-sm leading-6 text-muted-text">{bio}</p>
    </Card>
  );
}

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  detail?: string;
}

function ReviewCard({ quote, author, detail, className, ...props }: ReviewCardProps) {
  return (
    <Card variant="elevated" className={cn("flex flex-col gap-3", className)} {...props}>
      <div className="flex items-center gap-1 text-accent-gold" aria-label="Five star review">
        {Array.from({ length: 5 }).map((_, idx) => <BadgeCheck key={idx} className="h-4 w-4" />)}
      </div>
      <p className="text-sm leading-7 text-secondary-text">“{quote}”</p>
      <div>
        <p className="font-medium text-foreground">{author}</p>
        {detail ? <p className="text-sm text-muted-text">{detail}</p> : null}
      </div>
    </Card>
  );
}

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string;
  description: string;
  featured?: boolean;
}

function PricingCard({ title, price, description, featured = false, className, ...props }: PricingCardProps) {
  return (
    <Card variant={featured ? "feature" : "default"} className={cn("flex flex-col gap-4", className)} {...props}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {featured ? <span className="rounded-full bg-accent-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-gold">Popular</span> : null}
      </div>
      <p className="text-sm leading-6 text-muted-text">{description}</p>
      <div className="mt-auto flex items-end gap-2">
        <span className="text-3xl font-semibold text-foreground">{price}</span>
        <span className="pb-1 text-sm text-muted-text">/ visit</span>
      </div>
    </Card>
  );
}

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

function FeatureCard({ title, description, icon, className, ...props }: FeatureCardProps) {
  return (
    <Card variant="feature" className={cn("flex flex-col gap-3", className)} {...props}>
      {icon ? <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/15 text-accent-gold">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-6 text-muted-text">{description}</p>
    </Card>
  );
}

function GlassCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Card variant="glass" className={className} {...props} />;
}

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
}

function ImageCard({ imageSrc, imageAlt, title, description, className, ...props }: ImageCardProps) {
  return (
    <Card variant="elevated" className={cn("overflow-hidden p-0", className)} {...props}>
      <Image src={imageSrc} alt={imageAlt} width={800} height={560} className="h-56 w-full object-cover" />
      {(title || description) ? <div className="space-y-2 p-6">
        {title ? <h3 className="text-lg font-semibold text-foreground">{title}</h3> : null}
        {description ? <p className="text-sm leading-6 text-muted-text">{description}</p> : null}
      </div> : null}
    </Card>
  );
}

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
}

function StatsCard({ value, label, className, ...props }: StatsCardProps) {
  return (
    <Card variant="default" className={cn("space-y-2", className)} {...props}>
      <p className="text-3xl font-semibold text-foreground">{value}</p>
      <p className="text-sm uppercase tracking-[0.28em] text-muted-text">{label}</p>
    </Card>
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, ServiceCard, BarberCard, ReviewCard, PricingCard, FeatureCard, GlassCard, ImageCard, StatsCard };
