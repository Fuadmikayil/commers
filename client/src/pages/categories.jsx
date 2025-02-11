import React from 'react'

import { useState } from "react";
import ProductList from '../components/productList';
import Filter from '../components/filter';

const ProductPage = () => {
    const [selectedFilters, setSelectedFilters] = useState({ categories: [], color: "", size: "" });
    const products = [
      { id: 1, name: "Cool Perfume", category: "Perfume", color: "#AECBFA", size: "M", price: 250, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Stylish Hat", category: "Hat", color: "#4A7BF7", size: "L", price: 75, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Leather Handbag", category: "Handbag", color: "#FACC81", size: "S", price: 400, image: "https://via.placeholder.com/150" },
    ];
  
    return (
      <div className="flex gap-8 p-8">
        <Filter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        <ProductList products={products} selectedFilters={selectedFilters} />
      </div>
    );
  };
export default ProductPage