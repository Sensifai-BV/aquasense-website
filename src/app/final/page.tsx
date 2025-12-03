import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function FinalPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50/20">
            {/* Google Fonts Link */}
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
                rel="stylesheet"
            />

            {/* Header */}
            <Header />

            {/* Hero Banner Section */}
            <section className="relative py-56 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/revolutionizing.webp"
                        alt="Revolutionizing water quality monitoring"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-blue-900/60 to-gray-900/70" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            Revolutionizing Water Quality Monitoring
                        </h1>
                        <p
                            className="text-2xl sm:text-3xl text-cyan-100 mb-6"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            AquaSense Project Wraps Up with Groundbreaking Success
                        </p>
                        <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                            <span className="text-lg font-medium">December 03, 2025</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introduction */}
                <section className="mb-16">
                    <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">
                        <p
                            className="text-lg text-gray-700 leading-relaxed"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            In an era where clean water is increasingly under threat from pollution and climate change, 
                            innovative solutions are more critical than ever. Today, I'm thrilled to announce the 
                            successful completion of the AquaSense project, an EU-funded initiative under NebulOuS 
                            Open Call #2. Developed by Sensifai bvba, AquaSense harnesses cutting-edge IoT technology 
                            to deliver real-time water quality monitoring, empowering authorities and industries to 
                            detect and respond to contaminants swiftly. Funded by the European Union, this project 
                            not only advances environmental tech but also showcases the power of hyper-distributed 
                            computing in solving real-world challenges.
                        </p>
                    </div>
                </section>

                {/* Project Overview */}
                <section className="mb-16">
                    <h2
                        className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Project Overview: <span className="text-cyan-600">From Concept to Deployment</span>
                    </h2>
                    <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">
                        <div
                            className="text-lg text-gray-700 leading-relaxed space-y-6"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            <p>
                                AquaSense was born from the need to address water insecurity—a crisis affecting over 
                                2 billion people worldwide, according to the World Health Organization. Our platform 
                                deploys compact sensors in rivers, reservoirs, and urban water systems to measure 
                                key parameters like pH, turbidity, temperature, conductivity, dissolved oxygen, 
                                oxidation-reduction potential, chemical oxygen demand, and salinity. Data is ingested 
                                via MQTT at 1-second intervals, preprocessed for efficiency, and analyzed using AI 
                                for anomaly detection with 95% accuracy—all within under 2 seconds.
                            </p>
                            <p>
                                What sets AquaSense apart is its integration with the NebulOuS Meta-Operating System, 
                                which orchestrates a seamless edge-cloud pipeline. Starting with 3 Raspberry Pi 4 
                                edge devices (each with 8 sensors) in the mid-term phase—handling manageable loads 
                                without scaling—we expanded to 8 devices, each equipped with 14 sensors, generating 
                                112 readings per second. NebulOuS automatically scaled our broker server to 4 replicas 
                                and AI server to 8 replicas, ensuring robust performance during dynamic loads like 
                                rainfall surges or localized contaminations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Achievements */}
                <section className="mb-16">
                    <h2
                        className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Key Achievements: <span className="text-cyan-600">Innovation in Action</span>
                    </h2>
                    <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Scalable Deployment
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Roboto, sans-serif" }}>
                                        From mid-term's low-load setup (no replication needed) to full-scale with 112 r/s, 
                                        NebulOuS enabled automatic up/down-scaling of cloud/fog resources, maintaining 99% 
                                        uptime and zero data loss via 1-hour edge buffering.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Real-Time Adaptability
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Roboto, sans-serif" }}>
                                        In scenarios like heavy rain (activating extra sensors for turbidity monitoring) or 
                                        contamination detection (integrating nearby sensors to map affected areas), the 
                                        system dynamically adjusts without manual intervention—crucial for real-world efficiency.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Cost and Performance Gains
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Roboto, sans-serif" }}>
                                        Achieved 30% operational cost reductions through geographic-aware preprocessing 
                                        (prioritizing urban loads at 70%) and SLO-driven orchestration, reducing latency 
                                        by 60% compared to static baselines.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Pilot Validations
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Roboto, sans-serif" }}>
                                        Collaborations with Belgian authorities (e.g., De Watergroep) confirmed timely 
                                        alerts, potentially averting $1 million fines per undetected event.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                            <p className="text-gray-700 leading-relaxed italic" style={{ fontFamily: "Roboto, sans-serif" }}>
                                Our mid-term foundation—proving single-instance viability—paved the way for this robust 
                                expansion, highlighting NebulOuS's role in turning variable IoT workloads into reliable insights.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Broader Impacts - Dark Blue Section */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl" />
                            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-xl" />
                        </div>
                        <div className="relative">
                            <h5
                                className="text-2xl sm:text-3xl font-semibold text-white mb-6"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                                Broader Impacts: <span className="text-cyan-300">Beyond the Project</span>
                            </h5>
                            <div
                                className="text-lg text-gray-300 leading-relaxed space-y-6"
                                style={{ fontFamily: "Roboto, sans-serif" }}
                            >
                                <p>
                                    AquaSense isn't just tech—it's a step toward sustainable water management. 
                                    Technically, it validates NebulOuS for hybrid infrastructures, offering a 
                                    blueprint for sectors like smart agriculture. Economically, the cost savings 
                                    and compliance tools benefit industries facing EU regulations. Environmentally 
                                    and societally, it empowers proactive pollution control, aligning with the 
                                    EU Green Deal and protecting ecosystems and communities.
                                </p>
                                <p>
                                    Industrially, the platform's predictive maintenance features reduce downtime 
                                    in manufacturing and utilities, while fostering collaborations with sensor 
                                    makers like those behind RK500-09.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Banner Images */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="/dark-blue-banner-1.webp"
                                alt="AquaSense deployment banner"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="/dark-blue-banner-2.webp"
                                alt="Water monitoring technology"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    </div>
                </section>

                {/* Looking Ahead */}
                <section className="mb-16">
                    <h4
                        className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Looking <span className="text-cyan-600">Ahead</span>
                    </h4>
                    <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">
                        <div
                            className="text-lg text-gray-700 leading-relaxed space-y-6"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            <p>
                                As we wrap up, AquaSense is primed for commercialization through Sensifai bvba. 
                                Future expansions could include heavy metal detection or integrations with broader 
                                EU initiatives. A massive thank you to the NebulOuS Consortium, our mentors, and 
                                EU funders for making this possible.
                            </p>
                            <p>
                                If you're in IoT, environmental tech, or edge computing, let's connect! Share your 
                                thoughts below or reach out for collaborations.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium">
                                #AquaSense
                            </span>
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium">
                                #NebulOuS
                            </span>
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium">
                                #IoTInnovation
                            </span>
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium">
                                #WaterSustainability
                            </span>
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium">
                                #EUProjects
                            </span>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}