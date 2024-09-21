"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addtocartData, ProductInCart, addtoWishlistData, productInWishlist, saveUserCartAndWishlist } from "@/Redux/CreateSlice";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { RootState } from "@/Redux/Store";
import Image from 'next/image';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
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

const Today = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  
  let[products,setProducts] = useState<Product[]>([]);
  const cartdata = useSelector((state: RootState) => state.cart.cartData);
  const wishlistdata = useSelector((state: RootState) => state.cart.wishListData);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -350 : 220,
        behavior: "smooth",
      });
    }
  };


  const wishListData = useSelector(
    (state: RootState) => state.cart.wishListData
  );
  const cartData = useSelector((state: RootState) => state.cart.cartData);

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
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "TodayProducts"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as Product[];
      
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  useEffect(()=>{
    nclick();
  },[cartData,wishListData])

  
  function handleClick(idx: number) {
    const data = products.find((item) => item.id === idx);
    if (data) {
      dispatch(addtocartData(data));
      dispatch(addToCart());
      dispatch(ProductInCart());
    
      nclick();
     
      notify();
    }
  }

  function wishClick(idx: number) {
    const data = products.find((item) => item.id === idx);
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
      <div className="mt-36">
        <Toaster />
        <div className="flex items-center gap-4 justify-items-start ml-6 md:ml-36 select-none ">
          <img src="/Category Rectangle.png" alt="Category" className="w-auto h-auto"  />
          <p>Today&apos;s</p>
        </div>

        <div className="flex items-center justify-between ml-6 md:ml-36  mr-4 md:mr-40 mt-8 select-none">
          <p className="text-2xl md:text-4xl font-semibold">Flash Sales</p>

          <div className="flex gap-3">
            <button
              className="bg-blue-50 h-12 w-12 rounded-full flex justify-center items-center hover:bg-blue-100 active:scale-90  transition-all"
              onClick={() => scroll("left")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-blue-50 h-12 w-12 rounded-full flex justify-center items-center hover:bg-blue-100 active:scale-90  transition-all"
              onClick={() => scroll("right")}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          className="flex overflow-x-auto ml-6 md:ml-36 md:p-1 mt-16  mr-4 md:mr-24 gap-4 md:gap-8 scrollbar-hide"
          ref={scrollContainerRef}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border border-gray-200 rounded-lg bg-white overflow-hidden flex-shrink-0 w-64 h-80"
            >
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div onClick={() => wishClick(product.id)} className="bg-white p-1 rounded-full">
                  {isProductInWishlist(product.id) ? (
                    <FaHeart className="cursor-pointer text-red-500" size={20} />
                  ) : (
                    <CiHeart className="text-gray-500 cursor-pointer hover:text-black" size={20} />
                  )}
                </div>
                <div className="bg-white p-1 rounded-full">
                  <MdOutlineRemoveRedEye className="text-gray-500 cursor-pointer hover:text-black" size={20} />
                </div>
              </div>

              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mt-8"  />
              <div onClick={() => handleClick(product.id)} className="border border-black w-full text-white bg-black mt-1  text-center flex justify-center text-base font-medium h-10 active:scale-90 transition-all select-none ">
                <button disabled={isProductInCart(product.id)} >
                  {isProductInCart(product.id) ? "Already in Cart" : "Add to Cart"}
                </button>
              </div>
              <div className="p-2">
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

        <div className="flex justify-center items-center mt-20 h-12">
          <div className="h-12 md:w-36 rounded-sm flex justify-center md:p-0 p-3 w-40  bg-red-500 text-white active:scale-90  transition-all select-none">
            <button>View All Products</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;


























// const products: Product[] = [
  //   {
  //     id: 13,
  //     name: "ASUS FHD Gaming Laptop",
  //     price: 700,
  //     rating: 5,
  //     image: "/Product-images/laptop.png",
  //     quantity: 1,
  //     subtotal: 700,
  //   },
  //   {
  //     id: 14,
  //     name: "Quilted Satin Jacket",
  //     price: 660,
  //     rating: 5,
  //     image: "/Product-images/jacket.png",
  //     quantity: 1,
  //     subtotal: 660,
  //   },
  //   {
  //     id: 15,
  //     name: "GP11 USB Gamepad",
  //     price: 660,
  //     rating: 5,
  //     image: "/Product-images/gamepad.png",
  //     quantity: 1,
  //     subtotal: 660,
  //   },
  //   {
  //     id: 16,
  //     name: "Breed Dry Dog Food",
  //     price: 100,
  //     rating: 5,
  //     image: "/Product-images/dog food.jpeg",
  //     quantity: 1,
  //     subtotal: 100,
  //   },
  //   {
  //     id: 17,
  //     name: "Curology Product Set",
  //     price: 500,
  //     rating: 4,
  //     image: "/Product-images/curology.png",
  //     quantity: 1,
  //     subtotal: 500,
  //   },
  //   {
  //     id: 18,
  //     name: "Kids Electric Car",
  //     price: 120,
  //     rating: 5,
  //     image: "/Product-images/car.png",
  //     quantity: 1,
  //     subtotal: 120,
  //   },
  //   {
  //     id: 19,
  //     name: "Canon DSLR Camera",
  //     price: 360,
  //     rating: 5,
  //     image: "/Product-images/camera.png",
  //     quantity: 1,
  //     subtotal: 360,
  //   },
  //   {
  //     id: 20,
  //     name: "Jr. Zoom Soccer Cleats",
  //     price: 120,
  //     rating: 5,
  //     image: "/Product-images/boots.png",
  //     quantity: 1,
  //     subtotal: 120,
  //   },
  // ];
