"use client";
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addtocartData,
  ProductInCart,
  addtoWishlistData,
  productInWishlist,
  saveUserCartAndWishlist,
} from "@/Redux/CreateSlice";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import { RootState } from "@/Redux/Store";
import { getCookie } from "cookies-next";

const notify = () => toast.success("Item added Successfully");
const wishnotify = () => toast.success("Added to Wishlist");

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

  let [monthProducts, setMonthProducts] = useState<Product[]>([]);
  const cartdata = useSelector((state: any) => state.cart.cartData);
  const wishlistdata = useSelector((state: any) => state.cart.wishListData);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "Monthproducts"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as Product[];

      setMonthProducts(productsList);
    };

    fetchProducts();
  }, []);

  const wishListData = useSelector(
    (state: RootState) => state.cart.wishListData
  );
  const cartData = useSelector((state: RootState) => state.cart.cartData);

  async function nclick() {
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
    nclick();
  }, [cartData, wishListData]);

  function handleClick(idx: number) {
    const data = monthProducts.find((item) => item.id === idx);
    if (data) {
      dispatch(addtocartData(data));
      dispatch(addToCart());
      dispatch(ProductInCart());
      nclick();
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
    // Ensure cartdata is an array before calling .some()
    if (Array.isArray(cartdata)) {
      return cartdata.some((item: Product) => item.id === productId);
    } else {
      console.error("cartdata is not an array", cartdata); // Log for debugging
      return false; // Return false if cartdata is not an array
    }
  };

  const isProductInWishlist = (productId: number) => {
    if (Array.isArray(wishlistdata)) {
      return wishlistdata.some((item: Product) => item.id === productId);
    } else {
      console.error("wishlistData is not an array", wishlistdata); 
      return false; 
    }
  };

  return (
    <>
      <div>
        <Toaster />
        <div className="flex min-w-full items-center gap-4 md:justify-items md:start   ml-6 select-none">
          <img src="Category Rectangle.png" alt="Category" />
          <p>This Month</p>
        </div>
        <div className=" min-w-full flex items-center justify-between    md:mt-8 ml-6 mr-8 mt-10 select-none">
          <p className="md:text-4xl text-2xl font-semibold">
            Best Selling Products
          </p>
          <div className="md:flex  ">
            <button className="h-12 -translate-x-12  w-20 md:w-32 bg-check-red text-white md:flex md:justify-center md:items-center md:hover:bg-red-600 hidden active:scale-90  transition-all select-none">
              View All
            </button>
          </div>
        </div>

        <div className="md:flex min-w-full md:gap-10 md:mt-16 ml-6 md:ml-6  mt-10 ">
          {monthProducts.map((product, index) => (
            <div
              key={index}
              className="relative border border-gray-200 rounded-lg bg-white overflow-hidden flex-shrink-0 md:w-64 md:h-80 my-4  md:mr-0 mr-10"
            >
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div
                  className="bg-white p-1 rounded-full"
                  onClick={() => wishClick(product.id)}
                >
                  {isProductInWishlist(product.id) ? (
                    <FaHeart
                      className="cursor-pointer text-red-500"
                      size={20}
                    />
                  ) : (
                    <CiHeart
                      className="text-gray-500 cursor-pointer hover:text-black"
                      size={20}
                    />
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
              <div
                onClick={() => handleClick(product.id)}
                className="border border-black w-full text-white bg-black mt-1  text-center flex justify-center text-base font-medium h-10 active:scale-90 transition-all select-none "
              >
                <button disabled={isProductInCart(product.id)}>
                  {isProductInCart(product.id)
                    ? "Already in Cart"
                    : "Add to Cart"}
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

// const monthProducts: Product[] = [
//   {
//     id: 9,
//     name: "The north coat",
//     price: 260,
//     rating: 5,
//     image: "/Month-images/jacket.png",
//     quantity: 1,
//     subtotal: 260,
//   },
//   {
//     id: 10,
//     name: "Gucci duffle bag",
//     price: 960,
//     rating: 5,
//     image: "/Month-images/gucci.png",
//     quantity: 1,
//     subtotal: 960,
//   },
//   {
//     id: 11,
//     name: "RGB liquid CPU Cooler",
//     price: 160,
//     rating: 5,
//     image: "/Month-images/cpu.png",
//     quantity: 1,
//     subtotal: 160,
//   },
//   {
//     id: 12,
//     name: "Small BookSelf",
//     price: 360,
//     rating: 5,
//     image: "/Month-images/bookself.png",
//     quantity: 1,
//     subtotal: 360,
//   },
// ];
