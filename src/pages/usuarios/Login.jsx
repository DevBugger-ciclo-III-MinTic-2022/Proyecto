import React from 'react';
import { Link } from 'react-router-dom';
import Google from 'media/google_logo.png';
import home from 'media/home.png'

const Login = () => {
    return (
    <>
    <Link to='/'>
        <img src={home}  alt='imagen' className='h-9 w-9 mx-3 my-3 cursor-pointer hover:text-blue-600'/>    
    </Link>
    <div className='max-w-md w-full space-y-8 mx-auto'>
      <h3 className='mt-6 text-center text-3xl font-extrabold text-green-600'>
        Inicia sesión en tu cuenta
      </h3>
      <form className='mt-8 space-y-6'>
        <input type='hidden' name='remember' defaultValue='true' />
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <input
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Correo Electrónico'
            />
          </div>
          <div>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Contraseña'
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
            />
            <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
              Recuérdame
            </label>
          </div>

          <div className='text-sm'>
            <a href='/' className='font-medium text-indigo-600 hover:text-indigo-500'>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <Link to='/admin'>Inicia sesión</Link>
          </button>
        </div>

      </form>
    </div>
    <div className='flex items-center justify-center'>
      <span className='mx-4'>------------------------</span>
      <h2 className='my-4 text-center text-sm font-extrabold text-gray-900'>O</h2>
      <span className='mx-4'>------------------------</span>
    </div>
    <div className='max-w-md w-full mx-auto'>
      <div>
        <button
          type='submit'
          className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
        >
          <div className='flex items-center justify-start'>
            <img src={Google} alt='Logo Google' className='h-6 w-6' />
            <span className='mx-auto'>Continúa con Google</span>
          </div>
        </button>
      </div>
    </div>
  </>
    );
};

export default Login;