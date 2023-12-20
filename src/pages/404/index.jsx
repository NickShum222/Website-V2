import React from "react";
import { SEO } from "@/components";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <SEO theme={"light"} />
      <div className="w-[100dvw] bg-primary h-[100dvh] flex justify-center items-center flex-col px-[10%]">
        <img
          src="/404.jpg"
          className="h-[60%] w-[80%] object-fill shadow-2xl"
        />
        <div className="font-[600] text-secondary text-[3.290vw] mt-[2%] ">
          Oops! Looks like the page you're looking for does not exist :/
        </div>
      </div>
    </div>
  );
};

export default index;
