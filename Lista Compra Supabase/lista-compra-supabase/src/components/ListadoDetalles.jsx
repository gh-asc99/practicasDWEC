import React from 'react'

const ListadoDetalles = ({ datos }) => {
    const articulosAlmacenados = datos.articulos;
    return (
        <div className='plantillaListado'>
            <div className='datosPrincipales'>
                <h3>{datos.nombre}</h3>
                <p>{datos.descripcion}</p>
            </div>
            <div className='datosSecundarios'>
                {articulosAlmacenados.length
                    ? articulosAlmacenados.map((producto, index) => (
                        <ProductoDetalles key={index} datos={producto} />
                    ))
                    : "No se han encontrado productos en este listado."}
            </div>

            <div id="cuadroBotones">
                <img src={papelera} name="boton" alt="Eliminar producto" onClick={(evento) => {
                    cambiarProductoABorrar(datos);
                    cambiarModoBorrado(true);
                }} />
            </div>

        </div>
    )
}

export default ListadoDetalles
