import React from 'react';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';

// Main footer component containing FooterOne and FooterTwo
const FooterMain = () => {
  return (
    <div className='xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] py-10'>
      {/* Render FooterOne component */}
      <FooterOne />
      {/* Render FooterTwo component */}
      <FooterTwo />
    </div>
  );
}

export default FooterMain;