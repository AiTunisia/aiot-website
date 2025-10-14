"use client";

import { motion } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface CardProps {
  children: ReactNode;
  index: number;
  isMobile: boolean;
}

function Card({ children, index, isMobile }: CardProps) {
  // Mobile-optimized animation values
  const yDistance = isMobile ? 20 : 50;
  const duration = isMobile ? 0.3 : 0.5;
  const staggerDelay = isMobile ? 0.05 : 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, y: yDistance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: index * staggerDelay,
        ease: isMobile ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={!isMobile ? {
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 },
      } : undefined}
      className="group relative"
      style={!isMobile ? { transformStyle: "preserve-3d", perspective: "1000px" } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredCardsProps {
  children: ReactNode[];
  className?: string;
}

export default function StaggeredCards({
  children,
  className = "",
}: StaggeredCardsProps) {
  const ref = useRef(null);
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

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <Card key={index} index={index} isMobile={isMobile}>
          {child}
        </Card>
      ))}
    </div>
  );
}