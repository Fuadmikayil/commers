import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="p-3 bg-neutralWhite-100 dark:bg-neutral-800 rounded-full transition-colors duration-300">
        <img
          className="w-6 h-6"
          src={`http://localhost:1337${item.icon.url}`}
          alt={item.title || "Feature Icon"}
        />
      </div>
      <h2 className="mt-6 mb-3 text-neutral-800 dark:text-neutral-100 font-semibold">
        {item.title}
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm text-center md:text-start max-w-[85%]">
        {item.subtitle}
      </p>
    </div>
  );
};

export default FeatureCard;
