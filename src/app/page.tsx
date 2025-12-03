'use client';

import Image from "next/image";
import { Cpu, Cloud, Zap, Linkedin, Mail, Phone, MapPin, Github, Twitter, ArrowUp } from "lucide-react";
import AquaSenseLogo from "@/components/logo";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <Header />

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

        {/* Project Completion Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Project <span className="text-cyan-600">Completion</span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Celebrating the successful completion of AquaSense project under NebulOuS Open Call #2
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl" />
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-xl" />
                
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    🎉 Project Successfully Completed!
                  </h3>
                  
                  <p
                    className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    We're thrilled to announce the successful completion of the AquaSense project. 
                    Read about our journey, achievements, and the groundbreaking impact we've made 
                    in water quality monitoring technology.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="/final"
                      className="inline-flex items-center px-8 py-4 bg-white text-cyan-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="mr-2">Read Our Success Story</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    
                    <div className="flex items-center text-cyan-200">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">December 03, 2025</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">✅</div>
                      <div className="text-cyan-100 text-sm">EU-Funded Project</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">🚀</div>
                      <div className="text-cyan-100 text-sm">NebulOuS Integration</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">🌍</div>
                      <div className="text-cyan-100 text-sm">Global Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <Footer />
    </div>
  );
}




