import { useRef} from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { paragraph } from "@/constants";
const LandingSub = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end end"],
  });

  const words = paragraph.split(" ");
  return (
    <div className="min-h-[175dvh] relative w-full" ref={element}>
      <div className=" dark:bg-secondary min-h-[100dvh] w-full flex justify-center items-center bg-primary sticky top-0">
        <div
          className={`lg:px-[6%] md:px-[64px] px-[24px] dark:bg-secondary bg-primary flex flex-wrap justify-start 
        `}
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
      className="lg:text-servicesTool md:text-[7.073vw] text-[7.952vw] md:leading-[1.2] leading-[1.3] tracking-tight dark:text-primary text-secondary font-[600]"
    >
      {children}
    </motion.span>
  );
};

export default LandingSub;
