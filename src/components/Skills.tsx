import { motion } from "framer-motion";
import StaggerSection from "./StaggerSection";
import { fadeUp } from "../animations/variants";

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFirebase,
  SiRedux,
  SiFramer
} from "react-icons/si";

import { FlaskConical } from "lucide-react";

type Skill = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const skills: Skill[] = [
  {
    icon: <SiReact size={28} className="text-black" />,
    title: "React",
    description: "Building dynamic, reusable, component-based user interfaces.",
  },
  {
    icon: <SiNextdotjs size={28} className="text-black" />,
    title: "Next.js",
    description: "Creating fast, SEO-friendly, full-stack applications.",
  },
  {
    icon: <SiTypescript size={28} className="text-black" />,
    title: "TypeScript",
    description: "Writing type-safe, scalable, and maintainable codebases.",
  },
  {
    icon: <SiTailwindcss size={28} className="text-black" />,
    title: "Tailwind CSS",
    description: "Crafting modern UI with a fast utility-first workflow.",
  },
  {
    icon: <SiFirebase size={28} className="text-black" />,
    title: "Firebase",
    description: "Authentication, storage, hosting, and real-time databases.",
  },
  {
    icon: <SiRedux size={28} className="text-black" />,
    title: "State Management",
    description: "Zustand for lightweight stores and Redux Toolkit for scalable global state.",
  },
  {
    icon: <SiFramer size={28} className="text-black" />,
    title: "Framer Motion",
    description: "Smooth, interactive animations for modern user experiences.",
  },
  {
    icon: <FlaskConical size={28} className="text-black" />,
    title: "Testing",
    description: "Ensuring quality with Jest, RTL, Vitest & Cypress.",
  },
];

function SkillCard({ icon, title, description }: Skill) {
  return (
    <div
      className="
        flex flex-col gap-3 
        rounded-xl 
        border border-gray-200
        bg-white/50
        p-5 shadow-sm
        transition-all 
        duration-300
        hover:ring-2 hover:ring-blue-500 
      "
    >
      <div className="text-primary">{icon}</div>

      <div className="flex flex-col">
        <h3 className="text-base font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
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
          className="text-center text-lg font-bold uppercase tracking-wider 
                     text-gray-700 mb-10"
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
