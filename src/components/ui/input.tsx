import * as React from "react";
import { Eye, EyeOff, Search } from "lucide-react";

import { cn } from "@/lib/utils";

const inputStyles = "w-full rounded-2xl border border-border/80 bg-surface px-4 py-3 text-sm text-foreground shadow-sm transition-smooth placeholder:text-muted-text focus:border-accent-gold/70 focus:outline-none focus:ring-2 focus:ring-accent-gold/20";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, type = "text", ...props }, ref) => (
  <input ref={ref} type={type} className={cn(inputStyles, className)} {...props} />
));
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(inputStyles, "min-h-32 resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn(inputStyles, "appearance-none bg-no-repeat pr-10", className)} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";

const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} type="checkbox" className={cn("h-4 w-4 rounded border border-border bg-surface text-accent-gold focus:ring-accent-gold/30", className)} {...props} />
));
Checkbox.displayName = "Checkbox";

const Radio = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} type="radio" className={cn("h-4 w-4 border border-border bg-surface text-accent-gold focus:ring-accent-gold/30", className)} {...props} />
));
Radio.displayName = "Radio";

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ className, label, id, ...props }, ref) => (
  <label htmlFor={id} className="flex items-center gap-3">
    <span className="relative inline-flex h-6 w-11 items-center rounded-full bg-border transition-smooth">
      <input ref={ref} id={id} type="checkbox" className={cn("peer sr-only", className)} {...props} />
      <span className="pointer-events-none absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-smooth peer-checked:translate-x-5 peer-checked:bg-accent-gold" />
    </span>
    {label ? <span className="text-sm text-secondary-text">{label}</span> : null}
  </label>
));
Switch.displayName = "Switch";

interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(({ className, containerClassName, ...props }, ref) => (
  <div className={cn("relative", containerClassName)}>
    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-text" aria-hidden="true" />
    <Input ref={ref} className={cn("pl-10", className)} {...props} />
  </div>
));
SearchField.displayName = "SearchField";

type PasswordFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="relative">
      <Input ref={ref} type={showPassword ? "text" : "password"} className={cn("pr-10", className)} {...props} />
      <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
});
PasswordField.displayName = "PasswordField";

export { Input, Textarea, Select, Checkbox, Radio, Switch, SearchField, PasswordField };
