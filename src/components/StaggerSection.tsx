// src/components/StaggerSection.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer } from "../animations/variants";

export default function StaggerSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
