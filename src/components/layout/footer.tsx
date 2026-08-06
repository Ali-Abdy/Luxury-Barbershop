import type { Route } from "next";
import Link from "next/link";
import { Camera, MapPin, Phone, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const footerLinks: Array<{ href: Route; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80">
      <Container className="flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
            <Sparkles className="h-4 w-4 text-accent-gold" aria-hidden="true" />
            Luxury Barbershop
          </div>
          <p className="mt-3 text-sm leading-7 text-muted-text">
            Precision appointments, refined grooming, and uncompromising service for the modern gentleman.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="tel:+15550199">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call now
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                <Camera className="h-4 w-4" aria-hidden="true" />
                Instagram
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Visit</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-text">
              <li className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 text-accent-gold" aria-hidden="true" /> 18 Mercer Street, New York</li>
              <li>Mon-Sat • 8am-8pm</li>
            </ul>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-muted-text" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
