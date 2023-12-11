import React from "react";
import { SEO } from "@/components";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <SEO theme={"light"} />
      <div className="w-[100dvw] bg-black h-[100dvh] flex justify-center items-center">
        <img src="/404.jpg" className="h-[60%] w-[80%] object-fill" />
      </div>
    </div>
  );
};

export default index;
