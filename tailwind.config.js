/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E4E5E7',
        secondary: '#232323',
        tertiary: '#273D57',
        grey2: '#444545'
      },
      fontFamily: {
        sans: ['var(--font-satoshi)']
      },
      fontSize: {
        clamp: "clamp(25px, 4wv, 100px)",
        landingClampH5: "clamp(20px, 4vw, 100px)",
        subsectionClamp: "clamp(64px, 4.3vw, 100px)",
        headingLgClamp: "clamp(100px, 9vw, 120px)",
        headingSmClamp: "clamp(48.84px, 11vw, 200px)",
      }
    },
  },
  plugins: [],
}
