"use client";
import { useState, useEffect } from "react";
import { styles } from "@/styles";

const Landing = () => {
  return (
    <>
      <div className="z-[100] flex flex-col w-full justify-between h-[100svh] bg-primary dark:bg-secondary lg:p-10 md:p-7 sm:p-5 p-3 relative">
        <div className="flex z-10 flex-col justify-start items-start w-full">
          <div className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw]  lg:leading-[0.70] leading-[0.9]  font-[700] tracking-tight text-tertiary dark:text-primary">
            SOFTWARE
          </div>
          <div className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw]  lg:leading-[0.70] leading-[0.9]  lg:mt-7 font-[700] tracking-tight text-tertiary dark:text-primary">
            DEVELOPER
          </div>
          <div className="flex justify-start lg:mt-3 items-center lg:gap-4 sm:gap-2 gap-1 w-full">
            <div className="bg-tertiary dark:bg-primary lg:h-[4px] md:h-[3px] h-[2px] w-[6%] lg:ml-3 ml-2" />
            <div className="text-tertiary dark:text-primary lg:text-[45px] md:text-[5.305vw] text-[6.361vw] leading-[1.2] font-medium">
              UNIVERSITY STUDENT
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-col justify-end w-full items-end">
          <div className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw]  lg:leading-[0.70] leading-[0.9] font-[700] tracking-tight text-tertiary dark:text-primary">
            NICK
          </div>
          <div
            className="lg:text-[150px] md:text-[12.564vw] text-[15.532vw] lg:leading-[0.70] leading-[0.9] lg:mt-7 font-[700] tracking-tight text-tertiary dark:text-primary lg:-mr-3 md:-mr-2
          -mr-1
          "
          >
            SHUM
          </div>
        </div>
        <div className="z-0 absolute top-0 left-0 h-[100svh] w-full flex justify-center items-center overflow-clip">
          <div className="leading-[10px] font-bold text-[50vw] tracking-tighter text-[#B6b7B9] opacity-[24%]">
            NS.
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
