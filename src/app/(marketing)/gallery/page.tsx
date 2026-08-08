import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { LuxuryGallery } from "@/components/sections/LuxuryGallery";

export const metadata: Metadata = {
  title: "Gallery | Luxury Barbershop",
  description: "Explore our premium barbershop environment, craftsmanship, and grooming experience.",
};

export default function GalleryPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="py-24">
          <LuxuryGallery />
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}

