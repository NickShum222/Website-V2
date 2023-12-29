"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  fadeIn,
  navSlideIn,
  navSlideUp,
  navSlideDown,
  navActive,
  toggleNav,
} from "@/utils/motion";
import { navLinks } from "@/constants";
const index = () => {
  const { scrollYProgress } = useScroll();
  const [showNav, setShowNav] = useState(true);
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState(false);
  const container = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [navPosition, setNavPosition] = useState({ x: 0, y: 0 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const prev = scrollYProgress.getPrevious();
    if (latest > prev) {
      setShowNav(false);
      setActive(false);
      setNav(false);
    } else {
      setShowNav(true);
    }
  });
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      container.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX / 2, y: middleY / 2 });
    setNavPosition({ x: middleX / 4, y: middleY / 4 });
  };
  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setNavPosition({ x: 0, y: 0 });
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            variants={navSlideDown}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed select-none z-[60] top-0 right-0 h-[100dvh] w-full bg-[#232323] flex flex-col justify-center items-center lg:px-[16%] md:px-[6%] px-[4%]"
          >
            {navLinks.map((navLink, index) => (
              <div
                key={navLink.id}
                className={"w-full flex flex-col justify-start overflow-clip"}
              >
                <div
                  className={
                    "flex justify-start items-start duration-300 hover:translate-x-8 ease-in-out transition-transform"
                  }
                >
                  <motion.a
                    onClick={() => {
                      setActive(false);
                      setNav(false);
                    }}
                    href={navLink.link}
                    variants={navSlideUp}
                    initial="initial"
                    animate="enter"
                    className={
                      "text-primary overflow-y-clip h-auto px-[2%] uppercase font-[600] lg:text-[5rem] md:text-[4.5em] sm:text-[10.092vw] text-[11.427vw] leading-[1] py-4 "
                    }
                  >
                    {navLink.id}
                  </motion.a>
                  {index > 0 && (
                    <motion.p
                      variants={fadeIn}
                      custom={0.75}
                      initial="initial"
                      animate="enter"
                      className="text-primary italic py-4 ml-[-1%] font-[300] lg:text-[1.6rem] md:text-[1.1rem]"
                    >
                      0{index}.
                    </motion.p>
                  )}
                </div>
                <motion.div
                  variants={navSlideIn}
                  initial="initial"
                  animate="enter"
                  className={"bg-grey3 h-[1px] w-full"}
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showNav && (
          <motion.nav
            className="fixed top-0 right-0 lg:p-6 md:p-7 sm:p-5 p-3 z-[200]"
            variants={toggleNav}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.div
              ref={container}
              onMouseMove={handleMouse}
              onMouseLeave={reset}
              animate={{ x: position.x, y: position.y }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                mass: 1,
              }}
            >
              <div
                className="relative lg:w-[100px] md:w-[90px] sm:w-[80px] w-[70px] lg:h-[100px] md:h-[90px] sm:h-[80px] h-[70px] overflow-clip rounded-full shadow-3xl"
                onMouseEnter={() => {
                  if (!active) {
                    setNav(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!active) {
                    setNav(false);
                  }
                }}
                onClick={() => {
                  setActive(!active);
                }}
              >
                <div
                  className={`z-10 lg:w-[100px] md:w-[90px] sm:w-[80px] w-[70px] lg:h-[100px] md:h-[90px] sm:h-[80px] h-[70px]  bg-tertiary cursor-pointer flex justify-center rounded-full items-center`}
                >
                  <motion.div
                    className={`${styles.burger} ${
                      active ? styles.burgerActive : ""
                    }`}
                    animate={{ x: navPosition.x, y: navPosition.y }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      mass: 1,
                    }}
                  ></motion.div>
                </div>
                <AnimatePresence mode="wait">
                  {nav && (
                    <motion.div
                      variants={navActive}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className={`z-10 absolute top-[100%] lg:w-[100px] md:w-[90px] sm:w-[80px] w-[70px] lg:h-[100px] md:h-[90px] sm:h-[80px] h-[70px] bg-[#121212] cursor-pointer rounded-full flex justify-center items-center `}
                    >
                      {/* <div className={styles.burger}></div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default index;
