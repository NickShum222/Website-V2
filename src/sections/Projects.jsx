import { useState } from "react";
import { Header } from "@/components";
import { projects } from "@/constants";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="projects"
      className={`flex flex-col justify-start bg-primary dark:bg-secondary md:pb-[4%] pb-[40%] w-full`}
    >
      <Header
        title="Projects"
        index="04."
        className={"lg:px-[6%] md:px-[64px] px-[24px]"}
      />
      <div className="relative">
        <div className="w-full flex flex-col">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              scroll={false}
              onMouseOver={() => {
                setActive(index);
              }}
              onMouseLeave={() => {
                setActive(null);
              }}
              className={`z-10 lg:py-[2%] py-[3%]  border-t-[1px] border-solid border-secondary dark:border-primary lg:px-[6%] md:px-[64px] px-[24px]
          ${index === 2 ? "border-b-[1px]" : ""} cursor-pointer `}
            >
              <p
                className={`text-tertiary uppercase dark:text-primary lg:text-headingLgClamp md:text-[8.7vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight font-[600]`}
              >
                {project.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full flex flex-col">
          {projects.map((project, index) => (
            <Link
              scroll={false}
              href={project.url}
              key={index}
              className={`bg-tertiary dark:bg-primary lg:py-[2%] py-[3%] border-t-[1px] border-solid dark:border-primary border-secondary lg:px-[6%] md:px-[64px] px-[24px] relative
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
              <div className="  flex h-full justify-start items-center gap-6">
                <p className="font-[600] uppercase lg:text-headingLgClamp md:text-[8.7vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight text-primary dark:text-secondary">
                  {project.name}
                </p>
                {/* <FiExternalLink className="text-primary dark:text-secondary lg:inline hidden text-[5vw]" /> */}
                {/* <p className={"text-primary font-[500] hidden lg:inline text-[1.6vw]"}>{project.description}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
