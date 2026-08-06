import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        The page you were looking for does not exist or has been moved.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Return home</Link>
      </Button>
    </Container>
  );
}
