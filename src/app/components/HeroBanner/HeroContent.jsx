import Image from 'next/image'
import React from 'react'
import circleBackImage from '../../../../public/circleBackImage.png'
import data from '../../../../public/data.json';


const HeroContent = () => {

  const { title, subtitle, btnName1, btnName2 } = data.hero;

  return (
    <div className='relative flex flex-col gap-6 xl:w-[640px] lg:w-[440px]'>

      <h1 className='capitalize sm:text-[64px] text-[44px] sm:leading-[64px] leading-[44px] relative z-10'>{title}</h1>

      <h3 className='text-[18px] leading-[28px] opacity-50 relative z-10'>{subtitle}</h3>

      <div className=' flex flex-wrap items-center sm:gap-10 gap-5 relative z-10'>

        <button className='flex items-center gap-2 bg-black hover:bg-pink text-white hover:text-black transition-all duration-300 w-fit px-6 py-4 rounded'>
          <div className='font-clashMedium text-[18px] leading-[28px] capitalize' fill='currentColor'>{btnName1}</div>
          <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="currentColor" />
          </svg>
        </button>

        <button className=' flex items-center gap-2 text-black hover:text-pink transition-all duration-300'>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14.5" cy="14.5" r="14" stroke="currentColor" />
            <path d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z" fill="currentColor" stroke="currentColor" />
          </svg>
          <div className='font-clashMedium text-[18px] leading-[28px] capitalize'>{btnName2}</div>
        </button>

      </div>

      <Image src={circleBackImage} alt='Back Image' className='absolute -top-1/2 right-0 z-0' />

    </div>
  )
}

export default HeroContent