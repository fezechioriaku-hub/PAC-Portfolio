import React, { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.12) => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setVis(true);
        }, { threshold });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, [threshold]);
    return [ref, vis];
};

export const Reveal = ({ children, delay = 0, x = 0, y = 40, duration = 1.2 }) => {
    const [ref, vis] = useInView();
    return (
        <div
            ref={ref}
            style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translate(0,0)" : `translate(${x}px,${y}px)`,
                transition: `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};
