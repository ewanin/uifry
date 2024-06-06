import React from 'react';
import data from '../../../../public/data.json';

// Functional component for displaying customizable content
const CustomizableContent = () => {
    // Destructure subheading, content, and photo from data
    const { subheading, content, photo } = data.customizable;

    return (
        <div className='relative flex flex-col gap-6 xl:w-[640px] lg:w-[440px] lg:order-2 order-1'>
            {/* Display subheading, photo */}
            <div className='flex items-center gap-2'>
                <img src={photo} alt='Star' />
                <h2 className='text-[28px] leading-[28px] capitalize'>{subheading}</h2>
            </div>
            {/* Display content */}
            <h3 className='text-[18px] leading-[28px] opacity-50'>{content}</h3>
        </div>
    );
};

export default CustomizableContent;