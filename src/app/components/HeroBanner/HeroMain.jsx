import React from 'react'
import HeroContent from './HeroContent'
import HeroStrip from './HeroStrip'
import HeroImage from './HeroImage'

const HeroMain = () => {
  return (
    <div className='flex justify-between items-center gap-10 mt-[125px]'>
      <div className="pl-[175px]">
        <HeroContent />
        <HeroStrip />
      </div>
      <HeroImage />
    </div>
  )
}

export default HeroMain