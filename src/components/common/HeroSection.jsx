import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
              Trusted by Healthcare Professionals
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Premium Health Care Products
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Discover our range of high-quality medical products designed to improve your health and enhance your quality of life.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link 
                to="/allProduct"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-base font-medium transition duration-300"
              >
                Shop Now
              </Link>
              <Link 
                to="/about"
                className="px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-base font-medium transition duration-300"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-200"></div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-teal-600">4.9</span>
                <span className="text-gray-600"> (2,500+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative max-w-[500px] w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/bannerMainHero.png"
                alt="Sangam Health Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
