import Image from "next/image";
import ContentOne from "./ContentOne/ContentOne";
import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import Promise from "./Promise/Promise";
import Today from "./Today/Today";
import Month from "./Month/Month";
import Music from "./Speaker/Music";
import Product from "./Products/Product";
import NewArrival from "./NewArrival/NewArrival";
import MobileNav from "./mobilenav/MobileNav";

export default function Home() {
  return (
    <>
      <MobileNav />
      <ContentOne />
      <Today />
      <hr className="md:border-1 md:mt-10 md:ml-44 md:mr-40 md:mb-16 border-1 mt-10 ml-10 mr-10 mb-10"></hr>
      <Category />
      <hr className="md:border-1 md:mt-24 md:ml-44 md:mr-40 md:mb-16 border-1 mt-14 ml-10 mr-10 mb-4"></hr>
      <br></br>
      <br></br>
      <Month />
      <br></br>
      <Music />
      <Product />
      <NewArrival />
      <Promise />
      <Footer />
    </>
  );
}
