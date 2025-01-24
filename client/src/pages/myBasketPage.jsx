import React from "react";
import { useSelector } from "react-redux";

const MyBasketPage = () => {
  const value = useSelector((state) => state.basket.value);

  const totalPrice = value.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {value.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-dashed pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 object-cover"
                src={`http://localhost:1337${item.imgUrl}`}
                alt={item.name}
              />
              <div>
                <h2 className="text-lg font-semibold">Name: {item.name}</h2>
                <h2 className="text-sm text-neutral-500">
                  Color:{" "}
                  <span
                    className={`inline-block w-4 h-4  rounded-full border`}
                    style={{ backgroundColor: item.color }}
                    
                  ></span>
                </h2>
                <h2 className="text-sm text-neutral-500">Size: {item.size}</h2>
                <h2 className="text-sm text-neutral-500">
                  Count: {item.count}
                </h2>
              </div>
            </div>
            <h2 className="text-lg font-bold">{item.price}$</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <h2 className="text-xl font-bold">Total Price: {totalPrice}$ </h2>
      </div>
    </div>
  );
};

export default MyBasketPage;
