import { useEffect, useRef } from "react";

export default function Spotlight() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
        if (!element || !finePointer.matches) return;

        let frame = 0;
        const onMove = (event) => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                element.style.setProperty("--spotlight-x", `${event.clientX}px`);
                element.style.setProperty("--spotlight-y", `${event.clientY}px`);
                element.classList.add("spotlight-active");
            });
        };
        const onLeave = () => element.classList.remove("spotlight-active");

        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("mouseleave", onLeave);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />;
}
