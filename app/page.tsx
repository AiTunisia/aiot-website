import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/images/logo/AIOT-logo-2025.jpg"
                alt="AIOT"
                width={50}
                height={50}
                className="rounded"
              />
              <span className="ml-3 text-white text-xl font-bold">AIOT</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-500 transition-colors">Home</a>
              <a href="#solutions" className="text-gray-300 hover:text-cyan-500 transition-colors">Solutions</a>
              <a href="#industries" className="text-gray-300 hover:text-cyan-500 transition-colors">Industries</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-500 transition-colors">About</a>
              <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-700 to-navy-900 pt-16">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #00d4d4 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, #33e8e8 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Intelligent IoT Solutions for <span className="text-cyan-500">Multiple Industries</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Tunisia-based expertise delivering industrial sensors, data analytics, and connectivity solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#prototype" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30">
                  Explore Our Prototype
                </a>
                <a href="#contact" className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  Get in Touch
                </a>
              </div>
              <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg inline-block">
                <p className="text-cyan-300 text-sm font-medium">
                  📍 Based in Sousse, Tunisia | 📞 +216 92 214 755
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/logo/AIOT-logo-2025.jpg"
                  alt="AIOT Logo"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-3xl scale-110 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Showcase */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Multi-Industry IoT Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering diverse sectors with intelligent monitoring and connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Medical */}
            <div className="bg-white border-2 border-gray-100 hover:border-cyan-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Medical</h3>
              <p className="text-gray-600 mb-4">
                Patient monitoring, equipment tracking, and healthcare IoT solutions
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time patient monitoring</li>
                <li>• Equipment asset tracking</li>
                <li>• Environmental controls</li>
              </ul>
            </div>

            {/* Pharmaceutical */}
            <div className="bg-white border-2 border-gray-100 hover:border-cyan-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Pharmaceutical</h3>
              <p className="text-gray-600 mb-4">
                Environmental monitoring and compliance tracking for pharma operations
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Temperature & humidity monitoring</li>
                <li>• Cold chain management</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>

            {/* Agriculture */}
            <div className="bg-white border-2 border-gray-100 hover:border-cyan-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Agriculture</h3>
              <p className="text-gray-600 mb-4">
                Smart farming solutions for precision agriculture and crop management
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Soil & climate monitoring</li>
                <li>• Irrigation management</li>
                <li>• Crop health tracking</li>
              </ul>
            </div>

            {/* Transport */}
            <div className="bg-white border-2 border-gray-100 hover:border-cyan-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Transport</h3>
              <p className="text-gray-600 mb-4">
                Fleet management and logistics optimization for transportation
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fleet tracking & management</li>
                <li>• Route optimization</li>
                <li>• Vehicle diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Core Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive IoT platform for industrial monitoring and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-navy-900 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📡</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Industrial Sensors</h3>
              <p className="text-gray-600">
                Advanced sensor technology for real-time monitoring across all your operations
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-navy-900 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Data Analytics</h3>
              <p className="text-gray-600">
                Powerful analytics platform turning sensor data into actionable insights
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-navy-900 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Connectivity Solutions</h3>
              <p className="text-gray-600">
                Secure, scalable connectivity infrastructure for your IoT ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Highlight */}
      <section id="prototype" className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our First Product Prototype
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Currently developing our flagship IoT monitoring solution with real-world applications across multiple industries
            </p>
            <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Tunisia Advantage */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why <span className="text-cyan-500">Tunisia</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Strategic Location</h3>
              <p className="text-gray-600">
                Based in Sousse, Tunisia - bridging Europe, Africa, and the Middle East
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Innovation Hub</h3>
              <p className="text-gray-600">
                Cost-effective R&D and development without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Local expertise with international standards and global ambitions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss how AIOT solutions can benefit your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+21692214755" className="bg-white text-cyan-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl">
              📞 +216 92 214 755
            </a>
            <p className="text-white font-medium">
              📍 Sousse, Tunisia
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-500">AIOT</h3>
              <p className="text-gray-400">
                Intelligent IoT solutions for medical, pharmaceutical, agriculture, and transport industries
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Industrial Sensors</li>
                <li>Data Analytics</li>
                <li>Connectivity Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +216 92 214 755</li>
                <li>📍 Sousse, Tunisia</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 AIOT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}