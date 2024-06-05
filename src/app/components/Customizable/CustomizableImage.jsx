import React from 'react'
import data from '../../../../public/data.json';

const CustomizableImage = () => {

    const { mainPhoto } = data.customizable;

    return (
        <div className='lg:order-1 order-2'>
            <img src={mainPhoto} alt='Customizable Banner Image' />
        </div>
    )
}

export default CustomizableImage