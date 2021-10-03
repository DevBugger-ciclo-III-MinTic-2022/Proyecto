import producto1 from 'media/producto1.jpeg'
import producto2 from 'media/producto2.jpeg'
import React from 'react';

const Registro = () => {
    return (
        <div>
            <table className='mx-auto border-2 border-green-600'>
               <tr>
                   <th className='border-2 border-green-600 text-center'>Imagen</th>
                   <th className='border-2 border-green-600 text-center'>Nombre</th>
                   <th className='border-2 border-green-600 text-center'>Referencia</th>
                   <th className='border-2 border-green-600 text-center'>Cantidad</th>
                   <th className='border-2 border-green-600 text-center'>Precio unitario</th>
                   <th className='border-2 border-green-600 text-center'>Precio total</th>
                </tr> 
                <tr>
                    <td className='border-2 border-green-600 text-center'><img src={producto1} alt="Producto1" className='h-20 px-7 my-3'/></td>
                    <td className='border-2 border-green-600 text-center'>Harina de Garbanzo</td>
                    <td className='border-2 border-green-600 text-center'>AR-001</td>
                    <td className='border-2 border-green-600 text-center'><input type='number' id='valor1' min='1' max='15'></input></td>
                    <td className='border-2 border-green-600 text-center'>23.000</td>
                    <td className='border-2 border-green-600 text-center'>46.000</td>
                </tr>
                <tr>
                    <td className='border-2 border-green-600 text-center'><img src={producto2} alt="Producto2" className='h-20 px-7 my-3'/></td>
                    <td className='border-2 border-green-600 text-center'>Cereal multigrano</td>
                    <td className='border-2 border-green-600 text-center'>AR-002</td>
                    <td className='border-2 border-green-600 text-center'><input type='number' id='valor1' min='1' max='15'></input></td>
                    <td className='border-2 border-green-600 text-center'>15.000</td>
                    <td className='border-2 border-green-600 text-center'>15.000</td>
                </tr>
                <tr className='text-center'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span className='text-red-600 font-medium'>Total:</span><span className='font-medium'>61.000</span></td>
                </tr>
            </table>
            <div className='flex justify-center'>
                <button className='bg-green-600 border-2 rounded-full px-2 my-3'>Comprar</button>
            </div>    
        </div>
    );
};

export default Registro;
