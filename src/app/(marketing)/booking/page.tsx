import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";

export default function BookingPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section>
          <Container className="space-y-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.34em] text-muted-foreground">Booking</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Reserve your preferred appointment.</h1>
              <p className="text-lg text-muted-foreground">
                Booking functionality will be introduced in a later phase while the layout remains polished and ready.
              </p>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
