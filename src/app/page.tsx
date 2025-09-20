'use client';

import Image from "next/image";
import { Cpu, Cloud, Zap, Linkedin, Mail, Phone, MapPin, Github, Twitter, ArrowUp } from "lucide-react";

// Data arrays
const useCases = [
  {
    title: "Smart Leak Detection & Loss Reduction",
    icon: "🔍"
  },
  {
    title: "Water Footprint Monitoring for Agriculture & Food Production",
    icon: "🌱"
  },
  {
    title: "Water Quality Assurance in Industrial Processes",
    icon: "🏭"
  },
  {
    title: "Stormwater Management & Urban Flood Resilience",
    icon: "🌧️"
  },
  {
    title: "Water Recycling & Greywater Reuse for Buildings",
    icon: "♻️"
  },
  {
    title: "Digital Twin for Water Infrastructure",
    icon: "💧"
  }
];

const teamMembers = [
  {
    name: "Dr. Mohamad Hasan Bahari",
    role: "CEO, Sensifai – AI Specialist",
    description: "PhD from KU Leuven; leads AI integration and project coordination",
    image: "https://nebulouscloud.eu/wp-content/uploads/2025/06/Dr-Mohamad-Hasan-Bahari.jpg",
    linkedin: "https://www.linkedin.com/in/mohamad-hasan-bahari-2233b629/?%20originalSubdomain=be"
  },
  {
    name: "Dr. Farkhondeh Khorashadi Zadeh",
    role: "Technical Lead, Edge Computing Expert",
    description: "Experience with Docker, embedded systems, distributed AI deployment",
    image: "https://nebulouscloud.eu/wp-content/uploads/2025/06/FarkhondehKhorashadiZadeh.jpg",
    linkedin: "https://www.linkedin.com/in/farkhondeh-khorashadi-zadeh-b5b94%20b95/?originalSubdomain=be"
  },
  {
    name: "Javad Rajabzadeh",
    role: "IoT Engineer",
    description: "Specialises in sensor integration, MQTT/HTTPS, real-time data",
    image: "https://nebulouscloud.eu/wp-content/uploads/2025/06/Javad-Rajabzade.jpg",
    linkedin: "https://www.linkedin.com/in/Ja7ad/"
  },
  {
    name: "Nahid Fadaei",
    role: "Data Engineer",
    description: "Cloud deployment, analytics, scalable environmental monitoring",
    image: "https://nebulouscloud.eu/wp-content/uploads/2025/06/Nahid-Fadaei-e1750349199492.jpg",
    linkedin: "https://www.linkedin.com/in/nahid-fadaei/"
  }
];

