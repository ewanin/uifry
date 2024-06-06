import React from 'react'
import data from '../../../../public/data.json';

// Functional component for displaying FAQ content
const FaqContent = () => {
    // Destructure heading and content from data
    const { heading, content } = data.faq;

    return (
        <div className=' grid sm:grid-cols-2 grid-cols-1 gap-5'>
            {/* FAQ item with pink background */}
            <div className='bg-pink p-7 rounded-lg'>
                <h2 className='text-white text-[28px] leading-[28px] capitalize'>{heading}</h2>
                <h3 className=' text-white text-[18px] leading-[28px] capitalize'>{content}</h3>
            </div>

            {/* FAQ item without background */}
            <div className='p-7 rounded-lg'>
                <h2 className='text-[28px] leading-[28px] capitalize'>{heading}</h2>
                <h3 className='text-[18px] leading-[28px] capitalize opacity-50'>{content}</h3>
            </div>

            {/* FAQ item without background */}
            <div className='p-7 rounded-lg'>
                <h2 className='text-[28px] leading-[28px] capitalize'>{heading}</h2>
                <h3 className='text-[18px] leading-[28px] capitalize opacity-50'>{content}</h3>
            </div>

            {/* FAQ item with pink background */}
            <div className='bg-pink p-7 rounded-lg'>
                <h2 className='text-white text-[28px] leading-[28px] capitalize'>{heading}</h2>
                <h3 className=' text-white text-[18px] leading-[28px] capitalize'>{content}</h3>
            </div>

            {/* FAQ item with pink background */}
            <div className='bg-pink p-7 rounded-lg'>
                <h2 className='text-white text-[28px] leading-[28px] capitalize'>{heading}</h2>
                <h3 className=' text-white text-[18px] leading-[28px] capitalize'>{content}</h3>
            </div>

            {/* FAQ item without background */}
            <div className='p-7 rounded-lg'>
                <h2 className='text-[28px] leading-[28px] capitalize'>{heading}</h2>
                <h3 className='text-[18px] leading-[28px] capitalize opacity-50'>{content}</h3>
            </div>
        </div>
    )
}

export default FaqContent