import React from "react";

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
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[6%] flex flex-col justify-start bg-primary  w-full`}
    >
      <div className="flex w-full justify-end md:mb-12 sm:mb-8 mb-4">
        <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
          <div
            className="text-tertiary md:text-[3.125vw]
            sm:text-[3.980vw] text-[5.089vw]
            italic tracking-tighter font-[500] leading-[0.9] lg:mt-1"
          >
            02.
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight  font-[700] text-tertiary border-b-2 border-solid w-full border-tertiary pb-[4%]">
            SERVICES
          </div>
        </div>
      </div>
      <div className="flex w-full sm:flex-row flex-col justify-between items-start">
        <div className="flex flex-col justify-between items-start gap-8 sm:w-[50%] h-full w-full">
          <div className="flex flex-col items-start justify-between h-full w-full">
            <div className="text-secondary font-[700] md:text-[4.722vw] sm:text-[5.680vw]  text-[9.939vw] leading-[1.2] tracking-tight">
              my tech stack.
            </div>
            <div className="font-[500]  md:text-[3.125vw] sm:text-[4.261vw] text-[7.952vw] text-grey2 leading-[1.2] tracking-tight sm:mb-0 mb-[7%]">
              Here are just some of my go-to tools used for web development.
            </div>
            <div className="w-full flex sm:hidden justify-between items-start">
              <div className="w-[50%] flex flex-col items-start ">
                {skills.slice(0, 4).map((skill, index) => (
                  <div
                    className="font-bold text-[9.939vw] leading-[1.2] text-tertiary tracking-tight"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="w-[50%] flex flex-col items-end ">
                {skills.slice(4,8).map((skill, index) => (
                  <div
                    className="font-bold text-[9.939vw] leading-[1.2] text-tertiary tracking-tight"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full ">
            <div className="font-[500] md:text-[3.125vw] sm:text-[4.261vw] text-[7.952vw] text-grey2 leading-[1.2] tracking-tight mb-[6%]">
              You can see the rest of my skills here.
            </div>
            <div className="w-full text-center text-primary bg-tertiary font-[700] md:text-[2.083vw] sm:text-[4.261vw] text-[6.361vw]  py-2">
              RESUME
            </div>
          </div>
        </div>
        <div className=" flex-col items-end sm:w-[50%] sm:flex hidden">
          {skills.map((skill, index) => (
            <div
              className="font-bold md:text-[4.722vw] sm:text-[5.680vw] text-[9.939vw] leading-[1.2] text-tertiary tracking-tight"
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
