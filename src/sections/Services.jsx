import React from "react";

const Services = () => {
  return (
    <div
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[42px] flex flex-col justify-start bg-primary  w-full`}
    >
      <div className="flex w-full justify-end mb-12">
        <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
          <div
            className="text-tertiary lg:text-[3vw]
        md:text-[4.2vw] text-headingNumber
        italic tracking-tighter font-[500] leading-[0.9] lg:mt-1"
          >
            0.2
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] text-headingSmClamp leading-[0.8] tracking-tight font-bold text-tertiary border-b-2 border-solid w-full border-tertiary pb-[4%]">
            SERVICES
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-start">
        <div className="flex flex-col justify-start gap-8 w-[50%]">
         <div className="flex flex-col justify-start w-full">
          <div className="text-secondary font-[700] text-[68px] leading-[1.2] tracking-tight">
            my tech stack.
          </div>
          <div className="font-[500]  text-[45px] text-grey2 leading-[1.2] tracking-tight">Here are my go-to tools used for web development.</div>
          </div> 
          <div className="flex flex-col justify-start w-full ">
          <div className="font-[500] text-[45px] text-grey2 leading-[1.2] tracking-tight">You can see the rest of my skills here.</div>
          <div className="w-full text-center text-primary bg-tertiary font-[700] py-2">RESUME</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
