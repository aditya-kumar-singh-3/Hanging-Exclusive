import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Image from "next/image";

import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className=" min-w-full  sm:flex md:flex-wrap sm:flex-col xl:flex-row justify-evenly bg-black text-white  md:p-8 overflow-hidden md:gap-5 sm:gap-0 lg:gap-5 xl:gap-5 ">
        <div className=" xl:flex sm:flex-col lg:flex-row lg:gap-10 2xl:gap-20 ">
        <div className="flex flex-col gap-4 mt-10 md:mt-20 md:items-start translate-x-5 md:translate-x-0  ">
          <p className=" md:text-left text-2xl font-bold md:ml-0 ">
            Exclusive
          </p>
          <p className=" md:text-left md:ml-0  ">Subscribe</p>
          <p className=" md:text-left md:ml-0 ">
            Get 10% off your first order
          </p>
          <div className="flex justify-start ">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-white text-white p-2    "
            />
            <button className="bg-white text-black p-2 md:translate-x-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 15.75L21 12m0 0L17.25 8.25M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10 md:mt-20 md:items-start md:ml-0  md:text-left translate-x-5 md:translate-x-0">
          <p className="text-2xl font-bold ">Support</p>
          <p>
            111 Bijoy Sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-4 mt-10 md:mt-20 md:items-start  md:text-left md:ml-0  translate-x-5 md:translate-x-0">
          <Link href="/Account" className="text-2xl font-bold">
            Account
          </Link>
          <p>My Account</p>
          <Link href="/login">Login/Register</Link>
          <Link href="Cart">Cart</Link>
          <Link href="Wishlist">WishList</Link>
          <p>Shop</p>
        </div>

        <div className="flex flex-col gap-4 mt-10 md:mt-20 md:items-start  md:text-left md:ml-0 translate-x-5 md:translate-x-0 whitespace-nowrap">
          <p className="text-2xl font-bold">Quick Link</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col gap-4 mt-10 md:mt-20 md:items-start translate-x-5 md:translate-x-0  md:text-left">
          <p className="text-2xl font-bold">Download App</p>
          <p>Save $3 with App New User Only</p>
          <div className="flex  items-center md:flex-row md:items-start">
            <div className="h-32 w-36 flex flex-col gap-1     ">
              <div>
                <img src="playstore.png" className=" w-36" alt="Playstore" />
              </div>
              <div>
                <img src="appstore.png" className=" w-36" alt="Appstore" />
              </div>
            </div>
          </div>
          <div className="flex space-x-4  md:justify-start  md:mb-0 mb-5">
            <a href="https://www.facebook.com">
              <FaFacebookF className="text-white h-6 w-6" />
            </a>
            <a href="https://www.x.com">
              <FaTwitter className="text-white h-6 w-6" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram className="text-white h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedinIn className="text-white h-6 w-6" />
            </a>
          </div>
        </div>
        </div>
      </div>
      <hr className="border border-footer-white opacity-40"></hr>
      <div className="flex justify-center text-white bg-black h-20 md:h-20 items-center text-sm md:text-base min-w-full ">
        &#169;Copyright Rimel 2022. All right reserved
      </div>
    </>
  );
};

export default Footer;
