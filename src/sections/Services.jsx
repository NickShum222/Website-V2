"use client";
import { useRef } from "react";
import { Button, Header, BodyAnim, BodyAnim2 } from "@/components";
import { skills } from "@/constants";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {bodyAnim2SlideUp} from "@/utils/motion";

const Services = () => {
  const skillsContainer = useRef(null);
  const skillsContainerMobile = useRef(null);
  const isInView = useInView(skillsContainer, { once: true, amount: 0.4 });
  // const isInViewMobile = useInView(skillsContainerMobile, { once: true, amount: 0.4 });
  return (
    <section
    id="services"
      className={`lg:px-[6%] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <Header title="Services" index="02." />
      <div className="flex w-full md:flex-row flex-col md:justify-center justify-start items-start relative">
        <div className="flex flex-col justify-between items-start gap-8 md:w-[50%] h-full w-full ">
          <div className="flex flex-col items-start justify-between h-full w-full  mb-[6%]">
            <BodyAnim2 className="text-secondary dark:text-primary font-[600] lg:text-servicesTech md:text-[4.969vw] text-[6.939vw] leading-[1.3] tracking-tight mb-[1.5%]">
            my tech stack.
            </BodyAnim2>
            <BodyAnim2  className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[300] md:text-[2.576vw] text-[4.589vw] leading-[1.4] ">
              Here are just some of my go-to tools used for web development.
            </BodyAnim2>
            <BodyAnim className={"w-full"}>
              <div
                  ref={skillsContainerMobile}
                  className="w-full flex md:hidden justify-between items-start"
              >
                <div className="w-[50%] flex flex-col items-start ">
                  {skills.slice(0, 4).map((skill, index) => (
                      <div
                          className="font-bold text-[6.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
                          key={index}
                      >
                        {skill}
                      </div>
                  ))}
                </div>
                <div className="w-[50%] flex flex-col items-end ">
                  {skills.slice(4, 8).map((skill, index) => (
                      <div
                          className="font-bold text-[6.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
                          key={index}

                      >
                        {skill}
                      </div>
                  ))}
                </div>
              </div>
            </BodyAnim>

          </div>
          <div className="flex flex-col justify-start w-full ">
            <BodyAnim2 className="text-secondary dark:text-primary font-[600] lg:text-servicesTech md:text-[4.969vw] text-[6.939vw] leading-[1.3] tracking-tight mb-[1.5%]">
              my resume.
            </BodyAnim2>
            <BodyAnim2 className="lg:text-aboutParagraph font-[300] md:text-[2.576vw] text-[4.589vw] text-grey2 dark:text-grey3 leading-[1.4]  mb-[2%]">
              The rest of my skills can be found here.
            </BodyAnim2>
            <BodyAnim>
              <Link
                href="/ShumNickResume.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  label={"Resume"}
                  className="uppercase flex justify-center items-center cursor-pointer tracking-tight w-full text-center text-primary bg-tertiary font-[600] lg:text-[2.083vw] md:text-[3.980vw] text-[6.361vw] rounded-lg py-2"
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
              <div className={"h-auto relative overflow-y-clip"}
                   key={index}>
                <motion.div
                  className="font-bold lg:text-servicesTech md:text-[4.969vw] text-[6.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
                  custom={index * 5}
                  variants={bodyAnim2SlideUp}
                  initial="initial"
                  animate={isInView ? "enter" : "initial"}
              >
                {skill}
              </motion.div>
              </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
