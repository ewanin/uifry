import React from 'react'
import data from '../../../../public/data.json';


const HeroStrip = () => {

  const { photo } = data.hero;

  return (
    <div className=' mt-4'>
      <img src={photo} alt='Hero Strip Image' className=' w-[520px] bg--600' />
    </div>
  )
}

export default HeroStrip