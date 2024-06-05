import React from 'react'
import data from '../../../../public/data.json';

const FooterTwo = () => {

  const { title} = data.copyright;

  return (
      <div className='bg-gradient-to-r from-[#16161600] from-0% via-[#696969] via-50% to-[#16161600] to-100% mt-32 py-10 pt-10'>
      <h3 className='text-[16px] leading-[26px] text-center sm:-mt-[38.5px] -mt-[37.5px] -mb-10 p-10 bg-white'>{title}</h3>
    </div>
  )
}

export default FooterTwo