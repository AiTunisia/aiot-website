"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedStatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function AnimatedStatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
}: AnimatedStatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  const displayValue = useTransform(motionValue, (latest) => {
    return Math.round(latest);
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center"
    >
      <div className="mb-3">
        <motion.span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
          {prefix}
          {isInView ? <motion.span>{displayValue}</motion.span> : 0}
          {suffix}
        </motion.span>
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}