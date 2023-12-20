import {useRef} from "react";
import {headerSlide, fadeIn} from "@/utils/motion";
import {useInView, motion} from "framer-motion";

const slideUp = {
    initial: {
        y: "100%",
    },
    enter: (delay) => ({
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.33, 1, 0.68, 1],
            delay: delay || 0,
        },
    }),
};
const index = ({ title, index, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 1})
  return (
    <div
        ref={ref}
        className={`${className} flex w-full justify-end md:mb-[4%] mb-[7%]`}>
      <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
        <motion.h4
            variants={fadeIn}
            initial="initial"
            delay={1.95}
            animate={isInView ? "enter" : "initial"}
          className="text-tertiary dark:text-primary lg:text-headingIndexClamp md:text-[3.125vw]
                sm:text-[3.980vw] text-[5.089vw]
                italic tracking-tighter font-[300] leading-[0.9] lg:mt-[1.2%] md:mt-[1.6%] sm:mt-[1.7%] mt-[1.8%]"
        >
          {index}
        </motion.h4>
        <div className={`w-full flex flex-col justify-start overflow-hidden`}>
            <motion.h2
                variants={slideUp}
                initial="initial"
                delay={1.8}
                animate={isInView ? "enter" : "initial"}
                className={"uppercase lg:text-headingLgClamp md:text-[8.7vw] sm:text-[10.092vw] text-[12.427vw] leading-[1] tracking-tighter font-[600] text-tertiary dark:text-primary"}>{title}</motion.h2>
            <motion.div
                variants={headerSlide}
                initial="initial"
                animate={isInView ? "enter" : "initial"}
                className={"w-full bg-tertiary dark:bg-primary h-[2px] mt-[3%] overflow-x-hidden"}/>
        </div>
      </div>
    </div>
  );
};

export default index;
