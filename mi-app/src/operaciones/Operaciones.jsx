export const operacion = ()=>{
    var cantidadVenta = document.getElementById('cantidadVenta').value;
    var precioUnitario = document.getElementById('precioUnitario').value;
    document.getElementById('total').value = (cantidadVenta*precioUnitario);
};
