import "@/styles/globals.scss";
import localFont from "next/font/local";
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "fallback",
  weight: "variable",
});
import {useState, useEffect, createContext} from 'react';
import { SmoothScroll } from "@/components";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export const Load = createContext();
export default function App({Component, pageProps}) {
    const [loaded, setLoaded] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if(router.pathname !== '/'){
            setLoaded(true);
        }
    }, [router.pathname])
    return (
        <SmoothScroll>
            <Load.Provider value={[loaded, setLoaded]}>
                <AnimatePresence
                    mode="wait"
                    onExitComplete={() => {
                        window.scrollTo({top: 0})
                    }}
                >
                    <main className={`${satoshi.variable} font-sans`} key={router.pathname}>
                        <Component {...pageProps} />
                        <SpeedInsights/>
                        <motion.div
                            className="fixed z-[200] top-0 left-0 w-full h-[100dvh] bg-tertiary origin-bottom"
                            initial={{scaleY: 0}}
                            animate={{scaleY: 0}}
                            exit={{scaleY: 1}}
                            transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        >
                        </motion.div>
                        {loaded && (
                        <motion.div
                            className="fixed z-[200] top-0 left-0 w-full h-[100dvh] bg-tertiary origin-top"
                            initial={{scaleY: 1}}
                            animate={{scaleY: 0}}
                            exit={{scaleY: 0}}
                            transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        ></motion.div>
                        )}
                    </main>
                </AnimatePresence>
            </Load.Provider>
        </SmoothScroll>
    );
};
