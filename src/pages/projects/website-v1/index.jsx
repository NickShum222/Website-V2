import React from "react";
import { SEO } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsArrowLeft } from "react-icons/bs";

import picture1 from "../../../../public/images/website-v1/WebsiteLanding.webp";
import picture2 from "../../../../public/images/website-v1/WebsiteProjects.webp";
import picture3 from "../../../../public/images/website-v1/WebsiteContact.webp";

const tools = [
    "Next.js",
    "React",
    "TailwindCSS",
    "Figma",
];

const index = () => {
  return (
    <div>
      <SEO theme={"dark"} />
      <div>website-v1</div>
    </div>
  );
};

export default index;
