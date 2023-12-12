"use client";
import { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const LandingSub = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end end"],
  });
  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => console.log(e));
  // }, []);
  const paragraph =
    "I build seamless digital experiences by bridging the gap between people and technology through development and design.";
  const words = paragraph.split(" ");
  return (
    <div className="h-[200svh] relative w-full" ref={element}>
      <div className=" dark:bg-secondary h-[100dvh] w-full flex justify-center items-center bg-primary sticky top-0">
        <div
          className={`lg:px-[128px] md:px-[64px] px-[24px] dark:bg-secondary bg-primary flex flex-wrap justify-start 
        `}
          // style={{ top: "50%", transform: "translateY(-50%)"}}
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={index} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-[2%]">
      {characters.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="lg:text-[4.722vw] md:text-[7.073vw] text-[7.952vw] leading-[1.2] tracking-tight dark:text-primary text-secondary font-bold"
    >
      {children}
    </motion.span>
  );
};

export default LandingSub;
