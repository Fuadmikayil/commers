import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ subscribeData, footerData }) => {
  return (
    <footer>
      <section className="bg-neutralWhite-100 dark:bg-neutral-900">
        <div className="container py-16 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h2 className="text-neutral-800 dark:text-neutral-100 text-3xl font-semibold mb-3">
              {subscribeData.title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-12">
              {subscribeData.subtitle}
            </p>
          </div>
          <div className="flex-1 md:max-w-[400px] flex gap-4">
            <input
              className="flex-1 bg-transparent outline-none border border-neutral-100 dark:border-neutral-700 text-neutral-100 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 py-2 px-4"
              placeholder={subscribeData.inputPlaceholder}
              type="text"
            />
            <button className="bg-neutral-900 dark:bg-neutral-100 rounded px-6 py-2 text-neutralWhite-900 dark:text-neutral-950  text-sm font-medium">
              {subscribeData.buttonText}
            </button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="pl-4 md:pl-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 py-8 gap-8 ">
          <div className="flex flex-col items-start mr-8">
            <div className="flex gap-4 items-center">
              <div className="py-[9px] px-[14px] border border-neutral-100 dark:border-neutral-100 rounded-md">
                <img
                  src={`http://localhost:1337${footerData.logoImg.url}`}
                  alt="Logo"
                />
              </div>
              <h2 className="text-neutral-900 dark:text-neutral-100 font-extrabold text-[20px]">
                {footerData.logoText}
              </h2>
            </div>
            <p className="mt-3 mb-8 text-neutral-500 dark:text-neutral-200 text-sm">
              {footerData.desciription}
            </p>
            <div className="flex gap-6 items-center">
              {footerData.sosialMediaImgs.map((icon, index) => {
                return (
                  <img
                    className="cursor-pointer"
                    key={index}
                    src={`http://localhost:1337${icon.url}`}
                    alt="Social Media Icon"
                  />
                );
              })}
            </div>
          </div>

          {footerData.Links.map((link, index) => {
            return (
              <div key={index}>
                <p className="text-neutral-300 dark:text-neutral-100  text-sm font-medium mb-10">
                  {link.title}
                </p>
                <ul className="flex flex-col gap-4">
                  {link.links.map((item, index) => {
                    return (
                      <Link
                        to={item.href}
                        key={index}
                        className="text-neutral-500 dark:text-neutral-200 text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div>
            <p className="text-neutral-300 dark:text-neutral-100 text-sm font-medium mb-10">
              {footerData.paymentTitle}
            </p>
            <div className="flex gap-8 items-center">
              {footerData.paymentImgs.map((icon, index) => {
                return (
                  <img
                    className="cursor-pointer"
                    key={index}
                    src={`http://localhost:1337${icon.url}`}
                    alt="Payment Method"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
