// src/components/case-study/SolutionSection.tsx
import { motion } from "framer-motion";
import StaggerSection from "../StaggerSection";
import { fadeUp } from "../../animations/variants";

export default function SolutionSection() {
  const features = [
    {
      title: "Feature Highlight One",
      text: "Implemented a real-time data visualization dashboard that reduced data analysis time by 40%.",
    },
    {
      title: "Feature Highlight Two",
      text: "Developed a responsive and accessible user interface, achieving a 95+ Lighthouse score for accessibility.",
    },
    {
      title: "Feature Highlight Three",
      text: "Integrated a secure authentication system using modern standards to protect user data and privacy.",
    },
  ];

  return (
    <StaggerSection>
      <motion.section variants={fadeUp} className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight px-4 pb-4">
          The Solution
        </h2>

        <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl shadow-md border border-border-light dark:border-border-dark">
          <ul className="space-y-4">
            {features.map(({ title, text }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <span className="material-symbols-outlined text-primary mt-1">
                  check_circle
                </span>

                <p className="text-text-muted-light dark:text-text-muted-dark text-base md:text-lg leading-relaxed">
                  <strong>{title}:</strong> {text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    </StaggerSection>
  );
}
