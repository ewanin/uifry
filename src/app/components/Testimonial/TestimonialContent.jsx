import React from 'react';
import data from '../../../../public/data.json';

// TestimonialContent component displaying testimonial details
const TestimonialContent = () => {
    // Destructure testimonial data from data.json
    const { subheading, content, name, photo1, photo2, photo3, photo4, photo5 } = data.testimonial;

    return (
        <div className='relative flex flex-col gap-6 lg:w-[460px]'>
            {/* Subheading */}
            <h2 className='text-[28px] leading-[28px] capitalize'>{subheading}</h2>
            {/* Testimonial content */}
            <h3 className='text-[18px] leading-[28px] opacity-50'>{content}</h3>
            {/* Testimonial photos */}
            <div className='flex flex-wrap items-center gap-2'>
                <img src={photo1} alt='Testimonial 1' />
                <img src={photo2} alt='Testimonial 2' className='opacity-50' />
                <img src={photo3} alt='Testimonial 3' className='opacity-50' />
                <img src={photo4} alt='Testimonial 4' className='opacity-50' />
                <img src={photo5} alt='Testimonial 5' className='opacity-50' />
            </div>
            {/* Testimonial name */}
            <h2 className='text-[18px] leading-[28px] capitalize'>{name}</h2>
        </div>
    );
}

export default TestimonialContent;