"use client";

import { useState, ReactNode } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface MobileCarouselProps {
  children: ReactNode[];
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function MobileCarousel({ children }: MobileCarouselProps) {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < children.length) {
      setPage([newIndex, newDirection]);
    }
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold && currentIndex < children.length - 1) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold && currentIndex > 0) {
      paginate(-1);
    }
  };

  const goToCard = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%'
    }),
    center: {
      x: 0
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%'
    })
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="relative flex items-center justify-center" style={{ minHeight: '500px' }}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "tween",
            duration: 0.2,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 flex items-center justify-center px-8"
        >
          <div className="w-full max-w-[400px]">
            {children[currentIndex]}
          </div>
        </motion.div>
      </div>

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
