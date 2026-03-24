import { useEffect, useRef, useState } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        rafId.current = undefined;
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);
  return mousePosition;
};