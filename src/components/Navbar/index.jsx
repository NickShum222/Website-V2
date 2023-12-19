"use client";
import { useState, useRef } from "react";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";
const index = () => {
  // const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState(false);
  const container = useRef(null);
  const [position, setPosition] = useState({x:0,y:0});
  const [navPosition, setNavPosition] = useState({x:0,y:0});
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const {height, width, left, top} = container.current.getBoundingClientRect();
    const middleX = clientX - (left + width/2)
    const middleY = clientY - (top + height/2)
    setPosition({x: middleX/2, y: middleY/2})
    setNavPosition({x: middleX/4, y: middleY/4})

  }
  const reset = () => {
    setPosition({x:0, y:0})
    setNavPosition({x:0, y:0})

  }

  const navActive = {
    initial: {
      y: 0,
    },
    enter: {
      y: "-100%",
      transition: {
        duration: 0.45,
        delay: 0.05,
        ease: [0.32, 0, 0.67, 0],
      },
    },
    exit: {
      y: "-200%",
      transition: {
        duration: 0.45,
        delay: 0.05,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  return (
    <nav className="fixed top-0 right-0 p-8 z-[50]">
      <motion.div
          ref={container}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          animate={{x: position.x, y:position.y}}
          transition={{type: "spring", stiffness: 200, damping: 10, mass: 1}}
      >
        <div
            className="relative w-[100px] overflow-clip h-[100px] rounded-full border-solid border-[1px] dark:border-white border-secondary"
            onMouseEnter={() => {
              if(!active) {
                setNav(true);
              }
            }}
            onMouseLeave={() => {
              if(!active) {
                setNav(false);
              }
            }}
            onClick={() => {
              setActive(!active)
            }}
        >
          <div
              className={`z-10 w-[100px] h-[100px]  bg-secondary cursor-pointer flex justify-center rounded-full items-center`}
          >
            <motion.div className={`${styles.burger} ${active ? styles.burgerActive : ""}`}
                        animate={{x: navPosition.x, y: navPosition.y}}
                        transition={{type: "spring", stiffness: 200, damping: 10, mass: 1}}
            ></motion.div>
          </div>
          <AnimatePresence mode="wait">
            {nav && (
                <motion.div
                    variants={navActive}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className={`z-10 absolute top-[100%] w-[100px] h-[100px] bg-tertiary cursor-pointer rounded-full flex justify-center items-center`}
                >
                  {/* <div className={styles.burger}></div> */}
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

    </nav>
  );
};

export default index;
