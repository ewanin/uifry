import React from 'react';
import TestimonialImage from './TestimonialImage';
import TestimonialContent from './TestimonialContent';
import TestimonialHeading from './TestimonialHeading';

// TestimonialMain component combining testimonial heading, image, and content
const TestimonialMain = () => {
    return (
        <div className='xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] sm:mt-[125px] mt-[75px]'>
            {/* Render testimonial heading */}
            <TestimonialHeading />
            {/* Render testimonial image and content */}
            <div className='flex lg:flex-row flex-col justify-between items-center gap-10'>
                <TestimonialImage />
                <TestimonialContent />
            </div>
        </div>
    );
}

export default TestimonialMain;