import React from 'react';
import producto1 from 'media/producto1.jpeg'
import producto2 from 'media/producto2.jpeg'
import producto3 from 'media/producto3.jpeg'
import producto4 from 'media/producto4.jpeg'
import producto5 from 'media/producto5.jpeg'
import producto6 from 'media/producto6.jpeg'
import {Tooltip} from '@material-ui/core';

const Index = () => {
  return (
    <div>
        <h2 className='text-center text-green-800 my-9 font-medium text-xl'>Productos Destacados</h2>
            <div className='bg-green-500 border-2 rounded-lg h-36 w-3/5 mx-auto my-16'>
                <ul className='flex justify-between'>
                    <li>
                        <Tooltip title='Harina de Garbanzo' arrow>
                        <img src={producto1} alt="Producto1" className='h-20 px-7 my-3'/>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title='Cereal Multigrano' arrow>
                        <img src={producto2} alt="Producto2" className='h-20 px-7 my-3'/>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title='Colágeno' arrow>   
                        <img src={producto3} alt="Producto3" className='h-20 px-7 my-3'/>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title='Aromática de frutas' arrow>
                        <img src={producto4} alt="Producto4" className='h-20 px-7 my-3'/> 
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title='Calcio + Fibra' arrow>
                        <img src={producto5} alt="Producto5" className='h-20 px-7 my-3'/>
                        </Tooltip>
                    </li> 
                    <li>
                        <Tooltip title='Curcuma' arrow>
                        <img src={producto6} alt="Producto6" className='h-20 px-7 my-3'/>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Index;
