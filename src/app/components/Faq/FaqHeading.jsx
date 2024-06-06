import React from 'react';
import data from '../../../../public/data.json';

// Functional component for displaying FAQ heading
const FaqHeading = () => {
  // Destructure title and subtitle from data
  const { title, subtitle } = data.faq;

  return (
    <div className='mb-10'>
      {/* FAQ title */}
      <h3 className='text-pink text-[18px] leading-[28px] uppercase'>{title}</h3>
      {/* FAQ subtitle */}
      <h1 className='sm:text-[48px] text-[38px] sm:leading-[48px] leading-[38px] capitalize mt-1 sm:w-[13ch]'>{subtitle}</h1>
    </div>
  );
};

export default FaqHeading;