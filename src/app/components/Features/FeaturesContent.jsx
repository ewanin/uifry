import Image from 'next/image'
import React from 'react'
import fea1 from '../../../../public/svg/fea1.svg'
import fea2 from '../../../../public/svg/fea3.svg'
import fea3 from '../../../../public/svg/fea3.svg'
import circleBackImage from '../../../../public/images/circleBackImage.png'

const FeaturesContent = () => {
    return (
        <div className='relative flex flex-col gap-8 lg:order-2 order-1'>
            <div>
                <h3 className='text-pink text-[18px] leading-[28px] uppercase'>features</h3>
                <h1 className=' sm:text-[48px] text-[38px] sm:leading-[48px] leading-[38px] mt-1 capitalize'>uifry premium</h1>
            </div>
            <div className='xl:w-[640px] lg:w-[320px]  relative z-10'>
                <div className='flex items-center gap-2'>
                    <Image src={fea1} alt='fea1' />
                    <h2 className='text-[18px] leading-[28px] capitalize'>budgeting intervals</h2>
                </div>
                <h3 className='text-[18px] leading-[28px] opacity-50 mt-3'>
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </h3>
            </div>
            <div className='xl:w-[640px] lg:w-[320px] relative z-10'>
                <div className='flex items-center gap-2'>
                    <Image src={fea2} alt='fea2' />
                    <h2 className='text-[18px] leading-[28px] capitalize'>budgeting intervals</h2>
                </div>
                <h3 className='text-[18px] leading-[28px] opacity-50 mt-3'>
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </h3>
            </div>
            <div className='xl:w-[640px] lg:w-[320px]  relative z-10'>
                <div className='flex items-center gap-2'>
                    <Image src={fea3} alt='fea3' />
                    <h2 className='text-[18px] leading-[28px] capitalize'>budgeting intervals</h2>
                </div>
                <h3 className='text-[18px] leading-[28px] opacity-50 mt-3'>
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </h3>
            </div>

            <Image src={circleBackImage} alt='Back Image' className='absolute -right-1/2 z-0' />

        </div>
    )
}

export default FeaturesContent