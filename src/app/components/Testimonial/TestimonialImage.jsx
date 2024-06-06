import React from 'react';
import data from '../../../../public/data.json';

// TestimonialImage component displaying testimonial banner image
const TestimonialImage = () => {
    // Destructure main photo from data.json
    const { mainPhoto } = data.testimonial;

    return (
        <div className=''>
            {/* Display testimonial banner image */}
            <img src={mainPhoto} alt='Testimonial Banner Image' />
        </div>
    );
}

export default TestimonialImage;