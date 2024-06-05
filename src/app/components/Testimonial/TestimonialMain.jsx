import React from 'react'
import TestimonialImage from './TestimonialImage'
import TestimonialContent from './TestimonialContent'
import TestimonialHeading from './TestimonialHeading'

const TestimonialMain = () => {
    return (
        <div className=' px-[175px] mt-[125px]'>
            <TestimonialHeading />
            <div className='flex justify-between items-center gap-10'>
                <TestimonialImage />
                <TestimonialContent />
            </div>
        </div>
    )
}

export default TestimonialMain