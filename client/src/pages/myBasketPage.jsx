import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MyBasketPage = () => {
  const value = useSelector((state) => state.basket.value);

  return (
    <div className="container">
      <div className="border">
        <h1>Value: {JSON.stringify(value)}</h1>
      </div>
    </div>
  );
};

export default MyBasketPage;
