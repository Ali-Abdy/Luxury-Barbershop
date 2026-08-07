import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BookingSuccessPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="py-24 text-center">
          <Container className="max-w-xl">
            <h1 className="text-4xl font-light mb-6">Ritual Confirmed</h1>
            <p className="text-neutral-600 mb-10">Your appointment has been successfully scheduled. We look forward to seeing you at the barbershop.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link href="/dashboard">View My Appointments</Link>
              </Button>
              <Button asChild>
                <Link href="/booking">Book Another</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
