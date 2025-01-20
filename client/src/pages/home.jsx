import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import FeatureCard from "../components/featureCard";

import heroImgOnline from "../assets/images/heroImgOnline.svg";
import heroImgFashion from "../assets/images/heroImgFashion.svg";

import ProductCard from "../components/productCard";
import PopularProducts from "../components/popularProducts";
import { getData } from "../hooks/useFetch";
import Loading from "../components/loading/loading";
import ErrorPage from "../components/error/error";

const HomePage = () => {
  const homePageQuery = `
 {
  products {
    documentId
    name
    detail
    category
    beforePrice
    images {
      url
    }
  }
  features {
    icon {
      url
    }
    documentId
    subtitle
    title
  }
}`;
  const { loading, data, error } = getData(homePageQuery);
  if (loading) return <Loading/>;
  if (error) return <ErrorPage/>;

  const { products,features } = data;
  
  return (
    <>
     
      <Hero
        title="Fresh Arrivals Online"
        subtitle="Discover Our Newest Collection Today."
        btnText="View Collection"
        btnHref=""
        img={heroImgOnline}
      />

      <section>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8 gap-8">
          {features.map((item, index) => {
            return <FeatureCard item={item} key={index} />;
          })}
        </div>
      </section>

      <PopularProducts
        title="Shop Now"
        subtitle="Best Selling"
        textAlign="center"
        products={products}
      />
      <Hero
        title="Browse Our Fashion Paradise!"
        subtitle="Step into a world of style and explore our diverse collection of clothing categories."
        btnText="Start Browsing"
        btnHref=""
        img={heroImgFashion}
      />

      <section className="my-24">
        <div className="flex items-center gap-6 justify-center">
          <button className="rounded-2xl leading-6 px-4 py-[2px] border-neutral-100 text-neutral-900 text-[12px] font-medium border">
            Featured
          </button>
          <button className="rounded-2xl leading-6 px-4 py-[2px] text-neutral-500 text-[12px] font-medium">
            Latest
          </button>
        </div>
        <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 py-8 gap-4 md:gap-8">
          {products.map((item, index) => {
            return <ProductCard item={item} key={index} />;
          })}
        </div>
      </section>

    </>
  );
};

export default HomePage;
