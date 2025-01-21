import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const Header = ({ data, setDarkMode, darkMode }) => {
  const { i18n, t } = useTranslation();

  return (
    <header className="bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-8 xl:gap-12">
          <Link to="/" className="flex items-center gap-[12px]">
            <img
              className="w-10 h-10"
              src={`http://localhost:1337${data.logoImg.url}`}
              alt="Logo"
            />
            <h1 className="text-neutral-900 dark:text-neutral-100 font-extrabold text-[20px]">
              {data.logoText}
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {data.links.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm text-neutral-500 dark:text-neutral-400 font-medium transition-colors duration-300"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:block relative border rounded-md border-neutral-100 dark:border-neutral-700 overflow-hidden py-2">
            <img
              className="w-6 h-6 cursor-pointer absolute top-[50%] translate-y-[-50%] left-2 fill-neutral-300"
              src={`http://localhost:1337${data.inputIcon.url}`}
              alt="Search"
            />
            <input
              className="border-transparent outline-none pl-9 font-medium text-neutral-300 dark:text-neutral-400 text-sm bg-transparent"
              placeholder={data.inputPlaceholder}
              type="text"
            />
          </div>

          <img
            className="w-6 h-6 cursor-pointer"
            src={`http://localhost:1337${data.userIcon.url}`}
            alt="User"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src={`http://localhost:1337${data.basketIcon.url}`}
            alt="Cart"
          />
          <img
            className="w-6 h-6 cursor-pointer lg:hidden"
            src={`http://localhost:1337${data.menuIcon.url}`}
            alt="Menu"
          />
          <div
            onClick={() => {
              localStorage.setItem("isDarkMode", !darkMode);
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <img
                className="w-5 h-5 cursor-pointer"
                src={`http://localhost:1337${data.lightModeIcon.url}`}
                alt="darkModeIcon"
              />
            ) : (
              <img
                className="w-5 h-5 cursor-pointer"
                src={`http://localhost:1337${data.darkModeIcon.url}`}
                alt="lightModeIcon"
              />
            )}
          </div>
          <select
            onChange={(e) => {
              changeLanguage(e.target.value);
              localStorage.setItem("lang", e.target.value);
            }}
            className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-md px-2 py-1"
          >
            <option value={i18n.language}>{i18n.language}</option>
            <option value={i18n.language === "az" ? "en" : "az"}>
              {i18n.language === "az" ? "en" : "az"}
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
