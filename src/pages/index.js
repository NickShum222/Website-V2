import Image from "next/image";
import { motion } from "framer-motion";
import { Loading, Landing, About } from "@/sections";
import { styles } from "@/styles";

export default function Home() {
  const slideUpFirst = {
    initial: {
      y: 0,
    },
    enter: {
      y: -150,
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: 0,
    },
  };
  return (
    <>
    <motion.div 
    variants={slideUpFirst}
    initial="initial"
    animate="enter"
    exit="exit"
    className="flex justify-center items-center w-full h-[100dvh]">
      HELLO
    </motion.div>
    {/* <Loading/> */}
    </>
    // <div className="flex flex-col">
    //   <Landing/>
    //   <About/>
    // </div>
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
