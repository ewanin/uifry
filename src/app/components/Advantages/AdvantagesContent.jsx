import React from 'react';
import data from '../../../../public/data.json';

// Functional component for displaying advantages content
const AdvantagesContent = () => {
    // Destructure data from JSON
    const { title, subtitle, subheading, content, photo } = data.advantages;

    return (
        <div className='relative flex flex-col gap-6 xl:w-[640px] lg:w-[520px]'>
            {/* Title and Subtitle */}
            <div>
                <h3 className='text-pink text-[18px] leading-[28px] uppercase'>{title}</h3>
                <h1 className='sm:text-[48px] text-[38px] sm:leading-[48px] leading-[38px] mt-1'>{subtitle}</h1>
            </div>
            {/* Subheading and Photo */}
            <div className='flex items-center gap-2'>
                <img src={photo} alt='Bell' className='w-10 h-10' />
                <h2 className='text-[28px] leading-[28px] capitalize'>{subheading}</h2>
            </div>
            {/* Content */}
            <h3 className='text-[18px] leading-[28px] opacity-50'>{content}</h3>
        </div>
    );
};

export default AdvantagesContent;