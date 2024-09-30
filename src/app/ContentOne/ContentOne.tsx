"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: "/iphone.jpeg",
      icon: "/apple.png",
      info: "iPhone 14 Series",
      bigInfo: "Up to 10% off Voucher",
    },
    {
      image: "/Month-images/gucci.png",
      icon: "/Month-images/gucci.png",
      info: "The Gucci Bag!",
      bigInfo: "The Real King!",
    },
    {
      image: "/Month-images/jacket.png",
      icon: "/Month-images/jacket.png",
      info: "Jacket Series",
      bigInfo: "Cover Your Loved Ones.",
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const changeImage = (direction) => {
    setIsAutoPlaying(false);
    setCurrentSlide((prevSlide) => {
      if (direction === 'next') {
        return (prevSlide + 1) % slides.length;
      } else {
        return prevSlide === 0 ? slides.length - 1 : prevSlide - 1;
      }
    });
  };

  const handleSelect = (event) => {
    const selectedvalue = event.target.value;
    if (selectedvalue) {
      router.push(selectedvalue);
    }
  };

  return (
    <>
      <div className="flex justify-around md:mr-40 md:flex-row flex-col gap-10 items-center mt-10 md:mt-0  md:ml-3 ml-1  -mr-1 max:w-dvw  ">
        <div className="flex flex-col justify-center md:w-[217px]  md:h-[420px] gap-4 md:ml-24 md:p-3 -ml-12  md:border-r  md:border-blue-100 pr-10  mt-10 mr-32 md:mr-0  ">
          <select className="border-none font-poppins md:text-base font-normal outline-none  w-44  ">
            <option>Electronics</option>
            <option>Audio Devices (Headphones, Speakers)</option>
            <option>Chargers & Power Banks</option>
            <option>Home Appliances (Microwaves, Refrigerators)</option>
            <option>Cameras & Photography Equipment</option>
          </select>
          <select
            className="border-none font-poppins md:text-[16px] font-normal outline-none  w-44 "
            onChange={handleSelect}
          >
            <option>Men&apos;s Fashion</option>
            <option value="/About">T-Shirts & Polos</option>
            <option>Jeans & Trousers</option>
            <option>Sunglasses & Eyewear</option>
            <option value="/Contact">Shoes (Sneakers, Formal, Boots)</option>
          </select>
          <Link
            href="/"
            className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none hover:font-bold"
          >
            Electronics
          </Link>
          <Link
            href="/"
            className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold"
          >
            Home & Lifestyle
          </Link>
          <Link
            href="/"
            className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold"
          >
            Medicine
          </Link>
          <Link
            href="/"
            className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold"
          >
            Sports and Outdoor
          </Link>
          <Link
            href="/"
            className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold"
          >
            Baby&apos;s Toys
          </Link>
          <Link
            href="/"
            className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold"
          >
            Groceries & Pets
          </Link>
          <Link
            href="/"
            className="font-poppins md:text-base font-normal cursor-pointer ml-1 leading-24 select-none  hover:font-bold"
          >
            Health and Beauty
          </Link>
        </div>

        <div className="md:w-[850px]  md:h-[360px] bg-black md:mt-12 text-white flex items-center gap-5 md:flex-row flex-col mt:10 ml-5 mr-7 md:ml-10 relative">
          <div onClick={() => changeImage('prev')} className="flex flex-col items-center md:h-full md:w-[350px] gap-7 justify-center select-none  ">
            <div className="flex justify-center items-center md:mr-[80px] mt-5">
              <img
                src={slides[currentSlide].icon}
                alt="Product icon"
                className="md:h-[49px] md:w-[40px] object-contain w-14"
              />
              <p>{slides[currentSlide].info}</p>
            </div>
            <p className="md:w-[300px] md:text-[48px] font-semibold leading-[60px] md:ml-[35px]">
              {slides[currentSlide].bigInfo}
            </p>
            <a className="md:mr-[160px] hover:underline hover:underline-offset-[5px] cursor-pointer active:scale-90 transition-all ">
              Shop Now &rarr;
            </a>
          </div>
          <div className="md:mt-[16px]  " onClick={() => changeImage('next')}>
            <img
              src={slides[currentSlide].image}
              alt="Product image"
              className="md:h-[330px] md:w-[496px] object-contain "
            />
          </div>
          <div className="flex flex-row gap-2 absolute bottom-4 right-4">
            <button
              onClick={() => changeImage('prev')}
              className=" justify-center items-center bg-blue-50 text-black text-xl rounded-full h-12 w-12 hover:bg-blue-100 active:scale-90 transition-all md:hidden hidden"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => changeImage('next')}
              className=" justify-center items-center bg-blue-50 text-black text-xl rounded-full h-12 w-12 hover:bg-blue-100 active:scale-90 transition-all md:hidden hidden"
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-500'
                }`}
              ></span>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-7 md:hidden">
          <span
            onClick={() => changeImage('prev')}
            className="flex justify-center items-center bg-blue-50 text-black text-xl rounded-full h-12 w-12 hover:bg-blue-100"
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={() => changeImage('next')}
            className="flex justify-center items-center bg-blue-50 text-black text-xl h-12 w-12 rounded-full hover:bg-blue-100"
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
}