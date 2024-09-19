import Link from "next/link";
import React from "react";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <>
      <div>
        <div className=" whitespace-break-spaces mt-20 md:ml-14 md:p-1 ml-5 ">
          <div className=" md:flex md:justify-start md:items-start md:ml-20  flex  ml-0">
            <p>
              <Link href="/" className="opacity-50"> Home </Link> / <b>Contact</b>
            </p>
          </div>
        </div>

        <div className=" md:flex md:gap-4 md:ml-10 md:mt-20 md:mr-14 md:mb-20 mt-10  ">
          <div className=" md:flex md:flex-col md:gap-10 md:shadow-xl  md:pr-6 md:pt-5 md:pb-5 md:ml-28 ">
            <div className="  md:p-2 md:mb-0 mb-10 ml-6  ">
              <div className="md:flex md:items-center md:gap-2 flex items-center gap-2    ">
                <img src="\Contact-images\call.png" alt="" />
                <p className="md:text-base md:font-medium">Call To Us</p>
              </div>
              <div className="md:flex md:flex-col md:gap-5 mt-2 ">
                <p className="md:font-normal md:text-sm ">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="md:font-normal md:text-sm">
                  Phone:<span className="text-blue-700"> +8801611112222</span>
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
                    href="https://mail.google.com/mail"
                    className="md:font-normal md:text-sm text-blue-700"
                  >
                    {" "}
                    customer@exclusive.com
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a
                    href="https://mail.google.com/mail"
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
                className=" p-2  bg-whitesmoke w-80 md:w-64  outline-none md:ml-6 md:h-auto h-12   "
                placeholder="Your Name *"
              />
              <input
                className=" p-2 bg-whitesmoke w-80 md:w-64 outline-none md:h-auto h-12  "
                placeholder="Your Email *"
              />
              <input
                className=" p-2 bg-whitesmoke w-80 md:w-64 outline-none md:h-auto h-12  md:mr-6 "
                placeholder="Your Phone *"
              />
            </div>
            <div className="md:ml-12 md:flex md:flex-col md:mt-10 md:mr-12 md:h-4/6 ml-6 mt-3  ">
              <textarea
                className="bg-whitesmoke md:h-full md:text-start md:p-4 p-2 outline-none md:w-full w-80   h-32"
                placeholder="Your message"
              ></textarea>
              <div className="md:flex md:justify-end md:mt-5  ">
                <p className="bg-red-500 md:w-36 md:flex md:items-center md:justify-center md:mt-0 mt-8 md:mb-0 mb-10 rounded-sm  text-white md:h-10 h-12 text-lg justify-center flex md:text-base w-36 items-center md:ml-12 ml-20 text-center ">
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
