'use client';

import { useState } from 'react';

const experiences = [
  {
    id: 'CI Tech',
    title: 'Full Stack Developer',
    company: 'CI Technologies',
    date: 'Sept 2023 - Dec 2023',
    description: ['Designed and developed multiple web features for the company\'s services, IAPro, BlueTeam and EIPro, currently in use by over 950 law enforcement agencies across North America.'],
    tools: "Vue.js, Vuex, Spring Boot, Hibernate, Microsoft SQL Server"
  },
  {
    id: 'EllisDon',
    title: 'Quality Assurance Analyst',
    company: 'EllisDon',
    date: 'Jan 2023 - Apr 2023',
    description: ['Worked closely with the QA team and software developers to test and ensure the quality of the company\'s main financial services application, used by over 5000 employees.'],
    tools: "TestRail, Jira, IBM AS400"
  },
]


const Experiences = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className={`lg:px-[128px] md:px-[64px] px-[24px] py-[12%] flex flex-col justify-start bg-secondary w-full`}
    >
      <div className="flex w-full justify-end md:mb-12 sm:mb-8 mb-4">
        <div className="flex justify-start items-start sm:w-[80%] w-[90%] lg:gap-6 md:gap-4 gap-2">
          <div
            className="text-primary md:text-[3.125vw]
            sm:text-[3.980vw] text-[5.089vw]
            italic tracking-tighter font-[500] leading-[0.9] lg:mt-1"
          >
            04.
          </div>
          <div className="lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] sm:inline hidden leading-[0.8] tracking-tight  font-[700] text-primary border-b-2 border-solid w-full border-primary pb-[4%]">
            EXPERIENCES
          </div>
          <div className="text-[12.427vw] font-[700] leading-[0.8] text-primary border-b-2 border-solid w-full border-primary pb-[4%] sm:hidden inline">
            WORK
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-bewteen items-start lg:gap-0 sm:gap-8 gap-6 w-full">
        <div className='flex lg:flex-col flex-row justify-start items-start lg:w-[30%] w-full lg:gap-3 sm:gap-12 gap-4 lg:pl-[5%]'>
          {experiences.map((experience, index) => (
            <div className={`font-[700] cursor-pointer transition-colors duration-[250ms] lg:text-[2.083vw] sm:text-[3.980vw] text-[5.089vw] leading-[1.2] tracking-tight lg:px-[5%] max-lg:pb-[1%]
              ${index === selected ? 'text-primary lg:border-r-[3px] max-lg:border-b-[3px] border-solid border-primary' : 'text-grey3 hover:text-primary'}
            `}
            onClick={() => setSelected(index)}
            >{experience.id}</div>
          ))}
        </div>
        <div className='flex flex-col sm:w-[80%] w-full items-start'>
            <div className='font-[700] text-primary lg:text-[3.125vw] sm:text-[5.305vw] text-[7.952vw]  tracking-tight leading-[1.2]'>{experiences[selected].title} @ {experiences[selected].company}</div>
            <div className='font-[400] text-grey3 tracking-tight lg:text-[2.083vw] sm:text-[3.980vw] text-[6.361vw] leading-[1.2] mb-[3.4%]'>{experiences[selected].date}</div>
            <ul className='lg:mb-[2%] mb-[5%]'>
              {experiences[selected].description.map((description) => (
                <li className='font-[300] text-grey4 tracking-tight lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] leading-[1.2]'>{description}</li>
              ))}
            </ul>
            <div className='font-[400] text-grey3 tracking-tight lg:text-[2.083vw] sm:text-[3.980vw] text-[6.361vw] leading-[1.2]'>Tools:</div>
            <div className='font-[300] text-grey4 tracking-tight lg:text-[2.083vw] sm:text-[2.985vw] text-[5.089vw] leading-[1.2]'>{experiences[selected].tools}</div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
