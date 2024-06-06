import React from 'react';
import data from '../../../../public/data.json';

// ReadyImage component displaying the image of the "Ready" section
const ReadyImage = () => {
    // Destructure mainPhoto from data.ready
    const { mainPhoto } = data.ready;

    return (
        <div className='md:block hidden'>
            {/* Render the image of the "Ready" section */}
            <img src={mainPhoto} alt='Ready Phone Image' />
        </div>
    );
}

export default ReadyImage;