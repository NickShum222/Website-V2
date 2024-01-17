import React from "react";
import { SEO } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const index = () => {
  const router = useRouter();
  return (
    <div>
      <SEO theme={"light"} />
      <div className="w-[100dvw] bg-primary h-[100dvh] flex justify-center items-center flex-col px-[10%]">
        <h1
          className="font-bold text-tertiary lg:text-[15rem] leading-[1] md:text-[3.125vw]
                sm:text-[3.980vw] text-[5.089vw]"
        >
          404
        </h1>
        <div className="text-secondary lg:text-aboutParagraph font-[500] md:text-[2.576vw] text-[5.089vw]">
          Page Not Found
        </div>
        <button
          className="text-secondary cursor-pointer hover:text-tertiary duration-300 transition-all lg:text-aboutParagraph font-[200] md:text-[2.576vw] text-[5.089vw]"
          onClick={() => {
            router.push("/");
          }}
        >
          Go Back
        </button>
        {/* <img
          src="/404.jpg"
          className="h-[60%] w-[80%] object-fill shadow-2xl"
        />
        <div className="font-[600] text-secondary text-[3.290vw] mt-[2%] ">
          Oops! Looks like the page you're looking for does not exist :/
        </div> */}
      </div>
    </div>
  );
};

export default index;
