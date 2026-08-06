import { ElementType, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function Container({ as: Component = "div", size = "xl", className, ...props }: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
  } as const;

  return <Component className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)} {...props} />;
}
