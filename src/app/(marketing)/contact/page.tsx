import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { contactData } from "@/data/contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Luxury Barbershop",
  description: "Visit our studio and book your premium grooming experience.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="py-24">
          <Container>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h1 className="text-4xl font-light">Visit Our Studio</h1>
                <p className="text-neutral-600">Experience precision grooming in a refined environment.</p>
                <div className="space-y-4">
                  <p><strong>Address:</strong> {contactData.address}</p>
                  <p><strong>Phone:</strong> <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-amber-700 hover:underline">{contactData.phone}</a></p>
                  <p><strong>Email:</strong> <a href={`mailto:${contactData.email}`} className="text-amber-700 hover:underline">{contactData.email}</a></p>
                </div>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/booking">Reserve Your Appointment</Link>
                </Button>
              </div>
              <div className="bg-neutral-900 rounded-2xl h-96 flex items-center justify-center text-white">
                Map Placeholder
              </div>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
