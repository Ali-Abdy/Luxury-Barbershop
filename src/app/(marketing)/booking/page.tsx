import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { BookingInterface } from "@/components/booking/booking-shell";

export default function BookingPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section>
          <Container>
            <BookingInterface />
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}

