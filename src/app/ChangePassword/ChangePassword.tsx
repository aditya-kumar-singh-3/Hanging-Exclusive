"use client";

import React, { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/Redux/Store";
import { loginWithEmailPassword, loginWithGoogle } from "@/Redux/LoginThunk";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import { fetchUserCartAndWishlist, saveUserCartAndWishlist } from "@/Redux/CreateSlice";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "@/app/config";

const ResetPassword = () =>
    toast.success("Reset Password Sent. Check your mail!");




const ChangePassword = () => {

      let [email,setEmail] = useState("");

      const handleReset = async () =>{
       
        try{
            await sendPasswordResetEmail(auth,email);
            ResetPassword();
        }catch(error){
            console.log("Could not send the mail!");
        }
      }

  return (
    <div className="md:flex md:mb-20 m-10 ">
      <Toaster />
      <div className="md:object-contain md:mt-20 md:ml-24 md:w-1/2 mt-20 ">
        <img
          className="md:h-full md:w-full"
          src="/signup/main.jpeg"
          alt="Login Image"
        />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-start md:w-1/2 md:mt-20 md:gap-14 md:pl-36 md:mr-24 flex flex-col w-full mt-10 gap-7">
        <div className="md:flex md:flex-col md:gap-4 flex flex-col flex-start gap-2">
          <p className="md:text-5xl text-3xl ">Reset Your Password</p>
          <p className="md:text-xl text-base">Enter your Registered Mail below</p>
        </div>
          
          
        
          <input
            className="md:border-b md:text-lg text-sm md:border-black md:w-80 md:outline-none border-b border-black outline-none"
            placeholder="Email"
           onChange={(e)=> setEmail(e.target.value)}
            
          />
         
         
       

        <button onClick={handleReset}   className="text-white bg-red-500 w-24 h-12">
        Reset
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
