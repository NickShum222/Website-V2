"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const slideUp = {
  initial: {
    y: "25%",
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const index = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={slideUp}
      initial="initial"
      animate={isInView ? "enter" : "initial"}
    >
      {children}
    </motion.div>
  );
};

export default index;
