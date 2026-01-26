import "./ProductoDetalles.css";

const ProductoDetalles = ({ datos }) => {
    const precioFormateado = (datos.precio).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    });
    return (
        <div className='plantillaProducto'>
            <img src={datos.imagen} alt={datos.nombre} />
            <div className='datosPrincipales'>
                <h3>{datos.nombre}</h3>
                <p>{datos.descripcion}</p>
            </div>
            <div className='datosSecundarios'>
                <ul>
                    <li><strong>Precio: </strong>{precioFormateado}</li>
                    <li><strong>Peso: </strong>{datos.peso}</li>
                    <li><strong>Categoria: </strong>{datos.categoria}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProductoDetalles;
