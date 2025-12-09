import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy"
import { pageTransition } from "./animations/variants";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="hidden"
        animate="show"
        exit="exit"
        className="min-h-screen flex"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
