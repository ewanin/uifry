import React from 'react'
import data from '../../../../public/data.json';

const TestimonialContent = () => {

    const { subheading, content, name, photo1, photo2, photo3, photo4, photo5 } = data.testimonial;

    return (
        <div className='relative flex flex-col gap-6 w-[460px]'>
            <h2 className='text-[28px] leading-[28px] capitalize'>{subheading}</h2>

            <h3 className='text-[18px] leading-[28px] opacity-50'>{content}</h3>

            <div className=' flex items-center gap-2'>
                <img src={photo1} alt='Testi1' />
                <img src={photo2} alt='Testi2' className=' opacity-50' />
                <img src={photo3} alt='Testi3' className=' opacity-50' />
                <img src={photo4} alt='Testi4' className=' opacity-50' />
                <img src={photo5} alt='Testi5' className=' opacity-50' />
            </div>

            <h2 className='text-[18px] leading-[28px] capitalize'>{name}</h2>

        </div>
    )
}

export default TestimonialContent