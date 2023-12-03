"use client";

import Image from "next/image";

import { Loading, Landing, About, Services } from "@/sections";
import { styles } from "@/styles";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Landing />
      <About />
      <Services />
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
