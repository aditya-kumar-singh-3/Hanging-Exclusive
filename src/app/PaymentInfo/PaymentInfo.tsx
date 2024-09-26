import Link from 'next/link';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const PaymentInfo = () => {
  return (
    <>
     <div className="md:flex md:justify-between ">
      <Toaster />
        <p className="whitespace-break-spaces md:ml-36 ml-6 md:mt-20 md:mb-20 flex md:justify-center items-center mt-20">
          <Link href="/" className="opacity-50 leading-21 font-normal text-sm">
            Home
          </Link>{" "}
          /<span className=" leading-21 font-normal text-sm"> My Account</span>
        </p>
        <p className="md:flex md:justify-center md:items-center md:mr-36 whitespace-break-spaces flex justify-center items-center mt-4 text-sm font-normal leading-21">
          <b>Welcome!</b>
        </p>
      </div>

      <div className="md:flex md:justify-between md:ml-28 md:gap-10 md:mr-36 md:mb-20">
        <div className=" flex justify-center mt-10 md:-mt-9">
          <div className="md:p-10 ">
            <p className="text-base font-medium leading-24 ">Manage My Account</p>
            <p  className="ml-8 text-base font-normal opacity-50 mt-1 cursor-pointer ">
             <Link href="/Account"> My Profile</Link>
            </p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer opacity-50 leading-24">
            <Link href='/AddressPage'>  Address Book</Link>
            </p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer text-check-red leading-24">
             <Link href='/PaymentPage'> My Payment</Link>
            </p>
            <p className="text-base font-medium md:mt-2 leading-24">My Orders</p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer opacity-50 leading-24">
              My Returns
            </p>
            <p className="ml-8 text-base font-normal md:mt-1 cursor-pointer opacity-50 md:mb-2 leading-24">
              My Cancellations
            </p>
            <Link href="Wishlist" className="text-base font-medium leading-24">
              My WishList
            </Link>
          </div>
        </div>

        <div className="shadow-2xl md:w-3/4 md:flex md:flex-col md:p-12 mt-10 md:-mt-12 flex justify-center flex-col item mb-20 md:mb-0 ml-2 md:ml-0 mr-2 md:mr-2">
          <p className="md:text-xl text-2xl font-medium text-check-red flex justify-center mt-7 md:-mt-48 md:justify-start leading-28 select-none">
        All Transactions
          </p>

        

        

        </div>
      </div>
    </>
  );
}

export default PaymentInfo;
