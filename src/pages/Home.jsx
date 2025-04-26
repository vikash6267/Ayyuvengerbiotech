"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/core/home/ProductCard";
import Footer from "../components/common/Footer";
import OffersSection from "../components/common/HealthCare";
import HeroSection from "../components/common/HeroSection";
import HealthcareOffers from "../components/common/OfferHealthCare";
import TestSlide from "../components/core/home/Slider";
import { FaStar } from "react-icons/fa";
import EnquiryForm from "../components/EnquiryForm";



const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, TechSpark',
    rating: 5,
    feedback: 'Amazing service. Highly recommend to everyone!',
  },
  {
    name: 'Sneha Patel',
    role: 'Marketing Manager, FreshCart',
    rating: 4,
    feedback: 'Professional team. Great experience!',
  },
  {
    name: 'Amit Verma',
    role: 'Founder, BizGrowth',
    rating: 5,
    feedback: 'Top-notch quality and excellent support!',
  },
  {
    name: 'Priya Das',
    role: 'Content Lead, WordWise',
    rating: 5,
    feedback: 'Exceptional experience with smooth communication.',
  },
  {
    name: 'Karan Mehta',
    role: 'Product Manager, StackWay',
    rating: 4,
    feedback: 'Great value for money and reliable service.',
  },
  {
    name: 'Meena Joshi',
    role: 'HR, PeoplePulse',
    rating: 5,
    feedback: 'Loved the professionalism and timely updates.',
  },
  {
    name: 'Vikram Chauhan',
    role: 'CTO, DevHub',
    rating: 5,
    feedback: 'Very responsive and detail-oriented team!',
  },
  {
    name: 'Aarti Rao',
    role: 'Brand Strategist, Visionary Co.',
    rating: 4,
    feedback: 'Creative solutions and smooth delivery.',
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Client Testimonials</h2>
        <p className="text-gray-600 mb-10">What our happy clients have to say.</p>

        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-sm bg-white rounded-2xl shadow p-6 flex-shrink-0"
              >
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i < t.rating ? '' : 'opacity-30'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">“{t.feedback}”</p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS custom animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-90%);
          }
        }
      `}</style>
    </section>
  );
};

function Home() {
  const [products, setProduct] = useState([]);
  const [products2, setProduct2] = useState([]);
  const { allProduct } = useSelector((state) => state.product);

  const selectRandomProducts = (products) => {
    if (!Array.isArray(products)) {
      console.error("Products is not an array");
      return [];
    }

    // Create a shallow copy of the products array
    const productsCopy = products.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = productsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [productsCopy[i], productsCopy[j]] = [productsCopy[j], productsCopy[i]];
    }

    // Select the first four products from the shuffled array
    return productsCopy.slice(0, 4);
  };

  useEffect(() => {
    setProduct(allProduct);
    const data = selectRandomProducts(products);
    setProduct2(data);
  }, [allProduct, products]);

  if (allProduct.length === 0) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-[60px] bg-gray-50">
        {/* Hero Section */}
        <HeroSection />

        {/* Offers Section */}
        <EnquiryForm />

        {/* New Products Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                New Healthy Products
              </h2>
              <Link
                to="/allProduct"
                className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors shadow-sm"
              >
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            {products && <TestSlide products={products} />}
          </div>
        </div>

        {/* Healthcare Offers */}
        <HealthcareOffers />

        {/* Banner Section */}
        <div className="w-full">
          {/* Banner Image */}
          <img
            src="/bannerMain.png"
            alt="Special Offer"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />

          {/* Spacing between image and content */}
          <div className="mt-6">
            {" "}
            {/* You can adjust mt-6 to mt-10 or mt-12 as per your spacing preference */}
            {/* Your content goes here */}
            <h2 className="text-xl font-semibold">Explore Our Collection</h2>
            <p className="text-gray-600 mt-2">
              Check out the latest styles and trends.
            </p>
          </div>
        </div>

        {/* Trending Products Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Our Trending Products
              </h2>
              <Link
                to="/allProduct"
                className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors shadow-sm"
              >
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {products2 &&
                products2.map((product) => (
                  <ProductCard key={product._id} products={product} />
                ))}
            </div>
          </div>
        </div>
        <OffersSection />

        {/* Trust Badges Section */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-gray-600">
                    All our products are sourced from trusted manufacturers and
                    undergo rigorous quality checks.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">
                    We ensure quick processing and delivery of your health
                    essentials right to your doorstep.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                  <p className="text-gray-600">
                    Our healthcare professionals are available to answer all
                    your product-related queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialCarousel />
      <Footer />
    </>
  );
}

export default Home;
