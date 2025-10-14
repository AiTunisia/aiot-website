"use client";

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLang = (params?.lang as string) || 'en';
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get the path without the language prefix
  const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-cyan-400 min-h-[44px]"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{currentLang}</span>
      </button>

      <div className={`absolute right-0 mt-2 w-36 bg-[#1a2332] border border-cyan-500/20 rounded-lg shadow-xl transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <Link
          href={`/en${pathWithoutLang}`}
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 hover:bg-cyan-500/10 transition-colors rounded-t-lg ${
            currentLang === 'en' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300'
          }`}
        >
          <span className="font-medium">🇬🇧 English</span>
        </Link>
        <Link
          href={`/fr${pathWithoutLang}`}
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 hover:bg-cyan-500/10 transition-colors rounded-b-lg ${
            currentLang === 'fr' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300'
          }`}
        >
          <span className="font-medium">🇫🇷 Français</span>
        </Link>
      </div>
    </div>
  );
}
