"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollProgress from "../components/ScrollProgress";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedStatCounter from "../components/AnimatedStatCounter";
import StaggeredCards from "../components/StaggeredCards";
import AnimatedHero from "../components/AnimatedHero";
import MagneticButton from "../components/MagneticButton";
import RevealText from "../components/RevealText";
import { Heart, Pill, Wheat, Truck, Snowflake, Bot, Factory, Radio, BarChart3, Link, Rocket, Target, Lightbulb, Globe, Phone, MapPin } from "lucide-react";

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
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#industries" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                Industries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105">Contact</a>
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
                Home
              </a>
              <a
                href="#industries"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                Industries
              </a>
              <a
                href="#solutions"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                Solutions
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-medium text-center shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:to-cyan-500 transition-all"
              >
                Contact
              </a>
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
                Intelligent IoT Solutions for Multiple Industries
              </RevealText>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Tunisia-based expertise delivering industrial sensors, data analytics, and connectivity solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton href="#prototype" variant="primary">
                  Explore Our Prototype
                </MagneticButton>
                <MagneticButton href="#contact" variant="secondary">
                  Get in Touch
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
            <AnimatedStatCounter value={99.9} suffix="%" label="Uptime Reliability" />
            <AnimatedStatCounter value={50} suffix="+" label="Sensor Types" />
            <AnimatedStatCounter value={7} label="Industries Served" />
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
              Multi-Industry IoT Solutions
            </RevealText>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering diverse sectors with intelligent monitoring and connectivity
            </p>
          </div>

          <StaggeredCards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            /* Medical */
            <div key="medical" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Medical</h3>
              <p className="text-gray-700 mb-4">
                Patient monitoring, equipment tracking, and healthcare IoT solutions
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
            ,<div key="pharma" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Pharmaceutical</h3>
              <p className="text-gray-700 mb-4">
                Environmental monitoring and compliance tracking for pharma operations
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
            ,<div key="agriculture" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Wheat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Agriculture</h3>
              <p className="text-gray-700 mb-4">
                Smart farming solutions for precision agriculture and crop management
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
            ,<div key="transport" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Transport</h3>
              <p className="text-gray-700 mb-4">
                Fleet management and logistics optimization for transportation
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
            ,<div key="cold-chain" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Cold Chain</h3>
              <p className="text-gray-700 mb-4">
                Temperature-controlled logistics and cold storage monitoring solutions
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
            ,<div key="robotic" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Robotic</h3>
              <p className="text-gray-700 mb-4">
                Industrial automation and collaborative robotics monitoring systems
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
            ,<div key="industry4" className="bg-white/70 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Industry 4.0</h3>
              <p className="text-gray-700 mb-4">
                Smart manufacturing and digital transformation for modern factories
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
              Our Core Solutions
            </RevealText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT platform for industrial monitoring and analytics
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Industrial Sensors</h3>
                <p className="text-gray-300">
                  Advanced sensor technology for real-time monitoring across all your operations
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
                <p className="text-gray-300">
                  Powerful analytics platform turning sensor data into actionable insights
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Link className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connectivity Solutions</h3>
                <p className="text-gray-300">
                  Secure, scalable connectivity infrastructure for your IoT ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Highlight */}
      <section id="prototype" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="scale">
            <div className="text-center bg-white/80 backdrop-blur-md border-2 border-cyan-500/20 rounded-2xl p-12 shadow-xl">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <span className="text-cyan-600 font-semibold text-sm flex items-center gap-2 justify-center"><Rocket className="w-4 h-4" /> In Development</span>
              </div>
              <RevealText
                as="h2"
                className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' } as React.CSSProperties}
              >
                Our First Product Prototype
              </RevealText>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Currently developing our flagship IoT monitoring solution with real-world applications across multiple industries
              </p>
              <MagneticButton href="#contact" variant="primary">
                Request a Demo
              </MagneticButton>
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
              Why Tunisia?
            </RevealText>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">Strategic Location</h3>
              <p className="text-gray-700">
                Based in Sousse, Tunisia - bridging Europe, Africa, and the Middle East
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">Innovation Hub</h3>
              <p className="text-gray-700">
                Cost-effective R&D and development without compromising quality
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">Global Reach</h3>
              <p className="text-gray-700">
                Local expertise with international standards and global ambitions
              </p>
            </div>
          </div>
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
              Frequently Asked Questions
            </RevealText>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about AIOT&apos;s industrial IoT solutions
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: "What industries do AIOT&apos;s IoT solutions serve, and are they customizable for our specific needs?",
                a: "AIOT specializes in industrial IoT solutions for medical facilities, pharmaceutical manufacturing, agriculture operations, and transport logistics. Each solution is fully customizable to your operational requirements, regulatory environment, and existing infrastructure. Our development approach begins with a detailed assessment of your use case to ensure our IoT platform integrates seamlessly with your workflows and delivers measurable outcomes specific to your industry challenges."
              },
              {
                q: "How long does it take to implement an AIOT solution from initial consultation to full deployment?",
                a: "Implementation timelines vary based on project scope and complexity. A typical pilot deployment takes 4-8 weeks from consultation to initial operation, while full-scale implementations range from 3-6 months. This includes requirements analysis, solution design, hardware deployment, system integration, testing, and team training. We provide detailed project timelines during the consultation phase and maintain transparent communication throughout the implementation process."
              },
              {
                q: "Does AIOT comply with industry-specific regulations like GMP, GDP, ISO 13485, or HACCP?",
                a: "Yes, our solutions are designed with regulatory compliance as a core requirement. We architect systems to support GMP (Good Manufacturing Practice) and GDP (Good Distribution Practice) requirements for pharmaceutical clients, ISO 13485 standards for medical device applications, and HACCP compliance for agriculture and food processing. Our data handling protocols align with GDPR and international data protection standards. We provide full documentation and audit trails required for regulatory inspections and certifications."
              },
              {
                q: "How does AIOT ensure data security and protect our operational information?",
                a: "Data security is fundamental to our architecture. We implement end-to-end encryption for all data transmission, secure cloud infrastructure with ISO 27001-compliant hosting partners, role-based access controls, and regular security audits. For sensitive pharmaceutical and medical applications, we offer on-premises deployment options and hybrid architectures that keep critical data within your controlled environment. All solutions include comprehensive data backup, disaster recovery protocols, and compliance with GDPR and industry-specific data protection requirements."
              },
              {
                q: "Can AIOT&apos;s solutions integrate with our existing ERP, MES, or legacy systems?",
                a: "Yes, system integration is a core capability. AIOT&apos;s IoT platform supports standard industrial protocols (OPC UA, Modbus, MQTT, REST APIs) and can interface with major ERP systems (SAP, Oracle, Microsoft Dynamics), manufacturing execution systems, and legacy equipment. We conduct pre-implementation integration assessments to identify compatibility requirements and develop custom connectors when needed. Our goal is seamless data flow between your IoT infrastructure and existing business systems without disrupting current operations."
              },
              {
                q: "What is the typical ROI timeline for an AIOT IoT implementation?",
                a: "Most clients achieve measurable ROI within 12-18 months through operational efficiency gains, reduced downtime, improved quality control, and optimized resource utilization. Specific ROI varies by industry and application: pharmaceutical clients typically see 20-35% reduction in quality control cycle times, transport clients achieve 15-25% fuel cost savings through route optimization, and agriculture clients realize 25-40% water savings through precision irrigation. We provide detailed ROI projections during the consultation phase based on your specific operational metrics and improvement targets."
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
              Contact Us
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-white/90">
              Contact us today to discuss how AIOT solutions can benefit your business
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
            <form
              action="https://formsubmit.co/5b3235b60c9402816eb1cbee98e48170"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from AIOT Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select Industry</option>
                    <option value="medical">Medical</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="transport">Transport & Logistics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  placeholder="+216 92 214 755"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project or requirements..."
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
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the processing of my personal data and accept the privacy policy *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4 font-medium">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+21692214755" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +216 92 214 755
                </a>
                <span className="text-gray-400 hidden sm:block">|</span>
                <p className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Sousse, Tunisia
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
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">AIOT</h3>
              <p className="text-gray-400">
                Intelligent IoT solutions for medical, pharmaceutical, agriculture, and transport industries
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Industrial Sensors</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Data Analytics</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Connectivity Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Phone className="w-4 h-4" /> +216 92 214 755</li>
                <li className="hover:text-cyan-400 transition-colors flex items-center gap-2"><MapPin className="w-4 h-4" /> Sousse, Tunisia</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cyan-500/20 text-center text-gray-400">
            <p>© 2025 AIOT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}