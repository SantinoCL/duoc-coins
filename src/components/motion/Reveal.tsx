"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade" | "scale";
  className?: string;
}

export default function Reveal({ children, delay = 0, direction = "up", className }: RevealProps) {
  const reduced = useReducedMotion();

  const hidden: Record<string, { opacity: number; y?: number; x?: number; scale?: number }> = {
    up:    { opacity: 0, y: 28 },
    left:  { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    fade:  { opacity: 0 },
    scale: { opacity: 0, scale: 0.93 },
  };

  return (
    <motion.div
      className={className}
      initial={reduced ? false : hidden[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-7%" }}
      transition={{
        duration: 0.72,
        ease: [0.2, 0.7, 0.2, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
