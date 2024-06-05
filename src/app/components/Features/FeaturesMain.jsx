import React from 'react'
import FeaturesImage from './FeaturesImage'
import FeaturesContent from './FeaturesContent'

const FeaturesMain = () => {
    return (
        <div className='flex items-center gap-10 px-[175px] mt-[125px] overflow-hidden'>
            <FeaturesImage />
            <FeaturesContent />
        </div>
    )
}

export default FeaturesMain