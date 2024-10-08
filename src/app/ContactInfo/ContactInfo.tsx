"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactInfo = () => {

  let [name,setName ] = useState("");
  let [mail,setMail] = useState("");
  let [contact,setContact] = useState("");
  let [message,setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs.send("service_fjzkoy6", "template_y5g4cze", {
      from_name: name,
      to_name: 'Aditya',
      from_email: mail,
      to_email: 'developer.aditya1@gmail.com',
      message: [message,"------------",contact,"----------",mail],
     
      },"FRLy8YNjtxqqNFSum")
      .then(() => {
       
        toast.success('Thank you. We will get back to you as soon as possible.');
        setName("");
        setMail("");
        setContact("");
        setMessage("");
        
      }, (error) => {
        
        console.log(error);
       toast.error('Something went wrong.')
        })
  };
  
  return (
    <>
      <div>
        <Toaster/>
        <div className=" whitespace-break-spaces mt-20 md:ml-14 md:p-1 ml-5 ">
          <div className=" md:flex md:justify-start md:items-start md:ml-20  flex  ml-0">
            <p>
              <Link href="/" className="opacity-50 leading-21 font-normal text-sm ">
                {" "}
                Home
              </Link>{" "}
             <span className="leading-21 font-normal text-sm"> / Contact</span>
            </p>
          </div>
        </div>

        <div className=" md:flex md:gap-4 md:ml-36 md:mt-20 md:mr-14 md:mb-20 mt-10  md:p-1  ">
          <div className=" md:flex md:flex-col md:gap-10 md:shadow-xl  md:pr-6 md:pt-5 md:pb-5  ">
            <div className="  md:p-2 md:mb-0 mb-10 ml-6 ">
              <div className="md:flex md:items-center md:gap-2 flex items-center gap-2    ">
                <img src="\Contact-images\call.png" alt="" />
                <p className="md:text-base md:font-medium">Call To Us</p>
              </div>
              <div className="md:flex md:flex-col md:gap-5 mt-2 ">
                <p className="md:font-normal md:text-sm ">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="md:font-normal md:text-sm">
                  Phone:
                  <a href="tel:+8801611112222" className="text-blue-700">
                    {" "}
                    +8801611112222
                  </a>
                </p>
              </div>
            </div>
            <hr className="md:ml-6 md:mr-8 md:mb-1 md:-mt-4 md:border-2 "></hr>

            <div className=" md:flex md:flex-col md:-mt-5   mt-10   ">
              <div className="md:flex md:items-center md:gap-2 md:justify-start  flex items-center gap-2 ml-6  ">
                <img src="\Contact-images\mail.png" alt="" />
                <p className="md:text-base md:font-medium">Write To Us</p>
              </div>
              <div className="md:flex md:flex-col md:gap-5 ml-6 mt-2">
                <p className="md:font-normal md:text-sm">
                  Fill out our form and we will contact you <br></br> within 24
                  hours.
                </p>
                <div>
                  Email:
                  <a
                    href="mailto:customer@exclusive.com"
                    className="md:font-normal md:text-sm text-blue-700"
                  >
                    {" "}
                    customer@exclusive.com
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a
                    href="mailto:support@exclusive.com"
                    className="md:font-normal md:text-sm text-blue-700"
                  >
                    {" "}
                    support@exclusive.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-4/5  md:shadow-xl md:p-2 mt-20 md:mt-0 ">
            <div className="md:flex  md:gap-10 md:justify-evenly md:h-16 flex flex-col md:flex-row ml-6 md:ml-0 gap-3  md:mt-4  ">
              <input
                className=" p-2  bg-whitesmoke w-[348px] md:w-64  outline-none md:ml-6 md:h-auto h-12 select-none  " required
                placeholder="Your Name *"
                onChange={(e)=> setName(e.target.value)}
                value={name}
              />
              <input
                className=" p-2 bg-whitesmoke w-[348px] md:w-64 outline-none md:h-auto h-12 select-none "  required
                placeholder="Your Email *"
                onChange={(e)=> setMail(e.target.value)}
                value={mail}
              />
              <input
                className=" p-2 bg-whitesmoke w-[348px] md:w-64 outline-none md:h-auto h-12  md:mr-6 select-none"  required
                placeholder="Your Phone *"
                onChange={(e)=> setContact(e.target.value)}
                value={contact}
              />
            </div>
            <div className="md:ml-12 md:flex md:flex-col md:mt-10 md:mr-12 md:h-4/6 ml-6 mt-3  ">
              <textarea
                className="bg-whitesmoke md:h-full md:text-start md:p-4 p-2 outline-none md:w-full w-[348px]   h-32"  required
                placeholder="Your message"
                onChange={(e)=>setMessage(e.target.value)}
                value={message}
              ></textarea>
              <div className="md:flex md:justify-end md:mt-5  ">
                <p onClick={handleSubmit} className="bg-red-500 md:w-44 md:flex md:items-center md:justify-center md:mt-0 mt-8 md:mb-0 mb-10 rounded-sm active:scale-105 transition-all cursor-pointer text-white md:h-10 h-12 text-lg justify-center flex md:text-base w-36 items-center md:ml-12 ml-20 text-center select-none">
                  Send Message
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
