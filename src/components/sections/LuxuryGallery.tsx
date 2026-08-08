"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";
import { galleryItems } from "@/data/gallery";

export function LuxuryGallery() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16">
          <LuxuryBadge>The Atelier</LuxuryBadge>
          <h2 className="text-4xl font-light text-foreground">Visual Refinement</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {images.map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-surface aspect-square border border-border group`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-muted-text uppercase tracking-widest text-[10px]">
                Gallery Item {i}
              </div>
              <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

