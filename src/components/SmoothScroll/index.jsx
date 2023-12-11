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
    requestAnimationFrame(raf);
  }, []);
  return children;
};

export default index;
