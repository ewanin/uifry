import React from 'react';
import data from '../../../../public/data.json';

// TestimonialHeading component displaying testimonial heading
const TestimonialHeading = () => {
  // Destructure testimonial title and subtitle from data.json
  const { title, subtitle } = data.testimonial;

  return (
    <div className='text-center mb-10'>
      {/* Testimonial title */}
      <h3 className='text-pink text-[18px] leading-[28px] uppercase'>{title}</h3>
      {/* Testimonial subtitle */}
      <h1 className='sm:text-[48px] text-[38px] sm:leading-[48px] leading-[38px] capitalize mt-1 md:w-[12ch] mx-auto'>{subtitle}</h1>
    </div>
  );
}

export default TestimonialHeading;