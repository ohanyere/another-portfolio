import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Platform Engineer",
  "Backend Engineer",
  "Cloud-Native Engineer",
];

export default function TextCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-16 items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="text-center text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl"
        >
          {titles[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
