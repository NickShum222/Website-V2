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
import { SpeedInsights } from "@vercel/speed-insights/next";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        <motion.div
          className={`${satoshi.variable} font-sans`}
          key={router.pathname}
        >
          <Component {...pageProps} />
          <SpeedInsights />
          <motion.div
            className="absolute top-0 left-0 w-full h-[100dvh] bg-tertiary origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-[100dvh] bg-tertiary origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </SmoothScroll>
  );
}
