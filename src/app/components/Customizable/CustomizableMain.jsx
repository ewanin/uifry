import React from 'react';
import CustomizableImage from './CustomizableImage';
import CustomizableContent from './CustomizableContent';

// Functional component for displaying main customizable section
const CustomizableMain = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center gap-10 sm:mt-[125px] mt-[75px] xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px]'>
      {/* Render CustomizableImage component */}
      <CustomizableImage />
      {/* Render CustomizableContent component */}
      <CustomizableContent />
    </div>
  );
};

export default CustomizableMain;