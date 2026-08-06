import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";
import { ServiceHighlight } from "@/components/sections/ServiceHighlight";

export default function ServicesPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="bg-neutral-50 min-h-screen">
          <Container className="py-24">
            <div className="max-w-3xl space-y-4 mb-16">
              <LuxuryBadge>The Menu</LuxuryBadge>
              <h1 className="text-5xl font-light tracking-tight sm:text-6xl">Curated Grooming Rituals</h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Explore our selection of premium services, designed to provide the ultimate in grooming and relaxation.
              </p>
            </div>
            
            <ServiceHighlight />
            
            <div className="mt-24 p-12 bg-neutral-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-light">Ready for your transformation?</h3>
                <p className="text-neutral-400">Book your signature experience today.</p>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md transition-colors">
                Book Appointment
              </button>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
