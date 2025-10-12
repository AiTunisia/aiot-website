"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function AnimatedButton({
  children,
  href,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  const baseClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white shadow-lg shadow-cyan-500/30"
      : "bg-white/10 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-500/50 text-white hover:bg-white/20";

  return (
    <motion.a
      href={href}
      className={`inline-block font-semibold px-8 py-4 rounded-xl transition-all duration-300 ${baseClasses} ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "primary"
            ? "0 20px 60px rgba(6, 182, 212, 0.4)"
            : "0 20px 40px rgba(6, 182, 212, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </motion.a>
  );
}