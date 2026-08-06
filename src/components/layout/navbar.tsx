"use client";

import type { Route } from "next";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";

const links: Array<{ href: Route; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Booking" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 border-b backdrop-blur-xl transition-smooth", scrolled ? "border-border/70 bg-background/85 shadow-[var(--shadow-sm)]" : "border-transparent bg-background/70")}> 
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold uppercase tracking-[0.24em] text-foreground" aria-label="Luxury Barbershop home">
          Luxury
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={cn("relative text-sm transition-colors duration-200", active ? "text-foreground" : "text-muted-text hover:text-foreground")}> 
                {link.label}
                {active ? <span className="absolute inset-x-0 -bottom-2 h-px bg-accent-gold" /> : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex" aria-label="Search the experience">
            <Search className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <Link href="/booking">Reserve</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-border/70 bg-background/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-text transition hover:text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
