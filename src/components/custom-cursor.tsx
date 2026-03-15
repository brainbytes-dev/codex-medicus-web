"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a, button, [role='button'], input, textarea, select, label, details, summary") !== null;
      setHovering(isClickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.body.style.cursor = "";
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring — follows with slight delay */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 24 : 16),
          y: pos.y - (hovering ? 24 : 16),
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
      >
        <div
          className="h-full w-full rounded-full border transition-colors duration-150"
          style={{
            borderColor: hovering
              ? "rgba(201, 168, 76, 0.8)"
              : "rgba(201, 168, 76, 0.3)",
            backgroundColor: clicking
              ? "rgba(201, 168, 76, 0.1)"
              : "transparent",
          }}
        />
      </motion.div>

      {/* Inner dot — follows immediately */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: clicking ? 0.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 28,
          mass: 0.3,
        }}
      >
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--gold)" }}
        />
      </motion.div>
    </>
  );
}
