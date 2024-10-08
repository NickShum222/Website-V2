"use client";
import { useState, useEffect, useContext } from "react";
// import {Load} from "@/pages/_app";
import { TextAnim } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { landingText } from "@/constants";
import { landingSubSlideRight, landingSubRotateX } from "@/utils/motion";

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % landingText.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [landingText.length]);
  // const [loaded, setLoaded] = useContext(Load)
  return (
    <motion.div
      id="landing"
      className=" z-[50] select-none flex flex-col w-full justify-between min-h-[100svh] bg-primary dark:bg-secondary lg:p-6 md:p-7 sm:p-5 p-3 relative"
    >
      <div className="flex z-10 flex-col justify-start items-start w-full lg:mt-[-1%]">
        <TextAnim
          className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw] font-[600] tracking-tight text-tertiary dark:text-primary"
          // delay={loaded ? 0: 2.4}
          delay={0.4}
        >
          SOFTWARE
        </TextAnim>
        <TextAnim
          className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw]  font-[600] tracking-tight text-tertiary dark:text-primary lg:mt-[-2%]"
          // delay={loaded ? 0 : 2.45}
          delay={0.45}
        >
          DEVELOPER
        </TextAnim>
        <motion.div
          className="flex justify-start  items-center lg:gap-4 sm:gap-2 gap-1 w-full "
          variants={landingSubSlideRight}
          // custom={loaded ? 0: 2.45}
          custom={0.55}
          initial="initial"
          animate="animate"
        >
          <div className="bg-tertiary dark:bg-primary lg:h-[4px] md:h-[3px] h-[2px] w-[6%] lg:ml-3 ml-2" />
          <AnimatePresence mode="popLayout">
            <motion.p
              key={landingText[currentIndex]}
              variants={landingSubRotateX}
              initial="initial"
              animate="animate"
              exit="exit"
              className="landing-text overflow-clip uppercase text-tertiary dark:text-primary lg:text-[45px] md:text-[5.305vw] text-[5.361vw] leading-[1.2] font-medium whitespace-nowrap"
            >
              {landingText[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="z-10 flex flex-col justify-end w-full items-end mb-[-1%]">
        <TextAnim
          className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw]  font-[600] tracking-tight text-tertiary dark:text-primary "
          // delay={loaded ? 0 : 2.4}
          delay={0.4}
        >
          NICK
        </TextAnim>
        <TextAnim
          className="lg:text-[150px] md:text-[12.564vw] text-[14.532vw]  font-[600] tracking-tight text-tertiary dark:text-primary lg:-mr-3 md:-mr-2
          -mr-1 lg:mt-[-3%]
          "
          // delay={loaded ? 0 : 2.43}
          delay={0.45}
        >
          SHUM
        </TextAnim>
      </div>
      {/* THis component is slowing down the page for some reason */}
      {/* <div className="z-0 absolute top-0 left-0 h-[100svh] w-full flex justify-center items-center m-0 py-0"> */}
      {/* <div className="leading-[1px] absolute top-1/2 left-1/2 -translate-x-1/2 font-bold text-landingBg tracking-tighter text-[#B6b7B9] opacity-[24%]">
          NS.
        </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Landing;
