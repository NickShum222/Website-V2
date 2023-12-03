import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div
    className={`lg:px-[128px] md:px-[64px] px-[24px] py-[42px] flex flex-col justify-start bg-primary  w-full`}
  >
    <div className="flex w-full justify-end md:mb-12 sm:mb-8 mb-4">
      <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
        <div className="text-tertiary md:text-[3.125vw]
        sm:text-[3.980vw] text-[5.089vw]
        italic tracking-tighter font-[500] leading-[0.9] lg:mt-1">
          0.1
        </div>
        <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight  font-[700] text-tertiary border-b-2 border-solid w-full border-tertiary pb-[4%]">
          ABOUT
        </div>
      </div>
    </div>
    <div className="flex md:flex-row flex-col md:justify-between justify-center items-start lg:gap-0 md:gap-4 gap-6">
      <div className="lg:w-[45%] md:w-[50%] w-[100%] rounded-[7px] relative md:inline hidden">
        <Image
          src="/ProfilePhotoDesktop.jpeg"
          loading="lazy"
          width={1000}
          height={1000}
          alt="Picture of the author"
          style={{objectFit: "contain"}}
        />
      </div>
      <div className='w-full relative md:hidden rounded-[7px] inline'>
      <Image
          src="/ProfilePhotoMobile.jpeg"
          loading="lazy"
          width={1000}
          height={1000}
          alt="Picture of the author"
          style={{objectFit: "contain"}}
        />
      </div>
      <div className="flex flex-col justify-start md:w-[50%] w-full">
        <div className="md:text-[4vw] text-[8vw] leading-[1.1] font-[700] text-secondary">
          Hi! Nice to meet you, I'm Nick Shum.
        </div>
        <div className="flex flex-col justify-normal w-full lg:mt-7 mt-4 lg:gap-6 gap-5 ">
          <div className="text-grey2 lg:text-[2vw] font-[400] md:text-[2.9vw] text-[5.2vw] leading-[1.3] tracking-tight">
            I am an independent full-stack developer, UI/UX designer and full-time computer engineering student at University of Waterloo.
          </div>
          <div className="text-grey2 lg:text-[2vw] font-[400] md:text-[2.9vw] text-[5.2vw] leading-[1.3] tracking-tight">
          My goal is to create innovative solutions and applications that leave a lasting impact on users and the field of technology.
          </div>
          <div className='text-grey2 lg:text-[2vw] font-[400] md:text-[2.9vw] text-[5.2vw] leading-[1.3] tracking-tight'>
          When I'm not programming, you can find me curating spotify playlists, skateboarding, or lurking on awwwards.com.
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About