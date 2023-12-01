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
const slideUpSecond = {
  initial: {
    y: 0,
  },
  enter: (index) => ({
    y: -150,
    x: index === 0 ? 260 : index === 8 ? -360 : 0,
    transition: { 
      delay: (index * 0.03) +1, 
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      x: {
        delay: 1.9,
        duration: 1,
        ease: [0.68, -0.6, 0.32, 1.6],
      }
      
    },
  }),
  exit: {
    y: 0,
  },
};


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
    <div className="relative z-0 h-[100dvh] w-[100dvw] flex flex-col justify-center items-center bg-secondary"
    >
      <div className="h-[164px] overflow-y-clip flex-col flex justify-start items-center">
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
  
        </div>

        <div className="text-primary uppercase flex font-bold text-[150px] leading-[150px]">
          {firstName.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={slideUpSecond}
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
    <motion.div className="h-[100dvh] absolute top-0 left-0 bg-white w-full flex justify-center items-center"
    variants={slideDownLast}
    initial="initial"
    animate="enter"
    exit="exit"
    >
      TEST
    </motion.div>
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
