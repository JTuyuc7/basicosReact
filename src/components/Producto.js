import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;

    // Agregar los productos al carrito
    const seleccionarProducto = (id) =>{
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            ...carrito,
            ...producto
        ]);
    }

    //Eliminar un producto del carrito.

    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id);
        // Colocar los productos en en state
        agregarProducto(productos)

    }


    return ( 
        <div>
        <h2>{nombre}</h2> 
        <p>$ {precio}</p>

            {productos
            ? 
                (
                <button
                type="button"
                onClick={() => seleccionarProducto(id)}
                >Comprar</button>
                )
            : 
                (
                    <button
                    type="button"
                    onClick={()=> eliminarProducto(id) }
                    >Eliminar</button>

                )
            }

        </div>

    );
}
 
export default Producto;
