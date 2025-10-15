"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

interface TeamCarouselProps {
  children: ReactNode[];
}

export default function TeamCarousel({ children }: TeamCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update current index based on drag position
  useEffect(() => {
    if (!isMobile) return;

    const unsubscribe = x.on('change', (latest) => {
      // Each card is roughly 85% of screen width + gap
      const containerWidth = window.innerWidth;
      const cardWidth = containerWidth * 0.85;
      const index = Math.round(-latest / (cardWidth + 32));
      const clampedIndex = Math.max(0, Math.min(children.length - 1, index));

      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    });

    return () => unsubscribe();
  }, [x, currentIndex, children.length, isMobile]);

  // Snap to nearest card on drag end
  const handleDragEnd = () => {
    if (!isMobile) return;

    const containerWidth = window.innerWidth;
    const cardWidth = containerWidth * 0.85;
    const targetX = -currentIndex * (cardWidth + 32);

    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    });
  };

  // Navigate to specific card via dot click
  const goToCard = (index: number) => {
    if (!isMobile) return;

    setCurrentIndex(index);
    const containerWidth = window.innerWidth;
    const cardWidth = containerWidth * 0.85;
    const targetX = -index * (cardWidth + 32);

    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    });
  };

  // Desktop: Show grid layout
  if (!isMobile) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {children}
      </div>
    );
  }

  // Mobile: Show swipeable carousel
  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Swipeable Container */}
      <motion.div
        className="flex gap-8"
        style={{ x, paddingLeft: '7.5%', paddingRight: '7.5%' }}
        drag="x"
        dragElastic={0.2}
        dragMomentum={false}
        dragConstraints={{
          left: -(children.length - 1) * (window.innerWidth * 0.85 + 32),
          right: 0
        }}
        onDragEnd={handleDragEnd}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: '85vw', maxWidth: '400px' }}
          >
            {child}
          </div>
        ))}
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-cyan-400'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to team member ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
