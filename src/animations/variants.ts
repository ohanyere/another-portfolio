// // src/animations/variants.ts
// import { easeOut, easeIn } from "framer-motion";

// export const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
//     },
//   },
// };

// export const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// export const scaleIn = {
//   hidden: { opacity: 0, scale: 0.94 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// export const pageTransition = {
//   hidden: { opacity: 0, y: 8 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.35, ease: "easeOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -8,
//     transition: { duration: 0.25, ease: "easeIn" },
//   },
// };

// src/animations/variants.ts
import { easeOut, easeIn } from "framer-motion";

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: easeOut,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const pageTransition = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: easeIn },
  },
};
