"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function AnimatedPage(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      {...props}
    />
  );
}
