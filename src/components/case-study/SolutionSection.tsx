import { motion } from "framer-motion";
import StaggerSection from "../StaggerSection";
import { fadeUp } from "../../animations/variants";
import { useParams } from "react-router-dom";
import { SiCheckmk } from "react-icons/si";
{SiCheckmk}
export default function SolutionSection() {
   const {id} = useParams()
      const githubLink = id?.includes("animal") ? "https://github.com/ohanyere/animal-check" : id?.includes("share") ? "https://github.com/ohanyere/share-interview" : id?.includes("graphql") ? "https://github.com/ohanyere/graphql-ecommerce" : id?.includes("monster") ? "https://github.com/ohanyere/monster" : null
  

  return (
    <StaggerSection>
      <motion.section variants={fadeUp} className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight px-4 pb-4">
          The Solution
        </h2>

        <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl shadow-md border border-border-light dark:border-border-dark">
          {
            githubLink?.includes("animal") ? (<span>
              AnimalCheck provides an instant, AI-powered diagnosis system that allows farmers to upload images, describe symptoms, or send voice notes. The platform analyzes the input using advanced AI models and returns likely diseases along with treatment recommendations and prevention guidance. With multilingual support and 24/7 availability, AnimalCheck gives farmers an affordable, accessible, and fast way to protect their livestock and income.
            </span>) : (<span>
              PastWhiz AI solves this by allowing students to upload past questions, which the platform automatically processes and generates accurate answers with detailed explanations using AI models. It also organizes these questions into a structured, searchable database, helping students study efficiently by filtering questions by subject, topic, or year. This turns exam preparation into a faster, more effective, and more meaningful learning experience.
            </span>)
          }
        </div>
      </motion.section>
    </StaggerSection>
  );
}
