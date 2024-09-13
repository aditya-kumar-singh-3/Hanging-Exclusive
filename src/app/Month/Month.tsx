"use client";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addtocartData, ProductInCart, addtoWishlistData, productInWishlist } from "@/Redux/CreateSlice";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';


// Notifications
const notify = () => toast.success('Item added Successfully');
const wishnotify = () => toast.success('Added to Wishlist');

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
  subtotal: number;
}

const Month = () => {
  const dispatch = useDispatch();

  const cartdata = useSelector((state: any) => state.cart.cartData);
  const wishlistdata = useSelector((state: any) => state.cart.wishListData);

  const monthProducts: Product[] = [
    {
      id: 9,
      name: "The north coat",
      price: 260,
      rating: 5,
      image: "/Month-images/jacket.png",
      quantity: 1,
      subtotal: 260,
    },
    {
      id: 10,
      name: "Gucci duffle bag",
      price: 960,
      rating: 5,
      image: "/Month-images/gucci.png",
      quantity: 1,
      subtotal: 960,
    },
    {
      id: 11,
      name: "RGB liquid CPU Cooler",
      price: 160,
      rating: 5,
      image: "/Month-images/cpu.png",
      quantity: 1,
      subtotal: 160,
    },
    {
      id: 12,
      name: "Small BookSelf",
      price: 360,
      rating: 5,
      image: "/Month-images/bookself.png",
      quantity: 1,
      subtotal: 360,
    },
  ];

  function handleClick(idx: number) {
    const data = monthProducts.find((item) => item.id === idx);
    if (data) {
      dispatch(addtocartData(data));
      dispatch(addToCart());
      dispatch(ProductInCart());
      notify();
    }
  }

  function wishClick(idx: number) {
    const data = monthProducts.find((item) => item.id === idx);
    if (data) {
      dispatch(addtoWishlistData(data));
      dispatch(productInWishlist());
      wishnotify();
    }
  }

  const isProductInCart = (productId: number) => {
    return cartdata.some((item: Product) => item.id === productId);
  };

  const isProductInWishlist = (productId: number) => {
    return wishlistdata.some((item: Product) => item.id === productId);
  };

  return (
    <>
      <div>
        <Toaster />
        <div className="flex items-center gap-4 md:justify-items md:start md:ml-36 md:p-1 ml-6">
          <img src="Category Rectangle.png" alt="Category" />
          <p>This Month</p>
        </div>
        <div className="flex items-center justify-between md:ml-36 md:p-1  md:mr-40 md:mt-8 ml-6 mr-8 mt-10 ">
          <p className="md:text-4xl text-2xl font-semibold">Best Selling Products</p>
          <div className="md:flex md:gap-3 ">
            <button className="h-12 w-20 bg-red-500 text-white md:flex md:justify-center md:items-center md:hover:bg-red-600 hidden">
              View All
            </button>
          </div>
        </div>

        <div className="md:flex md:ml-32 md:gap-10 md:mt-16 ml-12  mt-10 ">
          {monthProducts.map((product, index) => (
            <div
              key={index}
              className="   relative border border-gray-200 rounded-lg bg-white overflow-hidden flex-shrink-0 md:w-64 md:h-80 my-4 md:ml-5 md:mr-0 mr-10"
            >
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="bg-white p-1 rounded-full" onClick={() => wishClick(product.id)}>
                  {isProductInWishlist(product.id) ? (
                    <FaHeart className="cursor-pointer text-red-500" size={20} />
                  ) : (
                    <CiHeart className="text-gray-500 cursor-pointer hover:text-black" size={20} />
                  )}
                </div>
                <div className="bg-white p-1 rounded-full">
                  <MdOutlineRemoveRedEye
                    className="text-gray-500 cursor-pointer hover:text-black"
                    size={20}
                  />
                </div>
              </div>

              <img
                src={`${product.image}`}
                alt={product.name} 
                className="w-full h-40 object-contain mt-8"
              />
              <div className="border border-black w-full text-white bg-black mt-1  text-center flex justify-center text-base font-medium h-10 ">
                <button disabled={isProductInCart(product.id)} onClick={() => handleClick(product.id)}>
                  {isProductInCart(product.id) ? "Already in Cart" : "Add to Cart"}
                </button>
              </div>
              <div className=" p-2">
                <p>{product.name}</p>
                <p>${product.price}</p>
                <div className="flex items-center">
                  {[...Array(product.rating)].map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-500" />
                  ))}
                  <span className="ml-2 text-gray-500">(88)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Month;
