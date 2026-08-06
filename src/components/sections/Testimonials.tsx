"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";

interface Testimonial {
  text: string;
  author: string;
  date: string;
}

const testimonials: Testimonial[] = [
  { text: "The most refined grooming experience I've had in years. Absolute precision.", author: "Alexander Graham", date: "Jan 2024" },
  { text: "A sanctuary of style. Julian is a master of his craft. Highly recommended.", author: "James Sterling", date: "Feb 2024" },
  { text: "Luxury redefined. The attention to detail in the hot towel shave is unmatched.", author: "Robert Vance", date: "Mar 2024" },
];

export function Testimonials() {
  return (
    <div className="py-24 bg-neutral-50 border-y border-neutral-200">
      <Container>
        <div className="text-center mb-16">
          <LuxuryBadge>Reviews</LuxuryBadge>
          <h2 className="text-4xl font-light">Client Experiences</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg italic text-neutral-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-medium text-neutral-900">{t.author}</p>
                <p className="text-sm text-neutral-400 uppercase tracking-widest">{t.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

