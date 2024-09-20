import React from 'react';
import MobileNav from '../mobilenav/MobileNav';
import Footer from '../Footer/Footer';
import ChangePassword from '../ChangePassword/ChangePassword';

const page = () => {
  return (
    <div>
      <MobileNav/>
      <ChangePassword/>
      <Footer/>
    </div>
  );
}

export default page;
