import React from 'react';
import AdvantagesContent from './AdvantagesContent';
import AdvantagesImage from './AdvantagesImage';

// Functional component for displaying main advantages section
const AdvantagesMain = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center gap-10 xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] sm:mt-[125px] mt-[75px]'>
      {/* Render AdvantagesContent component */}
      <AdvantagesContent />
      {/* Render AdvantagesImage component */}
      <AdvantagesImage />
    </div>
  );
};

export default AdvantagesMain;