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
          className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-12 text-center"
        >
          Projects Highlight
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          
          <ProjectCard
            title="Livestock Diagnosis AI"
            link="animal-check.vercel.app/"
            description="Snap a picture of livestock and get instant AI-powered disease detection with prevention tips."
            tags={[
              "TypeScript",
              "React",
              "Firebase",
              "React Query",
              "Cypress",
              "React Testing Library",
              "Gemini AI",
              "Tailwindcss"
            ]}
          />

          <ProjectCard
            title="Past Quiz AI"
            link="share-interview.vercel.app/"
            description="Upload, view, and practice exam questions with AI-powered hints to help students study smarter."
            tags={[
              "TypeScript",
              "React",
              "Firebase",
              "React Query",
              "Gemini AI",
              "Tailwindcss",
              "Cypress",
              "React Testing Library"
            ]}
          />

          <ProjectCard
            title="GraphQL E-Commerce Store"
            link="graphql-ecommerce-phi.vercel.app/"
            description="A modern e-commerce store with GraphQL, secure auth, product filters, cart system, and future Stripe integration."
            tags={[
              "TypeScript",
              "React",
              "Apollo Client",
              "GraphQL",
              "Styled Components",
            ]}
          />

          <ProjectCard
            title="Monster Rolodex"
            link="monster-rolodex"
            description="A fun monster search application where users filter and interact with monster data."
            tags={[
              "TypeScript",
              "React",
              "Redux",
              "CSS",
            ]}
          />

        </div>
      </StaggerSection>
    </section>
  );
}
