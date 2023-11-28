/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E4E5E7',
        secondary: '#232323',
        tertiary: '#273D57'
      },
      fontFamily: {
        sans: ['var(--font-satoshi)']
      }
    },
  },
  plugins: [],
}
