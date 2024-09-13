"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";  // Import RootState to type your state correctly

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Type the state using RootState
  const number = useSelector((state: RootState) => state.cart.totalProductInCart);
  const totalwish = useSelector((state: RootState) => state.cart.totalProductInWishlist);

  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center h-14 py-4 px-6  border-2 lg:px-16 bg-white shadow-md fixed top-0 left-0 right-0 z-50 ">
      {/* Logo Section */}

      <div className="lg:hidden flex items-center h-[4rem] py-8  absolute left-5    ">
        <p className="text-2xl font-bold md:hidden   w-[20rem]  ">
          Exclusive
        </p>
        <button
          onClick={toggleNavbar}
          className="focus:outline-none  absolute -right-12 p-4 cursor-pointer"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main navigation for desktop */}
      <div className="lg:flex hidden justify-between items-center gap-4 w-full">
        <div className="flex items-center justify-around space-x-5 whitespace-nowrap text-sm font-normal w-full">
          <p className="text-3xl font-semibold ">Exclusive</p>
          <div className="flex gap-12">
            <Link
              href="/"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/Contact"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer"
            >
              Contact
            </Link>
            <Link
              href="/About"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/signup"
              className=" text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center w-[250px] h-[38px] bg-[#f5f5f5] rounded-[4px] px-[12px] gap-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-grow text-center bg-[#f5f5f5] rounded-[4px] text-xs border-none focus:outline-none focus:ring-0  font-normal leading-4 font-poppins"
              />
              <IoSearch className="text-gray-500 cursor-pointer" />
            </div>
           
            <div className="relative gap-4 ">
              <Link href="/Wishlist" className="text-2xl">
                <FiHeart />
              </Link>
              {totalwish > 0 && (
                <span className="absolute -top-2 -right-2  bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {totalwish}
                </span>
              )}
            </div>

            <div className="relative">
              <Link href="/Cart" className="text-2xl">
                <IoCartOutline />
              </Link>
              {number > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {number}
                </span>
              )}
            </div>
              
            <div>
              <Link href="/Account" className="text-2xl">
                <VscAccount />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`lg:hidden fixed top-16 right-0 bg-black shadow-md z-10 py-6 px-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out w-64`}
      >
        <div className="flex flex-col items-center mt-6 space-y-3 ">
          <p className="text-3xl font-semibold text-white  ">Exclusive</p>

          <>
            <Link href="/" className="text-lg font-semibold text-white">
              Home
            </Link>
            <Link href="/Contact" className="text-lg font-semibold text-white">
              Contact
            </Link>
            <Link href="/About" className="text-lg font-semibold text-white">
              About
            </Link>
            <Link href="/Wishlist" className="text-lg font-semibold text-white">
              WishList
            </Link>
            <Link href="/Cart" className="text-lg font-semibold text-white">
              Cart
            </Link>
            <Link href="/signup" className="text-lg font-semibold text-white">
              Sign Up
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
