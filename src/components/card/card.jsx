import React, { useEffect, useState } from "react";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produc") 
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-500 text-sm mb-1">{product.brand}</p>
          <p className="text-sm text-orange-600 font-bold">${product.price}</p>
          {product.oldPrice && (
            <p className="text-xs line-through text-gray-400">
              ${product.oldPrice}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Card;
