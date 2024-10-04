"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { persistor, RootState } from "@/Redux/Store";
import { MdManageAccounts } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import toast, { Toaster } from "react-hot-toast";
import { getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { MdOutlinePersonOutline } from "react-icons/md";

import {
  fetchUserCartAndWishlist,
  saveUserCartAndWishlist,
} from "@/Redux/CreateSlice";
import { auth } from "../config";

const logout = () => toast.success("Logged Out Successfully");

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      dispatch(saveUserCartAndWishlist(token, cartData, wishListData) as any);
    }
  }, []);

  const number = useSelector(
    (state: RootState) => state.cart.totalProductInCart
  );
  const totalwish = useSelector(
    (state: RootState) => state.cart.totalProductInWishlist
  );

  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  async function loggout() {
    console.log("i am c");
    const token = getCookie("token");

    //  nclick();
    deleteCookie("token");
    router.push("/");
    logout();
    nclick();
    persistor.purge();

    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  const wishListData = useSelector(
    (state: RootState) => state.cart.wishListData
  );
  const cartData = useSelector((state: RootState) => state.cart.cartData);

  const displayName = useSelector(
    (state: RootState) => state.auth.user?.displayName
  );

  async function nclick() {
    console.log("i am c");
    const token = getCookie("token");
    if (token) {
      try {
        await dispatch(
          saveUserCartAndWishlist(token, cartData, wishListData) as any
        );
      } catch (error) {
        console.error("Error saving cart and wishlist:", error);
      }
    }
  }

  useEffect(() => {
    try {
      const token = getCookie("token");

      if (token) {
        dispatch(saveUserCartAndWishlist(token, cartData, wishListData) as any);
      }
    } catch (error) {
      console.error("Error interacting with !!:", error);
    }
  }, [displayName, cartData, wishListData]);

  return (
    <nav className="flex justify-between items-center h-14 min-w-full py-4 px-6 border-2  bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Toaster />

      {/* Logo Section */}
      <div className="lg:hidden flex items-center justify-between    min-w-full">
        <p className="text-2xl font-bold md:hidden tracking-3 leading-24 w-auto border select-none ">
          Exclusive
        </p>
        <button
          onClick={toggleNavbar}
          className="focus:outline-none   p-4 cursor-pointer "
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main navigation for desktop */}
      <div className="lg:flex hidden justify-between border w-full">
        <div className="flex items-center justify-between  whitespace-nowrap text-sm font-normal min-w-full ">
          <p className="text-2xl font-bold leading-24 tracking-3  select-none  ">
            Exclusive
          </p>
          <div className="flex gap-12">
            <Link
              href="/"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24 active:scale-90  transition-all select-none"
            >
              Home
            </Link>
            <Link
              href="/Contact"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24 active:scale-90  transition-all select-none"
            >
              Contact
            </Link>
            <Link
              href="/About"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24 active:scale-90  transition-all select-none"
            >
              About
            </Link>

            {!loggedIn ? (
              <Link
                href="/signup"
                className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24 active:scale-90  transition-all select-none"
              >
                Sign Up
              </Link>
            ) : (
              <Link
                href="/signup"
                className=" md:opacity-0 md:text-base md:font-normal md:hover:underline md:hover:underline-offset-[5px]  md:pointer-events-none  "
              >
                Sign Up
              </Link>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center w-[250px] h-[38px] bg-[#f5f5f5] rounded-[4px] px-[12px] gap-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-grow  bg-[#f5f5f5] rounded-md text-xs border-none focus:outline-none focus:ring-0 font-normal leading-4 font-poppins select-none"
              />
              <IoSearch className="text-gray-500 cursor-pointer" />
            </div>

            <div className="relative gap-4 active:scale-125 transition-all">
              <Link href="/Wishlist" className="text-2xl">
                <FiHeart />
              </Link>
              {totalwish > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {totalwish}
                </span>
              )}
            </div>

            <div className="relative active:scale-125 transition-all">
              <Link href="/Cart" className="text-3xl">
                <IoCartOutline />
              </Link>
              {number > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {number}
                </span>
              )}
            </div>

            <div className="relative ">
              <div
                onClick={toggleDropdown}
                className="text-xl font-bold active:scale-110 transition-all border-2 h-8 border-black rounded-full w-8  flex justify-center cursor-pointer select-none"
              >
              {displayName ? displayName.charAt(0) :  <span className="text-2xl translate-y-0.5"><MdOutlinePersonOutline /></span>}

              </div>
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48  bg-palette-mutedPurple text-white
                 shadow-lg "
                >
                  <Link
                    href="/Account"
                    className=" flex gap-2  h-10 justify-start px-2 items-center text-gray-800 hover:bg-gray-500 active:scale-95 transition-all"
                  >
                    <span className="text-2xl text-white">
                      {" "}
                      <MdManageAccounts />
                    </span>{" "}
                    <span className="text-sm font-normal text-white select-none ">
                      Manage My Account
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500 active:scale-95 transition-all"
                  >
                    <span className="text-2xl text-white">
                      <LuShoppingBag />
                    </span>
                    <span className="text-sm font-normal text-white select-none">
                      My Order
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500 active:scale-95 transition-all"
                  >
                    <span className="text-2xl text-white">
                      <MdCancel />
                    </span>
                    <span className="text-sm font-normal text-white select-none">
                      My Cancellations
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500 active:scale-95 transition-all"
                  >
                    <span className="text-2xl text-white">
                      <IoMdStarOutline />
                    </span>
                    <span className="text-sm font-normal text-white select-none">
                      My Reviews
                    </span>
                  </Link>
                  <Link
                    href="/"
                    onClick={loggout}
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500 active:scale-95 transition-all"
                  >
                    <span className="text-2xl text-white">
                      <SlLogout />
                    </span>
                    <span className="text-sm font-normal text-white select-none">
                      Logout
                    </span>
                  </Link>
                </div>
              )}
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
        <div className="flex flex-col items-center mt-6 space-y-3">
          <p className="text-3xl font-semibold text-white select-none ">
            Exclusive
          </p>

          <>
            <Link href="/" className="text-lg font-semibold text-white">
              Home
            </Link>
            <Link
              href="/Contact"
              className="text-lg font-semibold text-white select-none"
            >
              Contact
            </Link>
            <Link
              href="/About"
              className="text-lg font-semibold text-white select-none"
            >
              About
            </Link>
            <Link
              href="/Wishlist"
              className="text-lg font-semibold text-white select-none"
            >
              WishList
            </Link>
            <Link
              href="/Cart"
              className="text-lg font-semibold text-white select-none"
            >
              Cart
            </Link>
            {!loggedIn ? (
              <Link
                href="/signup"
                className="text-lg font-semibold text-white select-none"
              >
                Sign Up
              </Link>
            ) : null}
            <Link
              href="/"
              onClick={loggout}
              className="text-lg font-semibold text-white"
            >
              Logout
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
