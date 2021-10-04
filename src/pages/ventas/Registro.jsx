
import React from 'react';

const Registro = () => {
    return (
        <div>
           <div className='border-2 border-green-600 rounded-md w-3/5 mx-auto h-26'>
                <label className='mx-3 text-green-600 font-bold'>Datos del cliente</label>
               <form className='flex flex-wrap justify-between'>
                   <input type='hidden' name='action' value='addCliente'></input>
                   <input type='hidden' id='idcliente' name='idcliente' value='' required></input>
                   <div className='mx-2 my-2'>
                       <label>Nit</label>
                       <input type='text' name='nit-cliente' id='nit-cliente'className='border-2 rounded-md mx-1'></input>
                   </div>
                   <div className='mx-2 my-2'>
                       <label>Nombre</label>
                       <input className='border-2 rounded-md mx-1' type='text' name='nom-cliente' id='nom-cliente' disabled required></input>
                   </div>
                   <div className='mx-2 my-2'>
                       <label>Telefono</label>
                       <input className='border-2 rounded-md mx-1' type='number' name='tel-cliente' id='tel-cliente' disabled required></input>
                   </div>
                   <div className='mx-2 my-2'>
                       <label>Direccion</label>
                       <input className='border-2 rounded-md mx-1' type='text' name='dir-cliente' id='dir-cliente' disabled required></input>
                   </div>
                   <div className='mx-2 my-2'>
                       <button className='border-2 rounded-md p-1 bg-indigo-600' type='submit'>Guardar</button>
                   </div>
               </form>
            </div> 
            <div>
                <h4 className='text-center text-green-900 font-bold my-9'>Datos de venta</h4>
                <div className='border-2 border-green-600 rounded-md w-3/5 mx-auto my-6 h-26 flex justify-between h-20'>
                    <div>
                        <label>Vendedor</label>
                        <p>Pepito Perez</p>
                    </div>
                    <div>
                        <label>Acciones</label>
                        <div id='acciones-venta'>
                            <button className='border-2 bg-red-500 rounded-md p-1' type='reset'>Anular</button>
                            <button className='border-2 bg-indigo-600 rounded-md p-1' type='submit'>Procesar</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className='mx-auto border-2 border-green-600 my-9'>
                <thead>
                    <tr>
                        <th className='border-2 border-green-600 text-center'>Referencia</th>
                        <th className='border-2 border-green-600 text-center'>Descripción</th>
                        <th className='border-2 border-green-600 text-center'>Existencia</th>
                        <th className='border-2 border-green-600 text-center'>Cantidad</th>
                        <th className='border-2 border-green-600 text-center'>Precio unitario</th>
                        <th className='border-2 border-green-600 text-center'>Precio total</th>
                        <th className='border-2 border-green-600 text-center'>Acción</th>
                    </tr> 
                    <tr>
                        <td className='border-2 border-green-600 text-center'>
                            <input type='text' name='ref-producto' id='id-ref-producto'></input>
                        </td>
                        <td className='border-2 border-green-600 text-center' id='descripcion'>-</td>
                        <td className='border-2 border-green-600 text-center' id='existencia'>-</td>
                        <td className='border-2 border-green-600 text-center'>
                            <input type='text' name='cant-producto' id='cant-producto' value='0' min='1' disabled></input>
                        </td>
                        <td className='border-2 border-green-600 text-center' id='precio-unitario'>0.00</td>
                        <td className='border-2 border-green-600 text-center' id='precio-total'>0.00</td>
                        <td><button className='border-2 bg-green-600 rounded-md p-1' type='submit' id='agregar-producto'>Agregar producto</button></td>  
                    </tr>
                    <tr>
                        <td className='border-2 border-green-600 text-center'>Referencia</td>
                        <td className='border-2 border-green-600 text-center' colSpan='2'>Descripción</td>
                        <td className='border-2 border-green-600 text-center'>Cantidad</td>
                        <td className='border-2 border-green-600 text-center'>Precio</td>
                        <td className='border-2 border-green-600 text-center'>Precio total</td>
                        <td className='border-2 border-green-600 text-center'>Accion</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-2 border-green-600 text-center'>ARS-001</td>
                        <td className='border-2 border-green-600 text-center' colSpan='2'>Curcuma</td>
                        <td className='border-2 border-green-600 text-center'>1</td>
                        <td className='border-2 border-green-600 text-center'>7.000</td>
                        <td className='border-2 border-green-600 text-center'>7.000</td>
                        <td className='border-2 border-green-600 text-center'><button className='border-2 bg-red-500 rounded-md p-1'>Eliminar</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='5' className='border-2 border-green-600 text-center'>Subtotal</td>
                        <td className='border-2 border-green-600 text-center'>7.000</td>
                    </tr>
                    <tr>
                        <td colSpan='5' className='border-2 border-green-600 text-center'>IVA(19%)</td>
                        <td className='border-2 border-green-600 text-center'>1.330</td>
                    </tr>
                    <tr>
                        <td colSpan='5' className='border-2 border-green-600 text-center'>Total</td>
                        <td className='border-2 border-green-600 text-center'>7.000</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Registro;
