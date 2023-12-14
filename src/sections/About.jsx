import React from "react";
import Image from "next/image";
import { Header } from "@/components";
import picture1 from "../../public/ProfilePhotoDesktop.jpeg";
import picture2 from "../../public/ProfilePhotoMobile.jpeg";

const About = () => {
  return (
    <div
      className={`lg:px-[6%] md:px-[64px] px-[24px] py-[12%] flex flex-col justify-start bg-primary dark:bg-secondary w-full`}
    >
      <Header title={"about"} index={"01."} />
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-start lg:gap-0 md:gap-4 gap-6 relative">
        <div className="lg:w-[45%] md:w-[50%] w-[100%] rounded-[7px] relative md:inline hidden">
          <Image
            src={picture1}
            loading="lazy"
            width={1000}
            height={1000}
            placeholder="blur"
            alt="Profile Photo"
            style={{ objectFit: "contain", borderRadius: "7px" }}
          />
        </div>
        <div className="w-full relative md:hidden inline">
          <Image
            src={picture2}
            loading="lazy"
            width={1000}
            height={1000}
            placeholder="blur"
            alt="Profile Photo"
            style={{ objectFit: "contain", borderRadius: "7px" }}
          />
        </div>
        <div className="flex flex-col justify-start md:w-[50%] w-full sticky top-[2%]">
          <div className="lg:text-servicesTech md:text-[4.969vw] text-[9.939vw] md:leading-[1.1] leading-[1.2] font-[700] text-secondary dark:text-primary">
            Hi! Nice to meet you, I'm Nick Shum.
          </div>
          <div className="flex flex-col justify-normal w-full mt-[3%] lg:gap-6 gap-5 ">
            <div className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[400] md:text-[2.576vw] text-[5.089vw] leading-[1.3] ">
              I am an independent full-stack developer, UI/UX designer and
              full-time computer engineering student at University of Waterloo.
            </div>
            <div className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[400] md:text-[2.576vw] text-[5.089vw] leading-[1.3] ">
              My goal is to create innovative solutions and applications that
              leave a lasting impact on users and the field of technology.
            </div>
            <div className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[400] md:text-[2.576vw] text-[5.089vw] leading-[1.3] ">
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
