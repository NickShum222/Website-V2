import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {bodyAnim2SlideUp} from "@/utils/motion";



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
            className="relative mr-[1.25%] flex mt-[-0.5%] flex-wrap overflow-y-clip"
        >
            <motion.div
                        variants={bodyAnim2SlideUp}
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
