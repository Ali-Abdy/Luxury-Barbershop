import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team | Luxury Barbershop",
  description: "Meet our master barbers and discover our craftsmanship.",
};

export default function TeamPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="py-24">
          <Container className="text-center space-y-6">
            <h1 className="text-5xl font-light">Our Artisans</h1>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Meet the master barbers behind our signature rituals. Every artisan brings years of experience and a passion for precision.
            </p>
          </Container>
        </Section>
        <TeamShowcase />
        <Section className="py-24 text-center">
          <Container>
            <h2 className="text-3xl font-light mb-8">Ready for your ritual?</h2>
            <Button asChild className="bg-amber-600 text-white px-8 py-6 text-lg">
              <Link href="/booking">Reserve Your Appointment</Link>
            </Button>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
