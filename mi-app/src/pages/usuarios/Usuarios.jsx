import React from 'react';

const Usuarios = () => {
    return <div>
        <table className='w-2/5 bg-green-100 justify-between mx-auto my-24'>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Angie Rivera</td>
                <td>angierivera@gmail.com</td>
                <td>Administrador</td>
                <td>Editar/Eliminar</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Santiago Villa</td>
                <td>santivilla@gmail.com</td>
                <td>Supervisor</td>
                <td>Editar/Eliminar</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Pepito Perez</td>
                <td>pepitoperez@gmail.com</td>
                <td>Vendedor</td>
                <td>Editar/Eliminar</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Jeronimo Correa</td>
                <td>jerocorrea@gmail.com</td>
                <td>Vendedor</td>
                <td>Editar/Eliminar</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Juan Rodriguez</td>
                <td>juanro20@gmail.com</td>
                <td>Supervisor</td>
                <td>Editar/Eliminar</td>
            </tr>
        </table>
    </div>;

};

export default Usuarios;
