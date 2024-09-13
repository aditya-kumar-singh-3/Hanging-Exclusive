"use client";

import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import app from "../config";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,  } from "firebase/auth";
import { useRouter } from "next/navigation";


const SignupMain = () => {

  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error: any) {
      console.log("Error signing in with Google:", error.message);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      setError(error.message); 
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="md:flex md:mb-20 m-10">
      <div className="md:object-contain md:w-1/2 md:mt-20">
        <img
          className="md:h-full md:w-full mt-20 md:mt-0 md:ml-28"
          src="/signup/main.jpeg"
          alt="Signup"
        />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-start md:w-1/2 md:mt-20 md:gap-8 md:pl-52 md:m-10 flex flex-col w-full mt-10 gap-7">
        <div className="md:flex md:flex-col md:gap-4 flex flex-col flex-start gap-2">
          <p className="md:text-5xl text-3xl">Create an account</p>
          <p className="md:text-xl text-base">Enter your details below</p>
        </div>
        <form onSubmit={handleSignUp} className="md:flex md:flex-col md:w-full md:gap-8 flex flex-col gap-8">
          <input
            className="md:border-b md:text-lg text-sm md:border-black md:w-9/12 md:outline-none border-b border-black outline-none"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="md:border-b md:text-lg text-sm md:border-black md:w-9/12 md:outline-none border-b border-black outline-none"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="md:border-b md:text-lg text-sm md:border-black md:w-9/12 md:outline-none border-b border-black outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="md:flex md:justify-between md:gap-5 md:w-9/12 flex gap-4">
            <button
              type="submit"
              className="md:text-white md:bg-red-600 md:h-10 md:rounded-sm bg-red-600 w-36 h-12 text-white rounded-sm text-sm"
            >
              Create Account
            </button>
            <button
              onClick={signInWithGoogle}
              className="md:border md:border-black md:h-10 md:flex md:justify-center md:items-center gap-1 md:gap-2 flex justify-center items-center border border-black whitespace-nowrap rounded-sm p-1 text-sm"
            >
              <FaGoogle />
              Sign up with Google
            </button>
          </div>
        </form>
        <div className="md:flex md:gap-2 md:w-9/12 md:justify-center flex items-center justify-center gap-2">
          <p>Already have an account?</p>
          <Link
            href="/login"
            className="hover:underline hover:underline-offset-[5px]"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupMain;
