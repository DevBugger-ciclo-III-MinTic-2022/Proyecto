import React from 'react'

const Reportes = () => {
    return (
        <div>
            <h2 className='text-green-700 font-bold text-center text-4xl'>Reporte de ventas</h2>
            <div className='font-medium text-center my-4'>
                <label>Seleccione rango de consulta</label>
                <input type="date" name="fecha" min="2018-03-25" max="2021-10-03" step="2" className='mx-3'/>
            </div>
            <table className='mx-auto border-2 border-green-600 my-9'>
                <thead>
                    <tr>
                        <th className='border-2 border-green-600 text-center'>Referencia</th>
                        <th className='border-2 border-green-600 text-center'>Descripción</th>
                        <th className='border-2 border-green-600 text-center'>Cantidad</th>
                        <th className='border-2 border-green-600 text-center'>Precio unitario</th>
                        <th className='border-2 border-green-600 text-center'>IVA(19%)</th>
                        <th className='border-2 border-green-600 text-center'>Precio total</th>
                    </tr> 
                    <tr>
                        <td className='border-2 border-green-600 text-center'>
                            <input type='text' name='ref-producto' id='id-ref-producto'></input>
                        </td>
                        <td className='border-2 border-green-600 text-center' id='descripcion'>-</td>
                        <td className='border-2 border-green-600 text-center'>
                            <input type='text' name='cant-producto' id='cant-producto' value='0' min='1' disabled></input>
                        </td>
                        <td className='border-2 border-green-600 text-center' id='precio-unitario'>0.00</td>
                        <td className='border-2 border-green-600 text-center' value='0.19'>0.00</td>
                        <td className='border-2 border-green-600 text-center' id='precio-total'>0.00</td>  
                    </tr>
                    <tr>
                        <td className='border-2 border-green-600 text-center'>Referencia</td>
                        <td className='border-2 border-green-600 text-center'>Descripción</td>
                        <td className='border-2 border-green-600 text-center'>Cantidad</td>
                        <td className='border-2 border-green-600 text-center'>Precio unitario</td>
                        <td className='border-2 border-green-600 text-center'>IVA(19%)</td>
                        <td className='border-2 border-green-600 text-center'>Precio total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-2 border-green-600 text-center'>ARS-001</td>
                        <td className='border-2 border-green-600 text-center'>Curcuma</td>
                        <td className='border-2 border-green-600 text-center'>1</td>
                        <td className='border-2 border-green-600 text-center'>7.000</td>
                        <td className='border-2 border-green-600 text-center'>1.330</td>
                        <td className='border-2 border-green-600 text-center'>7.000</td>
                    </tr>
                    <tr>
                        <td className='border-2 border-green-600 text-center'>ARS-002</td>
                        <td className='border-2 border-green-600 text-center'>Cereal multigrano</td>
                        <td className='border-2 border-green-600 text-center'>2</td>
                        <td className='border-2 border-green-600 text-center'>15.000</td>
                        <td className='border-2 border-green-600 text-center'>2.850</td>
                        <td className='border-2 border-green-600 text-center'>30.000</td>
                    </tr>
                    <tr>
                        <td className='border-2 border-green-600 text-center'>ARS-003</td>
                        <td className='border-2 border-green-600 text-center'>Aromatica de frutas</td>
                        <td className='border-2 border-green-600 text-center'>5</td>
                        <td className='border-2 border-green-600 text-center'>5.000</td>
                        <td className='border-2 border-green-600 text-center'>950</td>
                        <td className='border-2 border-green-600 text-center'>25.000</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='5' className='border-2 border-green-600 text-center'>Total</td>
                        <td className='border-2 border-green-600 text-center'>62.000</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Reportes;
