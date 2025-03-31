import React, { useEffect } from "react";
import { displayMoney } from "../../../helper/utills";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function TestSlide({ products }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="w-11/12 mx-auto mt-8 overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 justify-evenly px-4 md:px-8">
        {displayedProducts.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product._id}
            className="min-w-[220px]  max-w-[220px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex-shrink-0"
            data-aos="fade-up"
          >
            {/* Image Container */}
            <div className="relative w-full h-[290px] bg-gray-100">
              <img
                src={product?.images[0]?.url}
                alt={product?.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <img
                src={product?.images[1]?.url}
                alt={product?.title}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="p-3 flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h4>
              <p className="text-green-600 font-bold text-sm">
                {displayMoney(product?.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TestSlide;
