import React from 'react';
import logo from 'media/logo.png';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className='bg-gradient-to-r from-green-800 to-green-500 h-28'>
      <ul className='flex w-full justify-between my-3'>
        <li><img src={logo}  alt='imagen' className='max-h-16'/></li>
        <li className='text-white font-bold'>Nuestra empresa</li>
        <li className='text-white font-bold'>Nuestros Clientes</li>
        <li className='px-3'>
            <button onClick={() => loginWithRedirect()} className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
              Iniciar Sesión
            </button>       
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
