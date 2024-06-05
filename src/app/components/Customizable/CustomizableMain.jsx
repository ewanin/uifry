import React from 'react'
import CustomizableImage from './CustomizableImage'
import CustomizableContent from './CustomizableContent'

const CustomizableMain = () => {
  return (
      <div className='flex items-center gap-10 mt-[125px] px-[175px]'>
        <CustomizableImage />
        <CustomizableContent />
      </div>
  )
}

export default CustomizableMain