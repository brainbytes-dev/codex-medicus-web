"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollPercent);
      setVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ECG-inspired progress ring
  const size = 48;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex cursor-pointer items-center justify-center rounded-full bg-card/80 shadow-lg shadow-black/20 backdrop-blur-sm transition-shadow hover:shadow-gold/20"
          style={{ width: size, height: size }}
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg
            width={size}
            height={size}
            className="absolute -rotate-90"
          >
            {/* Background ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth={strokeWidth}
            />
            {/* Progress arc */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--gold)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-[stroke-dashoffset] duration-100"
            />
          </svg>

          {/* Heartbeat icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="relative text-gold"
          >
            {/* ECG / heartbeat line pointing up */}
            <path
              d="M2 12 L6 12 L8 8 L10 16 L12 6 L14 14 L16 10 L18 12 L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Up arrow */}
            <path
              d="M12 2 L8 6 M12 2 L16 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
