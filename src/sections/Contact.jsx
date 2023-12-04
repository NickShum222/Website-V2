import React from "react";

const Contact = () => {
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
            05.
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight  font-[700] text-tertiary border-b-2 border-solid w-full border-tertiary pb-[4%]">
            CONTACT
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start w-full">
        <div className="flex flex-col items-start w-[70%]">
          <div>
            Want to say hello? <br /> Feel free to reach out!
          </div>
          <div>
            I am looking for Summer 2024 internship opportunities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
