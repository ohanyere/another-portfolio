import { motion } from "framer-motion";
import StaggerSection from "../StaggerSection";
import { fadeUp } from "../../animations/variants";

export default function EngineeringChallengesSection() {
  const challenges = [
    {
      id: 1,
      title: "State Management Complexity",
      text: "Solved complex state synchronization across components by implementing a centralized state management pattern, ensuring data consistency.",
    },
    {
      id: 2,
      title: "Performance Optimization",
      text: "Improved FCP score by 60% using lazy-loading, code splitting, and asset optimization.",
    },
    {
      id: 3,
      title: "Third-Party API Integration",
      text: "Handled inconsistent API documentation with a robust retry mechanism and error-handling system.",
    },
  ];

  return (
    <StaggerSection>
      <motion.section variants={fadeUp} className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold px-4 pb-4 text-black">
          Engineering Challenges
        </h2>

        <div className=" p-6 rounded-xl shadow-md border border-border-light">
          <ol className="space-y-5">
            {challenges.map((c) => (
              <motion.li
                key={c.id}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <span className="flex-shrink-0 flex items-center justify-center size-8  text-balck font-bold rounded-full">
                  {c.id}
                </span>
                <p className="text-black text-base md:text-lg leading-relaxed">
                  <strong>{c.title}:</strong> {c.text}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.section>
    </StaggerSection>
  );
}
