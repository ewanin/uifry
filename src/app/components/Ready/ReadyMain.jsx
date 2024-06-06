import Image from 'next/image';
import React from 'react';
import ReadyContent from './ReadyContent';
import ReadyImage from './ReadyImage';
import circleBackImage from '../../../../public/circleBackImage.png';

// ReadyMain component containing the main content of the "Ready" section
const ReadyMain = () => {
    return (
        <div className='relative'>
            {/* Background circle image */}
            <Image src={circleBackImage} alt='Back Image' className='md:block hidden absolute -left-[5%] -top-1/3 z-0' />
            {/* Main content area */}
            <div className='relative z-10 xl:mx-[175px] lg:mx-[125px] mm:px-[75px] mx-[25px] sm:my-[125px] my-[75px] py-6 bg-readyBanner bg-cover bg-no-repeat rounded-lg'>
                {/* Flex container for content and image */}
                <div className='flex md:flex-row flex-col justify-between items-center'>
                    {/* Render ReadyContent component */}
                    <ReadyContent />
                    {/* Render ReadyImage component */}
                    <ReadyImage />
                </div>
            </div>
        </div>
    );
}

export default ReadyMain;
