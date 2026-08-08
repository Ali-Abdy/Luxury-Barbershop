import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";

export function BrandPhilosophy() {
  return (
    <Section className="bg-surface py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <LuxuryBadge>Our Essence</LuxuryBadge>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground">
              A sanctuary for the <span className="text-accent-gold italic">modern gentleman</span>.
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed max-w-xl">
              We believe grooming is more than a service; it is a ritual of restoration. 
              Our studio combines heritage techniques with contemporary artistry to 
              ensure every visit leaves you refined, refreshed, and confident.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-accent-gold font-medium mb-2">Heritage</h4>
                <p className="text-sm text-muted-text">Decades of combined expertise in traditional barbering.</p>
              </div>
              <div>
                <h4 className="text-accent-gold font-medium mb-2">Artistry</h4>
                <p className="text-sm text-muted-text">Precision tailored to your unique anatomical features.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-elevated rounded-2xl overflow-hidden border border-border">
            {/* Image placeholder with luxury styling */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-text uppercase tracking-widest text-xs">
              Artisan at work
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

