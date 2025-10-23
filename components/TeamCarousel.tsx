"use client";

import { useState, useEffect, ReactNode, cloneElement, isValidElement } from 'react';
import MobileCarousel from './MobileCarousel';

interface TeamCarouselProps {
  children: ReactNode[];
}

export default function TeamCarousel({ children }: TeamCarouselProps) {
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

  // Desktop: Show grid layout
  if (!isMobile) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {children}
      </div>
    );
  }

  // Mobile: Use MobileCarousel with inCarousel prop
  return (
    <MobileCarousel>
      {children.map((child, index) => {
        if (isValidElement(child)) {
          const props = { ...(child.props as object), inCarousel: true, key: index };
          return cloneElement(child, props as Record<string, unknown>);
        }
        return child;
      })}
    </MobileCarousel>
  );
}
