"use client";


import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
 // Ensure this path is correct for your store
import { addToCart, addtocartData, ProductInCart, addtoWishlistData, productInWishlist } from "@/Redux/CreateSlice";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { RootState } from "@/Redux/Store";
import Image from 'next/image';
import { useState,useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";

const notify = () => toast.success('Item added Successfully');
const wishnotify = () => toast.success('Added to Wishlist');

// Define Product interface to ensure the type of products is consistent
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
  subtotal: number;
}

const Product: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const added = useSelector((state: RootState) => state.cart.added);
  const cartdata = useSelector((state: RootState) => state.cart.cartData);
  const wishlistdata = useSelector((state: RootState) => state.cart.wishListData);

   // Fetch products from Firebase
   useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "productsDown"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as Product[];
      
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  

  function handleClick(idx: number) {
    const data = products.find((item) => item.id === idx);
    if (data) {
      dispatch(addtocartData(data));
      dispatch(addToCart());
      dispatch(ProductInCart());
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

  const isProductInWishlist = (productId: number) => {
    return wishlistdata.some((item: Product) => item.id === productId);
  };

  const isProductInCart = (productId: number) => {
    return cartdata.some((item: Product) => item.id === productId);
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-36 w-full flex flex-col justify-center">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-0 md:ml-32 md:mr-0 mr-56 md:p-1">
          <div className="flex items-center gap-4">
            <img
              src="/Category Rectangle.png"
              alt="Category"
              className="w-auto h-auto" 
            />
            <p className="text-center md:text-left md:ml-0 ">Our Product</p>
          </div>

          <div className="flex items-center gap-3 mt-8 flex-col md:flex-row md:justify-between md:w-full w-80">
            <p className="text-2xl md:text-4xl font-semibold text-center md:text-left md:ml-0 ml-32 md:w-auto w-72">
              Explore Our Products
            </p>
            <div className="flex gap-3 mt-5 mr-44 mb-5 mx-44">
              <button className="bg-blue-50 h-12 w-12 rounded-full  justify-center items-center hover:bg-blue-100 md:flex hidden">
                <FaArrowLeft />
              </button>
              <button className="bg-blue-50 h-12 w-12 rounded-full  justify-center items-center hover:bg-blue-100 md:flex hidden">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 md:mx-auto mt-12 w-full md:w-9/12 items-center justify-center md:ml-32 ml-1 md:p-1  ">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col items-center justify-center w-full h-full max-w-xs mx-auto md:mx-0"
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
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain mt-4"
              />
              <div className="border border-black w-full text-white bg-black mt-1 text-center flex justify-center text-base font-medium h-10">
                <button disabled={isProductInCart(product.id)} onClick={() => handleClick(product.id)}>
                  {isProductInCart(product.id) ? "Already in Cart" : "Add to Cart"}
                </button>
              </div>
              <div className="mt-4 text-center">
                <p>{product.name}</p>
                <p>${product.price}</p>
                <div className="flex justify-center items-center">
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
          <div className="h-12 md:w-36 rounded-sm flex justify-center bg-red-500 md:p-0  w-44 text-white">
            <button>View All Products</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;


























// const products: Product[] = [
  //   {
  //     id: 1,
  //     name: "ASUS FHD Gaming Laptop",
  //     price: 700,
  //     rating: 5,
  //     image: "/Product-images/laptop.png",
  //     quantity: 1,
  //     subtotal: 700,
  //   },
  //   {
  //     id: 2,
  //     name: "Quilted Satin Jacket",
  //     price: 660,
  //     rating: 5,
  //     image: "/Product-images/jacket.png",
  //     quantity: 1,
  //     subtotal: 660,
  //   },
  //   {
  //     id: 3,
  //     name: "GP11 USB Gamepad",
  //     price: 660,
  //     rating: 5,
  //     image: "/Product-images/gamepad.png",
  //     quantity: 1,
  //     subtotal: 660,
  //   },
  //   {
  //     id: 4,
  //     name: "Breed Dry Dog Food",
  //     price: 100,
  //     rating: 5,
  //     image: "/Product-images/dog food.jpeg",
  //     quantity: 1,
  //     subtotal: 100,
  //   },
  //   {
  //     id: 5,
  //     name: "Curology Product Set",
  //     price: 500,
  //     rating: 4,
  //     image: "/Product-images/curology.png",
  //     quantity: 1,
  //     subtotal: 500,
  //   },
  //   {
  //     id: 6,
  //     name: "Kids Electric Car",
  //     price: 120,
  //     rating: 5,
  //     image: "/Product-images/car.png",
  //     quantity: 1,
  //     subtotal: 120,
  //   },
  //   {
  //     id: 7,
  //     name: "Canon DSLR Camera",
  //     price: 360,
  //     rating: 5,
  //     image: "/Product-images/camera.png",
  //     quantity: 1,
  //     subtotal: 360,
  //   },
  //   {
  //     id: 8,
  //     name: "Jr. Zoom Soccer Cleats",
  //     price: 120,
  //     rating: 5,
  //     image: "/Product-images/boots.png",
  //     quantity: 1,
  //     subtotal: 120,
  //   },
  // ];