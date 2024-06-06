import React from 'react';
import FaqHeading from './FaqHeading';
import FaqContent from './FaqContent';

// Functional component for displaying main FAQ section
const FaqMain = () => {
    return (
        <div className='xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] sm:mt-[125px] mt-[75px]'>
            {/* Render FaqHeading component */}
            <FaqHeading />
            {/* Render FaqContent component */}
            <FaqContent />
        </div>
    );
};

export default FaqMain;