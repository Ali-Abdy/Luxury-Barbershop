import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { FadeIn } from "@/components/shared/animations";
import Link from "next/link";
import { LuxuryHero } from "@/components/sections/LuxuryHero";
import { ServiceHighlight } from "@/components/sections/ServiceHighlight";
import { BrandPhilosophy } from "@/components/sections/BrandPhilosophy";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { LuxuryGallery } from "@/components/sections/LuxuryGallery";
import { Testimonials } from "@/components/sections/Testimonials";

const highlights = [
  { title: "Precision appointments", description: "Thoughtful scheduling for every visit." },
  { title: "Curated services", description: "Tailored rituals built for premium grooming." },
  { title: "Quiet luxury", description: "A calm environment with refined attention." },
];

export function HomePage() {
  return (
    <AnimatedPage>
      <LuxuryHero />
      <Section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground">Curated Services</h2>
          </div>
          <ServiceHighlight />
        </Container>
      </Section>

      <BrandPhilosophy />
      
      <TeamShowcase />
      
      <LuxuryGallery />
      
      <Testimonials />
      
      <Section className="pt-10 sm:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <FadeIn className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.34em] text-muted-foreground">Luxury grooming, redefined</p>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Refined grooming for the modern gentleman.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  A calm, contemporary barbershop experience built around precision, artistry, and elevated service.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/booking">Book an appointment</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">Discover services</Link>
                </Button>
              </div>
            </FadeIn>
            <div className="overflow-hidden rounded-[32px] border border-border/70 bg-surface/80 p-3 shadow-[0_24px_80px_-26px_rgba(15,23,42,0.25)]">
              <div className="h-[480px] w-full rounded-[24px] bg-neutral-200 flex items-center justify-center text-neutral-500">
                Hero Image Placeholder
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>
    </AnimatedPage>
  );
}

