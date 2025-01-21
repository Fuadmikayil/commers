import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const isFavorites = JSON.parse(
    localStorage.getItem("favorites").includes(item.documentId)
  );

  const toggleIsFavorite = (documentId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(documentId)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((id) => id !== documentId))
      );
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, documentId]));
    }
  };

  return (
    <Link
      to={`/products/${item.documentId}`}
      className="cursor-pointer relative bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-md"
    >
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent link navigation
          toggleIsFavorite(item.documentId);
        }}
        className="h-[43px] w-[43px] border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded flex items-center justify-center absolute top-4 right-4"
      >
        {isFavorites ? (
          <FaHeart style={{ fill: "red", transform: "scale(1.3)" }} />
        ) : (
          <FaRegHeart className="text-neutral-500" />
        )}
      </button>
      <div className="flex items-center justify-center bg-neutralWhite-100 dark:bg-neutral-800 p-4 rounded-lg">
        <img
          src={`http://localhost:1337${item.images[0].url}`}
          alt={item.name}
          className="w-full max-h-[200px] object-contain"
        />
      </div>
      <h3 className="mt-6 mb-3 text-neutral-900 dark:text-neutral-100 text-sm font-medium">
        {item.name}
      </h3>
      <div className="flex items-center gap-4">
        <p
          className={`text-[12px] font-medium border ${
            item.inStock
              ? "border-neutral-100 dark:border-neutral-700"
              : "border-red-200 dark:border-red-500"
          } rounded-2xl leading-6 px-4 py-[2px] ${
            item.inStock ? "text-neutral-900 dark:text-neutral-100" : "text-red-500"
          }`}
        >
          {item.inStock ? "IN STOCK" : "OUT OF STOCK"}
        </p>
        <p className="text-neutral-900 dark:text-neutral-400 text-sm"> {item.price}$</p>
      </div>
    </Link>
  );
};

export default ProductCard;
