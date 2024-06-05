import React from 'react'
import data from '../../../../public/data.json';

const ReadyImage = () => {

    const { mainPhoto } = data.ready;

    return (
        <div className=''>
            <img src={mainPhoto} alt='Ready Phone Image' />
        </div>
    )
}

export default ReadyImage