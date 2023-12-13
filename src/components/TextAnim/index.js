"use client";
import { useRef } from "react";
import { motion, useInView} from "framer-motion";
const slideUp = {
  initial: {
    y: "100%",
  },
  visible: (delay) => ({
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1],
      delay: delay || 0,
    },
  }),
};
const index = ({ children, className, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  if(!!delay){
    return (
        <div className="overflow-y-clip h-auto relative " ref={ref}>
          <motion.div
              variants={slideUp}
              custom={delay}
              initial="initial"
              animate="visible"
              className={`${className} h-full leading-[1]`}
          >
            {children}
          </motion.div>
        </div>
    );
  }
  else{
    return (
        <div className="overflow-y-clip h-auto relative " ref={ref}>
          <motion.div
              variants={slideUp}
              initial="initial"
              animate = {isInView ? "visible":"initial"}
              className={`${className} h-full leading-[1]`}
          >
            {children}
          </motion.div>
        </div>
    );
  }

};

export default index;
