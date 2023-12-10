"use client";

import Image from "next/image";
import { useState } from "react";

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
import { Section, Button } from "@/components";
import { styles } from "@/styles";

export default function Home() {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={`flex flex-col max-w-[100vw] overflow-clip ${theme} relative`}
    >
      {/* <Button label={"Button"} className="w-[100px] h-[40px]"/> */}
      {/* <Loading /> */}
      <div
        className="flex fixed bottom-[30px] bg-grey4 bg-opacity-20 backdrop-blur-lg justify-around items-center h-[70px] w-[55%]  dark:border-white border-secondary border-solid dark:border-[0.5px] font-[300] border-opacity-25 rounded-full z-[100] uppercase cursor-pointer"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <p className="dark:text-white text-white">01. Home</p>
        <p className="dark:text-white text-white">02. About</p>
        <p className="dark:text-white text-white">03. Services</p>
        <p className="dark:text-white text-white">04. Projects</p>
        <p className="dark:text-white text-white">05. Experiences</p>
        <p className="dark:text-white text-white">06. Contact</p>
      </div>
      <Section theme="light" setTheme={setTheme}>
        <Landing />
      </Section>
      <Section theme="dark" setTheme={setTheme}>
        <LandingSub />
      </Section>
      <Section theme="light" setTheme={setTheme}>
        <About />
      </Section>
      <Section theme="light" setTheme={setTheme}>
        <Services />
      </Section>
      <Section theme="light" setTheme={setTheme}>
        <Projects />
      </Section>
      <Section theme="dark" setTheme={setTheme}>
        <Experiences />
      </Section>
      <Section theme="light" setTheme={setTheme}>
        <Contact />
      </Section>
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
