'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Music = () => {
    let[seconds,setSeconds] = useState(0);

    useEffect(()=>{
       let timer = setInterval(()=>{
        setSeconds(prev => prev+1);
       },1000)
       return ()=> clearInterval(timer);
    },[])

    let sec = seconds%60;

    let minute = Math.floor(seconds/60);

    let hour = Math.floor(minute/60);

    let day = Math.floor(hour/24);
  return (
   <>
   <div className="flex justify-center  md:mr-10 md:ml-2 md:p-3  ">
        
          
        <div className=" md:w-full h-96  md:mx-0 mx-10  md:ml-32  bg-black mt-12 text-white flex items-center  md:flex-row flex-col-reverse md:mr-20 w-[350px] ">
          <div className="flex flex-col items-center md:h-[250px] md:w-[350px] gap-7 justify-center mb-4 w-96 md:ml-0 ">
            <div className="flex justify-start  items-center mr-40 text-green-500   ">
              <p>Categories</p>
            </div>
            <p className="w-42 md:text-3xl text-2xl font-semibold md:leading-[60px] whitespace-nowrap ml-32 mr-40 md:ml-44">Enhance Your <br />Music Experience</p>
            <a className="mr-24 bg-custom-green w-36 h-10 flex items-center justify-center cursor-pointer">Buy Now</a>
          </div>
        
          <div className="md:mb-16   ">
            <img src="/speaker.png" alt='xxx' className="h-[260px] md:h-2/3 w-full object-contain md:p-20  -mb-6 "/>
          </div>
        </div>
      </div>
   </>
  );
}

export default Music;
