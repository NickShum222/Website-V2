import "@/styles/globals.css";
import localFont from "next/font/local";
const satoshi = localFont({ src: "../../public/fonts/Satoshi-Variable.ttf",
variable: '--font-satoshi',
display: 'fallback',
style: 'oblique',
weight: "variable",


});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${satoshi.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
