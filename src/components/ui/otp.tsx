import * as React from "react";

import { cn } from "@/lib/utils";

interface OTPFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  length?: number;
}

export function OTPField({ value, onChange, length = 6, className, ...props }: OTPFieldProps) {
  const digits = Array.from({ length }, (_, index) => value[index] ?? "");

  return (
    <div className="flex items-center gap-2" role="group" aria-label="One time password input">
      {digits.map((digit, index) => (
        <input
          key={index}
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          value={digit}
          onChange={(event) => {
            const nextValue = value.split("");
            nextValue[index] = event.target.value.replace(/\D/g, "").slice(-1);
            onChange(nextValue.join(""));
          }}
          className={cn("h-12 w-12 rounded-2xl border border-border/80 bg-surface text-center text-lg font-semibold text-foreground shadow-sm outline-none focus:border-accent-gold/70 focus:ring-2 focus:ring-accent-gold/20", className)}
          {...props}
        />
      ))}
    </div>
  );
}
