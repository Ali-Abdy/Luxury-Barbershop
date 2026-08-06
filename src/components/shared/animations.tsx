"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type MotionWrapperProps = Omit<React.ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
  children: React.ReactNode;
};

function MotionWrapper({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeDown({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: -24 }} animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function FadeLeft({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }} animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function FadeRight({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }} animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function Scale({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function Zoom({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }} animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : "hidden"} animate={shouldReduceMotion ? { opacity: 1 } : "visible"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function Parallax({ children, className, ...props }: MotionWrapperProps) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ duration: 0.3 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function PageTransition({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={cn("min-h-screen", className)} {...props}>
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className, ...props }: MotionWrapperProps) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }} whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, className, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }} whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export { MotionWrapper as FadeIn, MotionWrapper as SlideUp };
