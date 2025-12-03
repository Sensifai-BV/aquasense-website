import React from 'react'
import AquaSenseLogo from '../logo'

const Header = () => {
    return (
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
    )
}

export default Header