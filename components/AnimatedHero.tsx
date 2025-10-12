"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface ParticleProps {
  index: number;
}

function FloatingParticle({ index }: ParticleProps) {
  // Use useMemo to ensure consistent values on client and server
  const { randomX, randomY, randomDelay, randomDuration } = useMemo(() => ({
    randomX: (index * 37) % 100,
    randomY: (index * 53) % 100,
    randomDelay: (index * 0.1) % 2,
    randomDuration: 15 + (index % 10),
  }), [index]);

  return (
    <motion.div
      className="absolute w-2 h-2 bg-cyan-500/20 rounded-full blur-sm"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut",
      }}
    />
  );
}

interface AnimatedHeroProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedHero({ children, className = "" }: AnimatedHeroProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Multi-layer backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1: Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1018] via-[#1a2332] to-[#0a1018]"></div>

        {/* Layer 2: Animated grid */}
        <div className="absolute inset-0 tech-grid-background opacity-30"></div>
        <div className="grid-scan"></div>

        {/* Layer 3: Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Layer 4: Floating Particles (reduced to 15) */}
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}

        {/* Layer 5: Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-500/20 rounded-full blur-sm"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 border-2 border-cyan-500/10 rounded-full blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content with animation */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}