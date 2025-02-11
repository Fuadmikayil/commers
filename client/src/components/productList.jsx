import React from 'react'
import { useState } from "react";


const ProductList = ({ products, selectedFilters }) => {
    const filteredProducts = products.filter((product) =>
      (!selectedFilters.categories.length || selectedFilters.categories.includes(product.category)) &&
      (!selectedFilters.color || product.color === selectedFilters.color) &&
      (!selectedFilters.size || product.size === selectedFilters.size)
    );
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    );
  };

export default ProductList