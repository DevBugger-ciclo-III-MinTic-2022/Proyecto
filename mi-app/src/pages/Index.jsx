import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
    return <nav>
            <ul className='bg-blue-50 w-2/5 mx-auto my-9 justify-between h-9 relative hover:text-green-300'>
                <li className='inline-block mx-6'><span className='hover:text-green-300 text-blue-500 text-center p-1 mx-12'>Ventas</span>
                    <ul className='absolute my-1 bg-blue-50'>
                        <li className='px-2 py-2 w-'><Link to='/ventas/registro' className='block no-underline hover:text-green-300'>Realizar Venta</Link></li>
                        <li className='px-2 py-2'><Link to='/ventas/productos' className='block no-underline hover:text-green-300'>Listado de Productos</Link></li>
                        <li className='px-2 py-2'><Link to='/ventas/reportes' className='block no-underline hover:text-green-300'>Informe de Ventas</Link></li>
                    </ul> 
                </li>   
                <li className='inline-block mx-6'><span className='hover:text-green-300 text-blue-500 mx-12 p-1'>Gestión de Usuarios</span>
                    <ul className='absolute my-1 mx-3 bg-blue-50'>
                        <li className='px-2 py-2'><Link to='/usuarios' className='no-underline hover:text-green-300'>Listado de Usuarios</Link></li>
                        <li className='px-2 py-2'><Link to='/login' className='block no-underline hover:text-green-300'>Login</Link></li>
                    </ul>
                </li>
            </ul>
    </nav>;
};

export default Index;
