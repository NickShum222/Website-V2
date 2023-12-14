"use client";
import { useState, useEffect } from "react";
import { TextAnim } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { landingText } from "@/constants";
import { Loading } from ".";
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
      delay: 2.45,
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
      <section className="z-[100] select-none flex flex-col w-full justify-between min-h-[100lvh] bg-primary dark:bg-secondary lg:p-6 md:p-7 sm:p-5 p-3 relative">
        <div className="flex z-10 flex-col justify-start items-start w-full lg:mt-[-1%]">
          <TextAnim
            className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw] font-[700] tracking-tight text-tertiary dark:text-primary"
            delay={2.4}
          >SOFTWARE</TextAnim>
          <TextAnim
            className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw] font-[700] tracking-tight text-tertiary dark:text-primary mt-[-2%]"
            delay={2.45}

          >DEVELOPER</TextAnim>
          <motion.div
            className="flex justify-start  items-center lg:gap-4 sm:gap-2 gap-1 w-full "
            variants={slideRight}
            initial="initial"
            animate="animate"
          >
            <div className="bg-tertiary dark:bg-primary lg:h-[4px] md:h-[3px] h-[2px] w-[6%] lg:ml-3 ml-2" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={landingText[currentIndex]}
                  variants={slideIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="landing-text truncate uppercase text-tertiary dark:text-primary lg:text-[45px] md:text-[5.305vw] text-[5.361vw] leading-[1.2] font-medium whitespace-nowrap"
                >
                  {landingText[currentIndex]}
                </motion.p>
              </AnimatePresence>
          </motion.div>
        </div>
        <div className="z-10 flex flex-col justify-end w-full items-end mb-[-1%]">
          <TextAnim
            className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw] font-[700] tracking-tight text-tertiary dark:text-primary "
            delay={2.4}
          >NICK</TextAnim>
          <TextAnim
            className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw] font-[700] tracking-tight text-tertiary dark:text-primary lg:-mr-3 md:-mr-2
          -mr-1 mt-[-3%]
          "
            delay={2.43}
          >SHUM</TextAnim>
        </div>
        {/* THis component is slowing down the page for some reason*/}
        {/*<div className="z-0 absolute top-0 left-0 h-[100svh] w-full flex justify-center items-center m-0 py-0">*/}
        {/*  <div className="leading-[10px] font-bold text-[50vw] tracking-tighter text-[#B6b7B9] opacity-[24%]">*/}
        {/*    NS.*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>
    </>
  );
};

export default Landing;
