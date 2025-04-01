import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-green-200 py-12 px-6 md:px-12 h-[80vh]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Premium Health Care Products
          </h1>
          <p className="text-gray-600 mt-4">
            Discover a wide range of health care products that ensure your well-being.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
           
            <Link to={"/allProduct"}>
            Shop Now
            </Link>
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/banner.png" 
            alt="Sangam Health Care"
            className="w-full md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
