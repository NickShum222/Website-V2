"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
const slideUp = {
  initial: {
    y: "100%",
  },
  visible: (delay) => ({
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1],
      delay: delay || 0,
    },
  }),
};
const index = ({ label, className, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div className="overflow-y-clip h-auto relative " ref={ref}>
      <motion.div
        variants={slideUp}
        custom={delay}
        initial="initial"
        animate={isInView ? "visible" : "initial"}
        className={`${className} h-full leading-[1]`}
      >
        {label}
      </motion.div>
    </div>
  );
};

export default index;
