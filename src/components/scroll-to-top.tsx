"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        setVisible(scrollTop > 400);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 52;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  // Real ECG PQRST waveform path (simplified but anatomically correct)
  // P wave → QRS complex → T wave
  const ecgPath = "M1,10 L3,10 Q4,10 4.5,9.5 Q5,9 5.5,10 L6,10 L6.5,10 L7,12 L7.5,3 L8,14 L8.5,6 L9,10 L10,10 Q10.5,10 11,9 Q11.5,8 12,10 L14,10";

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex cursor-pointer items-center justify-center rounded-full border border-border/50 bg-card/90 shadow-lg shadow-black/20 backdrop-blur-md transition-shadow hover:shadow-gold/20 hover:border-gold/30"
          style={{ width: size, height: size }}
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg
            width={size}
            height={size}
            className="absolute"
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
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>

          {/* ECG PQRST waveform */}
          <svg
            width="22"
            height="18"
            viewBox="0 4 15 10"
            fill="none"
            className="relative"
          >
            <path
              d={ecgPath}
              stroke="var(--gold)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
