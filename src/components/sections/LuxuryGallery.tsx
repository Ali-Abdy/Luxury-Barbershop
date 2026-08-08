"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";
import { galleryItems } from "@/data/gallery";

export function LuxuryGallery() {
  return (
    <div className="py-24 bg-neutral-950">
      <Container>
        <div className="text-center mb-16">
          <LuxuryBadge>The Atelier</LuxuryBadge>
          <h2 className="text-4xl font-light text-white">Visual Refinement</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${index % 3 === 0 ? "md:col-span-2 md:row-span-2 h-96" : "h-64"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-amber-500 text-xs uppercase tracking-widest font-semibold">{item.category}</span>
                <h3 className="text-white text-lg font-medium">{item.title}</h3>
                <p className="text-neutral-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
