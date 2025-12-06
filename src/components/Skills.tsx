// src/components/Skills.tsx
import { motion } from "framer-motion";
import StaggerSection from "./StaggerSection";
import { fadeUp } from "../animations/variants";

// TECH ICONS
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase } from "react-icons/si";
import { FlaskConical } from "lucide-react";

type Skill = {
  icon: React.ReactElement
  title: string;
  description: string;
};

const skills: Skill[] = [
  {
    icon: <SiReact size={28} className="text-primary" />,
    title: "React",
    description: "Building dynamic, component-based user interfaces.",
  },
  {
    icon: <SiNextdotjs size={28} className="text-primary" />,
    title: "Next.js",
    description: "Leveraging server-side rendering for optimal performance.",
  },
  {
    icon: <SiTypescript size={28} className="text-primary" />,
    title: "TypeScript",
    description: "Writing scalable, type-safe code for robust applications.",
  },
  {
    icon: <SiTailwindcss size={28} className="text-primary" />,
    title: "Tailwind CSS",
    description: "Crafting modern designs with a utility-first CSS framework.",
  },
  {
    icon: <SiFirebase size={28} className="text-primary" />,
    title: "Firebase",
    description: "Implementing backend services and real-time databases.",
  },
  {
    icon: <FlaskConical size={28} className="text-primary" />,
    title: "Testing",
    description: "Ensuring quality with Jest, RTL, and Cypress.",
  },
];

function SkillCard({ icon, title, description }: Skill) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 p-5 shadow-sm">
      <div className="text-blue500">{icon}</div>

      <div className="flex flex-col">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <StaggerSection>
        <motion.h4
          variants={fadeUp}
          className="text-center text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-10"
        >
          Skills &amp; Tools
        </motion.h4>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={fadeUp}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </StaggerSection>
    </section>
  );
}
