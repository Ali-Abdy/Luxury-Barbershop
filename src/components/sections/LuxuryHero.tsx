"use client";



import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function LuxuryHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-4 block">
            The Ultimate Grooming Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8">
            Refined Artistry, <br /> Timeless Style
          </h1>
          <Button variant="gold" size="lg" className="px-8 py-6 text-lg">
            Book Your Appointment
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

