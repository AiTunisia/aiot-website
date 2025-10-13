"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  style?: React.CSSProperties;
  animateWords?: boolean; // New prop to control word-by-word animation
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as = "span",
  style,
  animateWords = false, // Default to simple fade-in
}: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Component = motion[as];

  // Simple fade-in for H2/H3 (no word animation)
  if (!animateWords) {
    return (
      <Component
        ref={ref}
        className={className}
        style={style}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        }}
      >
        {children}
      </Component>
    );
  }

  // Word-by-word animation for H1 only
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slower stagger for word-by-word
        delayChildren: delay,
      },
    }),
  };

  const wordVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={wordVariant}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}