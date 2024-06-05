import React from 'react';
import data from '../../../../public/data.json';

const HeaderMain = () => {
    const { logo, menuItems, downloadButtonText } = data.header;

    return (
        <div className='px-[175px] py-6 flex justify-between items-center backdrop-blur-[5px] bg-[#ffffff66] w-full fixed top-0 z-20'>
            <div className='flex items-center gap-10'>
                <img src={logo} alt='Logo' />
                <div className='flex items-center gap-6 text-[20px] leading-[26px] capitalize'>
                    {menuItems.map((menuItem, index) => (
                        <h3 key={index}>{menuItem.text}</h3>
                    ))}
                </div>
            </div>
            <button className='font-clashMedium bg-black hover:bg-pink text-white hover:text-black text-[16px] leading-[26px] rounded px-12 py-4'>{downloadButtonText}</button>
        </div>
    );
};

export default HeaderMain;
