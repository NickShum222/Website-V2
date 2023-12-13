"use client";
import { useRef } from "react";
import { Button, Header } from "@/components";
import { skills } from "@/constants";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const slideIn = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 100,
    translateX: 50,
  },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),

};

const Services = () => {
  const skillsContainer = useRef(null);
  const isInView = useInView(skillsContainer, { once: true, amount: 0.4 });
  return (
    <div
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <Header title="Services" index="02." />
      <div className="flex w-full md:flex-row flex-col justify-between items-start relative">
        <div className="flex flex-col justify-between items-start gap-8 md:w-[50%] h-full w-full sticky top-[2%]">
          <div className="flex flex-col items-start justify-between h-full w-full  ">
            <div className="text-secondary dark:text-primary font-[700] lg:text-[4.857vw] md:text-[5.305vw] text-[9.939vw] leading-[1.2] tracking-tight">
              my tech stack.
            </div>
            <div className="font-[500] dark:text-grey3 lg:text-[3.125vw] md:text-[3.980vw] text-[6.361vw] text-grey2 md:leading-[1.1] leading-[1.2] mb-[6%]">
              Here are just some of my go-to tools used for web development.
            </div>
            <div className="w-full flex md:hidden justify-between items-start">
              <div className="w-[50%] flex flex-col items-start ">
                {skills.slice(0, 4).map((skill, index) => (
                  <div
                    className="font-bold text-[9.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="w-[50%] flex flex-col items-end ">
                {skills.slice(4, 8).map((skill, index) => (
                  <div
                    className="font-bold text-[9.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full ">
            <div className="font-[500] lg:text-[3.125vw] dark:text-grey3 md:text-[3.980vw] text-[6.361vw] text-grey2 md:leading-[1.1] leading-[1.2] mb-[3%]">
              You can see the rest of my skills here.
            </div>
              <Link href="/ShumNickResume.pdf" target="_blank" rel="noreferrer noopener">
              <Button
                  label={"Resume"}
                  className="w-full text-center text-primary bg-tertiary font-[700] lg:text-[2.083vw] md:text-[3.980vw] text-[6.361vw] rounded-lg py-2"
              />
            </Link>
          </div>
        </div>
        <div
          ref={skillsContainer}
          className=" flex-col items-end md:w-[50%] md:flex hidden perspective"
        >
          {skills.map((skill, index) => (
            <motion.div
              className="font-bold ld:text-[4.722vw] md:text-[4.969vw] text-[9.939vw] md:leading-[1.1] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
              key={index}
              custom={index}
              variants={slideIn}
              initial="initial"
              animate={isInView ? "enter" : "initial"}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
