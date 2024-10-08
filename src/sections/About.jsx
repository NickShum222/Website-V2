import Image from "next/image";
import { Header, BodyAnim2 } from "@/components";
import picture1 from "../../public/ProfilePhotoDesktop.webp";
import picture2 from "../../public/ProfilePhotoMobile.webp";

const About = () => {
  return (
      <section
          id="about"
          className={`lg:px-[6%] md:px-[64px] px-[24px] py-[12%] flex flex-col justify-start bg-primary dark:bg-secondary w-full`}
      >
        <Header title={"about"} index={"01."} />
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-start lg:gap-0 md:gap-4 gap-6 relative">
          <div className="lg:w-[45%] md:w-[50%] w-[100%] rounded-[7px] relative md:inline hidden shadow-2xl">
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
          <div className="w-full relative md:hidden inline shadow-lg">
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
            <BodyAnim2 className="lg:text-servicesTech md:text-[4.969vw] text-[7.939vw] mt-[-3%] leading-[1.2] font-[600] text-secondary dark:text-primary">
                Hi! Nice to meet you, I'm Nick Shum.
            </BodyAnim2>
            <div className="flex flex-col justify-normal w-full mt-[3%] lg:gap-6 gap-5 ">
              <BodyAnim2 className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[200] md:text-[2.576vw] text-[5.089vw] leading-[1.4] ">
                  I am an independent full-stack developer, UI/UX designer, and full-time computer engineering student at the University of Waterloo.
              </BodyAnim2>
              <BodyAnim2 className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[200] md:text-[2.576vw] text-[5.089vw] leading-[1.4] ">
                  My goal is to create innovative solutions and applications that leave a lasting impact on users and the field of technology.
              </BodyAnim2>
              <BodyAnim2 className="text-grey2 dark:text-grey3 lg:text-aboutParagraph font-[200] md:text-[2.576vw] text-[5.089vw] leading-[1.4] ">
                  When I'm not programming, you can find me curating Spotify playlists, skateboarding, or hanging out with friends.
              </BodyAnim2>
            </div>
          </div>
        </div>
      </section>
  );
};



export default About;
