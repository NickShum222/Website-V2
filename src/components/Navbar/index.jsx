"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
const fadeIn = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 0.75,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};
const navLinks = [
  {
    id: "Home",
    link: "#landing",
  },
  {
    id: "About",
    link: "#about",
  },
  {
    id: "Services",
    link: "#services",
  },
  {
    id: "Experiences",
    link: "#experiences",
  },
  {
    id: "Projects",
    link: "#projects",
  },
  {
    id: "Contact",
    link: "#contact",
  },
];
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
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        ease: [0.25, 1, 0.5, 1],
        duration: 0.75,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const navSlideIn = {
    initial: {
      x: "-100%",
    },
    enter: {
      x: "0%",
      transition: {
        duration: 1.25,
        delay: 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 1.25,
        delay: 0.15,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };
  const navSlideUp = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    enter: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const navSlideDown = {
    initial: {
      y: "-100%",
    },
    enter: {
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.75,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

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
  const toggleNav = {
    initial: {
      scale: 0,
    },
    enter: {
      scale: "100%",
      transition: {
        duration: 0.45,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.35,
      },
    },
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
            className="fixed z-[60] top-0 right-0 h-[100dvh] w-full bg-[#232323] flex flex-col justify-center items-center lg:px-[16%] md:px-[6%] px-[4%]"
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
                    // exit="exit"
                    className={
                      "text-primary overflow-y-clip h-auto px-[2%] uppercase font-[600] lg:text-[5em] md:text-[4.5em] sm:text-[10.092vw] text-[11.427vw] leading-[1] py-4 "
                    }
                  >
                    {navLink.id}
                  </motion.a>
                  {index > 0 && (
                    <motion.p
                      variants={fadeIn}
                      initial="initial"
                      animate="enter"
                      className="text-primary italic py-4 md:mt-[1%] lg:mt-[0.5%]"
                    >
                      0{index}.
                    </motion.p>
                  )}
                </div>

                <motion.div
                  variants={navSlideIn}
                  initial="initial"
                  animate="enter"
                  // exit="exit"
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
