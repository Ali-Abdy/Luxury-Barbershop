import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { LoaderCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-gold/60 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:opacity-90",
        secondary: "bg-[color:var(--surface)] text-foreground shadow-[var(--shadow-sm)] hover:bg-[color:var(--elevated)]",
        outline: "border border-border bg-transparent text-foreground hover:bg-hover",
        ghost: "bg-transparent text-foreground hover:bg-hover",
        danger: "bg-danger text-white hover:brightness-95",
        gold: "bg-accent-gold text-white shadow-[var(--shadow-md)] hover:brightness-105",
        link: "h-auto rounded-none bg-transparent p-0 text-accent-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, leftIcon, rightIcon, children, disabled, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : leftIcon}
        <span className="flex items-center gap-2">{children}</span>
        {rightIcon}
      </>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        data-loading={loading || undefined}
        type={asChild ? undefined : type}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
