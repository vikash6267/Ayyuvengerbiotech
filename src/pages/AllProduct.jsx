import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { displayMoney } from "../helper/utills";
import { Link, useParams } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';

// Optional: export if you're using this elsewhere
export const sizes = ["S", "M", "L", "XL", "XXL"];
export const genders = ["Male", "Female", "Unisex"];

function AllProduct() {
  const { query } = useParams();
  const { allProduct } = useSelector((state) => state.product);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen mt-20 px-4 md:px-6 lg:px-10">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">All Products</h2>

      {allProduct.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh] text-xl font-semibold text-gray-600">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProduct.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 bg-gray-100">
                <img
                  src={product.images[0]?.url}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <img
                  src={product.images[1]?.url}
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {product.title}
                </h4>
                <p className="text-green-600 font-bold text-sm mt-1">
                  {displayMoney(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProduct;
