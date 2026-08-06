import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";
import { BrandPhilosophy } from "@/components/sections/BrandPhilosophy";

export default function AboutPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="pb-0">
          <Container className="pt-24 pb-12">
            <div className="max-w-4xl space-y-6">
              <LuxuryBadge>Our Story</LuxuryBadge>
              <h1 className="text-5xl font-light tracking-tight sm:text-7xl">A Legacy of <span className="italic text-amber-600">Refinement</span>.</h1>
              <p className="text-2xl text-neutral-600 leading-relaxed">
                Born from a passion for traditional craftsmanship and modern elegance, our barbershop is more than just a place for a haircut.
              </p>
            </div>
          </Container>
        </Section>
        
        <BrandPhilosophy />

        <Section className="py-24">
          <Container>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-medium uppercase tracking-widest text-amber-700">Vision</h3>
                <p className="text-neutral-600">To redefine the modern grooming experience through unparalleled attention to detail.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium uppercase tracking-widest text-amber-700">Mission</h3>
                <p className="text-neutral-600">Providing every client with a sanctuary of style and a transformation of confidence.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium uppercase tracking-widest text-amber-700">Values</h3>
                <p className="text-neutral-600">Integrity, craftsmanship, and the relentless pursuit of perfection in every stroke.</p>
              </div>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
