"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo, useState, useEffect } from "react";

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
        willChange: "transform, opacity",
      }}
      animate={{
        y: [0, -25, 0],
        x: [0, 12, 0],
        opacity: [0.2, 0.4, 0.2],
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particleCount = isMobile ? 0 : 5; // Remove particles on mobile

  return (
    <div className={`relative ${className}`}>
      {/* Multi-layer backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1: Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1018] via-[#1a2332] to-[#0a1018]"></div>

        {/* Layer 2: Animated grid - Simplified on mobile */}
        <div className={`absolute inset-0 tech-grid-background ${isMobile ? 'opacity-15' : 'opacity-30'}`}></div>
        {!isMobile && <div className="grid-scan"></div>}

        {/* Layer 3: Gradient orb - Desktop only */}
        {!isMobile && (
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            style={{ willChange: "transform, opacity" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Layer 4: Floating Particles (5 on desktop, 0 on mobile) */}
        {[...Array(particleCount)].map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
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