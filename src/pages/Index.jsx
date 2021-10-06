import { useDarkMode } from 'context/darkMode';
import React from 'react';
import producto1 from 'media/producto1.jpeg'
import producto2 from 'media/producto2.jpeg'
import producto3 from 'media/producto3.jpeg'
import producto4 from 'media/producto4.jpeg'
import producto5 from 'media/producto5.jpeg'
import producto6 from 'media/producto6.jpeg'

const Index = () => {
  const { darkMode } = useDarkMode();
  return (
    <div>
            <h2 className='text-center text-black-500 px-50 my-50 font-medium text-xl'>Productos Destacados</h2>
            <div className='bg-green-500 border-2 rounded-lg h-36 w-3/5 mx-auto my-16'>
                <ul className='flex justify-between'>
                    <li>
                        <img src={producto1} alt="Producto1" className='h-20 px-7 my-3'/>
                        <span className='text-xs px-1 font-medium'>Harina de garbanzo</span>
                    </li>
                    <li>
                        <img src={producto2} alt="Producto2" className='h-20 px-7 my-3'/>
                        <span className='text-xs px-5 font-medium'>Cereal Multigrano</span>
                    </li>
                    <li>
                        <img src={producto3} alt="Producto3" className='h-20 px-7 my-3'/>
                        <span className='text-xs px-9 font-medium'>Colágeno</span>
                    </li>
                    <li>
                        <img src={producto4} alt="Producto4" className='h-20 px-7 my-3'/> 
                        <span className='text-xs px-6 font-medium'>Aromática de frutas</span>
                    </li>
                    <li>
                        <img src={producto5} alt="Producto5" className='h-20 px-7 my-3'/>
                        <span className='text-xs px-7 font-medium'>Calcio + fibra</span>
                    </li> 
                    <li>
                        <img src={producto6} alt="Producto6" className='h-20 px-7 my-3'/>
                        <span className='text-xs px-7 font-medium'>Cúrcuma</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Index;
