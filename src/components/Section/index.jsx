"use client";
import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const index = ({ theme, setTheme, children }) => {
  let container = useRef(null);
  let { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      setTheme(theme);
    }
  });

  return <section ref={container}>{children}</section>;
};

export default index;
