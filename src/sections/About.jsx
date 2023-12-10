import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[12%] flex flex-col justify-start bg-primary dark:bg-secondary  w-full`}
    >
      <div className="flex w-full justify-end md:mb-[4%] mb-[7%]">
        <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
          <div
            className="text-tertiary dark:text-primary md:text-[3.125vw]
        sm:text-[3.980vw] text-[5.089vw]
        italic tracking-tighter font-[500] leading-[0.9] lg:mt-1"
          >
            01.
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight  font-[700] text-tertiary dark:text-primary border-b-2 border-solid w-full border-tertiary dark:border-primary pb-[4%]">
            ABOUT
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-start lg:gap-0 md:gap-4 gap-6">
        <div className="lg:w-[45%] md:w-[50%] w-[100%] rounded-[7px] relative md:inline hidden">
          <Image
            src="/ProfilePhotoDesktop.jpeg"
            loading="lazy"
            width={1000}
            height={1000}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-full relative md:hidden rounded-[7px] inline">
          <Image
            src="/ProfilePhotoMobile.jpeg"
            loading="lazy"
            width={1000}
            height={1000}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col justify-start md:w-[50%] w-full">
          <div className="lg:text-[3.125vw] md:text-[3.980vw] text-[7.952vw] leading-[1.2] font-[700] text-secondary dark:text-primary">
            Hi! Nice to meet you, I'm Nick Shum.
          </div>
          <div className="flex flex-col justify-normal w-full mt-[3%] lg:gap-6 gap-5 ">
            <div className="text-grey2 lg:text-[2.083vw] font-[300] md:text-[2.576vw] text-[5.089vw] leading-[1.5] ">
              I am an independent full-stack developer, UI/UX designer and
              full-time computer engineering student at University of Waterloo.
            </div>
            <div className="text-grey2 lg:text-[2.083vw] font-[300] md:text-[2.576vw] text-[5.089vw] leading-[1.5] ">
              My goal is to create innovative solutions and applications that
              leave a lasting impact on users and the field of technology.
            </div>
            <div className="text-grey2 lg:text-[2.083vw] font-[300] md:text-[2.576vw] text-[5.089vw] leading-[1.5] ">
              When I'm not programming, you can find me curating spotify
              playlists, skateboarding, or lurking on awwwards.com.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
