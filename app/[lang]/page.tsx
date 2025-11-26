"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import ScrollProgress from "../../components/ScrollProgress";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedStatCounter from "../../components/AnimatedStatCounter";
import StaggeredCards from "../../components/StaggeredCards";
import AnimatedHero from "../../components/AnimatedHero";
import MagneticButton from "../../components/MagneticButton";
import RevealText from "../../components/RevealText";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import TeamCard from "../../components/TeamCard";
import TeamCarousel from "../../components/TeamCarousel";
import { Heart, Pill, Wheat, Truck, Snowflake, Bot, Factory, Radio, BarChart3, Link, Rocket, Target, Lightbulb, Globe, Phone, MapPin, Mail, Headphones, Download, Thermometer, Smartphone, CloudCog } from "lucide-react";
import DownloadButton from "../../components/DownloadButton";

// FAQ Accordion Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-lg pr-4">{question}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rotate-180"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <svg
            className="w-5 h-5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2332] lg:bg-[#1a2332]/95 lg:backdrop-blur-md border-b border-cyan-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/images/logo/AIOT-logo-2025.png"
                  alt="AIOT"
                  width={85}
                  height={85}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md -z-10"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#industries" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                {t('nav.industries')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                {t('nav.solutions')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105">{t('nav.contact')}</a>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a2332] border-t border-cyan-500/20">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#home"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                {t('nav.home')}
              </a>
              <a
                href="#industries"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                {t('nav.industries')}
              </a>
              <a
                href="#solutions"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                {t('nav.solutions')}
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                {t('nav.about')}
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-medium text-center shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:to-cyan-500 transition-all"
              >
                {t('nav.contact')}
              </a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <AnimatedHero className="min-h-screen flex items-center pt-16 overflow-hidden">
        <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <RevealText
                as="h1"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
              >
                {t('hero.title')}
              </RevealText>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton href="#prototype" variant="primary">
                  {t('rtdl.cta')}
                </MagneticButton>
                <MagneticButton href="#contact" variant="secondary">
                  {t('nav.contact')}
                </MagneticButton>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-[float_6s_ease-in-out_infinite]">
  <div className="relative">
    <Image
      src="/images/logo/AIOT-logo-2025.png"
      alt="AIOT Logo"
      width={400}
      height={400}
    />
    <div className="absolute inset-0 bg-gradient-radial from-cyan-400/40 to-transparent blur-2xl -z-10 rounded-full"></div>
  </div>
</div>

            </div>
          </div>
        </section>
      </AnimatedHero>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStatCounter value={99.9} suffix="%" label={t('stats.uptime')} />
            <AnimatedStatCounter value={50} suffix="+" label={t('stats.sensors')} />
            <AnimatedStatCounter value={7} label={t('stats.industries')} />
            <AnimatedStatCounter value={24} suffix="/7" label="Monitoring" />
          </div>
        </div>
      </section>

      {/* Industry Showcase */}
      <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <RevealText
              as="h2"
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
            >
              {t('industries.title')}
            </RevealText>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('industries.subtitle')}
            </p>
          </div>

          <StaggeredCards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            /* Medical */
            <div key="medical" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('industries.medical.title')}</h3>
              <p className="text-gray-700 mb-4 text-justify">
                {t('industries.medical.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Real-time patient monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Equipment asset tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Environmental controls
                </li>
              </ul>
            </div>

            /* Pharmaceutical */
            ,<div key="pharma" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('industries.pharmaceutical.title')}</h3>
              <p className="text-gray-700 mb-4 text-justify">
                {t('industries.pharmaceutical.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Temperature & humidity monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Cold chain management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Regulatory compliance
                </li>
              </ul>
            </div>

            /* Agriculture */
            ,<div key="agriculture" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Wheat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('industries.agriculture.title')}</h3>
              <p className="text-gray-700 mb-4 text-justify">
                {t('industries.agriculture.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Soil & climate monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Irrigation management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Crop health tracking
                </li>
              </ul>
            </div>

            /* Transport */
            ,<div key="transport" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('industries.transport.title')}</h3>
              <p className="text-gray-700 mb-4 text-justify">
                {t('industries.transport.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Fleet tracking & management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Route optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Vehicle diagnostics
                </li>
              </ul>
            </div>

            /* Cold Chain */
            ,<div key="cold-chain" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('industries.coldChain.title')}</h3>
              <p className="text-gray-700 mb-4 text-justify">
                {t('industries.coldChain.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Real-time temperature tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Cold storage compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Vaccine & pharma transport
                </li>
              </ul>
            </div>

            /* Robotic */
            ,<div key="robotic" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('industries.robotic.title')}</h3>
              <p className="text-gray-700 mb-4 text-justify">
                {t('industries.robotic.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Robot fleet management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Performance analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Predictive maintenance
                </li>
              </ul>
            </div>

            /* Industry 4.0 */
            ,<div key="industry4" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('industries.industry40.title')}</h3>
              <p className="text-gray-700 mb-4 text-justify">
                {t('industries.industry40.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Smart factory integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Production optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Digital twin monitoring
                </li>
              </ul>
            </div>
            ]}
          </StaggeredCards>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-[#1a2332] via-[#0d1520] to-[#1a2332] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeIn" className="text-center mb-16">
            <RevealText
              as="h2"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
            >
              {t('solutions.title')}
            </RevealText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl relative overflow-hidden group flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('solutions.sensors.title')}</h3>
                <p className="text-gray-300 text-justify">
                  {t('solutions.sensors.description')}
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl relative overflow-hidden group flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('solutions.analytics.title')}</h3>
                <p className="text-gray-300 text-justify">
                  {t('solutions.analytics.description')}
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl relative overflow-hidden group flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Link className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('solutions.connectivity.title')}</h3>
                <p className="text-gray-300 text-justify">
                  {t('solutions.connectivity.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTDL Product Showcase */}
      <section id="prototype" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeIn">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* LEFT COLUMN - Video & Images */}
              <div className="space-y-6">
                {/* Video Embed */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('rtdl.video.title')}
                  </h3>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/83fSWUDsKwU"
                      title="RTDL Product Demonstration"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>

                {/* Product Images Carousel */}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-2">
                  <Image
                    src="/images/BOX.png"
                    alt="RTDL Device Box"
                    width={200}
                    height={200}
                    className="snap-center rounded-xl border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="/images/WhatsApp Image 2025-11-26 at 10.51.00-Photoroom-portrait.png"
                    alt="RTDL Device Portrait"
                    width={200}
                    height={200}
                    className="snap-center rounded-xl border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN - Content & Features */}
              <div className="space-y-8">
                {/* Badge & Title */}
                <div>
                  <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
                    <span className="text-cyan-600 font-semibold text-sm flex items-center gap-2">
                      <Rocket className="w-4 h-4" /> {t('rtdl.badge')}
                    </span>
                  </div>
                  <RevealText
                    as="h2"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
                  >
                    {t('rtdl.title')}
                  </RevealText>
                  <p className="text-lg text-cyan-600 font-medium mb-4">
                    {t('rtdl.subtitle')}
                  </p>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {t('rtdl.description')}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {t('rtdl.features.title')}
                  </h3>
                  <StaggeredCards className="space-y-4">
                    {[
                      // Cold Chain Feature
                      <div key="coldchain" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <Thermometer className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {t('rtdl.features.coldChain.title')}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {t('rtdl.features.coldChain.description')}
                        </p>
                      </div>,

                      // Mobile App Feature
                      <div key="mobile" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {t('rtdl.features.mobileApp.title')}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {t('rtdl.features.mobileApp.description')}
                        </p>
                      </div>,

                      // Multi-Sector Feature
                      <div key="multisector" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <CloudCog className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {t('rtdl.features.multiSector.title')}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {t('rtdl.features.multiSector.description')}
                        </p>
                      </div>,
                    ]}
                  </StaggeredCards>
                </div>

                {/* Download & CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <DownloadButton
                    href="https://github.com/AiTunisia/aiot-website/raw/main/public/application-e55fed1c-d466-468f-a18e-9b82cfeb0ee5.apk"
                    filename="RTDL-App.apk"
                  >
                    {t('rtdl.download.button')}
                  </DownloadButton>
                  <MagneticButton href="#contact" variant="primary">
                    {t('rtdl.cta')}
                  </MagneticButton>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tunisia Advantage */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="slideUp" className="text-center mb-16">
            <RevealText
              as="h2"
              className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
            >
              {t('about.title')}
            </RevealText>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group flex flex-col h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">{t('about.location.title')}</h3>
              <p className="text-gray-700 text-justify">
                {t('about.location.description')}
              </p>
            </div>

            <div className="text-center group flex flex-col h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">{t('about.innovation.title')}</h3>
              <p className="text-gray-700 text-justify">
                {t('about.innovation.description')}
              </p>
            </div>

            <div className="text-center group flex flex-col h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">{t('about.expertise.title')}</h3>
              <p className="text-gray-700 text-justify">
                {t('about.expertise.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-[#1a2332] via-[#0d1520] to-[#1a2332] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeIn" className="text-center mb-16">
            <RevealText
              as="h2"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
            >
              {t('team.title')}
            </RevealText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </AnimatedSection>

          <TeamCarousel>
            <TeamCard
              name={t('team.mokhtar.name')}
              role={t('team.mokhtar.role')}
              description={t('team.mokhtar.description')}
              imageSrc="/images/Harrabi.jpg"
              linkedinUrl={t('team.mokhtar.linkedin')}
              index={0}
            />
            <TeamCard
              name={t('team.adam.name')}
              role={t('team.adam.role')}
              description={t('team.adam.description')}
              imageSrc="/images/Adam.jpg"
              linkedinUrl={t('team.adam.linkedin')}
              index={1}
            />
            <TeamCard
              name={t('team.mohamed.name')}
              role={t('team.mohamed.role')}
              description={t('team.mohamed.description')}
              imageSrc="/images/Ameur.jpg"
              linkedinUrl={t('team.mohamed.linkedin')}
              index={2}
            />
          </TeamCarousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="slideUp" className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-600 font-semibold text-sm flex items-center gap-2 justify-center"><Lightbulb className="w-4 h-4" /> Support</span>
            </div>
            <RevealText
              as="h2"
              className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
            >
              {t('faq.title')}
            </RevealText>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about AIOT&apos;s industrial IoT solutions
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: t('faq.q1.question'),
                a: t('faq.q1.answer')
              },
              {
                q: t('faq.q2.question'),
                a: t('faq.q2.answer')
              },
              {
                q: t('faq.q3.question'),
                a: t('faq.q3.answer')
              },
              {
                q: t('faq.q4.question'),
                a: t('faq.q4.answer')
              },
              {
                q: t('faq.q5.question'),
                a: t('faq.q5.answer')
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
            <p className="text-gray-700 mb-4 text-lg">
              Still have questions? We&apos;re here to help!
            </p>
            <MagneticButton href="#contact" variant="primary">
              {t('nav.contact')}
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-br from-cyan-500 to-cyan-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-white/90">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
            <form
              action="https://formsubmit.co/35f00911bd8d4de4a63bc457404d6f6e"
              method="POST"
              target="_blank"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from AIOT Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.name')} {t('contact.form.required')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.email')} {t('contact.form.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.industry')} {t('contact.form.required')}
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white text-gray-900"
                  >
                    <option value="">{t('contact.form.industryPlaceholder')}</option>
                    <option value="medical">{t('contact.form.industryOptions.medical')}</option>
                    <option value="pharmaceutical">{t('contact.form.industryOptions.pharmaceutical')}</option>
                    <option value="agriculture">{t('contact.form.industryOptions.agriculture')}</option>
                    <option value="transport">{t('contact.form.industryOptions.transport')}</option>
                    <option value="other">{t('contact.form.industryOptions.other')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900"
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.message')} {t('contact.form.required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none text-gray-900"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600 line-clamp-2">
                  {t('contact.form.privacy')} {t('contact.form.required')}
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4 font-medium">{t('footer.reach')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+21692214755" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('footer.contact.phone')}
                </a>
                <span className="text-gray-400 hidden sm:block">|</span>
                <p className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('footer.contact.location')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1a2332] via-[#0d1520] to-[#1a2332] text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">{t('footer.company.title')}</h3>
              <p className="text-gray-400">
                {t('footer.company.description')}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">{t('solutions.title')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">{t('solutions.sensors.title')}</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">{t('solutions.analytics.title')}</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">{t('solutions.connectivity.title')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">{t('footer.contact.title')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {t('footer.contact.phone')}
                </li>
                <li className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {t('footer.contact.location')}
                </li>
                <li className="hover:text-cyan-400 transition-colors">
                  <a href="mailto:contact@aiot.tn" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> contact@aiot.tn
                  </a>
                </li>
                <li className="hover:text-cyan-400 transition-colors">
                  <a href="mailto:support@aiot.tn" className="flex items-center gap-2">
                    <Headphones className="w-4 h-4" /> support@aiot.tn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cyan-500/20 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}