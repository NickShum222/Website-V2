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
  // const element = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: element,
  //   offset: ["start start", "end end"],
  // });
  const [selected, setSelected] = useState(0);
  return (
    <section
      id="experiences"
      // ref={element}
      className="min-h-[00lvh] relative w-full bg-primary dark:bg-secondary"
    >
      <div
        className={`lg:px-[6%] md:px-[64px] px-[24px] lg:py-[6%] py-[2%] flex flex-col md:justify-start justify-center bg-primary dark:bg-secondary w-full min-h-[100svh] sticky top-0`}
      >
        <div className="sm:inline hidden w-full">
          <Header title="Experiences" index="03." />
        </div>
        <div className="sm:hidden inline w-full">
          <Header title="Work" index="03." />
        </div>
        <div className="flex lg:flex-row flex-col justify-end items-start lg:gap-0 sm:gap-8 gap-6 w-full">
          <div className="flex lg:flex-col flex-row justify-start text-center items-start lg:w-[15%] w-full lg:ml-[5%]  relative">
            <motion.div
              className={
                "absolute lg:inline hidden dark:bg-primary bg-tertiary rounded-full top-0 left-0 w-[4px] z-[20]"
              }
              animate={{ y: `${100 * selected}%` }}
              style={{ height: `calc(100% / ${experiences.length})` }}
              transition={{
                duration: 0.45,
                ease: [0.5, 1, 0.89, 1],
                delay: 0.15,
              }}
            ></motion.div>
            <div className=" absolute lg:top-0 bottom-0 lg:left-[1px] left-0 z-[10] bg-grey4 lg:w-[2px] w-full lg:h-full h-[2px]  rounded-full" />
            <motion.div
              className={
                "absolute lg:hidden inline left-0 bottom-0 h-[3px] rounded-full dark:bg-primary bg-tertiary z-[20] "
              }
              animate={{ x: `${100 * selected}%` }}
              style={{ width: `calc(100% / ${experiences.length})` }}
              transition={{
                duration: 0.45,
                ease: [0.5, 1, 0.89, 1],
                delay: 0.15,
              }}
            ></motion.div>
            {experiences.map((experience, index) => {
              // const start = index / experiences.length;
              // const end = start + 1 / experiences.length;
              // const middle = (start + end) / 2;
              return (
                <ExperienceTitle
                  key={index}
                  index={index}
                  selected={selected}
                  setSelected={setSelected}
                  // range={[start, middle, end]}
                  // progress={scrollYProgress}
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
              <div className="font-[600] dark:text-primary text-secondary lg:text-experiencesHeading sm:text-[5.305vw] text-[7.952vw] md:leading-[1.1] leading-[1.2] tracking-tight w-full lg:mb-[0.5%] mb-[2%] ">
                {experiences[selected].title} @{" "}
                <span className="dark:text-primary text-secondary cursor-pointer underline lg:decoration-[4px] decoration-[2px] ">
                  {experiences[selected].company}
                </span>
              </div>
              <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-aboutParagraph  md:text-[2.576vw] text-[5.089vw] leading-[1.2] ">
                {experiences[selected].date}
              </div>
              <ul className="lg:my-[3%] sm:my-[4%] my-[7%]">
                {experiences[selected].description.map((description, index) => (
                  <li
                    key={index}
                    className=" text-grey2 dark:text-grey4 lg:text-aboutParagraph font-[200] md:text-[2.576vw] text-[5.089vw] leading-[1.3]"
                  >
                    {description}
                  </li>
                ))}
              </ul>
              <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-experiencesSub sm:text-[3.980vw] text-[6.361vw] leading-[1.2]">
                Tools:
              </div>
              <div className=" text-grey2 dark:text-grey4 lg:text-aboutParagraph font-[200] md:text-[2.576vw] text-[5.089vw] leading-[1.3]">
                {experiences[selected].tools}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ExperienceTitle = ({ label, selected, setSelected, index }) => {
  // let opacity;
  // if (index === 0) {
  //   opacity = useTransform(progress, [range[0], range[2]], [1, 0.1]);
  //   // x = useTransform(progress, [range[0], range[2]], ["10%", "0%"]);
  // } else if (index === experiences.length - 1) {
  //   opacity = useTransform(progress, [range[0], range[2]], [0.1, 1]);
  //   // x = useTransform(progress, [range[0], range[2]], ["0%", "10%"]);
  // } else {
  //   opacity = useTransform(progress, range, [0.1, 1, 0.1]);
  //   // x = useTransform(progress, range, ["10%", "0%", "10%"]);
  // }
  // useMotionValueEvent(progress, "change", (value) => {
  //   if (value > range[0] && value < range[2]) {
  //     setSelected(index);
  //   }
  // });

  return (
    <div
      className={`relative w-full py-[2%] z-[20]  bg-opacity-20 ${
        selected === index ? " bg-grey4" : ""
      }`}
    >
      <motion.div
        // style={{ opacity }}
        onClick={() => {
          setSelected(index);
        }}
        className={`cursor-pointer font-[500] w-full  transition-colors duration-[300ms] lg:text-[2.083vw] sm:text-[3.980vw] text-[5.089vw] leading-[1.2] tracking-tight ${
          selected === index
            ? "dark:text-primary text-tertiary"
            : "dark:text-primary text-grey2"
        }`}
      >
        {label}
      </motion.div>
    </div>
  );
};

export default Experiences;
