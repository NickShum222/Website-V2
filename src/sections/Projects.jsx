"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components";
import { projects } from "@/constants";
import { RxExternalLink } from "react-icons/rx";

const Projects = () => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    console.log("Active value changed:", active);
  }, [active]);
  return (
    <div
      className={`flex flex-col justify-start bg-primary dark:bg-secondary py-[4%] w-full`}
    >
      <Header
        title="Projects"
        index="03."
        className={"lg:px-[128px] md:px-[64px] px-[24px]"}
      />
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
              className={`bg-tertiary dark:bg-primary py-[2%]  border-t-[1px] border-solid dark:border-primary border-secondary lg:px-[128px] md:px-[64px] px-[24px] relative
          ${
            index === 2 ? "border-b-[1px]" : ""
          } description z-20 cursor-pointer`}
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
              <div className=" font-[700] lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight text-primary dark:text-tertiary flex h-full justify-between items-center">
                <p> {project}</p>
                <RxExternalLink className="text-primary dark:text-tertiary md:inline hidden h-[50%] w-[6%] dark:text-teritary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
