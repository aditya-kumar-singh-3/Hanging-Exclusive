import React from 'react';
import MobileNav from '../mobilenav/MobileNav';
import Footer from '../Footer/Footer';
import CartContent from '../CartContent/CartContent';

const page = () => {
  return (
    <>
    <MobileNav/>
    <CartContent/>
    <Footer/>
    </>
  );
}

export default page;
