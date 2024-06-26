import React from 'react';
import FeaturesImage from './FeaturesImage';
import FeaturesContent from './FeaturesContent';

// Functional component for displaying main features section
const FeaturesMain = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-between items-center gap-10 xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] sm:mt-[125px] mt-[75px] overflow-hidden'>
            {/* Render FeaturesImage component */}
            <FeaturesImage />
            {/* Render FeaturesContent component */}
            <FeaturesContent />
        </div>
    );
};

export default FeaturesMain;