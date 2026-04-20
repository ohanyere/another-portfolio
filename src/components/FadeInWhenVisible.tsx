import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../animations/variants";

interface FadeInWhenVisibleProps {
  children: ReactNode;
}

export default function FadeInWhenVisible({ children }: FadeInWhenVisibleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
