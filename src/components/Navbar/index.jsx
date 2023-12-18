"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
const index = () => {
  const [nav, setNav] = useState(false);
  const navActive = {
    initial: {
      y: 0,
    },
    enter: {
      y: "-100%",
      transition: {
        duration: 0.45,
        delay: 0.1,
        ease: [0.32, 0, 0.67, 0],
      },
    },
    exit: {
      y: "-200%",
      transition: {
        duration: 0.45,
        delay: 0.1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  return (
    <nav className="fixed top-0 right-0 p-12">
      <div
        className="relative w-[100px] overflow-clip h-[100px] rounded-full"
        onMouseEnter={() => {
          setNav(true);
        }}
        onMouseLeave={() => {
          setNav(false);
        }}
      >
        <div
          className={`z-10 w-[100px] h-[100px]  bg-secondary cursor-pointer flex justify-center rounded-full items-center`}
        >
          <div className={styles.burger}></div>
        </div>
        <AnimatePresence mode="wait">
          {nav && (
            <motion.div
              variants={navActive}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`z-10 absolute top-[100%] w-[100px] h-[100px]  bg-primary cursor-pointer rounded-full flex justify-center items-center`}
            >
              {/* <div className={styles.burger}></div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default index;
