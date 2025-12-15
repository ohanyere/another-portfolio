// src/components/case-study/ArchitectureSection.tsx
import { motion } from "framer-motion";
import StaggerSection from "../StaggerSection";
import { fadeUp, scaleIn } from "../../animations/variants";

export default function ArchitectureSection() {
  return (
    <StaggerSection>
      <motion.section variants={fadeUp} className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight px-4 pb-4 text-black">
          Architecture Diagram
        </h2>

        <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl shadow-md border border-border-light dark:border-border-dark">
          <motion.img
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src="/caseStudy1.png"
            alt="Architecture Diagram"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </motion.section>
    </StaggerSection>
  );
}
