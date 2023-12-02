import Image from "next/image";
import { motion } from "framer-motion";
import { Loading } from "@/sections";

const slideDownLast = {
  initial: {
    y: '-100%',
  },
  enter: {
    y: 0,
    transition: { 
      delay: 2.4, 
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      
    },
  },
  exit: {
    y: 0,
  },
}
export default function Home() {
  return (
    <>
      <div className="flex  flex-col w-full justify-between h-[100svh] bg-primary p-10 relative">
        <div className="flex z-10 flex-col justify-start items-start w-full">
          <div className="text-[150px] leading-[100px] font-bold tracking-tight text-tertiary">
            SOFTWARE
          </div>
          <div className="text-[150px] leading-[100px] mt-7 font-bold tracking-tight text-tertiary">
              DEVELOPER
          </div>
          <div className="flex justify-start mt-3 items-center gap-4 w-full">
            <div className="bg-tertiary h-[4px] w-[80px] ml-3"/>
            <div className="text-tertiary text-[45px] font-medium">UNIVERSITY STUDENT</div>
          </div>
        </div>
        <div className="z-10 flex flex-col justify-end w-full items-end">
        <div className="text-[150px] leading-[100px] font-bold tracking-tight text-tertiary">
            NICK
          </div>
          <div className="text-[150px] leading-[100px] mt-7 font-bold tracking-tight text-tertiary">
              SHUM
          </div>
        </div>
      </div>
      <div className="z-0 absolute top-0 left-0 h-[100svh] w-full flex justify-center items-center">
        <div className="leading-[10px] font-bold text-[800px] tracking-tighter text-[#B6b7B9] opacity-[24%]">
          NS.
        </div>
      </div>
    </>
    
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
