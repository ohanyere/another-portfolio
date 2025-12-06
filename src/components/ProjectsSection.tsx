// import ProjectCard from "./ProjectCard";

// export default function ProjectsSection() {
//   return (
//     <section className="py-16 sm:py-20 px-4" id="projects">
//       <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-12">
//         Featured Projects
//       </h2>

//       <div className="flex flex-col gap-16 md:gap-20">
//         <ProjectCard
//           title="Project One Title"
//           description="A short, compelling description of the project, the problem it solves, and the value it brings to users."
//           image="https://lh3.googleusercontent.com/aida-public/AB6AXuD0apdFY461IrFse2grJxrZxj3oyD9UQDzQv5iC3J8SRbLAqIEUEb2eAK_OPETRojBn2xfNoJg755y5ni2Z7Jcqzlb6Rb7bmDtb_CgckawdrG91CFpT__bfqBvP0wcJ4BdqELeT3ruEWbUjxNv8aa1Z0-cDbE2EqmdB5clTHj24FeockZDEHCvf9Xh3k9wpyQnFdBgCa0E_djsR-2Hu2xMvNzrQqMx48HFwFW2IffLnHFOEnLCN6oZUrAGyfPRKBy-vnjNBo42E3lhW"
//           tags={["React", "Next.js", "Tailwind CSS"]}
//         />

//         <ProjectCard
//           title="Project Two Title"
//           description="Another engaging description for the second featured project, highlighting its key features and technical challenges."
//           image="https://lh3.googleusercontent.com/aida-public/AB6AXuDoKpWHkJgDqY7cLXRM0e1HoEXMtAwfAey_su9h4_9HyKZ7S4yX3bWrNlIvywC2SPR1dRGZ1Qm9Bm4tkGEOt59Kv2_Rp-sqBwACagc7WPFGWrIrQhw1IDpzkbSWhG9MZlZTUqQHCTLn9mFVPppBY7CDv17_asRCDDiGP5rN4WbNIpf8WqYjNnjKQi6wnvokh0ib7dKlz9oVtWjvgWERDduRauebhXgnH3obMA_geuyfm7OgI-pAmeppjB92oLlzQmEhg29MIl4TdP5B"
//           tags={["TypeScript", "Firebase", "Vite"]}
//         />
//       </div>
//     </section>
//   );
// }

// src/components/ProjectsSection.tsx
import { motion } from "framer-motion";
import StaggerSection from "./StaggerSection";
import ProjectCard from "./ProjectCard";
import { fadeUp } from "../animations/variants";

export default function ProjectsSection() {
  return (
    <section className="py-16 sm:py-20 px-4" id="projects">
      <StaggerSection>
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-col gap-16 md:gap-20">
          <ProjectCard
            title="Livestock Diagnosis ai"
            image="./project1.png"
            link = "animal-check.vercel.app/"
            description="Snap a pic of sick livestock and get instant AI-powered disease detection with personalized care tips."
            tags={["TypeScript","React", "Firebase", "React Query","Cypress","React Testing Library","Firebase","Gemini AI","Vitest"]}
          />
          <ProjectCard
          link="share-interview.vercel.app/"
            title="Past quiz ai"
            description="Another engaging description for the second featured project, highlighting its key features and technical challenges."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDoKpWHkJgDqY7cLXRM0e1HoEXMtAwfAey_su9h4_9HyKZ7S4yX3bWrNlIvywC2SPR1dRGZ1Qm9Bm4tkGEOt59Kv2_Rp-sqBwACagc7WPFGWrIrQhw1IDpzkbSWhG9MZlZTUqQHCTLn9mFVPppBY7CDv17_asRCDDiGP5rN4WbNIpf8WqYjNnjKQi6wnvokh0ib7dKlz9oVtWjvgWERDduRauebhXgnH3obMA_geuyfm7OgI-pAmeppjB92oLlzQmEhg29MIl4TdP5B"
            tags={["TypeScript","React", "Firebase","React Query","Cypress","React Testing Library","Firebase","Gemini AI","Vitest"]}
          />
        </div>
      </StaggerSection>
    </section>
  );
}

