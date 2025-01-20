import React from "react";
import { useOutletContext } from "react-router-dom";
const ProductDetailInfo = () => {
  const {details} = useOutletContext();
  
  return (
    <div className="flex-1">
      <h2 className="font-semibold text-neutral-900 mb-6">Detail</h2>
      <p className="text-sm text-neutral-500 mb-14 leading-[175%]">
       {details}
      </p>
      <ul className="list-disc pl-4 ">
        <li className="text-sm text-neutral-500 leading-[175%]">
          Premium Quality
        </li>
        <li className="text-sm text-neutral-500 leading-[175%]">
          Versatile Wardrobe Staple
        </li>
        <li className="text-sm text-neutral-500 leading-[175%]">
          Available in Various Sizes
        </li>
        <li className="text-sm text-neutral-500 leading-[175%]">
          Tailored Fit
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailInfo;
