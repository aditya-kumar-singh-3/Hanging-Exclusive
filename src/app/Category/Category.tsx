import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";
import Image from "next/image";

const Category = () => {
  return (
    <>
      <div className="container mx-auto px-4 ">
        <div className="flex items-center gap-4 justify-start md:ml-32  ml-2  mt-4 ">
          <img src="/Category Rectangle.png" alt="Category Rectangle" />
          <p>Categories</p>
        </div>
        <div className="flex items-center justify-between md:ml-32   md:mr-40 mr-4 mt-8 ml-2  md:w-auto w-full">
          <p className="md:text-4xl text-2xl font-semibold ">
            Browse By Category
          </p>

          {/* add flex property when in future you want to show  the buttons and remove hidden.Below */}

          <div className=" md:gap-3  md:ml-2 hidden ">
            <button className="bg-blue-50 h-12 w-12 rounded-full flex justify-center items-center hover:bg-blue-100">
              <FaArrowLeft />
            </button>
            <button className="bg-blue-50 h-12 w-12 rounded-full flex justify-center items-center hover:bg-blue-100">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly mt-16 md:ml-16 ml-4 md:mr-20 mr-4 gap-4">
          <div className="border w-96 md:w-44 h-36 flex flex-col justify-center items-center rounded-md hover:bg-red-500 hover:text-white">
            <span className="text-5xl">
              <IoPhonePortraitOutline />
            </span>
            <p>Phones</p>
          </div>
          <div className="border w-96 md:w-44 h-36 flex flex-col justify-center items-center rounded-md hover:bg-red-500 hover:text-white">
            <span className="text-5xl">
              <HiOutlineDesktopComputer />
            </span>
            <p>Computers</p>
          </div>
          <div className="border w-96 md:w-44 h-36 flex flex-col justify-center items-center rounded-md hover:bg-red-500 hover:text-white">
            <span className="text-5xl">
              <BsSmartwatch />
            </span>
            <p>SmartWatch</p>
          </div>
          <div className="border w-96 md:w-44 h-36 flex flex-col justify-center items-center rounded-md hover:bg-red-500 hover:text-white">
            <span className="text-5xl">
              <CiCamera />
            </span>
            <p>Camera</p>
          </div>
          <div className="border w-96 md:w-44 h-36 flex flex-col justify-center items-center rounded-md hover:bg-red-500 hover:text-white">
            <span className="text-5xl">
              <GrGamepad />
            </span>
            <p>Gaming</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
