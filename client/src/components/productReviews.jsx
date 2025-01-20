import React from 'react';
import starIcon from '../assets/icons/global/Star.svg';
import emptyStarIcon from '../assets/icons/global/EmptyStar.svg';
import { useOutletContext } from 'react-router-dom';

const ProductReviews = () => {
  const {reviews} = useOutletContext();
  
  return (
    <div className="flex-1">
      <h2 className="font-semibold text-neutral-900 mb-6">Reviews</h2>
      <h3 className="text-neutral-900 font-bold text-3xl mb-10">
        4.2{' '}
        <span className="text-neutral-400 text-sm font-normal">
          -54 Reviews
        </span>
      </h3>
      <button className="bg-neutralWhite-900 border border-neutral-900 rounded text-sm font-medium text-neutral-900 py-[9.5px] px-6">
        Write a review
      </button>

      <div className="border-b border-neutralWhite-200 flex justify-end pb-4 mb-6">
        <select
          className="text-neutral-500 text-[12px] font-medium uppercase tracking-wide"
          name=""
          id=""
        >
          <option value="">Sort By</option>
          <option value="">Date</option>
          <option value="">Stars</option>
        </select>
      </div>

      {reviews.map((item,index) => {
        return (
          <div key={index} className="pt-9 pb-7 pl-2 pr-4 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <h2 className="text-primary-900 text-sm uppercase">ED</h2>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-neutral-900 mb-[6px]">
               {reviews.author}
              </h3>
              <p className="mb-4 font-medium text-neutral-500 text-[12px]">
                {item.createdAt.split('T')[0]}
              </p>
              <p className="text-sm text-neutral-500">
              {
                item.review
              }
              </p>
            </div>
            <div className="flex gap-1">
              {
                Array.from({length: item.stars}).map((star, index) => {
                 return  <img key={index} className="w-5 h-5" src={starIcon} alt="" />
                })
              } {
                Array.from({length: 5-item.stars}).map((star, index) => {
                 return  <img key={index} className="w-5 h-5" src={emptyStarIcon} alt="" />
                })
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductReviews;
