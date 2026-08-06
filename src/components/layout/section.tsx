import { ElementType, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  as?: ElementType;
  spacing?: "sm" | "md" | "lg";
}

export function Section({ as: Component = "section", spacing = "lg", className, ...props }: SectionProps) {
  const spacingClasses = {
    sm: "py-12 sm:py-16 lg:py-20",
    md: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-28",
  } as const;

  return <Component className={cn(spacingClasses[spacing], className)} {...props} />;
}
