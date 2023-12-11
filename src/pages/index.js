"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import { Section, Button, SEO } from "@/components";
import { styles } from "@/styles";
const slideIn = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export default function Home() {
  const [theme, setTheme] = useState("light");
  const [currentIndex, setCurrentIndex] = useState(0);
  const stringsArray = ["Element 1", "Element 2", "Element 3", "Element 4"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stringsArray.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [stringsArray.length]);
  return (
    // <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
    //       <AnimatePresence mode="wait">
    //         <motion.p
    //           key={stringsArray[currentIndex]}
    //           variants={slideIn}
    //           initial="initial"
    //           animate="animate"
    //           exit="exit"
    //         >
    //           {stringsArray[currentIndex]}
    //         </motion.p>
    //       </AnimatePresence>
    // </div>
    <div
      className={`flex flex-col max-w-[100vw] overflow-clip ${theme} relative`}
    >
      <SEO theme={theme} />
      {/* <Loading /> */}
      {/* <div
        className="flex fixed bottom-[30px] bg-grey4 bg-opacity-20 backdrop-blur-lg justify-around items-center h-[70px] w-[55%]  dark:border-white border-secondary border-solid dark:border-[0.5px] font-[300] border-opacity-25 rounded-full z-[100] uppercase cursor-pointer"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <p className="dark:text-white text-white">01. Home</p>
        <p className="dark:text-white text-white">02. About</p>
        <p className="dark:text-white text-white">03. Services</p>
        <p className="dark:text-white text-white">04. Projects</p>
        <p className="dark:text-white text-white">05. Experiences</p>
        <p className="dark:text-white text-white">06. Contact</p>
      </div> */}
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
