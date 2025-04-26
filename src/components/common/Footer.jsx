import { FaFacebookF, FaWhatsapp, FaInstagram, FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white pt-16 pb-8 mt-[100px] relative">
      {/* Decorative leaf pattern at the top */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <div className="w-full h-16 bg-green-700 rounded-b-[100%] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Left Section - Branding & Social Icons */}
          <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-green-400 text-3xl mr-3" />
              <h4 className="text-4xl font-bold text-white tracking-tight">
                AYUVENGER <span className="text-green-300">BIOTECH</span>
              </h4>
            </div>
            <h5 className="text-lg text-green-200 mb-6 font-light leading-relaxed border-l-4 border-green-500 pl-4">
              Delivery within 4-7 working days.
              <br />
              <span className="font-semibold">Your health, our priority!</span>
            </h5>

            <div className="flex gap-4 mb-8">
              <button
                aria-label="Facebook"
                className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
              >
                <FaFacebookF className="text-xl" />
              </button>
              <button
                aria-label="WhatsApp"
                className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
              >
                <FaWhatsapp className="text-xl" />
              </button>
              <button
                aria-label="Instagram"
                className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
              >
                <FaInstagram className="text-xl" />
              </button>
            </div>

            <div className="space-y-3">
            <div className="flex items-center text-green-200 hover:text-white transition-colors duration-200">
  <FaMapMarkerAlt className="mr-3 text-green-400" />
  <span className="text-sm">
    Mfg - ARVIND MEGA PARK,<br />
    PLOT NO C 21/9<br />
    VASNA- CHACHARVADI,<br />
    AHMEDABAD 382213.<br />
    Corporate office - Transport Nagar Kanpur U.P.
  </span>
</div>

              <div className="flex items-center text-green-200 hover:text-white transition-colors duration-200">
                <FaPhoneAlt className="mr-3 text-green-400" />
                <span className="text-sm">+91 9452067415</span>
              </div>
              <div className="flex items-center text-green-200 hover:text-white transition-colors duration-200">
                <FaEnvelope className="mr-3 text-green-400" />
                <span className="text-sm">contact@ayuvengerbiotech.com</span>
              </div>
            </div>
          </div>

          {/* Right Section - Useful Links */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mb-8">
                <span className="block uppercase text-green-300 text-base font-bold mb-4 border-b border-green-700 pb-2">
                  Useful Links
                </span>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://ayuvengerbiotech.com/profile"
                      className="text-green-100 hover:text-white font-medium block text-sm transition-all duration-200 hover:translate-x-1 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ayuvengerbiotech.com/order"
                      className="text-green-100 hover:text-white font-medium block text-sm transition-all duration-200 hover:translate-x-1 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      My Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ayuvengerbiotech.com/contact"
                      className="text-green-100 hover:text-white font-medium block text-sm transition-all duration-200 hover:translate-x-1 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/admin/dashboard/add-product"
                      className="text-green-100 hover:text-white font-medium block text-sm transition-all duration-200 hover:translate-x-1 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Admin Route
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2">
                <span className="block uppercase text-green-300 text-base font-bold mb-4 border-b border-green-700 pb-2">
                  About Us
                </span>
                <div className="text-green-100 text-sm leading-relaxed">
                  <p className="mb-4">
                    Ayuvenger Biotech is dedicated to bringing the ancient wisdom of Ayurveda to modern healthcare
                    solutions. Our products are crafted with care using traditional methods and premium ingredients.
                  </p>
                  <a
                    href="/about"
                    className="inline-block bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with decorative elements */}
        <div className="relative my-8">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 px-4">
            <FaLeaf className="text-green-500 text-xl" />
          </div>
          <hr className="border-green-700" />
        </div>

        {/* Footer Bottom Section with enhanced copyright */}
        <div className="flex flex-wrap justify-center items-center text-center">
          <div className="w-full px-4">
            <div className="py-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <div className="bg-green-800 px-6 py-2 rounded-full shadow-inner border border-green-700">
                <span className="text-green-200 font-medium">
                  © <span>{new Date().getFullYear()}</span> Ayuvenger Biotech. All Rights Reserved.
                </span>
              </div>

              <div className="flex items-center bg-green-800 px-6 py-2 rounded-full shadow-inner border border-green-700 mt-3 md:mt-0">
                <span className="text-green-300 mr-2">Developed by</span>
                <a
                  href="https://inextets.in"
                  className="text-white font-bold hover:text-green-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I-NEXT-ETS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
          <path
            fill="rgba(22, 101, 52, 0.2)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  )
}

export default Footer
