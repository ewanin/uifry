import React from 'react'
import data from '../../../../public/data.json';

const AdvantagesImage = () => {

    const { mainPhoto } = data.advantages;

    return (
        <div className=''>
            <img src={mainPhoto} alt='Advantages Banner Image' />
        </div>
    )
}

export default AdvantagesImage