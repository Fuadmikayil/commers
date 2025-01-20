import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/icons/logo/logo.svg";
import menu from "../assets/icons/global/Menu.svg";
import search from "../assets/icons/global/Search.svg";
import cart from "../assets/icons/global/Cart.svg";
import user from "../assets/icons/global/User.svg";
import { changeLanguage } from "i18next";

const Header = ({ data }) => {
  const { i18n, t } = useTranslation();
  console.log(t("text"));
  return (
    <header>
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-8 xl:gap-12">
          <Link to="/" className="flex items-center gap-[12px]">
              <img className="w-10 h-10" src={`http://localhost:1337${data.logoImg.url}`} alt="Logo" />
            <h1 className="text-neutral-900 font-extrabold text-[20px]">
              {data.logoText}
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {data.links.map((link, index) => {
              return (
                <Link key={index} to={link.href} className="text-sm text-neutral-500 font-medium">
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:block relative border rounded-md border-neutral-100 overflow-hidden py-2">
            <img
              className="w-6 h-6 cursor-pointer absolute top-[50%] translate-y-[-50%] left-2 fill-neutral-300"
              src={`http://localhost:1337${data.inputIcon.url}`}
              alt="Search"
            />
            <input
              className="border-transparent outline-none pl-9 font-medium text-neutral-300 text-sm"
              placeholder={data.inputPlaceholder}
              type="text"
            />
          </div>

          <img className="w-6 h-6 cursor-pointer"  src={`http://localhost:1337${data.userIcon.url}`} alt="User" />
          <img className="w-6 h-6 cursor-pointer"  src={`http://localhost:1337${data.basketIcon.url}`} alt="Cart" />
          <img
            className="w-6 h-6 cursor-pointer lg:hidden"
            src={`http://localhost:1337${data.menuIcon.url}`}
            alt="Menu"
          />
          <img className="w-5 h-5 cursor-pointer"  src={`http://localhost:1337${data.lightModeIcon.url}`} alt="lightModeIcon" />
          <img className="w-5 h-5 cursor-pointer"  src={`http://localhost:1337${data.darkModeIcon.url}`} alt="darkModeIcon" />
          <select
            onChange={(e) => {
              changeLanguage(e.target.value);
              localStorage.setItem("lang", e.target.value);
            }}
          >
            <option value={i18n.language}>{i18n.language}</option>
            <option value={i18n.language == "az" ? "en" : "az"}>
              {i18n.language == "az" ? "en" : "az"}
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
