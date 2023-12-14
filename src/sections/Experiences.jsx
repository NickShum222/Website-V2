"use client";

import { useState, useRef } from "react";
import { experiences } from "@/constants";
import Header from "@/components/Header";
import {
  motion,
  useScroll,
  AnimatePresence,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { experiencesBodySlideUp } from "@/utils/motion";

const Experiences = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end end"],
  });
  const [selected, setSelected] = useState(0);
  return (
    <div
      ref={element}
      className="h-[200lvh] relative w-full bg-primary dark:bg-secondary"
    >
      <div
        className={`lg:px-[6%] md:px-[64px] px-[24px] py-[6%] flex flex-col md:justify-start justify-center bg-primary dark:bg-secondary w-full h-[100dvh] sticky top-0`}
      >
        <div className="sm:inline hidden w-full">
          <Header title="Experiences" index="03." />
        </div>
        <div className="sm:hidden inline w-full">
          <Header title="Work" index="03." />
        </div>
        {/*<div className="flex w-full justify-end md:mb-[2%] mb-[7%]">*/}
        {/*  <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">*/}
        {/*    <div*/}
        {/*      className="text-tertiary dark:text-primary md:text-[3.125vw]*/}
        {/*  sm:text-[3.980vw] text-[5.089vw]*/}
        {/*  italic tracking-tighter font-[300] leading-[0.9] lg:mt-1"*/}
        {/*    >*/}
        {/*      03.*/}
        {/*    </div>*/}
        {/*    <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] sm:inline hidden leading-[0.8] tracking-tight  font-[700] text-tertiary dark:text-primary border-tertiary border-b-2 border-solid w-full dark:border-primary pb-[4%]">*/}
        {/*      EXPERIENCES*/}
        {/*    </div>*/}
        {/*    <div className="text-[12.427vw] font-[700] leading-[0.8] text-tertiary dark:text-primary border-b-2 border-solid w-full dark:border-primary border-tertiary pb-[4%] sm:hidden inline">*/}
        {/*      WORK*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="flex lg:flex-row flex-col justify-between items-start lg:gap-0 sm:gap-8 gap-6 w-full">
          <div className="flex lg:flex-col flex-row justify-start items-start lg:w-[20%] w-full lg:gap-3 sm:gap-12 gap-4 lg:pl-[5%] relative">
            {experiences.map((experience, index) => {
              const start = index / experiences.length;
              const end = start + 1 / experiences.length;
              const middle = (start + end) / 2;
              return (
                <ExperienceTitle
                  key={index}
                  index={index}
                  setSelected={setSelected}
                  range={[start, middle, end]}
                  progress={scrollYProgress}
                  label={experience.id}
                />
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className="lg:w-[75%] w-full lg:pl-[1%]"
              key={experiences[selected].id}
              variants={experiencesBodySlideUp}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <div className="font-[700] dark:text-primary text-secondary lg:text-experiencesHeading sm:text-[5.305vw] text-[7.952vw] md:leading-[1.1] leading-[1.2] tracking-tight w-full lg:mb-[0.5%] mb-[2%] ">
                {experiences[selected].title} @{" "}
                <span className="dark:text-primary text-secondary cursor-pointer underline lg:decoration-[4px] decoration-[2px] ">
                  {experiences[selected].company}
                </span>
              </div>
              <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-experiencesSub sm:text-[3.980vw] text-[6.361vw] leading-[1.2] ">
                {experiences[selected].date}
              </div>
              <ul className="lg:my-[3%] sm:my-[4%] my-[7%]">
                {experiences[selected].description.map((description, index) => (
                  <li
                    key={index}
                    className="font-[300] text-grey4 lg:text-experiencesSub sm:text-[2.985vw] text-[5.089vw] leading-[1.3]"
                  >
                    {description}
                  </li>
                ))}
              </ul>
              <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-experiencesSub sm:text-[3.980vw] text-[6.361vw] leading-[1.2]">
                Tools:
              </div>
              <div className="font-[300] text-grey4 lg:text-experiencesSub sm:text-[2.985vw] text-[5.089vw] leading-[1.3]">
                {experiences[selected].tools}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ExperienceTitle = ({ label, range, progress, setSelected, index }) => {
  let opacity, x;
  if (index === 0) {
    opacity = useTransform(progress, [range[0], range[2]], [1, 0.1]);
    x = useTransform(progress, [range[0], range[2]], ["10%", "0%"]);
  } else if (index === experiences.length - 1) {
    opacity = useTransform(progress, [range[0], range[2]], [0.1, 1]);
    x = useTransform(progress, [range[0], range[2]], ["0%", "10%"]);
  } else {
    opacity = useTransform(progress, range, [0.1, 1, 0.1]);
    x = useTransform(progress, range, ["10%", "0%", "10%"]);
  }
  useMotionValueEvent(progress, "change", (value) => {
    if (value > range[0] && value < range[2]) {
      setSelected(index);
    }
  });
  return (
    <motion.span
      style={{ opacity, x }}
      className={`font-[700] cursor-pointer transition-colors duration-[300ms] lg:text-[2.083vw] sm:text-[3.980vw] text-[5.089vw] leading-[1.2] tracking-tight text-primary`}
    >
      {label}
    </motion.span>
  );
};

export default Experiences;
