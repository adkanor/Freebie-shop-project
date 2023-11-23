import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import style from "./TextScroller.module.css";

const TextScroller = () => {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        // from: { transform: "translate(98%,0)" },
        // to: { transform: "translate(-98%,0)" },
        from: { transform: "translate(98%,0)" },
        to: { transform: "translate(-98%,0)" },
        config: { duration: 15000},

        reset: true,
        // reverse: key % 2 == 0,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <div className = {`section ${ style.scroll }`} key={key}>
            <animated.div style={scrolling}>Black Friday!</animated.div>
        </div>
    );
};

export default TextScroller;