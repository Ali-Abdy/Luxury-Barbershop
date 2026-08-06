"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
}

const team: TeamMember[] = [
  { name: "Julian Rossi", role: "Master Barber", specialty: "Signature Scissors Cuts" },
  { name: "Adrian Thorne", role: "Senior Barber", specialty: "Classic Shaves & Sculpting" },
  { name: "Marcus Vane", role: "Artisan Barber", specialty: "Modern Fades & Textures" },
];

export function TeamShowcase() {
  return (
    <div className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <LuxuryBadge>The Artisans</LuxuryBadge>
          <h2 className="text-4xl font-light">Meet Our Master Barbers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] bg-neutral-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-neutral-300 uppercase tracking-widest text-xs">
                  Portrait of {member.name}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="text-amber-700 text-sm uppercase tracking-wider mb-2">{member.role}</p>
              <p className="text-neutral-500 text-sm italic">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
