import { useRef, useState } from "react";
import { motion } from "framer-motion";

const index = ({children, className}) => {
    const container = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const {height, width, left, top} = container.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
    }
    const reset = () => {
        setPosition({x:0, y:0})
    }
    const { x, y } = position;
    return (
        <motion.div
            className={`${className} relative`} ref={container}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    );
};

export default index;