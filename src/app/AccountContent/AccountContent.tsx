import React from "react";
import Link from "next/link";

const AccountContent = () => {
  return (
    <>
      <div className="md:flex md:justify-between ">
        <p className="whitespace-break-spaces md:ml-36 md:mt-20 md:mb-20 flex justify-center items-center mt-10">
         <Link href="/"> Home</Link>/ <b>My Account</b>
        </p>
        <p className="md:flex md:justify-center md:items-center md:mr-36 whitespace-break-spaces flex justify-center items-center mt-4 text-2xl">
          <b>Welcome!</b>
          <span className="text-red-500 "> Aditya</span>
        </p>
      </div>

      <div className="md:flex  md:justify-between md:ml-28 md:gap-10 md:mr-36 md:mb-20  ">
        <div className=" flex justify-center mt-10">
          <div className="md:p-10 ">
            <p className="text-base font-medium ">Manage My Account</p>
            <p className="ml-8 text-base font-normal text-red-700 mt-1 cursor-pointer">
              My Profile
            </p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer ">Address Book</p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer">
              My Payment 
            </p>
            <p className="text-base font-medium md:mt-2">My Orders</p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer">My Returns</p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer">
              My Cancellations
            </p>
            <Link href="Wishlist" className="text-base font-medium ">
              My WishList
            </Link>
          </div>
        </div>

        <div className="shadow-xl md:w-3/4 md:flex md:flex-col md:p-12 mt-10  flex justify-center flex-col item mb-20 md:mb-0 ml-2 md:ml-0 mr-2 md:mr-2">
          <p className=" md:text-xl text-3xl font-medium text-red-500 flex justify-center mt-7 md:justify-start md:ml-2 ">
            Edit Your Profile
          </p>
          <div className="md:flex md:justify-between mt-7 flex gap-32 ml-2 md:ml-0 ">
            <p className="md:text-base md:font-normal md:mt-2 ">First Name</p>
            <p className="md:mr-80  md:text-base md:font-normal ">Last Name</p>
          </div>
          <div className="md:flex md:justify-between  md:w-full  flex gap-3 ml-2 md:ml-0">
            <input
              placeholder="Aditya"
              className="md:h-12 md:w-96  text-sm bg-gray-200 p-2   md:text-base  "
            />
            <input
              placeholder="Kumar Singh"
              className="md:h-12 md:w-96   text-sm md:text-base p-2  bg-gray-200 "
            />
          </div>
          <div className="md:flex md:justify-between mt-7 flex gap-32 ml-2 md:ml-0 ">
            <p className="md:text-base md:font-normal md:mt-2  ">Email</p>
            <p className="md:mr-80  md:text-base md:font-normal">Address</p>
          </div>
          <div className="md:flex md:justify-between md:w-full flex gap-3 ml-2 md:ml-0 ">
            <input
              placeholder="singhaditya43777@gmail.com"
              className="md:h-12 md:w-96  text-sm p-2 bg-gray-200   md:text-base "
            />
            <input
              placeholder="Hanging Panda , Sector-63"
              className="md:h-12 md:w-96  text-sm p-2 bg-gray-200 md:text-base "
            />
          </div>
          <p className="md:mt-2 md:text-base md:font-normal md:mb-2 text-center mt-5  flex justify-center md:justify-start">
            Password Changes
          </p>
          <div className="md:flex md:flex-col md:gap-3 flex justify-center items-center flex-col gap-3">
            <input
              type="text"
              className="md:h-12 md:p-5 md:w-full bg-gray-200"
              placeholder="Current Password"
            />
            <input
              type="password"
              className="md:h-12 md:p-5 md:w-full bg-gray-200"
              placeholder="New Password"
            />
            <input
              type="text"
              className="md:h-12 md:w-full md:p-5 bg-gray-200"
              placeholder="Confirm New Password"
            />
          </div>
          <div className="md:flex md:justify-end  md:gap-10 md:mt-5 flex justify-center gap-4 mt-4 mb-10 w-44 ml-28  md:w-full ">
            <button>Cancel</button>
            <button className="md:h-12 md:flex md:justify-center md:items-center bg-red-500 text-center md:p-5 md:mr-28 text-white rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountContent;
