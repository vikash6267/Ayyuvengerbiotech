import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa"

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 pr-2">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center group"
      >
        <span className="opacity-0 group-hover:opacity-100 bg-green-600 text-white text-sm font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          WhatsApp
        </span>
        <div className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12">
          <FaWhatsapp className="text-2xl" />
        </div>
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/ayuvengerbiotech" // Replace with your actual Instagram handle
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center group"
      >
        <span className="opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-600 to-pink-500 text-white text-sm font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          Instagram
        </span>
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12">
          <FaInstagram className="text-2xl" />
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210" // Replace with your actual phone number
        className="flex items-center group"
      >
        <span className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          Call Us
        </span>
        <div className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12">
          <FaPhoneAlt className="text-2xl" />
        </div>
      </a>

      {/* Ayuvenger Biotech Label */}
      <div className="mt-4 flex items-center group">
        <span className="opacity-0 group-hover:opacity-100 bg-green-800 text-white text-xs font-medium py-2 px-3 rounded-l-lg transition-all duration-300 transform origin-right group-hover:mr-1 shadow-lg">
          Ayuvenger Biotech
        </span>
        <div className="bg-green-800 text-white p-2 rounded-full shadow-lg flex items-center justify-center w-12 h-12 text-center">
          <span className="text-xs font-bold">AYU</span>
        </div>
      </div>
    </div>
  )
}

export default SocialSidebar
