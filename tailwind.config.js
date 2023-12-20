/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -5px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        primary: "#E4E5E7",
        secondary: "#0E0E0E",
        tertiary: "#273D57",
        grey2: "#444545",
        grey3: "#B6B7B9",
        grey4: "#89898B",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },
      fontSize: {
        headingLgClamp: "clamp(80px, 8.333vw, 120px)",
        headingIndexClamp: "clamp(34px, 2.7vw, 60px)",
        aboutParagraph: "clamp(14px, 2.083vw, 39.577px)",
        servicesTech: "clamp(20px, 3.857vw, 92.283px)",
        servicesSub: "clamp(16px, 2.825vw, 57px)",
        servicesTool: "clamp(24px, 4.772vw, 90.668px)",
        experiencesHeading: "clamp(20px, 3.125vw, 59.375px)",
        experiencesSub: "clamp(14px, 2.083vw, 39.577px)",
        contactHeading: "clamp(24px, 4.522vw, 86.488px)",
        contactSub: "clamp(20px, 2.925vw, 55.575px)",
        contactForm: "clamp(16px, 2.083vw, 39.577px)",
        landingBg: "clamp(16px, 50vw, 950px)"

      },
      darkMode: "class",
    },
  },
  plugins: [],
});
