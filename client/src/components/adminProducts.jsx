import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import product1 from "../assets/images/admin/product1.svg";
const AdminProducts = () => {
  return (
    <div className="w-full  bg-white rounded-xl flex flex-col  ">
      <div className="flex items-center justify-between p-6 gap-4">
        <p className="text-xl tracking-wide font-semibold">Products</p>
        <div className="flex gap-4  ">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-sm">
            Add Product
          </button>
          <div className=" p-2 border rounded-md border-gray-300 flex items-center gap-2">
            <label htmlFor="search">
              <CiSearch className="scale-150" />
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search products"
              className=" outline-none"
            />
          </div>
        </div>
      </div>
      <div className="">
        <tr className="flex justify-between items-center p-4 border-y-2 border-gray-200 text-gray-400 tracking-wide ">
          <th className="font-medium">
            <BiSortAlt2 className="scale-150" />
          </th>
          <th className="font-medium">Name</th>
          <th className="font-medium">SKU</th>
          <th className="font-medium">Price </th>
          <th className="font-medium">Stock</th>
          <th className="font-medium">Categories</th>
          <th className="font-medium">Action</th>
        </tr>
        <div className="flex flex-col gap-4 px-1 mt-4">
          <tr className="flex justify-between p-4 items-center">
            <div className="flex justify-center items-center bg-neutral-100 py-1  px-2 rounded-lg">
              <img src={product1} alt="" />
            </div>
            <td>Mens Black T-Shirts</td>
            <td>47514501</td>
            <td>$35.00</td>
            <td>In Stock</td>
            <td>T-shirt, Men</td>
            <td className="text-gray-500 text-start">...</td>
          </tr>
          <tr className="flex justify-between p-4 items-center">
            <div className="flex justify-center items-center bg-neutral-100 py-1  px-2 rounded-lg">
              <img src={product1} alt="" />
            </div>
            <td>Mens Black T-Shirts</td>
            <td>47514501</td>
            <td>$35.00</td>
            <td>In Stock</td>
            <td>T-shirt, Men</td>
            <td className="text-gray-500 text-start">...</td>
          </tr>
          <tr className="flex justify-between p-4 items-center">
            <div className="flex justify-center items-center bg-neutral-100 py-1  px-2 rounded-lg">
              <img src={product1} alt="" />
            </div>
            <td>Mens Black T-Shirts</td>
            <td>47514501</td>
            <td>$35.00</td>
            <td>In Stock</td>
            <td>T-shirt, Men</td>
            <td className="text-gray-500 text-start">...</td>
          </tr>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
