import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col h-full rounded-xl border border-gray-200 bg-white shadow-sm p-4"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <div className="flex flex-col flex-1 gap-3">
        <h3 className="text-lg font-bold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-400/20 px-3 py-1 text-xs font-medium text-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-auto"
        >
          <Link
            to={`/case-study/${link}`}
            className="block text-center bg-black text-white font-semibold rounded-lg py-2"
          >
            Case Study
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
