import React from 'react';
import MobileNav from '../mobilenav/MobileNav';
import Footer from '../Footer/Footer';
import AboutContent from '../AboutContent/AboutContent';
import AboutInfo from '../AboutInfo/AboutInfo';
import Member from '../Member/Member';
import Promise from '../Promise/Promise';

const page = () => {
  return (
    <>
    <MobileNav/>
    <AboutContent/>
    <AboutInfo/>
    <Member/>
    <Promise/>
    <Footer/>
    </>
  );
}

export default page;
