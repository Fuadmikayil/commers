import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import PopularProducts from '../components/popularProducts';
import { products } from '../data/products';
import demoImg from '../assets/images/products/img.png';
import shareIcon from '../assets/icons/global/Share.svg';
import starIcon from '../assets/icons/global/Star.svg';
import addIcon from '../assets/icons/global/Add.svg';
import minusIcon from '../assets/icons/global/Minus.svg';
import heartIcon from '../assets/icons/global/Heart.svg';
import emptyStarIcon from '../assets/icons/global/EmptyStar.svg';
import moreIcon from '../assets/icons/global/More.svg';
import { NavLink, Outlet } from 'react-router-dom';

const ProductDetail = () => {
  return (
    <>
      <Header />

      <section className="container flex gap-28 mb-44">
        <div className="relative flex-1 flex items-center justify-center bg-neutralWhite-100 h-[600px]">
          <img className="max-w-[90%] max-h-[90%]" src={demoImg} alt="" />
          <div className="flex items-center gap-2 absolute bottom-8 left-[50%] translate-x-[-50%]">
            <button className="cursor-pointer w-[10px] h-[10px] bg-neutral-900 rounded-full"></button>
            <button className="cursor-pointer w-[10px] h-[10px] bg-neutral-200 rounded-full"></button>
            <button className="cursor-pointer w-[10px] h-[10px] bg-neutral-200 rounded-full"></button>
            <button className="cursor-pointer w-[10px] h-[10px] bg-neutral-200 rounded-full"></button>
          </div>
        </div>
        <div className="flex-1 pt-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-neutral-900 font-bold text-2xl">
              Raw Black T-Shirt Lineup
            </h2>
            <img src={shareIcon} alt="" />
          </div>
          <div className="flex gap-2 item-center mb-6">
            <p className="bg-neutralWhite-100 rounded-full px-4 py-[2px] flex items-center gap-2">
              <img src={starIcon} alt="" />
              4.2 — 54 Reviews
            </p>
            <p className="flex items-center text-neutral-500 text-[12px] font-medium px-4 py-[2px] border border-neutral-100 rounded-full">
              IN STOCK
            </p>
          </div>
          <h3 className="text-neutral-900 font-semibold text-lg mb-8">
            $75.00
          </h3>
          <p className="text-neutral-500 text-[12px] font-medium uppercase mb-[10px]">
            Available Colors
          </p>
          <div className="flex gap-[10px] items-center mb-6">
            <div className="cursor-pointer relative rounded-full w-8 h-8 border border-neutral-900 hover:border-neutral-300 transition">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full w-6 h-6 bg-[#A3BEF8]"></div>
            </div>
            <div className="cursor-pointer relative rounded-full w-8 h-8 border border-transparent hover:border-neutral-300 transition">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full w-6 h-6 bg-[#FFD58A]"></div>
            </div>
            <div className="cursor-pointer relative rounded-full w-8 h-8 border border-transparent hover:border-neutral-300 transition">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full w-6 h-6 bg-[#83B18B]"></div>
            </div>
          </div>
          <p className="text-neutral-500 text-[12px] font-medium uppercase mb-[10px]">
            Select Size
          </p>
          <div className="flex gap-2 mb-8">
            <p className="hover:bg-neutralWhite-100 transition cursor-pointer w-10 h-10 flex items-center justify-center border border-neutral-900 uppercase rounded text-[12px] font-medium text-neutral-900">
              XS
            </p>
            <p className="hover:bg-neutralWhite-100 transition cursor-pointer w-10 h-10 flex items-center justify-center border border-neutral-100 uppercase rounded text-[12px] font-medium text-neutral-500">
              S
            </p>
            <p className="hover:bg-neutralWhite-100 transition cursor-pointer w-10 h-10 flex items-center justify-center border border-neutral-100 uppercase rounded text-[12px] font-medium text-neutral-500">
              M
            </p>
            <p className="hover:bg-neutralWhite-100 transition cursor-pointer w-10 h-10 flex items-center justify-center border border-neutral-100 uppercase rounded text-[12px] font-medium text-neutral-500">
              L
            </p>
            <p className="hover:bg-neutralWhite-100 transition cursor-pointer w-10 h-10 flex items-center justify-center border border-neutral-100 uppercase rounded text-[12px] font-medium text-neutral-500">
              XL
            </p>
          </div>
          <p className="text-neutral-500 text-[12px] font-medium uppercase mb-[10px]">
            Quantity
          </p>
          <div className="mb-10 rounded border border-neutral-100 flex items-center justify-around max-w-40 h-11">
            <img
              className="p-2 cursor-pointer hover:bg-neutralWhite-100 transition rounded"
              src={minusIcon}
              alt=""
            />
            <p>1</p>
            <img
              className="p-2 cursor-pointer hover:bg-neutralWhite-100 transition rounded"
              src={addIcon}
              alt=""
            />
          </div>
          <div className="flex gap-4 mb-3">
            <button className="bg-neutral-900 h-11 w-full max-w-72 rounded text-sm text-neutralWhite-900 font-medium">
              Add to card
            </button>
            <button className="h-[43px] w-[43px] border border-neutral-100 rounded flex items-center justify-center ">
              <img src={heartIcon} />
            </button>
          </div>
          <p className="text-neutral-500 text-[12px] font-medium">
            — Free shipping on orders $100+
          </p>
        </div>
      </section>

      <section className="container flex flex-col md:flex-row gap-8">
        <div className="md-flex-none md:w-60 md:py-[70px] flex flex-col gap-4">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `py-2 px-6 w-full flex gap-[10px] items-center ${
                isActive ? 'bg-neutralWhite-100' : 'bg-transparent'
              } rounded-lg`
            }
          >
            <img src={moreIcon} alt="" />
            <span>Details</span>
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              `py-2 px-6 w-full flex gap-[10px] items-center ${
                isActive ? 'bg-neutralWhite-100' : 'bg-transparent'
              } rounded-lg`
            }
          >
            <img src={emptyStarIcon} alt="" />
            <span>Reviews</span>
          </NavLink>
        </div>
        <Outlet />
      </section>

      <PopularProducts
        title="You might also like"
        subtitle="SIMILAR PRODUCTS"
        textAlign="left"
        products={products}
      />
      <Footer />
    </>
  );
};

export default ProductDetail;
