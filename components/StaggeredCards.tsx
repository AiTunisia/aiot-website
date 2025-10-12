"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  index: number;
}

function Card({ children, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 },
      }}
      className="group relative"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
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

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <Card key={index} index={index}>
          {child}
        </Card>
      ))}
    </div>
  );
}