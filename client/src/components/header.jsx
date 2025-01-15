import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo/logo.svg';
import menu from '../assets/icons/global/Menu.svg';
import search from '../assets/icons/global/Search.svg';
import cart from '../assets/icons/global/Cart.svg';
import user from '../assets/icons/global/User.svg';

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-8 xl:gap-12">
          <Link to={'/'} className="flex items-center gap-[12px]">
            <img className="w-10 y-10" src={logo} alt="" />
            <h1 className="text-neutral-900 font-extrabold text-[20px]">
              E-Commerce
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-sm text-neutral-500 font-medium">Home</Link>
            <Link className="text-sm text-neutral-500 font-medium">
              Categories
            </Link>
            <Link className="text-sm text-neutral-500 font-medium">About</Link>
            <Link className="text-sm text-neutral-500 font-medium">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:block relative border rounded-md border-neutral-100 overflow-hidden py-2">
            <img
              className="w-6 y-6 cursor-pointer absolute top-[50%] translate-y-[-50%] left-2 fill-neutral-300"
              src={search}
              alt=""
            />
            <input
              className="border-transparent outline-none pl-9 font-medium text-neutral-300 text-sm"
              placeholder="Search products"
              type="text"
            />
          </div>

          <img className="w-6 y-6 cursor-pointer" src={user} alt="" />
          <img className="w-6 y-6 cursor-pointer" src={cart} alt="" />
          <img className="w-6 y-6 cursor-pointer lg:hidden" src={menu} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header