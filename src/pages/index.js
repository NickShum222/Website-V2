import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  easeOut,
} from "framer-motion";
const firstName = ["N", "I", "C", "K", "S", "H", "U", "M", "."];
const lastName = ["S", "H", "U", "M", "."];

const slideUpFirst = {
  initial: {
    y: 0,
  },
  enter: (index) => ({
    y: -150,
    transition: { 
      delay: (index * 0.03) +1, 
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    },
  }),
  exit: {
    y: 0,
  },
};
const slideUpLast = {
  initial: {
    y: 0,
  },
  enter: (index) => ({
    y: -150,
    transition: { 
      delay: (index * 0.05) + 1.05, 
      duration: 0.4,
      // ease: [0.61, 1, 0.88, 1],  
    },
  }),
  exit: {
    y: 0,
  },
};
export default function Home() {
  return (
    <div className="h-[100dvh] w-100 flex flex-col justify-center items-center bg-secondary">
      <div className="h-[164px] overflow-hidden flex-col flex justify-start items-center">
        <div className="text-primary uppercase flex font-bold text-[150px] leading-[150px]">
          {firstName.map((letter, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={slideUpFirst}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {letter}
            </motion.div>
          ))}
          {/* {lastName.map((letter, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={slideUpLast}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`${index === 0 ? "ml-[40px]" : ""}`}
            >
              {letter}
            </motion.div>
          ))} */}
        </div>

        <div className="text-primary uppercase flex font-bold text-[150px] leading-[150px]">
          {firstName.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={slideUpFirst}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`${index === 0 || index === 4 || index === 8 ? "" : "opacity-0"}`}
            >
              {letter}
            </motion.span>
          ))}
          {/* {lastName.map((letter, index) => (
            <motion.div
              key={index}
                           custom={index}
              variants={slideUpLast}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`${index === 0 ? "ml-[40px]" :`${index === 4 ? "":"opacity-0"}`}`}
            >
              {letter}
            </motion.div>
          ))} */}
        </div>
      </div>
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
