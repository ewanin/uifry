import React from 'react'
import FaqHeading from './FaqHeading'
import FaqContent from './FaqContent'

const FaqMain = () => {
    return (
        <div className='xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] sm:mt-[125px] mt-[75px]'>
            <FaqHeading />
            <FaqContent />
        </div>
    )
}

export default FaqMain