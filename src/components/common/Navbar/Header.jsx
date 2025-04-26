"use client"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaUser, FaShoppingCart, FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../../../assests/logo.jpg"
import Cart from "../../../pages/Cart"
import { handleIsCartOpen } from "../../../redux/slices/cartSlice"
import Navbar from "./Navbar"
import { handleIsMenuOpen } from "../../../redux/slices/product"

function Header() {
  const { isMenuOpen } = useSelector((state) => state.product)
  const { cart } = useSelector((state) => state.cart)
  const totalItems = cart.length
  const dispatch = useDispatch()
  const [showTopBar, setShowTopBar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll to hide top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 30) {
        setShowTopBar(false)
      } else {
        setShowTopBar(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Top Bar */}
      <div
        className={`w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white transition-all duration-300 z-20 ${
          showTopBar ? "opacity-100 h-10" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Contact Information */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+919876543210" className="flex items-center hover:text-teal-100 transition-colors">
                <FaPhone className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">+91 9876 543 210</span>
              </a>
              <a href="mailto:info@medicare.com" className="flex items-center hover:text-teal-100 transition-colors">
                <FaEnvelope className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">info@medicare.com</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white hover:text-teal-600 rounded-full p-1 transition-colors"
              >
                <FaFacebookF className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white hover:text-teal-600 rounded-full p-1 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white hover:text-teal-600 rounded-full p-1 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-40 bg-white border-b border-gray-300 shadow-sm transition-all duration-300 ${
          showTopBar ? "top-10" : "top-0"
        }`}
      >
        <div className="w-11/12 mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(handleIsMenuOpen())}
              className="p-2 rounded-full text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
            >
              <RxHamburgerMenu className="text-xl" />
              <span className="sr-only">Open menu</span>
            </button>
            <Navbar isOpen={isMenuOpen} setIsOpen={handleIsMenuOpen} />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <img src={logo || "/placeholder.svg"} alt="MediCare Logo" className="h-12 object-contain" />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="p-2 rounded-full text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
              title="Profile"
            >
              <FaUser className="text-lg" />
              <span className="sr-only">Profile</span>
            </Link>

            <Cart />

            <button
              onClick={() => dispatch(handleIsCartOpen())}
              className="relative p-2 rounded-full text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
              title="Cart"
            >
              <FaShoppingCart className="text-lg" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-teal-600 text-white text-xs rounded-full">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
