"use client"

import { useState } from "react"
import { NavLink, useLocation, matchPath } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { useSelector } from "react-redux"
import { sidebarLinks } from "../../../constant/sidebarlink"

function Sidebar() {
  const { user } = useSelector((state) => state.profile)
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const toggle = () => setIsOpen(!isOpen)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  // Enhanced animation variants
  const sidebarAnimation = {
    open: {
      width: "280px",
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 320,
      },
    },
    closed: {
      width: "80px",
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 320,
      },
    },
  }

  const textAnimation = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  const iconAnimation = {
    open: { rotate: 0 },
    closed: { rotate: 180 },
  }

  return (
    <motion.div
      initial="open"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarAnimation}
      className="relative flex flex-col min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-purple-900 shadow-[0_0_25px_rgba(76,29,149,0.3)] overflow-hidden rounded-r-xl border-r border-purple-500/20"
    >
      {/* Toggle button with improved styling */}
      <motion.button
        onClick={toggle}
        className="absolute top-6 -right-3 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div variants={iconAnimation} className="text-white">
          <ChevronLeft size={16} />
        </motion.div>
      </motion.button>

      {/* User profile section with glass effect */}
      <div className="flex items-center gap-4 p-6 border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="relative min-w-11 h-11">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-0.5"
          >
            <img
              src="/apple-touch-icon.png"
              alt={user?.firstName || "User"}
              className="w-full h-full rounded-full object-cover border-2 border-transparent"
            />
          </motion.div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-indigo-950 shadow-lg"></div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={textAnimation}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col overflow-hidden"
            >
              <h3 className="font-semibold text-white truncate">{user?.firstName || "Welcome Back!"}</h3>
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation links with improved styling */}
      <div className="flex-1 py-6 overflow-y-auto scrollbar-hide px-3">
        <div className="space-y-1.5">
          {sidebarLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.id}
              className={({ isActive }) => `
                flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-white font-medium border-r-4 border-purple-400 shadow-md"
                    : "text-purple-200 hover:bg-white/8 hover:text-white"
                }
                ${!isOpen && "justify-center"}
              `}
            >
              <motion.div
                className={`min-w-6 ${!isOpen && "text-xl"}`}
                whileHover={{ scale: isOpen ? 1.1 : 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.div>
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    variants={textAnimation}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="truncate"
                  >
                    {link.name}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Active indicator dot */}
              {matchRoute(link.path) && !isOpen && (
                <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Footer section with glass effect */}
      <div className="p-4 border-t border-white/10 mt-auto backdrop-blur-sm bg-white/5">
        <div className={`flex ${isOpen ? "justify-between" : "justify-center"} items-center`}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={textAnimation}
                initial="closed"
                animate="open"
                exit="closed"
                className="text-xs text-purple-200"
              >
                &copy; {new Date().getFullYear()} Dashboard
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="w-2 h-2 rounded-full bg-purple-400"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
