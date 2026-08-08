import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { contactData } from "@/data/contact";
export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-16">
      <Container className="grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-amber-500">Luxury Barbershop</h2>
          <p className="text-neutral-400 text-sm">Refined grooming for the modern gentleman.</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Navigation</h3>
          <ul className="text-sm text-neutral-400 space-y-2">
            <li><Link href="/about" className="hover:text-amber-500">About</Link></li>
            <li><Link href="/services" className="hover:text-amber-500">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-amber-500">Gallery</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Opening Hours</h3>
          <ul className="text-sm text-neutral-400 space-y-2">
            {contactData.hours.map((h) => (
              <li key={h.day}>{h.day}: {h.time}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Get in Touch</h3>
          <p className="text-sm text-neutral-400">{contactData.phone}</p>
          <p className="text-sm text-neutral-400">{contactData.email}</p>
        </div>
      </Container>
    </footer>
  );
}

