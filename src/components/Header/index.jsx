"use client";

import {useRef, useState} from "react";
import styles from "./style.module.scss";
import {useInView} from "framer-motion";

const index = ({ title, index, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 1})
  return (
    <div
        ref={ref}
        className={`${className} flex w-full justify-end md:mb-[4%] mb-[7%]`}>
      <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
        <div
          className="text-tertiary dark:text-primary md:text-[3.125vw]
    sm:text-[3.980vw] text-[5.089vw]
    italic tracking-tighter font-[300] leading-[0.9] lg:mt-1"
        >
          {index}
        </div>
        <div className={`
        lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight cursor-pointer font-[700] text-tertiary dark:text-primary border-b-[3px]  border-solid w-full border-tertiary dark:border-primary pb-[4%] uppercase`}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default index;
