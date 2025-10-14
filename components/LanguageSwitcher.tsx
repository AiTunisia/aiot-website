"use client";

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLang = (params?.lang as string) || 'en';

  // Get the path without the language prefix
  const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{currentLang}</span>
      </button>

      <div className="absolute right-0 mt-2 w-32 bg-[#1a2332] border border-cyan-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <Link
          href={`/en${pathWithoutLang}`}
          className={`block px-4 py-2 hover:bg-cyan-500/10 transition-colors rounded-t-lg ${
            currentLang === 'en' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300'
          }`}
        >
          <span className="font-medium">🇬🇧 English</span>
        </Link>
        <Link
          href={`/fr${pathWithoutLang}`}
          className={`block px-4 py-2 hover:bg-cyan-500/10 transition-colors rounded-b-lg ${
            currentLang === 'fr' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300'
          }`}
        >
          <span className="font-medium">🇫🇷 Français</span>
        </Link>
      </div>
    </div>
  );
}
