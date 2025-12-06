// import { motion } from "framer-motion";
// import type { ReactNode } from "react";

// interface FadeInWhenVisibleProps {
//   children: ReactNode;
//   delay?: number;
// }

// export default function FadeInWhenVisible({
//   children,
//   delay = 0,
// }: FadeInWhenVisibleProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: "easeOut", delay }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// src/components/FadeInWhenVisible.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../animations/variants";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
