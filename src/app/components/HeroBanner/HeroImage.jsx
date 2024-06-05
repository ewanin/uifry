import React from 'react'
import data from '../../../../public/data.json';

const HeroImage = () => {

  const { mainPhoto } = data.hero;

  return (
    <div className=''>
      <img src={mainPhoto} alt='Hero Banner Image' />
    </div>
  )
}

export default HeroImage