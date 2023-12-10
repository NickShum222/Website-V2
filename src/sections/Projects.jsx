"use client";
import { useState, useEffect } from "react";
const projects = ["RESUMATCH", "SPOTITRACK", "WEBSITE V1"];

const Projects = () => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    console.log("Active value changed:", active);
  }, [active]);
  return (
    <div
      className={`flex flex-col justify-start bg-primary dark:bg-secondary py-[4%] w-full`}
    >
      <div className="lg:px-[128px] md:px-[64px] px-[24px] py-[42px] flex w-full justify-end md:mb-[2%] mb-0">
        <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
          <div
            className="text-tertiary dark:text-primary md:text-[3.125vw]
            sm:text-[3.980vw] text-[5.089vw]
            italic tracking-tighter font-[500] leading-[0.9] lg:mt-1"
          >
            03.
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight  font-[700] text-tertiary dark:text-primary border-b-2 border-solid w-full border-tertiary dark:border-primary pb-[4%]">
            PROJECTS
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseOver={() => {
                setActive(index);
              }}
              onMouseLeave={() => {
                setActive(null);
              }}
              className={`z-10 py-[2%]  border-t-[1px] border-solid border-secondary dark:border-primary lg:px-[128px] md:px-[64px] px-[24px]
          ${index === 2 ? "border-b-[1px]" : ""} cursor-pointer `}
            >
              <p
                className={`text-tertiary dark:text-primary lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight font-[700]`}
              >
                {project}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-tertiary py-[2%]  border-t-[1px] border-solid border-secondary dark:border-primary lg:px-[128px] md:px-[64px] px-[24px] relative
          ${index === 2 ? "border-b-[1px]" : ""} description z-20 cursor-pointer`}
              style={{
                clipPath:
                  active === index ? "inset(0 0 0 0)" : "inset(50% 0 50% 0)",
              }}
              onMouseOver={() => {
                setActive(index);
              }}
              onMouseLeave={() => {
                setActive(null);
              }}
            >
              <p className=" font-[700] lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight text-primary flex justify-between">
                {project}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
