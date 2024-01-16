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
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: 'start'
          });
        }
      });
    });
  },[])
  return children;
};

export default index;
