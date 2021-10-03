import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
    return <nav>
        <div>
            <ul className='bg-blue-50 w-2/5 mx-auto my-24 justify-between h-12 relative rounded-md border-2'>
                <li className='inline-block mx-6 my-3'><span className='text-blue-500 text-center p-2 mx-12 font-bold text-lg'>Ventas</span>
                    <ul className='absolute my-1.5 border-2 bg-blue-50 rounded-md'>
                        <li className='px-2 py-2 '><Link to='/ventas/registro' className='block no-underline hover:text-green-300'>Realizar Venta</Link></li>
                        <li className='px-2 py-2'><Link to='/ventas/productos' className='block no-underline hover:text-green-300'>Listado de Productos</Link></li>
                        <li className='px-2 py-2'><Link to='/ventas/reportes' className='block no-underline hover:text-green-300'>Informe de Ventas</Link></li>
                    </ul> 
                </li>   
                <li className='inline-block mx-6 rounded-md'><span className='text-blue-500 text-center p-1 mx-9 font-bold text-lg'>Gestión de Usuarios</span>
                    <ul className='absolute my-1.5 border-2 bg-blue-50 rounded-md'>
                        <li className='px-2 py-2'><Link to='/usuarios' className='no-underline hover:text-green-300'>Listado de Usuarios</Link></li>
                        <li className='px-2 py-2'><Link to='/login' className='block no-underline hover:text-green-300'>Login</Link></li>
                    </ul>
                </li>
            </ul>
            </div>
    </nav>;
};

export default Index;
