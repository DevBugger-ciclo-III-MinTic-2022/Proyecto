import React from 'react';

const Usuarios = () => {
    return <div>
        <div className='flex w-2/5 justify-between'>
            <h3 className='text-green-500'>Lista de Usuarios</h3>
            <button className='border-2 rounded-full p-2'>Agregar usuario</button>
        </div>
        <table className='w-2/4 bg-green-100 justify-between mx-auto my-24 border-collapse border-2 border-green-600'>
            <tr>
                <th className='border-2 border-green-600'>ID</th>
                <th className='border-2 border-green-600'>Nombre</th>
                <th className='border-2 border-green-600'>Correo</th>
                <th className='border-2 border-green-600'>Rol</th>
                <th className='border-2 border-green-600'>Acciones</th>
            </tr>
            <tr>
                <td className='border-2 border-green-600'>1</td>
                <td className='border-2 border-green-600'>Angie Rivera</td>
                <td className='border-2 border-green-600'>angierivera@gmail.com</td>
                <td className='border-2 border-green-600'>Administrador</td>
                <td className='border-2 border-green-600'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600'>2</td>
                <td className='border-2 border-green-600'>Santiago Villa</td>
                <td className='border-2 border-green-600'>santivilla@gmail.com</td>
                <td className='border-2 border-green-600'>Supervisor</td>
                <td className='border-2 border-green-600'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600'>3</td>
                <td className='border-2 border-green-600'>Pepito Perez</td>
                <td className='border-2 border-green-600'>pepitoperez@gmail.com</td>
                <td className='border-2 border-green-600'>Vendedor</td>
                <td className='border-2 border-green-600'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600'>4</td>
                <td className='border-2 border-green-600'>Jeronimo Correa</td>
                <td className='border-2 border-green-600'>jerocorrea@gmail.com</td>
                <td className='border-2 border-green-600'>Vendedor</td>
                <td className='border-2 border-green-600'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600'>5</td>
                <td className='border-2 border-green-600'>Juan Rodriguez</td>
                <td className='border-2 border-green-600'>juanro20@gmail.com</td>
                <td className='border-2 border-green-600'>Supervisor</td>
                <td className='border-2 border-green-600'>Editar/Eliminar</td>
            </tr>
        </table>
    </div>;

};

export default Usuarios;
