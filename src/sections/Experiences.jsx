"use client";

import { useState, useRef, useEffect } from "react";
import { experiences } from "@/constants";
import {
  motion,
  useScroll,
  AnimatePresence,
  useTransform,
} from "framer-motion";

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
      className="h-[250dvh] relative w-full bg-primary dark:bg-secondary"
    >
      <div
        className={`lg:px-[128px] md:px-[64px] px-[24px] py-[12%] flex flex-col justify-start bg-primary dark:bg-secondary w-full h-[100dvh] sticky top-0`}
      >
        <div className="flex w-full justify-end md:mb-[2%] mb-[7%]">
          <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
            <div
              className="text-tertiary dark:text-primary md:text-[3.125vw]
          sm:text-[3.980vw] text-[5.089vw]
          italic tracking-tighter font-[300] leading-[0.9] lg:mt-1"
            >
              03.
            </div>
            <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] sm:inline hidden leading-[0.8] tracking-tight  font-[700] text-tertiary dark:text-primary border-tertiary border-b-2 border-solid w-full dark:border-primary pb-[4%]">
              EXPERIENCES
            </div>
            <div className="text-[12.427vw] font-[700] leading-[0.8] text-tertiary dark:text-primary border-b-2 border-solid w-full dark:border-primary border-tertiary pb-[4%] sm:hidden inline">
              WORK
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-bewteen items-start lg:gap-0 sm:gap-8 gap-6 w-full">
          <div className="flex lg:flex-col flex-row justify-start items-start lg:w-[30%] w-full lg:gap-3 sm:gap-12 gap-4 lg:pl-[5%]">
            {experiences.map((experience, index) => {
              const start = index / experiences.length;
              const end = start + 1 / experiences.length;
              const middle = (start + end) / 2;
              return (
                <ExperienceTitle
                  key={index}
                  index={index}
                  range={[start, middle, end]}
                  progress={scrollYProgress}
                  label={experience.id}
                />
              );
              //     <div
              //       key={index}
              //       className={`font-[700] cursor-pointer transition-colors duration-[300ms] lg:text-[2.083vw] sm:text-[3.980vw] text-[5.089vw] leading-[1.2] tracking-tight lg:px-[5%] max-lg:pb-[1%]
              //   ${
              //     index === selected
              //       ? "text-tertiary dark:text-primary lg:border-r-[3px] border-r-0 lg:border-b-0 border-b-[3px] border-solid dark:border-primary border-tertiary"
              //       : "text-grey3 hover:dark:text-primary dark:text-grey4"
              //   }
              // `}
              //       onClick={() => setSelected(index)}
              //     >
              //       {experience.id}
              //     </div>
            })}
          </div>
          <div className="md:w-[80%] relative">
            {experiences.map((experience, index) => {
              const start = index / experiences.length;
              const end = start + 1 / experiences.length;
              const middle = (start + end) / 2;
              return (
                <ExperienceBody
                  key={index}
                  index={index}
                  range={[start, middle, end]}
                  progress={scrollYProgress}
                  label={experience.id}
                >
                  <div className="w-full flex-col absolute top-0 left-0">
                    <div className="font-[700] dark:text-primary text-secondary lg:text-[3.125vw] sm:text-[5.305vw] text-[7.952vw]  tracking-tight leading-[1.2]">
                      {experience.title} @{" "}
                      {experience.company}
                    </div>
                    <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-[2.083vw] sm:text-[3.980vw] text-[6.361vw] leading-[1.2] mb-[3.4%]">
                      {experience.date}
                    </div>
                    <ul className="lg:mb-[2%] mb-[5%]">
                      {experience.description.map(
                        (description, index) => (
                          <li
                            key={index}
                            className="font-[300] text-grey4  lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] leading-[1.5]"
                          >
                            {description}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-[2.083vw] sm:text-[3.980vw] text-[6.361vw] leading-[1.2]">
                      Tools:
                    </div>
                    <div className="font-[300] text-grey4 lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] leading-[1.5]">
                      {experience.tools}
                    </div>
                  </div>
                </ExperienceBody>
              );
            })}
            {/* <div className="font-[700] dark:text-primary text-secondary lg:text-[3.125vw] sm:text-[5.305vw] text-[7.952vw]  tracking-tight leading-[1.2]">
              {experiences[selected].title} @ {experiences[selected].company}
            </div>
            <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-[2.083vw] sm:text-[3.980vw] text-[6.361vw] leading-[1.2] mb-[3.4%]">
              {experiences[selected].date}
            </div>
            <ul className="lg:mb-[2%] mb-[5%]">
              {experiences[selected].description.map((description, index) => (
                <li
                  key={index}
                  className="font-[300] text-grey4  lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] leading-[1.5]"
                >
                  {description}
                </li>
              ))}
            </ul>
            <div className="font-[400] dark:text-grey3 text-grey2 tracking-tight lg:text-[2.083vw] sm:text-[3.980vw] text-[6.361vw] leading-[1.2]">
              Tools:
            </div>
            <div className="font-[300] text-grey4 lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] leading-[1.5]">
              {experiences[selected].tools}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceTitle = ({ label, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1, 0.1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`font-[700] cursor-pointer transition-colors duration-[300ms] lg:text-[2.083vw] sm:text-[3.980vw] text-[5.089vw] leading-[1.2] tracking-tight text-primary`}
    >
      {label}
    </motion.span>
  );
};
const ExperienceBody = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1, 0]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

export default Experiences;
