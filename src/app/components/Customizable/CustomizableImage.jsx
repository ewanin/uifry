import React from 'react'
import data from '../../../../public/data.json';

const CustomizableImage = () => {

    const { mainPhoto } = data.customizable;

    return (
        <div className=''>
            <img src={mainPhoto} alt='Customizable Banner Image' />
        </div>
    )
}

export default CustomizableImage