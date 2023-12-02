import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div
    className={`lg:px-[128px] md:px-[64px] px-[24px] py-[42px] flex flex-col justify-start bg-primary  w-full`}
  >
    <div className="flex w-full justify-end mb-12">
      <div className="flex justify-start items-start w-[80%] gap-6">
        <div className="text-tertiary text-[45px]  italic tracking-tighter font-[500] leading-[0.9]">
          0.1.
        </div>
        <div className="text-[140px] leading-[0.8] tracking-tighter font-bold text-tertiary border-b-2 border-solid w-full border-tertiary pb-12">
          ABOUT ME{" "}
        </div>
      </div>
    </div>
    <div className="flex justify-between items-start">
      <div className="w-[40%] relative">
        <Image
          src="/ProfilePhotoDesktop.jpeg"
          loading="lazy"
          width={1000}
          height={1000}
          alt="Picture of the author"
          style={{objectFit: "contain"}}
        />
      </div>
      <div className="flex flex-col justify-start w-[55%]">
        <div className="text-[75px] leading-[1.1] font-bold text-secondary">
          Hi! Nice to meet you, I'm Nick Shum.
        </div>
        <div className="flex flex-col justify-normal w-full mt-7">
          <div className="text-grey2 text-[42px] leading-[1.4]">
            I am an independent full-stack developer, UI/UX designer and full-time student based in Toronto, Canada.
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About