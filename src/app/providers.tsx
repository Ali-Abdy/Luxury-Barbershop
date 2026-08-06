"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ErrorBoundary } from "@/components/shared/error-boundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ErrorBoundary>{children}</ErrorBoundary>
    </NextThemesProvider>
  );
}
