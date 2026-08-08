import { Container } from "@/components/layout/container";
import { contactData } from "@/data/contact";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface text-foreground py-16 border-t border-border">
      <Container className="grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-accent-gold">Luxury Barbershop</h2>
          <p className="text-sm text-muted-text">Refined grooming for the modern gentleman.</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Navigation</h3>
          <ul className="text-sm text-muted-text space-y-2">
            <li><Link href="/about" className="hover:text-accent-gold">About</Link></li>
            <li><Link href="/services" className="hover:text-accent-gold">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-accent-gold">Gallery</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Opening Hours</h3>
          <ul className="text-sm text-muted-text space-y-2">
            {contactData.hours.map((h) => (
              <li key={h.day}>{h.day}: {h.time}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Get in Touch</h3>
          <p className="text-sm text-muted-text">{contactData.phone}</p>
          <p className="text-sm text-muted-text">{contactData.email}</p>
        </div>
      </Container>
    </footer>
  );
}

