import { nanoid } from 'nanoid';
import React, { useState, useEffect, useRef } from 'react';
import { crearVenta } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';


const Ventas = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosTabla, setProductosTabla] = useState([]);
 //esto es un comentario

  useEffect(() => {
    const fetchVendedores = async () => {
      await obtenerUsuarios(
        (response) => {
          console.log('respuesta de usuarios', response);
          setVendedores(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchVendedores();
    fetchProductos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });

    console.log('form data', formData);

    const listaProductos = Object.keys(formData)
      .map((k) => {
        if (k.includes('producto')) {
          return productosTabla.filter((p) => p._id === formData[k])[0];
        }
        return null;
      })
      .filter((p) => p);

    console.log('lista antes de cantidad', listaProductos);

    console.log('lista despues de cantidad', listaProductos);

    const datosVenta = {
      vendedor: vendedores.filter((p) => p._id === formData.vendedor)[0],
      unidad: formData.valor,
      productos: listaProductos,
    };

    await crearVenta(
      datosVenta,
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div className='flex h-full w-full items-center justify-center my-9'>
      <form ref={form} onSubmit={submitForm} className='flex flex-col h-full'>
        <h1 className='text-3xl font-extrabold text-gray-900 my-3'>Registro de ventas</h1>
        <label className='flex flex-col' htmlFor='vendedor'>
          <span className='text-2xl font-gray-900'>***Informacion General***</span>
          <div className='border-2 rounded-md h-16 my-3 bg-green-100'>
            <span className='px-2'>Información del vendedor:</span>
          <select name='vendedor' className='p-2 my-2 mx-4 bg-green-100' defaultValue='' required >
            <option value='' disabled> 
              Seleccione vendedor:
            </option>
            {vendedores.map((el) => {
              return <option key={nanoid()} value={el._id}>{`${el.name}`}</option>;
            })}
          </select>
          </div>
        </label>

        <TablaProductos
          productos={productos}
          setProductos={setProductos}
          setProductosTabla={setProductosTabla}
        />

        <label className='flex flex-col'>
          <span className='text-2xl font-gray-900'>Valor Total Venta</span>
          <input
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            name='valor'
            required
          />
        </label>
        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-300 text-green-900 font-bold'
        >
          Crear Venta
        </button>
      </form>
    </div>
  );
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
  const [productoAgregar, setProductoAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);

  useEffect(() => {
    setProductosTabla(filasTabla);
  }, [filasTabla, setProductosTabla]);

  const agregarNuevoProducto = () => {
    setFilasTabla([...filasTabla, productoAgregar]);
    setProductos(productos.filter((p) => p._id !== productoAgregar._id));
    setProductoAgregar({});
  };

  const eliminarProducto = (productoEliminar) => {
    setFilasTabla(filasTabla.filter((p) => p._id !== productoEliminar._id));
    setProductos([...productos, productoEliminar]);
  };

  const modificarProducto = (producto, unidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === producto.id) {
          ft.unidad = unidad;
          ft.total = producto.valor * unidad;
        }
        return ft;
      })
    );
  };

  return (
    <div>
      <div className='flex border-2 rounded-md my-3 bg-green-100 h-16'>
        <label className='flex flex-col' htmlFor='producto'>
          <div>
          <select
            className='p-2 bg-green-100 my-2'
            value={productoAgregar._id ?? ''}
            onChange={(e) =>
              setProductoAgregar(productos.filter((p) => p._id === e.target.value)[0])
            }
          >
            <option disabled value=''>
              Seleccione un producto
            </option>
            {productos.map((el) => {
              return (
                <option
                  key={nanoid()}
                  value={el._id}
                >{`${el.nombre}`}</option>
              );
            })}
          </select>
          </div>
        </label>
        <button
          type='button'
          onClick={() => agregarNuevoProducto()}
          className='col-span-2 bg-green-400 p-2 rounded-md my-2 mx-4 shadow-md hover:bg-green-600 text-white'
        >
          Agregar Producto
        </button>
      </div>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th> 
            <th>Valor Unitario</th>      
            <th>Total</th>
            <th>Eliminar</th>
            <th className='hidden'>Input</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <FilaProducto
                key={el._id}
                pro={el}
                index={index}
                eliminarProducto={eliminarProducto}
                modificarProducto={modificarProducto}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ pro, index, eliminarProducto, modificarProducto }) => {
  const [producto, setProducto] = useState(pro);
  useEffect(() => {
    console.log('pro', producto);
  }, [producto]);

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>
        <label htmlFor={`valor_${index}`}>
          <input
            type='number'
            name={`unidad_${index}`}
            value={producto.unidad}
            onChange={(e) => {
              modificarProducto(producto, e.target.value === '' ? '0' : e.target.value);
              setProducto({
                ...producto,
                unidad: e.target.value === '' ? '0' : e.target.value,
                total:
                  parseFloat(producto.precio) *
                  parseFloat(e.target.value === '' ? '0' : e.target.value),
              });
            }}
          />
        </label>
      </td>
      <td>{parseFloat(producto.total ?? 0)}</td>
      <td>
        <i
          onClick={() => eliminarProducto(producto)}
          className='fas fa-minus text-red-500 cursor-pointer'
        />
      </td>
      <td className='hidden'>
        <input hidden defaultValue={producto._id} name={`producto_${index}`} />
      </td>
    </tr>
  );
};

export default Ventas;
