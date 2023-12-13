import React from 'react'
import { SEO } from '@/components'

const tools = ["React", "Django", "SQLite", "Firebase", "TailwindCSS", "Figma"]
const index = () => {
  return (
    <section>
      <SEO theme={"dark"}/>
      <div className={`lg:px-[128px] md:px-[64px] min-h-[100dvh] w-[100dvw] px-[24px] py-[6%] flex flex-row justify-between items-start bg-secondary `}>
          <div className={"w-[50%] flex flex-col justify-start"}>

              {/*<div className={"lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight font-[700] text-primary"}>RESUMATCH</div>*/}
              {/*<div className={"flex justify-start items-center w-full my-[3%] flex-wrap"}>*/}
              {/*    {tools.map((tool, index) => (*/}
              {/*        <div key={index} className={"text-[1vw] border-[1px] border-solid rounded-full mr-[1%] border-primary text-primary px-[1.5%] py-[0.25%] font-[600] uppercase text-center italic"}>{tool}</div>*/}
              {/*    ))}*/}
              {/*</div>*/}
              {/*<div className={"flex flex-col justify-start w-full"}>*/}
              {/*    <p className={"w-full text-primary leading-[1.2] font-[500] text-[1.389vw]"}>*/}
              {/*        ResuMatch is a web application designed to streamline your job search. Create an account, track your job applications, and effortlessly link uploaded resumes to specific jobs.*/}
              {/*    </p>*/}
              {/*    <p className={"w-full text-primary leading-[1.2] font-[300] text-[1.389vw] mt-[2%]"}>*/}
              {/*        asdfasdf*/}
              {/*    </p>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*    Github*/}
              {/*</div>*/}
          </div>
      </div>
    </section>
  )
}

export default index