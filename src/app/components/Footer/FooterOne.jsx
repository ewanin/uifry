import React from 'react';
import data from '../../../../public/data.json';

// FooterOne component displaying sections and items
const FooterOne = () => {
    return (
        <div className='flex xl:flex-nowrap sm:flex-wrap sm:flex-row flex-col justify-between'>
            {/* Map through footer sections */}
            {data.footer.map((section, index) => (
                <div key={index} className='flex flex-col sm:gap-4 gap-2 capitalize'>
                    {/* Section title */}
                    <h3 className='text-[32px] leading-[42px] sm:mt-0 mt-6'>{section.title}</h3>
                    {/* Map through items */}
                    {section.items.map((item, idx) => (
                        <React.Fragment key={idx}>
                            {/* Check if item is a string or object */}
                            {typeof item === 'string' ? (
                                // Render string item
                                <h3 className='text-[16px] leading-[26px]'>{item}</h3>
                            ) : (
                                // Render object item with icon
                                <div className='flex items-center sm:gap-2 gap-1'>
                                    <img src={item.icon} alt="Logo" />
                                    <h3 className='text-[16px] leading-[26px]'>{item.text}</h3>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    {/* Render newsletter input and button */}
                    {section.title === 'Newsletter' && (
                        <div className='relative font-clashMedium sm:w-[340px] h-[76px] flex sm:flex-row flex-col sm:gap-0 gap-4 sm:items-center justify-between'>
                            <input type="email" placeholder={section.items[0].inputPlaceholder} className='p-[10px] w-full h-full shadow-custom' />
                            <button className='bg-black hover:bg-pink text-white hover:text-black text-[16px] leading-[26px] rounded px-10 py-4 sm:absolute left-1/2'>{section.items[0].buttonText}</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FooterOne;