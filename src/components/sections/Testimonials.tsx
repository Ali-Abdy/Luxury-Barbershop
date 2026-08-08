"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";
import { reviews } from "@/data/reviews";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <div className="py-24 bg-surface border-y border-border">
      <Container>
        <div className="text-center mb-16">
          <LuxuryBadge>Reviews</LuxuryBadge>
          <h2 className="text-4xl font-light text-foreground">Client Experiences</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, index) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-neutral-900 border-neutral-800 flex flex-col gap-4 h-full">
                <div className="flex text-amber-500">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-300 italic leading-relaxed flex-grow">"{r.review}"</p>
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-white font-medium">{r.name}</p>
                  <p className="text-amber-700 text-xs uppercase tracking-widest mt-1">{r.service}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

