import React from 'react'
import AdvantagesContent from './AdvantagesContent'
import AdvantagesImage from './AdvantagesImage'

const AdvantagesMain = () => {
  return (
    <div className='flex justify-between items-center gap-10 px-[175px] mt-[125px]'>
        <AdvantagesContent />
        <AdvantagesImage />
    </div>
  )
}

export default AdvantagesMain