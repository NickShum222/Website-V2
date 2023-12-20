"use client";
import { Load } from "@/pages/_app";
import { useState, useEffect, useContext } from "react";
import {
  Loading,
} from "@/sections";
import dynamic from "next/dynamic";
import { Section, SEO, Navbar } from "@/components";
const Landing = dynamic(() => import("@/sections/Landing"))
const LandingSub = dynamic(() => import("@/sections/LandingSub"));
const About = dynamic(() => import("@/sections/About"));
const Services = dynamic(() => import("@/sections/Services"));
const Projects = dynamic(() => import("@/sections/Projects"));
const Experiences = dynamic(() => import("@/sections/Experiences"));
const Contact = dynamic(() => import("@/sections/Contact"));

export default function Home() {
  const [loaded, setLoaded] = useContext(Load);
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
      {loaded ? (
              <Section theme="light" setTheme={setTheme}>
              </Section>
      ) : (
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
      )}

      {(active || loaded) && (
        <>
          <Navbar/>
          {/*<Section theme="dark" setTheme={setTheme}>*/}
          {/*  <LandingSub />*/}
          {/*</Section>*/}
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
