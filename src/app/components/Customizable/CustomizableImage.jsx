import React from 'react';
import data from '../../../../public/data.json';

// Functional component for displaying customizable image
const CustomizableImage = () => {
    // Destructure mainPhoto from data
    const { mainPhoto } = data.customizable;

    return (
        <div className='lg:order-1 order-2'>
            {/* Display mainPhoto */}
            <img src={mainPhoto} alt='Customizable Banner Image' />
        </div>
    );
};

export default CustomizableImage;