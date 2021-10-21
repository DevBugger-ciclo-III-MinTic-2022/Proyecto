import React from 'react'
import logo from 'media/logo.png'

const Footer = () => {
    return <div className='bg-gradient-to-r from-green-800 to-green-500 flex h-24 items-center justify-center'>
        <img src={logo}  alt='imagen' className='max-h-12'/>
        <span className='mx-7 text-white font-medium'>Antojate de lo natural</span>
    </div>;
};

export default Footer;
