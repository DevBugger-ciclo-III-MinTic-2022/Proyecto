import React from 'react';
import logo from 'media/logo.png'

const Navbar = () => {
    return <nav className='bg-gradient-to-r from-green-800 to-green-500 h-28'>
        <header>
            <ul className='flex flex-col items-center my-3'>
                <li>
                    <img src={logo}  alt='imagen' className='max-h-16'/>
                </li>   
            </ul>    
        </header>
    </nav>;
    
};

export default Navbar;
