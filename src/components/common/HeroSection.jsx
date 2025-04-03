import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-50 to-cyan-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              Trusted by Healthcare Professionals
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Premium Health Care Products
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Discover our range of high-quality medical products designed to improve your health and enhance your quality of life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                to="/allProduct"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-lg font-medium transition-colors shadow-md"
              >
                Shop Now
              </Link>
              <Link 
                to="/about"
                className="px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    {/* Placeholder for customer images */}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-teal-600">4.9</span>
                <span className="text-gray-600"> (2,500+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full opacity-70 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100 rounded-full opacity-70 hidden md:block"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/banner.png" 
                alt="Sangam Health Care"
                className="w-full max-w-lg mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
