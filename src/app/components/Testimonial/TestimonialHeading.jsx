import React from 'react'
import data from '../../../../public/data.json';

const TestimonialHeading = () => {

  const { title, subtitle } = data.testimonial;

  return (
    <div className='text-center mb-10'>
      <h3 className='text-pink text-[18px] leading-[28px] uppercase'>{title}</h3>
      <h1 className=' sm:text-[48px] text-[38px] sm:leading-[48px] leading-[38px] capitalize mt-1 md:w-[12ch] mx-auto'>{subtitle}</h1>
    </div>
  )
}

export default TestimonialHeading