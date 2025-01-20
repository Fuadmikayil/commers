import React from "react";
import footerLogo from "../assets/icons/logo/footerLogo.svg";
import githubImg from "../assets/icons/social/Github.svg";
import instagramImg from "../assets/icons/social/Instagram.svg";
import youtubeImg from "../assets/icons/social/Youtube.svg";

import amexIcon from "../assets/icons/colored/Amex.svg";
import mastercardIcon from "../assets/icons/colored/MasterCard.svg";
import visaIcon from "../assets/icons/colored/Visa.svg";

const Footer = () => {
  return (
    <footer>
      <section className="bg-neutralWhite-100">
        <div className="container py-16  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h2 className="text-neutral-800 text-3xl font-semibold mb-3">
              Join Our Newsletter
            </h2>
            <p className="text-neutral-600 text-sm mb-12">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div className="flex-1 md:max-w-[400px] flex gap-4">
            <input
              className="flex-1 bg-transparent outline-none border border-neutral-100 py-2 px-4"
              placeholder="Your email address"
              type="text"
            />
            <button className="bg-neutral-900 rounded px-6 py-2 text-neutralWhite-900 text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className=" pl-4 md:pl-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 py-8 gap-8">
          <div className="flex flex-col items-start mr-8">
            <div className="flex gap-4 items-center">
              <div className="py-[9px] px-[14px] border border-neutral-100 rounded-md">
                <img src={footerLogo} alt="" />
              </div>
              <h2 className="text-neutral-900 font-extrabold text-[20px]">
                Ecommerce
              </h2>
            </div>
            <p className="mt-3 mb-8 text-neutral-500 text-sm">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="flex gap-6 items-center">
              <img src={githubImg} alt="" />
              <img src={instagramImg} alt="" />
              <img src={youtubeImg} alt="" />
            </div>
          </div>

          <div>
            <p className="text-neutral-300 text-sm font-medium mb-10">
              SUPPORT
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-neutral-500 text-sm font-medium">FAQ</li>
              <li className="text-neutral-500 text-sm font-medium">
                Terms of use
              </li>
              <li className="text-neutral-500 text-sm font-medium">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <p className="text-neutral-300 text-sm font-medium mb-10">
              SUPPORT
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-neutral-500 text-sm font-medium">FAQ</li>
              <li className="text-neutral-500 text-sm font-medium">
                Terms of use
              </li>
              <li className="text-neutral-500 text-sm font-medium">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <p className="text-neutral-300 text-sm font-medium mb-10">
              SUPPORT
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-neutral-500 text-sm font-medium">FAQ</li>
              <li className="text-neutral-500 text-sm font-medium">
                Terms of use
              </li>
              <li className="text-neutral-500 text-sm font-medium">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <p className="text-neutral-300 text-sm font-medium mb-10">
              ACCEPTED PAYMENTS
            </p>
            <div className="flex gap-8 items-center">
              <img className="cursor-pointer" src={mastercardIcon} alt="" />
              <img className="cursor-pointer" src={amexIcon} alt="" />
              <img className="cursor-pointer" src={visaIcon} alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
