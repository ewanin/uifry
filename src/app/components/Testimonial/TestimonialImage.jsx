import React from 'react'
import data from '../../../../public/data.json';

const TestimonialImage = () => {

    const { mainPhoto } = data.testimonial;

    return (
        <div className=''>
            <img src={mainPhoto} alt='Testimonial Banner Image' />
        </div>
    )
}

export default TestimonialImage