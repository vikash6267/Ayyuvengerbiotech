import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { displayMoney } from "../../../helper/utills";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductCard({ products }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { _id, title, price, highPrice, images } = products;

  const newPrice = displayMoney(price);
  const oldPrice = displayMoney(highPrice);

  return (
    <div
      className="font-montserrat flex flex-col gap-2 bg-white rounded-xl shadow-md overflow-hidden"
      data-aos="zoom-in"
    >
      <Link to={`/product/${_id}`} className="w-full">
        <div className="relative w-full h-[250px] overflow-hidden bg-gray-100">
          <img
            src={images[0]?.url}
            alt={title}
            className="w-full h-full object-cover transition duration-700 ease-in-out transform hover:scale-110"
          />
          <img
            src={images[1]?.url}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition duration-700 ease-in-out"
          />
        </div>
      </Link>

      <div className="px-4 pb-4">
        <h3 className="text-gray-800 text-[14px] font-semibold line-clamp-2">
          <Link to={`/product/${_id}`}>{title}</Link>
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-green-600 font-bold text-sm">{newPrice}</span>
          <span className="text-gray-400 line-through text-xs">{oldPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
