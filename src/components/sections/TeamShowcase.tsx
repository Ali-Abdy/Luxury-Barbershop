"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";
import { teamMembers } from "@/data/team";

export function TeamShowcase() {
  return (
    <div className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16">
          <LuxuryBadge>The Artisans</LuxuryBadge>
          <h2 className="text-4xl font-light text-foreground">Meet Our Master Barbers</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-lg">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-white text-lg font-medium">{member.name}</p>
                  <p className="text-amber-500 text-sm">{member.role}</p>
                  <p className="text-white/70 text-xs italic mt-2">{member.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

