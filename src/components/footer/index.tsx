import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
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
                                © 2025 Aquasense. ALL RIGHTS RESERVED
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
    )
}

export default Footer