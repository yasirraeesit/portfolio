import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    
    // Smooth out the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent origin-left">
            <motion.div
                className="h-full w-full bg-gradient-to-r from-cyan-500 to-teal-500 origin-left"
                style={{ scaleX }}
            />
        </div>
    );
}
