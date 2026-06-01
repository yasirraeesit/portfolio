import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY || 0;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const next = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(Math.max(0, Math.min(1, next)));
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent origin-left">
            <div
                className="h-full w-full bg-gradient-to-r from-cyan-500 to-teal-500 origin-left"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
}
