"use client"

import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaLeaf } from "react-icons/fa"
import { useState, useEffect } from "react"

const EnhancedSocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide sidebar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 pr-2 transition-all duration-500 ${
        isVisible ? "translate-x-0" : "translate-x-[calc(100%-15px)]"
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center group"
        aria-label="Contact us on WhatsApp"
      >
        <span className="opacity-0 group-hover:opacity-100 bg-green-600 text-white text-sm font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          WhatsApp Us
        </span>
        <div className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-l-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 relative">
          <FaWhatsapp className="text-2xl" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </div>
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/ayuvengerbiotech" // Replace with your actual Instagram handle
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center group"
        aria-label="Follow us on Instagram"
      >
        <span className="opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-600 to-pink-500 text-white text-sm font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          Follow Us
        </span>
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white p-3 rounded-l-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12">
          <FaInstagram className="text-2xl" />
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210" // Replace with your actual phone number
        className="flex items-center group"
        aria-label="Call us"
      >
        <span className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          Call Now
        </span>
        <div className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-l-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 relative">
          <FaPhoneAlt className="text-2xl" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </a>

      {/* Ayuvenger Biotech Label */}
      <div className="mt-4 flex items-center group">
        <span className="opacity-0 group-hover:opacity-100 bg-green-800 text-white text-xs font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          Ayuvenger Biotech
        </span>
        <div className="bg-green-800 text-white p-2 rounded-l-full shadow-lg flex items-center justify-center w-12 h-12 text-center">
        <img src="/apple-touch-icon.png" alt="" className="rounded-full" />
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-green-700 text-white p-1 rounded-l shadow-md hover:bg-green-600 transition-colors"
        aria-label={isVisible ? "Hide social buttons" : "Show social buttons"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isVisible ? "rotate-0" : "rotate-180"}`}
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    </div>
  )
}

export default EnhancedSocialSidebar
