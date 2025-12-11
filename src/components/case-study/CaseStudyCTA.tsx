import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";
import { useParams } from "react-router-dom";

export default function CaseStudyCTA() {
    const {id} = useParams()
    const githubLink = id?.includes("animal") ? "https://github.com/ohanyere/animal-check" : id?.includes("share") ? "https://github.com/ohanyere/share-interview" : id?.includes("graphql") ? "https://github.com/ohanyere/graphql-ecommerce" : id?.includes("monster") ? "https://github.com/ohanyere/monster" : null

  return ( 
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mt-20 py-10 border-t border-border-light dark:border-border-dark"
    >
      <h2 className="text-2xl md:text-3xl font-bold">View Project</h2>

      <p className="text-text-muted-light dark:text-text-muted-dark text-base md:text-lg mt-3 mb-8 max-w-xl mx-auto">
        Explore the live application or dive into the source code to see how it was built.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.a
          href={`https://${id}`}
          target="_blank"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 h-12 px-6 bg-black text-white rounded-lg font-bold"
        >
          Live Site
        </motion.a>

        <motion.a
          href={`${githubLink}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 h-12 px-6 border border-border-light dark:border-border-dark rounded-lg font-bold"
        >
          <svg className="h-5 w-5" fill="currentColor">
            <path d="M12 2C6.477 2 2 ..."></path>
          </svg>
          GitHub Repo
        </motion.a>
      </div>
    </motion.section>
  );
}
