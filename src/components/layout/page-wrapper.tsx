import { cn } from "@/lib/utils";

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageWrapper({ children, className, ...props }: PageWrapperProps) {
  return (
    <div className={cn("flex min-h-screen flex-col bg-background text-foreground", className)} {...props}>
      {children}
    </div>
  );
}
