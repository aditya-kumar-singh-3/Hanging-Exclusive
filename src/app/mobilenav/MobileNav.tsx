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
import store, { RootState } from "@/Redux/Store";
import { MdManageAccounts } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import toast, { Toaster } from "react-hot-toast";
import { getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { fetchUserCartAndWishlist, saveUserCartAndWishlist } from "@/Redux/CreateSlice";

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
  },[]);

  
  

  useEffect(()=>{
    const token = getCookie("token");
    if(token){
      console.log("JAi shree ram")
      dispatch(saveUserCartAndWishlist(token,cartData,wishListData) as any);
    }
  },[])

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
     nclick();
    deleteCookie("token");
     router.push('/');
     logout();
      localStorage.clear();
     setTimeout(()=>{
       window.location.reload();

    },500)
    
    
   
  }

  const wishListData = useSelector(
    (state: RootState) => state.cart.wishListData
  );
  const cartData = useSelector((state: RootState) => state.cart.cartData);

  const displayName = useSelector((state: RootState) => state.auth.user?.displayName);
  localStorage.setItem("username",displayName);

  const username = JSON.stringify(localStorage.getItem('username'));

 

  async function nclick() {
    console.log("i am c");
    const token = getCookie("token");
    if (token) {
      try {
        console.log(cartData);
        console.log(wishListData);

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
      if (displayName) {
        localStorage.setItem("username", displayName);
      }
      if (token) {
        dispatch(saveUserCartAndWishlist(token, cartData, wishListData) as any);
      }
    } catch (error) {
      console.error("Error interacting with localStorage:", error);
    }
  }, [displayName, cartData, wishListData]);
  

  return (
    <nav className="flex justify-between items-center h-14 py-4 px-6 border-2 lg:px-16 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Toaster />

      {/* Logo Section */}
      <div className="lg:hidden flex items-center h-[4rem] py-8 absolute left-5">
        <p className="text-2xl font-bold md:hidden tracking-3 leading-24 w-[20rem]">Exclusive</p>
        <button
          onClick={toggleNavbar}
          className="focus:outline-none absolute -right-12 p-4 cursor-pointer"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main navigation for desktop */}
      <div className="lg:flex hidden justify-between items-center gap-4 w-full">
        <div className="flex items-center justify-around space-x-5 whitespace-nowrap text-sm font-normal w-full">
          <p className="text-2xl font-bold leading-24 tracking-3">Exclusive</p>
          <div className="flex gap-12">
            <Link
              href="/"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24"
            >
              Home
            </Link>
            <Link
              href="/Contact"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24"
            >
              Contact
            </Link>
            <Link
              href="/About"
              className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24"
            >
              About
            </Link>

            {!loggedIn ? (
              <Link
                href="/signup"
                className="text-base font-normal hover:underline hover:underline-offset-[5px] cursor-pointer leading-24"
              >
                Sign Up
              </Link>
            ) :   <Link href='/signup' className=" md:opacity-0 md:text-base md:font-normal md:hover:underline md:hover:underline-offset-[5px]  md:pointer-events-none ">Sign Up</Link>}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center w-[250px] h-[38px] bg-[#f5f5f5] rounded-[4px] px-[12px] gap-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-grow  bg-[#f5f5f5] rounded-md text-xs border-none focus:outline-none focus:ring-0 font-normal leading-4 font-poppins"
              />
              <IoSearch className="text-gray-500 cursor-pointer" />
            </div>

            <div className="relative gap-4">
              <Link href="/Wishlist" className="text-2xl">
                <FiHeart />
              </Link>
              {totalwish > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
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

            <div className="relative">
              <button onClick={toggleDropdown} className="text-2xl">
                <VscAccount />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48  bg-palette-mutedPurple text-white
                 shadow-lg rounded-lg"
                >
                  <Link
                    href="/Account"
                    className=" flex gap-2  h-10 justify-start px-2 items-center text-gray-800 hover:bg-gray-500"
                  >
                    <span className="text-2xl text-white">
                      {" "}
                      <MdManageAccounts />
                    </span>{" "}
                    <span className="text-sm font-normal text-white">
                      Manage My Account
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500"
                  >
                    <span className="text-2xl text-white">
                      <LuShoppingBag />
                    </span>
                    <span className="text-sm font-normal text-white">
                      My Order
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500"
                  >
                    <span className="text-2xl text-white">
                      <MdCancel />
                    </span>
                    <span className="text-sm font-normal text-white">
                      My Cancellations
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500"
                  >
                    <span className="text-2xl text-white">
                      <IoMdStarOutline />
                    </span>
                    <span className="text-sm font-normal text-white">
                      My Reviews
                    </span>
                  </Link>
                  <Link
                    href="/"
                    onClick={loggout}
                    className=" flex gap-2  h-10 justify-start items-center px-2 text-gray-800 hover:bg-gray-500"
                  >
                    <span className="text-2xl text-white">
                      <SlLogout />
                    </span>
                    <span className="text-sm font-normal text-white">
                      Logout
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="md:flex md:flex-row md:w-24 md:absolute md:right-10 hidden">Hi! {displayName? username.replace(/(^"+|"+$)/g, '').split(" ")[0] : ""}</p>

      {/* Mobile navigation menu */}
      <div
        className={`lg:hidden fixed top-16 right-0 bg-black shadow-md z-10 py-6 px-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out w-64`}
      >
        <div className="flex flex-col items-center mt-6 space-y-3">
          <p className="text-3xl font-semibold text-white">Exclusive</p>

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
            {!loggedIn ? (
              <Link href="/signup" className="text-lg font-semibold text-white">
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
