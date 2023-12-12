"use client";
import React from "react";
import { motion } from "framer-motion";
const firstName = ["N", "I", "C", "K", "S", "H", "U", "M", "."];
const slideUpFirst = {
  initial: {
    y: 0,
  },
  enter: (index) => ({
    y: "-100%",
    transition: {
      delay: index * 0.03 + 0.7,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    y: 0,
  },
};
const slideUpSecond = {
  initial: {
    y: 0,
  },
  enter: (index) => ({
    y: "-100%",
    x: index === 0 ? "270%" : index === 8 ? "-900%" : 0,
    transition: {
      delay: index * 0.03 + 0.7,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      x: {
        delay: 1.6,
        duration: 0.8,
        ease: [0.64, 0, 0.78, 0],
      },
    },
  }),
  exit: {
    y: 0,
  },
};
const Loading = () => {
  return (
    <div className="relative z-0 h-[100dvh] w-[100dvw] flex flex-col justify-center items-center bg-secondary">
      <div className="overflow-y-clip h-auto relative items-center">
        <div className="text-primary h-[100%] uppercase flex font-bold text-[10.417vw] leading-[1] relative">
          {firstName.map((letter, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={slideUpFirst}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {letter}
            </motion.div>
          ))}
        </div>

        <div className="text-primary h-[100%] uppercase flex font-bold text-[10.417vw] leading-[1] absolute -bottom-[100%]">
          {firstName.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={slideUpSecond}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`${
                index === 0 || index === 4 || index === 8 ? "" : "opacity-0"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
