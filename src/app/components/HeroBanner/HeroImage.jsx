import React from 'react';
import data from '../../../../public/data.json';

// HeroImage component displaying the hero banner image
const HeroImage = () => {
  // Destructure mainPhoto from data
  const { mainPhoto } = data.hero;

  return (
    <div className=''>
      {/* Render the hero banner image */}
      <img src={mainPhoto} alt='Hero Banner Image' />
    </div>
  );
}

export default HeroImage;