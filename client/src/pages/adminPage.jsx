import React from "react";
import { Link, Outlet } from "react-router-dom";

import Cart from "../assets/icons/admin/cart.svg";
import Dashboard from "../assets/icons/admin/Dashboard.svg";
import EmptyStar from "../assets/icons/admin/EmptyStar.svg";
import Product from "../assets/icons/admin/Product.svg";
import Settings from "../assets/icons/admin/Settings.svg";
import Users from "../assets/icons/admin/Users.svg";
const AdminPage = () => {
  return (
    <section className="flex gap-10 container mx-auto">
      <section className="flex flex-col items-start justify-start pt-6 h-screen pl-6">
        <Link to="/admin" className="flex items-center gap-[12px] mb-12">
          <h1 className="text-neutral-900 dark:text-neutral-100 font-extrabold text-[20px]">
            Logo
          </h1>
        </Link>
        <section className="flex flex-col gap-4">
          <Link
            to={"dashboard"}
            className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2"
          >
            <img src={Dashboard} />
            <span>Dashboard</span>
          </Link>
          <Link
            to={"products"}
            className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2"
          >
            <img src={Product} />
            <span> Products </span>
          </Link>
          <Link className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <img src={Users} className="scale-125" />
            <span>Orders</span>
          </Link>
          <Link className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <img src={Cart} alt="" />
            <span>Customers</span>
          </Link>
          <Link className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <img src={EmptyStar} alt="" />
            <span>Reviews</span>
          </Link>
          <Link className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <img src={Settings} alt="" srcset="" />
            <span>Settings</span>
          </Link>
        </section>
      </section>
      <Outlet />
      
    </section>
  );
};

export default AdminPage;
