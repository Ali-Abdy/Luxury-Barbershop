"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Error</p>
      <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">Something went wrong</h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        The app hit an unexpected issue. Please try again or refresh the page.
      </p>
      <Button className="mt-8" onClick={() => reset()}>
        Try again
      </Button>
    </Container>
  );
}
