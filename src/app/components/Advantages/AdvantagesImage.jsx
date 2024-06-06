import React from 'react';
import data from '../../../../public/data.json';

// Functional component for displaying advantages image
const AdvantagesImage = () => {
    // Destructure mainPhoto from data
    const { mainPhoto } = data.advantages;

    return (
        <div className=''>
            {/* Display mainPhoto */}
            <img src={mainPhoto} alt='Advantages Banner Image' />
        </div>
    );
};

export default AdvantagesImage;