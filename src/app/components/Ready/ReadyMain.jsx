import Image from 'next/image'
import React from 'react'
import ReadyContent from './ReadyContent'
import ReadyImage from './ReadyImage'
import circleBackImage from '../../../../public/images/circleBackImage.png'


const ReadyMain = () => {
    return (
        <div className='relative'>
            <Image src={circleBackImage} alt='Back Image' className='absolute -left-[5%] -top-1/3 z-0' />
            <div className='relative z-10 mx-[175px] my-[125px] py-6 bg-readyBanner bg-cover bg-no-repeat rounded-lg'>
                <div className='flex justify-between items-center'>
                    <ReadyContent />
                    <ReadyImage />
                </div>
            </div>
        </div>
    )
}

export default ReadyMain