"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  linkedinUrl: string;
  index: number;
}

export default function TeamCard({
  name,
  role,
  description,
  imageSrc,
  linkedinUrl,
  index
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle tilt effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2; // max ±2 degrees
    const rotateY = ((x - centerX) / centerX) * 2;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({});
  };

  // Toggle overlay on mobile tap
  const handleTap = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="relative group cursor-pointer"
      style={isHovered && !isMobile ? tiltStyle : {}}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
      tabIndex={0}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      role="button"
      aria-label={`${name}, ${role}`}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl aspect-[3/4] max-h-[420px]">
        {/* Portrait Image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={`Portrait de ${name}`}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        {/* Name and Role (always visible) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm text-cyan-400">{role}</p>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-600/95 to-cyan-700/95 backdrop-blur-sm p-6 flex flex-col justify-between z-20"
          aria-hidden={!isHovered}
        >
          {/* Top: Name and Role */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-sm text-cyan-100 mb-4">{role}</p>
          </div>

          {/* Middle: Description */}
          <div className="flex-1 overflow-y-auto">
            <p className="text-sm text-white/90 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Bottom: LinkedIn Link */}
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-cyan-200 transition-colors mt-4 font-medium"
            initial={{ opacity: 0, y: 5 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">Voir le profil LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative glow effect */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        aria-hidden="true"
      ></div>
    </motion.article>
  );
}
