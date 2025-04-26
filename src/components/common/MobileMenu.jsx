"use client"

import React from "react";
import { MobileLinks } from "../../constant/mobileNav";
import { Link, useLocation, matchPath } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleIsCartOpen } from "../../redux/slices/cartSlice";

function MobileMenu() {
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden md:hidden sm:hidden ">
      {/* Gradient overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent opacity-90 blur-sm -z-10"></div>
      
      <div className="w-full px-4 py-2 pb-safe">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <ul className="flex justify-between items-center px-2 py-3">
            {MobileLinks.map((link) => {
              const isActive = matchRoute(link?.path);
              
              return (
                <li key={link.id} className="relative">
                  <Link
                    to={link.path}
                    onClick={() => {
                      if (link.path === "/cart") {
                        dispatch(handleIsCartOpen());
                      }
                    }}
                    className="block"
                  >
                    <div className={`
                      flex flex-col items-center justify-center gap-1 px-3 py-1 
                      transition-all duration-200 ease-in-out
                      ${isActive ? "scale-110" : "opacity-80 hover:opacity-100"}
                    `}>
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                      )}
                      
                      {/* Icon with active state */}
                      <div className={`
                        transition-transform duration-200 ease-bounce
                        ${isActive ? "text-yellow-500 transform scale-110" : "text-gray-600"}
                      `}>
                        {link.icon}
                      </div>
                      
                      {/* Title with active state */}
                      <p className={`
                        text-xs font-medium transition-all duration-200
                        ${isActive 
                          ? "text-yellow-500 font-bold" 
                          : "text-gray-600"}
                      `}>
                        {link.title}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
