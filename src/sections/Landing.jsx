"use client";
import { useState, useEffect } from "react";
import { TextAnim } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { landingText } from "@/constants";
const slideRight = {
  initial: {
    opacity: 0,
    x: "-20%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.09,
    },
  },
};
const slideIn = {
  initial: {
    opacity: 0,
    rotateX: -90,
    y: "40%",
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateX: 90,
    y: "-40%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % landingText.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [landingText.length]);
  return (
    <>
      <div
          className="z-[100] select-none flex flex-col w-full justify-between min-h-[100lvh] bg-primary dark:bg-secondary lg:p-10 md:p-7 sm:p-5 p-3 relative">
        <div className="flex z-10 flex-col justify-start items-start w-full -mt-[1%]">
          <TextAnim
            label={"SOFTWARE"}
            className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw] font-[700] tracking-tight text-tertiary dark:text-primary"
            delay={0}
          />
          <TextAnim
            label={"DEVELOPER"}
            className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw] font-[700] tracking-tight text-tertiary dark:text-primary"
            delay={0.05}
          />
          <motion.div
            className="flex justify-start  items-center lg:gap-4 sm:gap-2 gap-1 w-full "
            variants={slideRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-tertiary dark:bg-primary lg:h-[4px] md:h-[3px] h-[2px] w-[6%] lg:ml-3 ml-2" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={landingText[currentIndex]}
                  variants={slideIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="landing-text uppercase text-tertiary dark:text-primary lg:text-[45px] md:text-[5.305vw] text-[6.361vw] leading-[1.2] font-medium"
                >
                  {landingText[currentIndex]}
                </motion.p>
              </AnimatePresence>
          </motion.div>
        </div>
        <div className="z-10 flex flex-col justify-end w-full items-end">
          <TextAnim
            label={"NICK"}
            className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw] font-[700] tracking-tight text-tertiary dark:text-primary"
          />
          <TextAnim
            label={"SHUM"}
            className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw] font-[700] tracking-tight text-tertiary dark:text-primary lg:-mr-3 md:-mr-2
          -mr-1
          "
            delay={0.03}
          />
        </div>
        {/* THis component is slowing down the page for some reason*/}
        {/*<div className="z-0 absolute top-0 left-0 h-[100svh] w-full flex justify-center items-center m-0 py-0">*/}
        {/*  <div className="leading-[10px] font-bold text-[50vw] tracking-tighter text-[#B6b7B9] opacity-[24%]">*/}
        {/*    NS.*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Landing;
