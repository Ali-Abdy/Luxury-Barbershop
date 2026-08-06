import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";

export function BrandPhilosophy() {
  return (
    <Section className="bg-neutral-950 text-white py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <LuxuryBadge>Our Essence</LuxuryBadge>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              A sanctuary for the <span className="text-amber-500 italic">modern gentleman</span>.
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
              We believe grooming is more than a service; it is a ritual of restoration. 
              Our studio combines heritage techniques with contemporary artistry to 
              ensure every visit leaves you refined, refreshed, and confident.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
              <div>
                <h4 className="text-amber-500 font-medium mb-2">Heritage</h4>
                <p className="text-sm text-neutral-500">Decades of combined expertise in traditional barbering.</p>
              </div>
              <div>
                <h4 className="text-amber-500 font-medium mb-2">Artistry</h4>
                <p className="text-sm text-neutral-500">Precision tailored to your unique anatomical features.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
            {/* Image placeholder with luxury styling */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-700 uppercase tracking-widest text-xs">
              Artisan at work
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
