"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

interface DownloadButtonProps {
  href: string;
  filename: string;
  children: React.ReactNode;
  className?: string;
}

export default function DownloadButton({
  href,
  filename,
  children,
  className = "",
}: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className={`relative inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/30 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Download className="w-5 h-5" />
      <span>{children}</span>
    </motion.button>
  );
}
