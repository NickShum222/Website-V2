"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const index = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const handleClick = (targetElement) => {
      if (targetElement) {
        const scrollToOptions = {
          offset: 0,
          lerp: 0.1,
          duration: 1.5,
          easing: (rawValue) => rawValue,
          immediate: false,
          lock: false,
          force: false,
        };

        lenis.scrollTo(targetElement, scrollToOptions);
      }
    };

    requestAnimationFrame(raf);
  }, []);
  return children;
};

export default index;
