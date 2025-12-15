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
import { useParams } from "react-router-dom";


function CaseStudyHero() {
  const {id} = useParams()
  const githubLink = id?.includes("animal") ? "https://github.com/ohanyere/animal-check" : id?.includes("share") ? "https://github.com/ohanyere/share-interview" : id?.includes("graphql") ? "https://github.com/ohanyere/graphql-ecommerce" : id?.includes("monster") ? "https://github.com/ohanyere/monster" : null
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
     <motion.div
    ref={ref}
    className="bg-cover bg-center bg-black flex flex-col justify-end overflow-hidden min-h-80 md:min-h-[480px] rounded-xl shadow-lg"
    style={{
      backgroundPositionY: bgY,
      backgroundImage: githubLink?.includes("animal")
        ? "url('/project1.png')"
        : githubLink?.includes("share")
        ? "url('/project2.png')"
        : githubLink?.includes("graph")
        ? "url('/project3.png')"
        : "none",
    }}
  >
    <div className="flex flex-col p-6 md:p-10 gap-2">

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight"
      >
        {githubLink?.includes("animal") && "Livestock Diagnosis AI"}
        {githubLink?.includes("share") && "Past Quiz AI"}
        {githubLink?.includes("graph") && "GraphQL E-Commerce Store"}
      </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          className="text-gray-900 text-base md:text-lg"
        >
          {
            githubLink?.includes("animal") ? <span>
              Snap a picture of livestock and get instant AI-powered disease detection with prevention tips.
            </span> : githubLink?.includes("share") ? <span>
              Upload, view, and practice exam questions with AI-powered hints to help students study smarter.
            </span> : githubLink?.includes("graph") ? <span>
              A modern e-commerce store with GraphQL, secure auth, product filters, cart system, and future Stripe integration.
            </span> : ""
          }
        </motion.p>
      </div>
    </motion.div>
  );
}


function ProblemSection() {
  const {id} = useParams()
      const githubLink = id?.includes("animal") ? "https://github.com/ohanyere/animal-check" : id?.includes("share") ? "https://github.com/ohanyere/share-interview" : id?.includes("graphql") ? "https://github.com/ohanyere/graphql-ecommerce" : id?.includes("monster") ? "https://github.com/ohanyere/monster" : null
  return (
    <StaggerSection>
      <motion.section variants={fadeUp} className="mt-12 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight px-4 pb-4 text-black">
          The Problem
        </h2>
        <div className=" p-6 rounded-xl shadow-md border border-border-light ">
          <p className="text-black text-base md:text-lg leading-relaxed">
            {
              githubLink?.includes("animal") ? ("Farmers often struggle to identify livestock diseases early because access to veterinarians is limited, costly, or unavailable. This leads to delayed diagnosis, preventable animal deaths, financial loss, and widespread disease outbreaks, especially in rural communities. Many farmers also lack the technical vocabulary to describe symptoms accurately, making it even harder to get timely help.") : ("Students preparing for exams often struggle because past questions are scattered across PDFs, social media groups, and multiple sources, and most do not come with answers or explanations. This makes studying inefficient and forces students to spend more time searching for resources than actually learning. Without clear explanations, many students memorize answers without understanding the concepts behind them.")

            }
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
