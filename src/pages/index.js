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
import { Section } from "@/components";
import { styles } from "@/styles";

export default function Home() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`flex flex-col max-w-[100svw] ${theme}`}>
      {/* <Loading /> */}
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
