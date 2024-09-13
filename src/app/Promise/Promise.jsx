import React from 'react';
import Image from 'next/image';

const Promise = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-16 lg:gap-28 mb-32 mt-10 px-4'>
      <div className='flex flex-col items-center gap-2'>
        <img src='/Services=Customer service.png' alt='Free and Fast Delivery' className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' />
        <p className='font-semibold text-sm md:text-base lg:text-lg'>FREE AND FAST DELIVERY</p>
        <p className='font-normal text-xs md:text-sm lg:text-base'>Free delivery for all orders over $140</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img src='/Services=Customer service.png' alt='24/7 Customer Service' className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' />
        <p className='font-semibold text-sm md:text-base lg:text-lg'>24/7 CUSTOMER SERVICE</p>
        <p className='font-normal text-xs md:text-sm lg:text-base'>Friendly 24/7 customer support</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img src='/Services=Money back.png' alt='Money Back Guarantee' className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' />
        <p className='font-semibold text-sm md:text-base lg:text-lg'>MONEY BACK GUARANTEE</p>
        <p className='font-normal text-xs md:text-sm lg:text-base'>We return money within 30 days</p>
      </div>
    </div>
  );
}

export default Promise;
