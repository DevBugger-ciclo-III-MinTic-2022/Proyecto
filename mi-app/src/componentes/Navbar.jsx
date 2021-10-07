import React from 'react';
import { Link } from 'react-router-dom';
import TriggerDarkMode from './TriggerDarkMode';
import logo from 'media/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-green-800 to-green-500 h-28'>
      <ul className='flex w-full justify-between my-3'>
        <li><img src={logo}  alt='imagen' className='max-h-16'/></li>
        <li className='text-white font-bold'>Nuestra empresa</li>
        <li className='text-white font-bold'>Nuestros Clientes</li>
        <li className='px-3'>
          <Link to='/login'>
            <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
              Iniciar Sesión
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