const impactStats = [
  {
    icon: "🌱",
    value: "30%",
    description: "Cloud energy use cut by 30% by prioritizing edge processing for urban sensors",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
    progressColor: "bg-gradient-to-r from-green-400 to-emerald-500"
  },
  {
    icon: "🎯",
    value: "95%",
    description: "Anomaly detection accuracy with TensorFlow LSTM model",
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    progressColor: "bg-gradient-to-r from-blue-400 to-cyan-500"
  },
  {
    icon: "⚡",
    value: "<2s",
    description: "Latency under 2 seconds; 99% uptime",
    color: "bg-gradient-to-br from-purple-400 to-indigo-500",
    progressColor: "bg-gradient-to-r from-purple-400 to-indigo-500"
  },
  {
    icon: "📡",
    value: "20",
    description: "Deployed across 20 sensors (10 urban, 10 rural)",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    progressColor: "bg-gradient-to-r from-orange-400 to-red-500"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50/20">
      {/* Google Fonts Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-lg border-b border-gray-200/20 shadow-lg"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-3">
                  <AquaSenseLogo />
                </div>
                <span className="font-semibold text-xl text-gray-900">AquaSense</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
                About
              </button>
              <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
                Use Cases
              </button>
              <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
                Team
              </button>
              <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
                Contact
              </button>
              <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
                Newsletter
              </button>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-cyan-600 transition-colors duration-200">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1599103482679-a3ad6286eda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU4MDE2MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Water technology abstract background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-blue-50/60 to-white/70" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Real-Time Water Quality{" "}
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Monitoring
                </span>
              </h1>
              <p
                className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                with NebulOuS-Enabled IoT Pipeline
              </p>
              <button
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="mr-2">Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full backdrop-blur-sm animate-pulse" />
            <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full backdrop-blur-sm animate-pulse delay-1000" />
            <div className="absolute top-1/3 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full backdrop-blur-sm animate-pulse delay-500" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  What is <span className="text-cyan-600">AquaSense</span>?
                </h2>
                <div
                  className="text-lg text-gray-700 leading-relaxed space-y-4"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  <p>
                    AquaSense enables real-time water quality monitoring for water authorities,
                    environmental agencies, and industrial clients in urban and rural settings.
                    Deployed across 20 sensors (10 urban, 10 rural), it captures critical
                    parameters like pH and turbidity every 10 seconds to detect contamination
                    events.
                  </p>
                  <p>
                    Our advanced IoT pipeline leverages NebulOuS technology to provide
                    unprecedented accuracy and speed in water quality assessment, ensuring public
                    health safety and environmental protection through cutting-edge monitoring
                    solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <div className="text-2xl font-semibold text-cyan-600">20</div>
                      <div className="text-sm text-gray-600">Active Sensors</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <div className="text-2xl font-semibold text-cyan-600">10s</div>
                      <div className="text-sm text-gray-600">Reading Interval</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30">
                  <Image
                    src="https://images.unsplash.com/photo-1604172808131-ba87ab41474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHF1YWxpdHklMjBtb25pdG9yaW5nJTIwc2Vuc29yc3xlbnwxfHx8fDE3NTgwMTYwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Water quality monitoring sensors"
                    width={600}
                    height={320}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce delay-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section id="pipeline" className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                IoT Pipeline & <span className="text-cyan-600">Architecture</span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Our sophisticated three-tier architecture ensures reliable, fast, and scalable
                water quality monitoring
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pipeline Card 1 */}
              <div className="group">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Edge Processing
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Sensors → MQTT → Mosquitto on Raspberry Pi edge devices, preprocess via
                    ThingsBoard (1-minute averages, noise filtering)...
                  </p>
                </div>
              </div>

              {/* Pipeline Card 2 */}
              <div className="group">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Cloud & AI
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Processed data sent to cloud, analyzed by TensorFlow LSTM model, achieving 95%
                    anomaly detection accuracy within 5 seconds; orchestrator scales ThingsBoard
                    and AI modules...
                  </p>
                </div>
              </div>

              {/* Pipeline Card 3 */}
              <div className="group">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Latency & Scaling
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Supports 100-1000 readings/sec, ensuring &lt;2-second latency, 99% uptime...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use_cases" className="py-20 bg-gradient-to-br from-cyan-50/30 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Use <span className="text-cyan-600">Cases</span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                AquaSense serves diverse industries with tailored water quality monitoring
                solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60">
                    <div className="relative overflow-hidden flex items-center justify-center p-8">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                        {useCase.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 text-center"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {useCase.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gradient-to-br from-white to-cyan-50/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Team & <span className="text-cyan-600">Partners</span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Meet the experts behind AquaSense's innovative water quality monitoring
                solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group flex">
                  <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center h-full flex flex-col">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <h3
                      className="text-lg font-semibold text-gray-900 mb-2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-cyan-600 font-medium mb-3"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-gray-700 text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-3 transition-opacity duration-300">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gradient-to-br from-cyan-500 mt-auto to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section
          id="impact"
          className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-2xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Environmental & <span className="text-cyan-300">Social Impact</span>
              </h2>
              <p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Measurable results that demonstrate our commitment to environmental
                sustainability and technological excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105 text-center h-full">
                    <div className="text-4xl mb-4 opacity-80">{stat.icon}</div>
                    <div
                      className={`text-4xl sm:text-5xl font-bold ${stat.color} bg-clip-text text-transparent mb-4`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <p
                      className="text-gray-300 leading-relaxed text-sm"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {stat.description}
                    </p>
                    <div className="mt-6">
                      <div className="w-full bg-white/10 rounded-full h-1">
                        <div
                          className={`h-1 rounded-full ${stat.progressColor}`}
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-32 left-16 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
            <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50/30 to-blue-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get In <span className="text-cyan-600">Touch</span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Contact us to learn more about deployment, partnership, or implementation of
                AquaSense solutions
              </p>
            </div>
            <div className="w-full">
              <div className="w-full max-w-none">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 w-full">
                  <div className="ContactContainer w-full">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Contacts us
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <a href="tel:+32-489-91-22-11" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                            +32 489 91 22 11
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <a href="mailto:sales.support@Sensifai.com" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                            sales.support@Sensifai.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-gray-900">Addresses</p>
                          <address className="text-gray-600 not-italic">
                            10th Floor, Flexi-Space, Mechelsesteenweg 455, 1950 Kraainem, Belgium
                          </address>
                          <address className="text-gray-600 not-italic">
                            Branch Office: Silversquare Bailli, Av. Louise 231, 1050 Bruxelles, Belgium
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                      <p
                        className="text-sm text-gray-700 leading-relaxed"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        <strong>Partnership Opportunities:</strong> We're actively seeking
                        partnerships with water authorities, environmental agencies, and technology
                        integrators. Let's discuss how AquaSense can enhance your monitoring
                        capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* First Section: EU Partnership and Funding */}
          <div className="space-y-12 mb-16">
            {/* EU Cloud Edge IoT Partnership */}
            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <a href="https://eucloudedgeiot.eu/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://nebulouscloud.eu/wp-content/uploads/2024/02/Group-670.png"
                    alt="Part of EU Cloud Edge IoT"
                    width={363}
                    height={21}
                    className="hover:opacity-80 transition-opacity duration-300"
                  />
                </a>
              </div>
            </div>

            {/* EU Funding and Consortium Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* EU Funding Section */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <Image
                  src="https://nebulouscloud.eu/wp-content/uploads/2024/02/EN-Funded-by-the-EU-NEG-1-2.png"
                  alt="Funded by the EU logo"
                  width={222}
                  height={47}
                  className="mb-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Directorate-General for Communications Networks, Content and Technology. Neither the European Union nor the granting authority can be held responsible for them.
                </p>
              </div>

              {/* Consortium Section */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <Image
                  src="https://nebulouscloud.eu/wp-content/uploads/2024/02/Mask-group-23.png"
                  alt="Consortium logo"
                  width={200}
                  height={50}
                  className="mx-auto mb-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Funded by Nebolous Project (nebulouscloud.eu) under grant agreement number 101070516.
                </p>
              </div>
            </div>
          </div>

          {/* Second Section: Copyright and Social Media */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Copyright */}
              <div>
                <p className="text-gray-300 text-sm" style={{ fontFamily: "Roboto, sans-serif" }}>
                  © 2022 NEBULOUS. ALL RIGHTS RESERVED
                </p>
              </div>

              {/* Social Media and Links */}
              <div className="space-y-6">
                {/* Social Icons */}
                <div className="flex justify-end space-x-4">
                  <a
                    href="http://linkedin.com/company/nebulouscloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/_nebulous_cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                    aria-label="Twitter/X"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.140825 0.231467C0.218369 0.339374 2.01227 2.88989 4.12775 5.89914C6.24298 8.90839 8.19949 11.6912 8.47543 12.0836C8.75138 12.4757 8.97701 12.8045 8.97701 12.8141C8.97701 12.8237 8.87431 12.9473 8.74878 13.0889C8.62326 13.2305 8.26951 13.6312 7.96271 13.9795C7.6559 14.3278 7.13902 14.9147 6.8138 15.2841C6.48858 15.6534 5.91646 16.3028 5.54223 16.7279C5.16825 17.1529 4.49551 17.9166 4.04736 18.4255C2.66141 19.9993 2.46145 20.2265 1.40643 21.4267C0.843134 22.0675 0.302916 22.6803 0.205921 22.7884C0.108925 22.8966 0.0298248 22.9961 0.0298248 23.0101C0.0298248 23.0263 0.383573 23.0352 1.02675 23.0352H2.02368L3.11967 21.7876C3.7224 21.1014 4.31708 20.4261 4.44104 20.2868C4.70921 19.9856 6.75363 17.6623 6.92532 17.4635C6.99119 17.3875 7.08663 17.2791 7.13772 17.2228C7.18882 17.1666 7.59106 16.7102 8.03143 16.2086C8.47206 15.7071 8.84448 15.2846 8.85927 15.2694C8.87405 15.2544 9.1072 14.9895 9.37744 14.6804C9.64768 14.3717 9.8772 14.1189 9.88731 14.1189C9.89743 14.1189 11.286 16.0822 12.9728 18.482C14.6595 20.8818 16.0699 22.8877 16.1067 22.9397L16.1736 23.0341L19.5933 23.0346C22.4054 23.0352 23.0107 23.0293 22.9999 23.002C22.9884 22.9728 21.3502 20.6389 17.1469 14.6635C14.1211 10.3619 13.7186 9.78381 13.7303 9.75468C13.7415 9.72606 14.1536 9.25542 16.8632 6.17575C17.328 5.64761 17.9688 4.91886 18.287 4.55663C18.6052 4.19441 18.9268 3.82965 19.0013 3.74606C19.0757 3.66247 19.4673 3.21792 19.8716 2.75817C20.2757 2.29843 20.9629 1.51724 21.3987 1.02228C21.8344 0.527326 22.2068 0.102535 22.2262 0.0787245C22.2597 0.0376893 22.2029 0.0351563 21.2493 0.0351563H20.2368L19.7863 0.548097C19.1869 1.23075 18.1034 2.46181 17.7956 2.80959C17.6597 2.96335 17.49 3.15637 17.4187 3.23894C17.3474 3.32127 17.2066 3.4806 17.106 3.59281C17.0053 3.70502 16.498 4.28129 15.9788 4.87326C15.4596 5.46549 15.0276 5.95538 15.0187 5.96247C15.0099 5.96956 14.8987 6.09545 14.7713 6.24262C14.5485 6.49998 14.3221 6.75759 13.2827 7.93469C12.8265 8.45143 12.8031 8.47372 12.7648 8.4261C12.7427 8.39875 11.4058 6.49973 9.79395 4.20606L6.86334 0.0356629H3.43167L0 0.0351562L0.140825 0.231467ZM2.81909 1.59905C2.84477 1.63756 3.48613 2.53527 4.24394 3.59408C5.68124 5.60227 11.3295 13.498 14.9622 18.577C16.123 20.1999 17.0868 21.5424 17.1041 21.5599C17.1288 21.585 17.467 21.5903 18.6833 21.5852L20.2311 21.5787L16.1809 15.9173C13.9531 12.8037 10.7279 8.2954 9.01358 5.89914L5.89675 1.54231L4.33445 1.53573L2.77215 1.52914L2.81883 1.59905" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@nebulouscloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                    aria-label="YouTube"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.f6s.com/nebulous-open-call-1/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                    aria-label="F6S"
                  >
                    <span className="text-sm font-bold">F6S</span>
                  </a>
                  <a
                    href="mailto:info@nebulouscloud.eu"
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://zenodo.org/communities/nebulous/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                    aria-label="Zenodo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/eu-nebulous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Footer Links */}
                <div className="flex justify-end space-x-6 text-sm">
                  <a
                    href="https://nebulouscloud.eu/terms-of-use-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="https://nebulouscloud.eu/privacy-policy-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="https://nebulouscloud.eu/cookie-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl" />
      </footer>
    </div>
  );
}




// AquaSense Logo Component
function AquaSenseLogo() {
  return (
    <div className="relative w-full h-full">
      <svg
        className="block w-full h-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 133 132"
      >
        <g id="Vector">
          <path
            d="M112.271 65.4489C112.271 91.5506 91.4973 112.06 64.9642 111.933C39.9276 111.815 18.7584 90.9441 19.0442 64.354C19.3048 39.4146 40.2051 18.6866 65.662 18.6192C92.3464 18.5518 112.759 40.6949 112.28 65.4405L112.271 65.4489ZM96.5247 66.089C96.5247 64.8957 95.8652 63.7764 94.9547 63.2361C94.3615 62.8841 93.6617 62.7778 92.9685 63.0569C90.9928 63.857 89.6729 63.0064 88.1848 62.1557C86.7892 61.3555 85.3937 60.5385 83.956 59.8142C83.7593 59.7148 83.5789 59.6145 83.4159 59.5076C82.7364 59.0619 82.3603 58.5023 82.3671 57.4222C82.3671 56.5054 81.8698 55.6554 81.1767 55.1234C80.4562 54.5704 79.5239 54.3611 78.7184 54.7775C77.3052 55.5078 76.2957 55.1613 75.2978 54.6163C75.1648 54.5435 75.0319 54.4672 74.898 54.3896C74.7164 54.284 74.5333 54.1757 74.3466 54.07C72.8838 53.2446 71.4546 52.3518 69.9665 51.5853C69.4958 51.3412 69.1325 51.0829 68.8668 50.7436C68.5915 50.392 68.4209 49.9533 68.3439 49.3533C68.1989 48.196 67.4506 47.2242 66.5376 46.822C65.9688 46.5715 65.3362 46.542 64.7456 46.8265C62.812 47.7614 61.5845 46.776 60.1721 45.9927C58.6504 45.142 57.1708 44.2155 55.6238 43.3985C55.4777 43.3208 55.3406 43.2431 55.2132 43.1626C54.5121 42.72 54.106 42.1948 54.1274 41.1328C54.1485 39.9412 53.4507 39.0978 52.409 38.6966C52.2064 38.6186 51.9908 38.5573 51.7649 38.5134C50.3273 38.2439 49.0746 38.6566 48.36 40.0463C47.7332 41.2693 47.6161 42.7599 48.6917 43.5078C48.7024 43.5152 48.7133 43.5226 48.7242 43.5299L48.7339 43.5367C48.7408 43.5413 48.7481 43.5456 48.7552 43.5501C48.8837 43.6327 49.0014 43.7173 49.109 43.8039C50.4732 44.9008 50.2348 46.3094 50.2348 47.7614C50.2432 49.5133 50.2096 51.2568 50.2517 53.0087C50.2769 54.0531 50.1424 54.8364 49.1167 55.5439C47.6538 56.5546 47.3848 58.9972 48.772 59.9321C50.4282 61.0523 50.2264 62.4673 50.2348 63.975C50.2432 65.8616 50.2012 67.7399 50.2517 69.6265C50.2769 70.5614 50.0499 71.2016 49.226 71.8164C47.6736 72.9786 47.3392 75.3279 48.7738 76.3261C48.7843 76.3334 48.7949 76.3406 48.8056 76.3478C48.8196 76.3571 48.8334 76.3665 48.847 76.3758C48.8624 76.3863 48.8776 76.3969 48.8926 76.4075C50.3971 77.4659 50.2433 78.7498 50.2433 80.1716C50.2433 81.7214 50.2264 83.2627 50.2433 84.8125C50.2601 86.1517 50.3609 87.3645 48.8981 88.2826C47.7127 89.0322 47.7043 90.5146 48.2423 91.778C48.3851 92.114 48.5669 92.4053 48.7818 92.6508C49.4019 93.359 50.2976 93.6848 51.3278 93.5973C52.6981 93.4793 54.0769 92.7129 54.0181 91.34C53.9413 89.4111 55.0754 88.7794 56.3155 88.0886C56.4346 88.0222 56.5547 87.9554 56.6747 87.8867C58.2469 86.9855 59.8106 86.0759 61.3407 85.0989C62.1394 84.5935 62.7111 84.4672 63.6611 85.0062C66.0067 86.3623 68.3943 84.9725 68.4364 82.252C68.4532 81.2582 68.7811 80.8286 69.5545 80.4075C71.5639 79.3209 73.5563 78.2092 75.5068 77.03C76.44 76.4657 77.1462 76.2888 78.2307 76.8952C79.9794 77.8723 82.3334 76.8868 82.4595 74.9665C82.5926 72.967 83.7749 72.3253 85.0974 71.6074C85.1955 71.5541 85.2944 71.5005 85.3937 71.4458C86.8061 70.6709 88.2185 69.8876 89.5888 69.0538C90.438 68.54 91.1021 68.3968 92.1278 68.8853C94.2716 69.9045 96.5079 68.3631 96.5163 66.0806L96.5247 66.089Z"
            fill="#00acc1"
          />
          <path
            d="M0.0129498 66.325C0.0129498 32.5419 24.6123 4.52833 57.5517 0.215954C60.9229 -0.222021 60.9398 -0.222023 60.9145 3.2144C60.8977 5.28636 61.5451 7.84683 60.5699 9.30394C59.6451 10.6853 56.8623 10.1631 54.9118 10.5336C32.9523 14.7534 14.7507 33.1484 10.9423 55.1482C8.17633 71.1175 11.1272 85.8655 20.661 99.1311C21.2831 99.9986 21.384 100.521 20.5349 101.287C18.7946 102.862 17.0963 104.496 15.4738 106.206C14.6499 107.065 14.2799 107.006 13.5569 106.054C7.01614 97.4465 2.79572 87.8279 0.92092 77.1817C0.256753 73.4 -0.0711219 69.5846 0.0129498 66.3334V66.325Z"
            fill="#00acc1"
          />
          <path
            d="M132.032 64.3205C131.982 80.2645 127.644 93.2858 119.186 104.985C118.244 106.282 117.74 106.29 116.706 105.17C115.016 103.351 112.384 101.953 111.628 99.8386C110.854 97.674 113.62 95.821 114.755 93.7996C133.041 61.263 115.873 19.4111 78.1505 10.7779C76.1916 10.3315 74.1907 10.0283 72.1898 9.84302C71.038 9.74195 70.5251 9.47243 70.5756 8.20061C70.6765 5.91809 70.6597 3.62714 70.5756 1.33619C70.5336 0.131758 70.9203 -0.0788178 72.0805 0.0222535C86.028 1.30249 98.3361 6.50766 108.938 15.6041C121.531 26.4103 128.963 40.1392 131.427 56.5548C131.889 59.6122 132.141 62.7033 132.04 64.312L132.032 64.3205Z"
            fill="#00acc1"
          />
          <path
            d="M65.8435 131.71C49.3738 131.55 34.821 126.26 22.2775 115.479C20.9912 114.376 20.9155 113.677 22.2354 112.582C23.6731 111.386 25.0266 110.047 26.2625 108.632C27.2882 107.461 27.9523 107.486 29.1461 108.531C37.1077 115.53 46.3556 120.002 56.8142 121.561C74.3431 124.172 89.9216 119.649 103.314 107.941C104.432 106.964 105.055 106.762 106.114 107.983C107.467 109.558 109.023 110.965 110.553 112.372C111.335 113.096 111.553 113.584 110.62 114.427C100.733 123.355 89.2406 128.905 76.0666 130.927C72.6785 131.449 69.2736 131.76 65.8267 131.701L65.8435 131.71Z"
            fill="#00acc1"
          />
        </g>
      </svg>
    </div>
  );
}
