import producto1 from 'media/producto1.jpeg'
import producto2 from 'media/producto2.jpeg'
import producto3 from 'media/producto3.jpeg'
import producto4 from 'media/producto4.jpeg'
import producto5 from 'media/producto5.jpeg'
import producto6 from 'media/producto6.jpeg'
import React from 'react';

const Productos = () => {
    return (
        <div>
            <h2 className='text-center text-green-700 font-medium text-xl'>Nuestros Productos</h2>
            <div className='bg-green-200 border-2 rounded-lg h-28 w-3/5 mx-auto my-10'>
                <ul className='flex justify-between'>
                    <li>
                        <img src={producto1} alt="Producto1" className='h-20 px-7 my-3'/>
                    </li>
                    <li>
                        <img src={producto2} alt="Producto2" className='h-20 px-7 my-3'/>
                    </li>
                    <li>
                        <img src={producto3} alt="Producto3" className='h-20 px-7 my-3'/>
                    </li>
                    <li>
                        <img src={producto4} alt="Producto4" className='h-20 px-7 my-3'/> 
                    </li>
                    <li>
                        <img src={producto5} alt="Producto5" className='h-20 px-7 my-3'/>
                    </li> 
                    <li>
                        <img src={producto6} alt="Producto6" className='h-20 px-7 my-3'/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Productos;
