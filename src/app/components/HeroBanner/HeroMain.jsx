import React from 'react';
import HeroContent from './HeroContent';
import HeroStrip from './HeroStrip';
import HeroImage from './HeroImage';

// HeroMain component containing the main hero section content
const HeroMain = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-between xl:items-center lg:items-start items-center gap-10 lg:mt-[175px] mt-[125px]'>
      {/* Content and strip section */}
      <div className="xl:pl-[175px] lg:pl-[125px] sm:pl-[75px] px-[25px]">
        <HeroContent />
        <HeroStrip />
      </div>
      {/* Hero image */}
      <HeroImage />
    </div>
  );
}

export default HeroMain;