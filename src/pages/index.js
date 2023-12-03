import Image from "next/image";
import { motion } from "framer-motion";
import { Loading, Landing, About } from "@/sections";
import { styles } from "@/styles";

export default function Home() {
  return (
    <>
    <Loading/>
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
