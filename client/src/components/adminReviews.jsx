
import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import product1 from "../assets/images/admin/product1.svg";
import { Link, Outlet } from "react-router-dom";
const AdminReviews = () => {
  return (
    <div className="w-full  bg-white rounded-xl flex flex-col  ">
      <div className="flex items-center justify-between p-6 gap-4">
        <p className="text-xl tracking-wide font-semibold">Customers</p>
        <div className="flex gap-4  ">
         

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
          <th className="font-medium">Review</th>
          <th className="font-medium">Action</th>
        </tr>
        <div className="flex flex-col gap-4 px-1 mt-4">
          <tr className="flex justify-between p-4 items-center">
            <div className="flex justify-center items-center bg-neutral-100 py-2  px-3 rounded-lg">
              <span className="text-blue-500">FM</span>
            </div>
            <td>Fuad Mikayılov</td>
            <td>Completed the task and added the required documentation, can someone please ....</td>
            <td className="text-gray-500 text-start">...</td>
          </tr>
         
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminReviews;
