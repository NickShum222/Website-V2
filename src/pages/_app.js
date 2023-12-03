import "@/styles/globals.css";
import localFont from "next/font/local";
const satoshi = localFont({ src: "../../public/fonts/Satoshi-Variable.ttf",
variable: '--font-satoshi',
display: 'swap',
style: 'normal',
weight: '400 500 600 700 900',


});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${satoshi.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
