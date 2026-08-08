import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";
import { aboutData } from "@/data/about";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Luxury Barbershop",
  description: "Discover our philosophy, craftsmanship, and passion for premium grooming.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="py-24 bg-neutral-950 text-white">
          <Container className="text-center">
              <LuxuryBadge>Our Story</LuxuryBadge>
            <h1 className="text-5xl md:text-6xl font-light mb-6">{aboutData.heroTitle}</h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{aboutData.heroDescription}</p>
          </Container>
        </Section>
        
        <Section className="py-24">
          <Container className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light">{aboutData.philosophyTitle}</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">{aboutData.philosophyDescription}</p>
              </div>
            <div className="grid gap-8">
              {aboutData.values.map((v) => (
                <div key={v.title} className="border-l-2 border-amber-600 pl-6">
                  <h3 className="text-xl font-medium mb-2">{v.title}</h3>
                  <p className="text-neutral-500">{v.description}</p>
              </div>
              ))}
            </div>
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

