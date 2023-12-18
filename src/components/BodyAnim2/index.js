import {useRef} from "react";
import {motion, useInView} from "framer-motion";

const slideUp = {
    initial: {
        y: "100%",
    },
    enter: (delay) => ({
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
            delay: delay * 0.01 + 0.2,
        },
    }),
};

const index = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount:0.4});
    const words = children.split(" ");
    return (
            <div
            ref={ref}
            className={`${className} relative w-full `}
        >
            <div className={"w-full flex flex-wrap"}>
                {words.map((word, i) => {
                    return (
                        <Word key={i} index ={i} isInView={isInView} >
                            {word}
                        </Word>
                    );
                })}
            </div>

        </div>

    );
};

const Word = ({ children, index, isInView }) => {
    return (
        <div
            className="relative mr-[1.25%] flex flex-wrap h-auto overflow-y-clip"
        >
            <motion.div
                        variants={slideUp}
                        initial="initial"
                        animate={isInView ? "enter" : "initial"}
                        custom={index}
            >
                {children}
            </motion.div>
        </div>

    );
};



export default index;
