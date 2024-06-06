import Image from 'next/image'
import React from 'react'
import featuresBannerImage from '../../../../public/featuresBannerImage.png'

const FeaturesImage = () => {
    return (
        <div className='lg:order-1 order-2'>
            <Image src={featuresBannerImage} alt='Features Banner Image' />
        </div>
    )
}

export default FeaturesImage