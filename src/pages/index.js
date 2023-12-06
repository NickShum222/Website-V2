"use client";

import Image from "next/image";

import { 
  Loading, 
  Landing, 
  About, 
  Services, 
  Projects, 
  Experiences, 
  Contact } from "@/sections";
import { styles } from "@/styles";

export default function Home() {
  return (
    <div className="flex flex-col w-[100svw]">
      {/* <Loading /> */}
      <Landing />
      <About />
      <Services />
      <Projects />
      <Experiences />
      <Contact />
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
