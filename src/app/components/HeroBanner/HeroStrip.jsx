import React from 'react';
import data from '../../../../public/data.json';

// HeroStrip component displaying the hero strip image
const HeroStrip = () => {
  // Destructure photo from data
  const { photo } = data.hero;

  return (
    <div className=' mt-4'>
      {/* Render the hero strip image */}
      <img src={photo} alt='Hero Strip Image' className=' lg:w-[520px]' />
    </div>
  );
}

export default HeroStrip;