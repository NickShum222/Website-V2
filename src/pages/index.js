"use client";
import {Load} from "@/pages/_app";
import { useState, useEffect, useContext } from "react";
import {
  Loading,
  Landing,
  LandingSub,
  About,
  Services,
  Projects,
  Experiences,
  Contact,
} from "@/sections";
import { Section, SEO } from "@/components";

export default function Home() {
  const [loaded, setLoaded] = useContext(Load)
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState(false);
  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setActive(true);
      }, 2350);
      return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div
      className={`flex flex-col max-w-[100svw] overflow-x-clip ${theme} relative`}
    >
      <SEO theme={theme} />

      {loaded ?
          <Section theme="light" setTheme={setTheme}>
            <Landing />
          </Section>
          :
          <div
              className={`w-[100dvw] relative ${
                  !active ? "h-[100svh] overflow-y-clip" : ""
              }`}
          >
            <div className="absolute top-0 left-0 h-full w-full">
              <Loading />
            </div>
            <div
                className="landing  w-full"
                style={{
                  clipPath: active ? "inset(0 0 0 0)" : "inset(50% 0 50% 0)",
                }}
            >
              <Section theme="light" setTheme={setTheme}>
                <Landing />
              </Section>
            </div>
          </div>
      }
      {/*<div*/}
      {/*  className="z-[100] flex fixed bottom-[30px] bg-secondary bg-opacity-20 backdrop-blur-lg justify-around items-center h-[70px] w-[55%]  dark:border-white border-secondary border-solid dark:border-[0.5px] font-[300] border-opacity-25 rounded-full uppercase cursor-pointer"*/}
      {/*  style={{ left: "50%", transform: "translateX(-50%)" }}*/}
      {/*>*/}
      {/*  <p className="dark:text-white text-white">01. Home</p>*/}
      {/*  <a href="#about" className="dark:text-white text-white">02. About</a>*/}
      {/*  <p className="dark:text-white text-white">03. Services</p>*/}
      {/*  <p className="dark:text-white text-white">04. Projects</p>*/}
      {/*  <p className="dark:text-white text-white">05. Experiences</p>*/}
      {/*  <p className="dark:text-white text-white">06. Contact</p>*/}
      {/*</div>*/}
      {active && (
        <>
          <Section theme="dark" setTheme={setTheme}>
            <LandingSub />
          </Section>
          <Section theme="light" setTheme={setTheme}>
            <About />
          </Section>
          <Section theme="light" setTheme={setTheme}>
            <Services />
          </Section>
          <Section theme="dark" setTheme={setTheme}>
            <Experiences />
          </Section>
          <Section theme="light" setTheme={setTheme}>
            <Projects />
          </Section>
          <Section theme="light" setTheme={setTheme}>
            <Contact />
          </Section>
        </>
      )}
    </div>
  );
}

// function PerspectiveText({label}){
//   return(
//     <div>
//       <p>{label}</p>
//       <p>{label}</p>
//     </div>
//   )
// }
