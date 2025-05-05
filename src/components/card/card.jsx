import React, { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs"


const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produc") 
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (

<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-[90%] m-auto">
  {products.map(product => (
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition relative"
    >
      <FaHeart className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer" />

      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />

      <div className="flex gap-2 mb-2">
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
          Original
        </span>
        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">
          Katta savdo
        </span>
      </div>

      <h2 className="text-base font-bold text-black leading-tight mb-1">
        {product.title}
      </h2>

      <div className="flex items-center text-sm text-gray-600 mb-1">
        <FaStar className="text-yellow-500 mr-1" />
        <span>5.0</span>
        <span className="ml-1 text-gray-500">(1001 sharhlar)</span>
      </div>

      <p className="text-sm text-yellow-600 font-bold mb-1">
        7 674 so'm/oyiga
      </p>

      {product.oldPrice && (
        <p className="text-xs line-through text-gray-400">
          {product.oldPrice} so'm
        </p>
      )}
      <p className="text-lg font-semibold text-black">
        {product.price} so'm
      </p>

      <div className="absolute bottom-3 right-3">
        <BsCartPlus className="text-gray-600 text-xl cursor-pointer hover:text-black" />
      </div>
    </div>
  ))}
</section>

  );
};

export default Card;
