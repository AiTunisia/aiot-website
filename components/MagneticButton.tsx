"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull effect (max 15px movement)
    x.set(distanceX * 0.15);
    y.set(distanceY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
      : "bg-navy-800/50 backdrop-blur-sm border-2 border-cyan-500/30 text-white hover:border-cyan-500/50";

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`relative inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden ${baseClasses} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover="hover"
      whileTap="tap"
    >
      {variant === "primary" && (
        <>
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0"
            variants={{
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            variants={{
              hover: { translateX: "100%" },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 blur-xl"
            style={{
              boxShadow: "0 0 40px rgba(6, 182, 212, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)",
            }}
            variants={{
              hover: { opacity: 1 },
            }}
          />
        </>
      )}

      {/* Content */}
      <span className="relative z-10">{children}</span>

      {/* Arrow icon */}
      <motion.svg
        className="relative z-10 w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={{
          hover: { x: 3 },
          tap: { scale: 0.9 },
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </motion.svg>
    </motion.a>
  );
}