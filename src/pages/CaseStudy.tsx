import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { useRef } from "react";
import Header from "../components/Header";
import StaggerSection from "../components/StaggerSection";
import { fadeUp } from "../animations/variants";
import SolutionSection from "../components/case-study/SolutionSection";
import ArchitectureSection from "../components/case-study/ArchitectureSection";
import EngineeringChallengesSection from "../components/case-study/EngineeringChallengesSection";
import TestingApproach from "../components/case-study/TestingApproach";
import CaseStudyCTA from "../components/case-study/CaseStudyCTA";


function CaseStudyHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <motion.div
      ref={ref}
      className="bg-cover bg-center flex flex-col justify-end overflow-hidden min-h-80 md:min-h-[480px] rounded-xl shadow-lg"
      style={{
        backgroundPositionY: bgY,
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXq46GnpGWvchFjEB-WV6JNMzey-cYLniHokEzYd91Wkb-K4TBN9JiQHuvYrC1XgGHxEBg6FrY_mGpfEGSzZXqToM0Mm3kGkXkgHS7SZ_xIjlTh0uRtqgFYAEUyIa701v-SXraglcm83_M5NFeGxfISa0p2y4enwjuKG2JUojFU76qsCkcNHhSs9pj1rWkZnoBB00WqYlESTeF7OM3rGP1jYfPNLovOfg8NPmGHjSTvyGQgyxyq4S-7TbJ9pkbScHsd_tPJH6Wm0-Z")',
      }}
    >
      <div className="flex flex-col p-6 md:p-10 gap-2">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight"
        >
          Project Name: A Modern Web Application
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          className="text-gray-200 text-base md:text-lg"
        >
          A brief, one-sentence summary of the project's purpose.
        </motion.p>
      </div>
    </motion.div>
  );
}


function ProblemSection() {
  return (
    <StaggerSection>
      <motion.section variants={fadeUp} className="mt-12 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight px-4 pb-4">
          The Problem
        </h2>
        <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl shadow-md border border-border-light dark:border-border-dark">
          <p className="text-text-muted-light dark:text-text-muted-dark text-base md:text-lg leading-relaxed">
            This section contains a concise, two-to-three sentence paragraph outlining
            the core challenge or user need that the project was designed to address,
            setting the stage for the solution that follows.
          </p>
        </div>
      </motion.section>
    </StaggerSection>
  );
}


export default function CaseStudy() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />

            <main className="flex-1 py-10 md:py-16">
              <CaseStudyHero />

              <div className="mt-12 md:mt-20 space-y-16 md:space-y-20">
                <ProblemSection />
                <SolutionSection />
                <ArchitectureSection />
                <EngineeringChallengesSection />
                <TestingApproach />
                <CaseStudyCTA />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
