'use client'
import React, { useState } from 'react';
import data from '../../../../public/data.json';

const HeaderMain = () => {
    const { logo, menuItems, downloadButtonText } = data.header;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={`xl:px-[175px] lg:px-[125px] sm:px-[75px] px-[25px] py-6 flex justify-between items-center bg-[#ffffffd6] w-full fixed top-0 z-20`}>
            <div className='flex items-center gap-10'>
                <img src={logo} alt='Logo' />
                <div className={`hidden lg:flex items-center gap-6 text-[20px] leading-[26px] capitalize text-gray-900`}>
                    {menuItems.map((menuItem, index) => (
                        <h3 key={index}>{menuItem.text}</h3>
                    ))}
                </div>
            </div>
            <button className={`font-clashMedium lg:hidden bg-black text-white text-[16px] leading-[26px] rounded px-4 py-2`} onClick={toggleMobileMenu}>
                ☰
            </button>
            <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isMobileMenuOpen ? '' : 'hidden'}`} onClick={closeMobileMenu}></div>
            <div className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg ${isMobileMenuOpen ? '' : 'transform translate-x-full'} transition-transform ease-in-out`}>
                <div className="flex flex-col items-start p-8 capitalize">
                    <button className="absolute top-4 right-4 font-clashMedium lg:hidden bg-black text-white text-[16px] leading-[26px] rounded px-4 py-2" onClick={closeMobileMenu}>✕</button>
                    {menuItems.map((menuItem, index) => (
                        <h3 key={index} className="mb-4">{menuItem.text}</h3>
                    ))}
                    <button className="font-clashMedium bg-black text-white hover:bg-pink hover:text-black text-[16px] leading-[26px] rounded px-4 py-2">{downloadButtonText}</button>
                </div>
            </div>
            <button className={`font-clashMedium lg:block hidden bg-black text-white hover:bg-pink hover:text-black text-[16px] leading-[26px] rounded px-12 py-4`} onClick={toggleMobileMenu}>
                {downloadButtonText}
            </button>
        </div>
    );
};

export default HeaderMain;
