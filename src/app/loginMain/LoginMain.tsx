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

const welcome = () => toast.success("Welcome to Exclusive!");

const LoginMain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const { loading, error, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  useEffect(() => {
    console.log("User", user);
    console.log("Loading", loading);
    const token = getCookie("token");
    if (token) {
      setTimeout(() => {
        welcome();
      }, 1000);
      router.push("/");
    }
  },[user,router]);

  // useEffect(() => {
  //   if (user) {
  //     welcome();
  //     setPassword("");
  //     setEmail("");

  //   }
  // }, [user, router]);

  return (
    <div className="md:flex md:mb-20 m-10">
      <Toaster />
      <div className="md:object-contain md:mt-20 md:ml-24 md:w-1/2 mt-20">
        <img
          className="md:h-full md:w-full"
          src="/signup/main.jpeg"
          alt="Login Image"
        />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-start md:w-1/2 md:mt-20 md:gap-14 md:pl-52 md:mr-24 flex flex-col w-full mt-10 gap-7">
        <div className="md:flex md:flex-col md:gap-4 flex flex-col flex-start gap-2">
          <p className="md:text-5xl text-3xl">Log in to Exclusive</p>
          <p className="md:text-xl text-base">Enter your details below</p>
        </div>

        
        

        <form
          onSubmit={handleLogin}
          className="md:flex md:flex-col md:w-full md:gap-8 flex flex-col gap-8"
        >
          <input
            className="md:border-b md:text-lg text-sm md:border-black md:w-80 md:outline-none border-b border-black outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="md:border-b md:text-lg text-sm md:border-black md:w-80 md:outline-none border-b border-black outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-8">
            <button
              type="submit"
              className="md:text-white md:bg-red-600 md:h-10 md:rounded-sm bg-red-600 w-36 h-12 text-white rounded-sm text-sm"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="md:flex md:justify-between   md:w-40 flex gap-4 md:border md:border-black">
              <button
                onClick={handleGoogleLogin}
                className="md:h-10 md:p-2  md:flex md:justify-center md:items-center gap-1 md:gap-2 flex justify-center items-center whitespace-nowrap rounded-sm p-1 text-sm"
              >
                <FaGoogle />
                Login with Google
              </button>
            </div>
          </div>
        </form>

        <Link href="/" className="text-red-500">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginMain;
