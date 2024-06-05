import React from 'react'
import FooterOne from './FooterOne'
import FooterTwo from './FooterTwo'

const FooterMain = () => {
  return (
    <div className='xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] py-10'>
        <FooterOne />
        <FooterTwo />
    </div>
  )
}

export default FooterMain