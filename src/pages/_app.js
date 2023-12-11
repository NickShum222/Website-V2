import "@/styles/globals.scss";
import localFont from "next/font/local";
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "fallback",
  style: "oblique",
  weight: "variable",
});
import { SmoothScroll } from "@/components";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }) {
  return (
    <SmoothScroll>
      <main className={`${satoshi.variable} font-sans`}>
        <Component {...pageProps} />
        <SpeedInsights />
      </main>
    </SmoothScroll>
  );
}
