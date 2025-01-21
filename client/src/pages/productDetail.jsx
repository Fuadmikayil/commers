import React, { useEffect, useState } from "react";
import shareIcon from "../assets/icons/global/Share.svg";
import starIcon from "../assets/icons/global/Star.svg";
import addIcon from "../assets/icons/global/Add.svg";
import minusIcon from "../assets/icons/global/Minus.svg";
import heartIcon from "../assets/icons/global/Heart.svg";
import emptyStarIcon from "../assets/icons/global/EmptyStar.svg";
import moreIcon from "../assets/icons/global/More.svg";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getData } from "../hooks/useFetch";
import Loading from "../components/loading/loading";
import ErrorPage from "../components/error/error";
import ShareButton from "../components/shareButton";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const ProductDetail = () => {
  const { documentId } = useParams();
  const initialFavorites = JSON.parse(
    localStorage.getItem("favorites").includes(documentId)
  );
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);
  const [imgCounter, setImgCounter] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")
  );

  const toggleIsFavorite = (item) => {
    const favoritesString = localStorage.getItem("favorites");
    const favoritesArr = favoritesString ? JSON.parse(favoritesString) : [];

    if (favoritesArr.includes(item)) {
      const filteredArr = favoritesArr.filter((favorite) => favorite !== item);
      localStorage.setItem("favorites", JSON.stringify(filteredArr));
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
      favoritesArr.push(item);
      localStorage.setItem("favorites", JSON.stringify(favoritesArr));
    }
  };

  const productDetailPageQuery = `query($id: ID!) {
  product(documentId: $id) {
    documentId
    name
    price
    beforePrice
    detail
    category
    info
    sellCount
    genderFor
    images {
      url
    }
    reviews {
      review
      stars
      author
      createdAt
    }
  }
}`;

  const { loading, data, error } = getData(productDetailPageQuery, {
    id: documentId,
  });
  if (loading) return <Loading />;
  if (!data.product) return <ErrorPage />;
  const { product } = data;
  let sumOfStars = product.reviews.reduce((acc, review) => {
    return acc + review.stars;
  }, 0);
  let reviewStartAverage = (sumOfStars / product.reviews.length).toFixed(2);

  return (
    <>
      <section className=" flex-col lg:flex-row container flex gap-28 mb-44">
        <div className="relative flex-1 flex items-center justify-center bg-neutralWhite-100 h-[600px]">
          <img
            className="max-w-[90%] max-h-[90%]"
            src={`http://localhost:1337${product.images[imgCounter].url}`}
            alt=""
          />
          <div className="flex items-center gap-2 absolute bottom-8 left-[50%] translate-x-[-50%]">
            {product.images.map((img, index) => {
              return (
                <button
                  onClick={() => setImgCounter(index)}
                  key={index}
                  className="cursor-pointer w-[10px] h-[10px] bg-neutral-600 rounded-full"
                ></button>
              );
            })}
          </div>
        </div>
        <div className="flex-1 pt-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-neutral-900 font-bold dark:text-neutral-100 text-2xl">
              {product?.name}
            </h2>
            <ShareButton className="cursor-pointer" />
          </div>
          <div className="flex gap-2 item-center mb-6">
            <p className="bg-neutralWhite-100 rounded-full px-4 py-[2px] flex items-center gap-2">
              <img src={starIcon} alt="" />
              {reviewStartAverage} — {product?.reviews.length} Reviews
            </p>
            <p className="flex items-center text-neutral-500 text-[12px] font-medium px-4 py-[2px] border dark:text-neutral-100 border-neutral-100 rounded-full">
              IN STOCK
            </p>
          </div>
          <h3 className="text-neutral-900 dark:text-neutral-100 font-semibold text-lg mb-8 tracking-wider">
            {product?.price}${" "}
            <del className="text-neutral-300 dark:text-neutral-100 text-sm">
              {product?.beforePrice}$
            </del>
          </h3>
          <p className="text-neutral-500 text-[12px] dark:text-neutral-100 font-medium uppercase mb-[10px]">
            Available Colors
          </p>
          <div className="flex gap-[10px] items-center mb-6">
            {product.info.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setCurrentSizeIndex(0);
                    setCurrentColorIndex(index);
                    setOrderCount(0);
                  }}
                  key={index}
                  className={`cursor-pointer relative rounded-full w-8 h-8 border ${
                    currentColorIndex == index
                      ? "border-neutral-900"
                      : "border-neutral-200"
                  } hover:border-neutral-300 transition`}
                >
                  <div
                    style={{ backgroundColor: `#${item.color}` }}
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full w-6 h-6 "
                  ></div>
                </div>
              );
            })}
          </div>
          <p className="text-neutral-500 dark:text-neutral-100 text-[12px] font-medium uppercase mb-[10px]">
            Select Size
          </p>
          <div className="flex gap-2 mb-8">
            {product.info[currentColorIndex].sizes.map((item, index) => {
              return (
                <p
                  onClick={() => {
                    setCurrentSizeIndex(index);
                    setOrderCount(0);
                  }}
                  key={index}
                  className={`hover:bg-neutralWhite-100 transition cursor-pointer w-10 h-10 flex items-center justify-center border uppercase rounded text-[12px] font-medium ${
                    currentSizeIndex === index
                      ? "border-neutral1900 text-neutral-100"
                      : "border-neutral-400 text-neutral-200"
                  }`}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
          <p className="text-neutral-500 text-[12px] dark:text-neutral-100 font-medium uppercase mb-[10px]">
            Quantity
          </p>
          <div className="mb-10 rounded border border-neutral-100 flex items-center justify-around max-w-40 h-11">
            <img
              className="p-2 cursor-pointer dark:text-neutral-100 hover:bg-neutralWhite-100 transition rounded"
              src={minusIcon}
              alt=""
              onClick={() => {
                if (orderCount > 0) {
                  setOrderCount(orderCount - 1);
                }
              }}
            />
            <p className="dark:text-neutral-100">{orderCount}</p>
            <img
              className="p-2 cursor-pointer hover:bg-neutralWhite-100  transition rounded"
              src={addIcon}
              alt=""
              onClick={() => {
                if (
                  orderCount <
                  product.info[currentColorIndex].sizes[currentSizeIndex].count
                ) {
                  setOrderCount(orderCount + 1);
                }
              }}
            />
          </div>
          <div className="flex gap-4 mb-3">
            <button className="bg-neutral-900 h-11 w-full max-w-72 dark:bg-neutral-100  rounded text-sm text-neutral-100 dark:text-neutral-600 font-medium">
              Add to card
            </button>
            <button
              onClick={() => toggleIsFavorite(product.documentId)}
              className="h-[43px] w-[43px] border border-neutral-100  rounded flex items-center justify-center "
            > 
           { initialFavorites ? <FaHeart fill="#ff0000" /> : <FaRegHeart fill="#808080" />}
             
            </button>
          </div>
          <p className="text-neutral-500 text-[12px] dark:text-neutral-100 font-medium">
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
                isActive ? "bg-neutralWhite-100" : "bg-transparent"
              } rounded-lg`
            }
          >
            <img src={moreIcon} alt="" />
            <span className="dark:text-neutral-200">Details</span>
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              `py-2 px-6 w-full flex gap-[10px] items-center ${
                isActive ? "bg-neutralWhite-100" : "bg-transparent"
              } rounded-lg`
            }
          >
            <img src={emptyStarIcon} alt="" />
            <span  className="dark:text-neutral-200">Reviews</span>
          </NavLink>
        </div>
        <Outlet
          context={{
            reviews: product.reviews,
            details: product.detail,
          }}
        />
      </section>

      {/*  <PopularProducts
        title="You might also like"
        subtitle="SIMILAR PRODUCTS"
        textAlign="left"
        products={products}
      />*/}
    </>
  );
};

export default ProductDetail;
