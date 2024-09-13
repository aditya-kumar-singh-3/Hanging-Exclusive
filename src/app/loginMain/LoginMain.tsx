import React from 'react';
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';

const SignupMain = () => {
  return (
    <div className='md:flex md:mb-20 m-10  '>
        <div className='  md:object-contain md:w-1/2 md:mt-20  '>
          <img className='md:h-full md:w-full mt-20 'src="\signup\main.jpeg" alt="xxx"  />
        </div>
       <div className='md:flex md:flex-col md:justify-center md:items-start  md:w-1/2 md:mt-20 md:gap-14 md:pl-52 md:m-10 flex flex-col   w-full mt-10 gap-7'>
        <div className='md:flex md:flex-col md:gap-4 flex flex-col flex-start gap-2'>
            <p className='md:text-5xl text-3xl'>Log in to Exclusive</p>
            <p className='md:text-xl text-base'>Enter your details below</p>
        </div>
        <div className='md:flex md:flex-col md:w-full md:gap-8   flex flex-col gap-8'>

            <input className='md:border-b md:text-lg text-sm  md:border-black md:w-9/12 md:outline-none border-b border-black outline-none' placeholder='Email or Phone Number' />
            <input className='md:border-b md:text-lg text-sm md:border-black md:w-9/12 md:outline-none border-b border-black outline-none' type='password' placeholder='Password' />
        </div>
        <div className='md:flex  md:justify-between md:gap-5  md:w-9/12 flex gap-4'>
            <button className='md:text-white md:bg-red-600 md:h-10 md:rounded-sm bg-red-600 w-36 h-12 text-white rounded-sm text-sm'>Login</button>
            <button className=' md:h-10 md:flex md:justify-center md:items-center gap-1 md:gap-2 flex justify-center items-center  whitespace-nowrap rounded-sm p-1 text-sm text-red-500'>Forgot Password?</button>
        </div>
       
       </div>
    </div>
  );
}

export default SignupMain;
