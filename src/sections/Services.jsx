"use client";
import { useRef } from "react";
import { Button, Header, BodyAnim } from "@/components";
import { skills } from "@/constants";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { servicesToolsSlideIn, servicesToolsSlideIn2 } from "@/utils/motion";

const Services = () => {
  const skillsContainer = useRef(null);
  const skillsContainerMobile = useRef(null);
  const isInView = useInView(skillsContainer, { once: true, amount: 0.4 });
  const isInViewMobile = useInView(skillsContainerMobile, { once: true, amount: 0.4 });
  return (
    <div
      className={`lg:px-[6%] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <Header title="Services" index="02." />
      <div className="flex w-full md:flex-row flex-col md:justify-center justify-start items-start relative">
        <div className="flex flex-col justify-between items-start gap-8 md:w-[50%] h-full w-full ">
          <div className="flex flex-col items-start justify-between h-full w-full  ">
            <BodyAnim className="text-secondary dark:text-primary font-[700] lg:text-servicesTech md:text-[4.969vw] text-[6.939vw] leading-[1.2] tracking-tight mb-[1.5%]">
              my tech stack.
            </BodyAnim>
            <BodyAnim className="dark:text-grey3 lg:text-aboutParagraph font-[300] md:text-[2.576vw] text-[4.589vw] text-grey2 md:leading-[1.1] leading-[1.2] mb-[6%]">
              Here are just some of my go-to tools used for web development.
            </BodyAnim>
            <div
              ref={skillsContainerMobile}
              className="w-full flex md:hidden justify-between items-start"
            >
              <div className="w-[50%] flex flex-col items-start ">
                {skills.slice(0, 4).map((skill, index) => (
                  <motion.div
                    className="font-bold text-[6.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
                    key={index}
                    custom={index}
                    variants={servicesToolsSlideIn2}
                    initial="initial"
                    animate={isInViewMobile ? "enter" : "initial"}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              <div className="w-[50%] flex flex-col items-end ">
                {skills.slice(4, 8).map((skill, index) => (
                  <motion.div
                    className="font-bold text-[6.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
                    key={index}
                    custom={index}
                    variants={servicesToolsSlideIn}
                    initial="initial"
                    animate={isInViewMobile ? "enter" : "initial"}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full ">
            <BodyAnim className="text-secondary dark:text-primary font-[700] lg:text-servicesTech md:text-[4.969vw] text-[6.939vw] leading-[1.2] tracking-tight mb-[1.5%]">
              my resume.
            </BodyAnim>
            <BodyAnim className="lg:text-aboutParagraph font-[300] md:text-[2.576vw] text-[4.589vw] text-grey2 dark:text-grey3 leading-[1.4]  mb-[2%]">
              The rest of my skills can be found here.
            </BodyAnim>
            <BodyAnim>
              <Link
                href="/ShumNickResume.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  label={"Resume"}
                  className="uppercase flex justify-center items-center cursor-pointer tracking-tight w-full text-center text-primary bg-tertiary font-[700] lg:text-[2.083vw] md:text-[3.980vw] text-[6.361vw] rounded-lg py-2"
                />
              </Link>
            </BodyAnim>
          </div>
        </div>
        <div
          ref={skillsContainer}
          className=" flex-col items-end md:w-[50%] md:flex hidden perspective"
        >
          {skills.map((skill, index) => (
            <motion.div
              className="font-bold lg:text-servicesTech md:text-[4.969vw] text-[6.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
              key={index}
              custom={index}
              variants={servicesToolsSlideIn}
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
