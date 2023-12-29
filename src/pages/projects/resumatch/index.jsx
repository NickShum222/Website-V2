import React from "react";
import { SEO } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsArrowLeft } from "react-icons/bs";

const tools = ["Firebase", "React", "Django", "SQLite", "TailwindCSS", "Figma"];

const index = () => {
  return (
    <section id="spotitrack" className={"scroll-smooth"}>
      <SEO theme={"dark"} />
      <div
        className={`lg:px-[4%] md:px-[64px] min-h-[100dvh] w-[100dvw] px-[24px] lg:pb-[64px] pb-[6%] lg:pt-[148px] pt-[6%] flex lg:flex-row flex-col justify-between items-start bg-secondary `}
      >
        <div
          className={
            "lg:w-[45%] w-full flex flex-col justify-start lg:sticky lg:top-[148px]"
          }
        >
          <div className={"flex justify-start"}>
            <Link
              scroll={false}
              href={"/"}
              className={
                "lg:text-[1.3em] md:text-[1.3em] text-[1.2em] group text-center text-grey3 transition-all duration-350 hover:text-primary font-[500] py-[1.25%] "
              }
            >
              <div className="flex items-center gap-1">
                <BsArrowLeft /> Go Back
              </div>
              <span
                className={
                  "max-w-0 group-hover:max-w-full block bg-primary transition-all duration-350 ease-in h-[2px]"
                }
              />
            </Link>
          </div>
          <div
            className={
              "lg:text-[5.5em] md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight font-[600] text-primary text-wrap"
            }
          >
            RESUMATCH
          </div>
          <div
            className={
              "flex justify-start items-center w-full my-[3%] flex-wrap"
            }
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                className={
                  "lg:text-[1.2em] md:text-[1.1em] text-[0.8em] mb-[1.5%] border-[1px] border-solid rounded-full mr-[1%] border-primary text-primary px-3 py-1 lg:font-[600] font-[500] leading-[1] uppercase text-center"
                }
              >
                {tool}
              </div>
            ))}
          </div>
          <div className={"flex flex-col justify-start w-full mb-[3%]"}>
            <p
              className={
                "w-full text-primary leading-[1.4] font-[500] lg:text-[1.3em] md:text-[1.3em] text-[1.2em]"
              }
            >
              ResuMatch is a web application designed to streamline your job
              search. Create an account, track your job applications, and
              effortlessly link uploaded resumes to specific jobs.
            </p>
            <p
              className={
                "w-full text-primary leading-[1.4] font-[300] lg:text-[1.3em] md:text-[1.3em] text-[1.2em] mt-[3%]"
              }
            >
              Employing Firebase for authentication, Resumatch seamlessly
              manages job applications with a React.js and Tailwind CSS
              frontend, delivering an intuitively designed interface. On the
              backend, Django Rest Framework orchestrates the application's
              functionality, while SQLite serves as the robust database
              foundation. The result is a secure, efficient web application that
              elevates the job application process.
            </p>
            <div className={"flex justify-start gap-8 w-full mt-[6%]"}>
              <Link
                scroll={false}
                href={"https://github.com/NickShum222/Website-V1"}
                target="_blank"
                className={
                  "lg:text-[1.3em] md:text-[1.3em] text-[1.2em] group text-center text-grey3 transition-all duration-350 hover:text-primary font-[500] py-[1.25%] "
                }
              >
                <div className="flex items-center gap-1">
                  Github Repository <BsArrowUpRight />
                </div>
                <span
                  className={
                    "max-w-0 group-hover:max-w-full block bg-primary transition-all duration-350 ease-in h-[2px]"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "flex flex-col justify-center items-center lg:w-[50%] w-full gap-8"
          }
        >
          {/* <Image
            src={picture1}
            fit="true"
            placeholder="blur"
            alt={"Website-V1 Landing Page"}
          />
          <Image
            src={picture2}
            fit="true"
            placeholder="blur"
            alt={"Website-V1 Projects Page"}
          />
          <Image
            src={picture3}
            fit="true"
            placeholder="blur"
            alt={"Website-V1 Contact Page"}
          /> */}
          <div
            className={"w-full flex justify-between items-center lg:hidden "}
          >
            <Link
              scroll={false}
              href={"/"}
              className={
                "lg:text-[1.3em] md:text-[1.3em] text-[1.2em] group text-center text-grey3 transition-all duration-350 hover:text-primary font-[500] py-[1.25%] "
              }
            >
              <p>Go Back</p>
              <span
                className={
                  "max-w-0 group-hover:max-w-full block bg-primary transition-all duration-350 ease-in h-[2px]"
                }
              />
            </Link>
            <a
              href={"#spotitrack"}
              className={
                "lg:text-[1.3em] md:text-[1.3em] text-[1.2em] group text-center text-grey3 transition-all duration-350 hover:text-primary font-[500] py-[1.25%] "
              }
            >
              <p>Scroll Top</p>
              <span
                className={
                  "max-w-0 group-hover:max-w-full block bg-primary transition-all duration-350 ease-in h-[2px]"
                }
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
