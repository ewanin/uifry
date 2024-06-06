import React from 'react';
import Image from 'next/image';
import featuresBannerImage from '../../../../public/featuresBannerImage.png';

// Functional component for displaying features image
const FeaturesImage = () => {
    return (
        <div className='lg:order-1 order-2'>
            {/* Render features banner image */}
            <Image src={featuresBannerImage} alt='Features Banner Image' />
        </div>
    );
};

export default FeaturesImage;