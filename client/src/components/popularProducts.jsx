import React from 'react'
import ProductCard from './productCard';

const PopularProducts = ({title,subtitle, textAlign, products}) => {
  return (
    <section className="my-24">
      <div className="container">
        <p
          className={`text-${textAlign} text-neutral-300 text-[12px] font-medium mb-2`}
        >
          {title}
        </p>
        <h2 className={`text-${textAlign} text-neutral-900 text-2xl font-bold`}>
          {subtitle}
        </h2>
      </div>
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 py-8 gap-4 md:gap-8">
        {products.slice(0, 4).map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default PopularProducts