"use client";

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContentOne = () => {

  const router = useRouter();
  let [Imagesrc, setImagesrc] = useState([
    "/Month-images/gucci.png",
    "/Month-images/jacket.png",
    "/iphone.jpeg",
  ]);
  let [smallicon, setSmallicon] = useState([
    "/Month-images/gucci.png",
    "/Month-images/jacket.png",
    "/apple.png",
  ]);
  let [info, setInfo] = useState([
    "The Gucci Bag!",
    "Jacket Series",
    "iPhone 14 Series",
  ]);
  let [biginfo, setBiginfo] = useState([
    "The Real King!",
    "Cover Your Loved Ones.",
    "Up to 10% off Voucher",
  ]);

  let [count, setCount] = useState(0);

  function changeImage() {
    setCount((prevCount) =>
      prevCount < Imagesrc.length - 1 ? prevCount + 1 : 0
    );
  }
  function changeBack() {
    setCount((prevCount) =>
      prevCount > 0 ? prevCount - 1 : Imagesrc.length - 1
    );
  }

  const handleSelect = (event) =>{
    const selectedvalue = event.target.value;
    if(selectedvalue){
      router.push(selectedvalue);
    }
  }

  return (
    <>
      <div className="flex justify-around md:mr-40 md:flex-row flex-col gap-10 items-center mt-10 md:mt-0  md:ml-3 ml-1  -mr-1 max:w-dvw  ">
        <div className="flex flex-col justify-center md:w-[217px]  md:h-[420px] gap-4 md:ml-32 -ml-5  md:border-r  md:border-blue-100 pr-10  mt-10 mr-32 md:mr-0  ">
          <select className="border-none font-poppins md:text-base font-normal outline-none  w-44  ml-1">
            <option>Electronics</option>
            <option>Audio Devices (Headphones, Speakers)</option>
            <option>Chargers & Power Banks</option>
            <option>Home Appliances (Microwaves, Refrigerators)</option>
            <option>Cameras & Photography Equipment</option>
          </select>
          <select className="border-none font-poppins md:text-[16px] font-normal outline-none  w-44 ml-1 " onChange={handleSelect}>
        <option >Men&apos;s Fashion</option>
            <option value="/About">T-Shirts & Polos</option>
            <option>Jeans & Trousers</option>
            <option>Sunglasses & Eyewear</option>
            <option value="/Contact">Shoes (Sneakers, Formal, Boots)</option>
          </select>
          <Link href='/' className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none hover:font-bold">
            Electronics
          </Link>
          <Link href='/' className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold">
            Home & Lifestyle
          </Link>
          <Link href='/' className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold">
            Medicine
          </Link>
          <Link href='/' className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold">
            Sports and Outdoor
          </Link>
          <Link href='/' className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold">
            Baby&apos;s Toys
          </Link>
          <Link href='/' className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold">
            Groceries & Pets
          </Link>
          <Link href='/' className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold">
            Health and Beauty
          </Link>
        </div>

        <div className="md:w-[850px]  md:h-[360px] bg-black md:mt-[50px] text-white flex items-center gap-5 md:flex-row flex-col mt:10 ml-5 mr-6 md:ml-10">
          <div className="flex flex-col items-center md:h-[250px] md:w-[350px] gap-7 justify-center  ">
            <div className="flex justify-center items-center md:mr-[80px] mt-5">
              <img
                src={smallicon[count]}
                alt="xxx"
                className="md:h-[49px] md:w-[40px] object-contain w-14"
              />
              <p>{info[count]}</p>
            </div>
            <p className="md:w-[300px] md:text-[48px] font-semibold leading-[60px] md:ml-[35px]">
              {biginfo[count]}
            </p>
            <a className="md:mr-[160px] hover:underline hover:underline-offset-[5px] cursor-pointer ">
              Shop Now &rarr;
            </a>
          </div>
          <div className="md:mt-[16px]">
            <img
              src={Imagesrc[count]}
              alt="Imagesrc[count]"
              id="main-image"
              className="md:h-[330px] md:w-[496px] object-contain "
            />
          </div>
          {/* <span
            onClick={() => changeBack()}
            className="md:flex md:justify-center md:items-center md:bg-blue-50 md:text-black md:text-xl md:rounded-full md:h-12 md:w-16 md:hover:bg-blue-100 md:mt-72 hidden active:scale-90 transition-all"
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={() => changeImage()}
            className="md:flex md:justify-center md:items-center md:bg-blue-50 md:text-black md:text-xl md:rounded-full md:h-12 md:w-16 md:hover:bg-blue-100 md:mt-72 hidden md:mr-2 active:scale-90 transition-all"
          >
            <FaArrowRight />
          </span> */}
          {/* <div className="flex gap-3 md:mt-72 md:mr-5">
            <button
              className="bg-blue-50 h-12 w-12 text-black rounded-full flex justify-center items-center hover:bg-blue-100 active:scale-90  transition-all"
              onClick={() => changeBack()}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-blue-50 h-12 w-12 text-black rounded-full flex justify-center items-center hover:bg-blue-100 active:scale-90  transition-all"
              onClick={() => changeImage()}
            >
              <FaArrowRight />
            </button>
          </div> */}
        </div>
        <div className="flex flex-row gap-7 ">
          <span
            onClick={() => changeBack()}
            className="flex justify-center items-center bg-blue-50 text-black text-xl rounded-full h-12 w-12 hover:bg-blue-100 md:hidden"
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={() => changeImage()}
            className=" flex justify-center items-center bg-blue-50 text-black  text-xl h-12 w-12 rounded-full hover:bg-blue-100 md:hidden"
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
};

export default ContentOne;
