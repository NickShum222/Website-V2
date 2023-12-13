"use client";
import { useState } from "react";
import { Header } from "@/components";
import { projects } from "@/constants";
import Link from "next/link";

const Projects = () => {
  const [active, setActive] = useState(null);
  return (
    <div
      className={`flex flex-col justify-start bg-primary dark:bg-secondary py-[4%] w-full`}
    >
      <Header
        title="Projects"
        index="04."
        className={"lg:px-[9%] md:px-[64px] px-[24px]"}
      />
      <div className="relative">
        <div className="w-full flex flex-col">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              onMouseOver={() => {
                setActive(index);
              }}
              onMouseLeave={() => {
                setActive(null);
              }}
              className={`z-10 py-[2%]  border-t-[1px] border-solid border-secondary dark:border-primary lg:px-[9%] md:px-[64px] px-[24px]
          ${index === 2 ? "border-b-[1px]" : ""} cursor-pointer `}
            >
              <p
                className={`text-tertiary uppercase dark:text-primary lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight font-[700]`}
              >
                {project.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full flex flex-col">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              className={`bg-tertiary dark:bg-primary py-[2%]  border-t-[1px] border-solid dark:border-primary border-secondary lg:px-[9%] md:px-[64px] px-[24px] relative
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
              <div className="  flex h-full justify-between items-center">
                <p className="font-[700] uppercase lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight text-primary dark:text-tertiary">
                  {" "}
                  {project.name}
                </p>
                {/*<RxExternalLink className="text-primary dark:text-tertiary md:inline hidden w-[2%] overflow-y-clip p-0 m-0 dark:text-teritary" />*/}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
