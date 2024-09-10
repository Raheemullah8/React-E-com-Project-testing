  import React from 'react';
  import { Link } from 'react-router-dom';

  function ProductCard({ item }) {
    const { thumbnail, category, title, price, id } = item;

    return (
      <Link to={`/Products/${id}`} className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          {/* Product Image */}
          <img
            alt={title}
            className="object-cover object-center w-full h-48"
            src={thumbnail}
          />
        </div>
        {/* Product Details */}
        <div className="mt-4">
          <h3 className="text-gray-600 text-xs tracking-widest mb-1 uppercase">{category}</h3>
          <h2 className="text-gray-900 text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-gray-800 text-lg font-bold">${price}</p>
        </div>
      </Link>
    );
  }

  export default ProductCard;
