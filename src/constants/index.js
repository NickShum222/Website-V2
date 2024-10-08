import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const skills = [
  "React",
  "Next",
  "Vue",
  "Spring",
  "Express",
  "Django",
  "Figma",
  "Tailwind",
];

export const projects = [
  {
    name: "ResuMatch",
    url: "/projects/resumatch",
    description: "Internship Application Manager",
  },
  {
    name: "SpotiTrack",
    url: "/projects/spotitrack",
    description: "Spotify Music Tracker",
  },
  {
    name: "Website V1",
    url: "/projects/website-v1",
    description: "Personal Website Portfolio",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nick-shum/",
    icon: FaLinkedin,
    color: "#0a66c2",
  },
  {
    name: "Github",
    link: "https://github.com/NickShum222",
    icon: FaGithub,
    color: "#6e5494",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nick.shum_/",
    icon: FaInstagram,
    color: "#FD1D1D",
  },
];

export const experiences = [
  {
    id: "IBM",
    title: "Software Developer",
    company: "IBM",
    date:"May 2024 - Aug 2024",
    description:["Developed AI-powered solutions and implemented Retrieval Augmented Generation (RAG) techniques to streamline insurance processes for IBM clients"],
    tools: "Python, LangChain, Apache Spark, Azure Synapse"

  },

  {
    id: "CI Tech",
    title: "Full Stack Developer",
    company: "CI Technologies",
    date: "Sept 2023 - Dec 2023",
    description: [
      "Designed and developed multiple web features for the company's services, IAPro, BlueTeam and EIPro, currently in use by over 950 law enforcement agencies across North America.",
    ],
    tools: "Vue.js, Vuex, Spring Boot, Hibernate, Microsoft SQL Server",
  },
  {
    id: "EllisDon",
    title: "Quality Assurance Analyst",
    company: "EllisDon",
    date: "Jan 2023 - Apr 2023",
    description: [
      "Worked closely with the QA team and software developers to test and ensure the quality of the company's main financial services application, used by over 5000 employees.",
    ],
    tools: "TestRail, Jira, IBM AS400",
  },
];

export const paragraph =
  "I build seamless digital experiences by bridging the gap between people and technology through development and design.";

export const landingText = [
  "UWaterloo Student",
  "Computer Engineering",
  "Design Oriented",
  "Frontend Addict",
  "Backend Capable",
];

export const navLinks = [
  {
    id: "Home",
    link: "#landing",
  },
  {
    id: "About",
    link: "#about",
  },
  {
    id: "Services",
    link: "#services",
  },
  {
    id: "Experiences",
    link: "#experiences",
  },
  {
    id: "Projects",
    link: "#projects",
  },
  {
    id: "Contact",
    link: "#contact",
  },
];
