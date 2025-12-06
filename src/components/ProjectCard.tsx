// import { Link } from "react-router-dom";
// import FadeInWhenVisible from "./FadeInWhenVisible";

// export interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// }

// export default function ProjectCard({
//   title,
//   description,
//   image,
//   tags,
// }: ProjectCardProps) {
//   return (
//     <FadeInWhenVisible>
//       <div className="flex flex-col gap-6">
//         <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-2 shadow-md">
//           <div className="p-2 bg-white dark:bg-gray-800 rounded-lg">
//             <div className="flex items-center gap-1.5 px-2 pb-2">
//               <div className="size-2.5 rounded-full bg-red-400" />
//               <div className="size-2.5 rounded-full bg-yellow-400" />
//               <div className="size-2.5 rounded-full bg-green-400" />
//             </div>
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-auto rounded-md object-cover aspect-[16/9]"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col gap-3">
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//             {title}
//           </h3>
//           <p className="text-gray-600 dark:text-gray-400">{description}</p>
//           <div className="flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-medium text-primary dark:text-primary/90"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <div className="flex items-center gap-4 mt-3">
//             <a className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
//               Live Demo
//               <span className="material-symbols-outlined text-base">
//                 arrow_outward
//               </span>
//             </a>

//             {/* This links to the case study page */}
//             <Link
//               to="/case-study"
//               className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
//             >
//               Case Study
//             </Link>
//           </div>
//         </div>
//       </div>
//     </FadeInWhenVisible>
//   );
// }

// src/components/ProjectCard.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleIn, fadeUp } from "../animations/variants";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link : string
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.01, rotateX: 1, rotateY: -1 }}
      transition={{ type: "spring", stiffness: 230, damping: 18 }}
      className="flex flex-col gap-6"
    >
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-2 shadow-md">
        <div className="p-2 bg-white dark:bg-gray-800 rounded-lg">
          <div className="flex items-center gap-1.5 px-2 pb-2">
            <div className="size-2.5 rounded-full bg-red-400" />
            <div className="size-2.5 rounded-full bg-yellow-400" />
            <div className="size-2.5 rounded-full bg-green-400" />
          </div>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-auto rounded-md object-cover aspect-[16/9]"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-medium text-primary dark:text-primary/90"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-3">
          

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link
              to={`/case-study/${link}`}
              className="flex items-center justify-center bg-black gap-2 rounded-lg h-10 px-4 text-white dark:text-white font-bold hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
            >
              Case Study
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
