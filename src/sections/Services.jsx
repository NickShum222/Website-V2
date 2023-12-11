import React from "react";
import { Button, Header } from "@/components";
const skills = [
  "React",
  "Next",
  "Vue",
  "Spring",
  "Express",
  "Django",
  "Figma",
  "Tailwind",
];

const Services = () => {
  return (
    <div
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <Header title="Services" index="02." />
      <div className="flex w-full md:flex-row flex-col justify-between items-start">
        <div className="flex flex-col justify-between items-start gap-8 md:w-[50%] h-full w-full">
          <div className="flex flex-col items-start justify-between h-full w-full ">
            <div className="text-secondary dark:text-primary font-[700] lg:text-[4.857vw] md:text-[5.305vw] text-[9.939vw] leading-[1.2] tracking-tight">
              my tech stack.
            </div>
            <div className="font-[500] dark:text-grey3 lg:text-[3.125vw] md:text-[3.980vw] text-[6.361vw] text-grey2 leading-[1.2] tracking-tight mb-[6%]">
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
                {skills.slice(4,8).map((skill, index) => (
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
            <div className="font-[500] lg:text-[3.125vw] dark:text-grey3 md:text-[3.980vw] text-[6.361vw] text-grey2 leading-[1.2] tracking-tight mb-[6%]">
              You can see the rest of my skills here.
            </div>
            {/* <div className="w-full text-center text-primary bg-tertiary font-[700] lg:text-[2.083vw] md:text-[3.980vw] text-[6.361vw]  py-2">
              RESUME
            </div> */}
            <Button label={"Resume"} className="w-full text-center text-primary bg-tertiary font-[700] lg:text-[2.083vw] md:text-[3.980vw] text-[6.361vw] rounded-lg py-2" />
          </div>
        </div>
        <div className=" flex-col items-end md:w-[50%] md:flex hidden">
          {skills.map((skill, index) => (
            <div
              className="font-bold ld:text-[4.722vw] md:text-[4.969vw] text-[9.939vw] leading-[1.2] text-tertiary dark:text-primary tracking-tight"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
