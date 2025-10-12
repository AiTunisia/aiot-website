"use client";

import { Shield, Truck, Heart, Lock, Award } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "GMP Compliant",
    description: "Good Manufacturing Practice",
    color: "text-blue-600",
  },
  {
    icon: Truck,
    title: "GDP Ready",
    description: "Good Distribution Practice",
    color: "text-green-600",
  },
  {
    icon: Heart,
    title: "ISO 13485",
    description: "Medical Device QMS",
    color: "text-red-600",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "EU Data Protection",
    color: "text-blue-700",
  },
  {
    icon: Award,
    title: "ISO 27001 Ready",
    description: "Information Security",
    color: "text-gray-700",
  },
];

export default function TrustBadges() {
  return (
    <section
      className="py-12 bg-gray-50 border-y border-gray-200"
      aria-label="Regulatory Compliance and Certifications"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Built for regulated industries: GMP, GDP & ISO 13485 compliant infrastructure
          with GDPR data protection and ISO 27001 security.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              role="img"
              aria-label={`${badge.title}: ${badge.description}`}
            >
              <badge.icon className={`w-10 h-10 mb-3 ${badge.color}`} strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3" />
            256-bit SSL Encryption
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>EU-Based Data Centers</span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>SOC 2 Audit Trail</span>
        </div>
      </div>
    </section>
  );
}