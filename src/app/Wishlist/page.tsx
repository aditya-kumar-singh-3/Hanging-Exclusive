import React from 'react';
import MobileNav from '../mobilenav/MobileNav';
import Footer from '../Footer/Footer';
import WishlistContent from '../WishlistContent/WishlistContent';
import Month from '../Month/Month';

const page = () => {
  return (
   <>
   <MobileNav/>
   <WishlistContent/>
   <br/>
   <br/>

<div >
   <Month  />
   </div>
   <br/>
   <br/>
   <br/>
   <br/>

   <Footer/>
   </>
  );
}

export default page;
