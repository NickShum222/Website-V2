import React from 'react'
import { styles } from "@/styles";

const Landing = () => {
  return (
   <>
         <div className="flex flex-col w-full justify-between h-[100svh] bg-primary lg:p-10 md:p-7 sm:p-5 p-3 relative">
        <div className="flex z-10 flex-col justify-start items-start w-full">
          <div className="lg:text-[150px] md:text-[112.2px] landing-h2-clamp  lg:leading-[100px] md:leading-[95px]  font-bold tracking-tight text-tertiary">
            SOFTWARE
          </div>
          <div className="lg:text-[150px] md:text-[112.2px] landing-h2-clamp  lg:leading-[100px] md:leading-[95px]  lg:mt-7 font-bold tracking-tight text-tertiary">
            DEVELOPER
          </div>
          <div className="flex justify-start lg:mt-3 items-center lg:gap-4 sm:gap-2 gap-1 w-full">
            <div className="bg-tertiary lg:h-[4px] md:h-[3px] h-[2px] w-[6%] lg:ml-3 ml-2" />
            <div className="text-tertiary lg:text-[50px] md:text-[33.37px] text-landingClampH5 font-medium">
              UNIVERSITY STUDENT
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-col justify-end w-full items-end">
          <div className="lg:text-[150px] md:text-[112.2px] landing-h2-clamp  lg:leading-[100px] md:leading-[95px] font-bold tracking-tight text-tertiary">
            NICK
          </div>
          <div
            className="lg:text-[150px] md:text-[112.2px] landing-h2-clamp lg:leading-[100px] md:leading-[95px] lg:mt-7 font-bold tracking-tight text-tertiary lg:-mr-3 md:-mr-2
          -mr-1
          "
          >
            SHUM
          </div>
        </div>
      </div>
      <div className="z-0 absolute top-0 left-0 h-[100svh] w-full flex justify-center items-center overflow-clip">
        <div className="leading-[10px] font-bold text-[50vw] tracking-tighter text-[#B6b7B9] opacity-[24%]">
          NS.
        </div>
      </div>
      <div className={`lg:px-[128px] md:px-[64px] px-[24px] bg-secondary  py-[200px] lg:text-subsectionClamp md:text-[5.3vw] text-[40.6px] leading-[1.2] tracking-tight text-primary font-bold`}>
        I build seamless digital experiences by bridging the gap between people and technology through development and design.
      </div>
   </>
  )
}

export default Landing