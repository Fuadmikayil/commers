import { useState } from "react";

const Filter = ({ selectedFilters, setSelectedFilters }) => {
  const [price, setPrice] = useState(890);

  const colors = ["#AECBFA", "#FACC81", "#87A985", "#4A7BF7"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const categories = [
    "Perfume",
    "Trousers",
    "Shoe",
    "Handbag",
    "Hat",
    "Thermos",
  ];

  const handleCategoryChange = (category) => {
    setSelectedFilters((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };

  const handleSizeChange = (size) => {
    setSelectedFilters((prev) => ({ ...prev, size }));
  };

  return (
    <div className="p-4 border rounded-lg w-64">
      <h3 className="font-semibold mb-2">Categories</h3>
      {categories.map((category) => (
        <div key={category} className="flex items-center mb-1">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedFilters.categories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          <label>{category}</label>
        </div>
      ))}

      <h3 className="font-semibold mt-4 mb-2">Color</h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-6 h-6 rounded-full border-2 ${
              selectedFilters.color === color
                ? "border-black"
                : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedFilters((prev) => ({ ...prev, color }))}
          />
        ))}
      </div>

      <h3 className="font-semibold mt-4 mb-2">Size</h3>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={`px-3 py-1 rounded border ${
              selectedFilters.size === size
                ? "bg-black text-white"
                : "border-gray-300"
            }`}
            onClick={() => handleSizeChange(size)}
            disabled={size === "XXL"}
          >
            {size}
          </button>
        ))}
      </div>

      <h3 className="font-semibold mt-4 mb-2">Price</h3>
      <input
        type="range"
        min="100"
        max="1000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full"
      />
      <div className="text-center font-semibold mt-2">${price}.00</div>
    </div>
  );
};
export default Filter;
