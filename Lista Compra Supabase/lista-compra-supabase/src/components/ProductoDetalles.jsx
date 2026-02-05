import "./ProductoDetalles.css";
import papelera from "../assets/img/borrar.png";
import edicion from "../assets/img/editar.png";
import { useContext, useEffect } from "react";
import { ContextoProducto } from "../context/ProveedorProducto.jsx";
import { ContextoListado } from "../context/ProveedorListado.jsx";
import useSesion from "../hooks/useSesion.js";


const ProductoDetalles = ({ datos, cantidad, comprado }) => {
    const precioFormateado = (datos.precio).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    });

    const { usuarioLogueado, comprobarSesion } = useSesion();
    const { productoEnListado, adaptarProductoEnListado } = useContext(ContextoListado);

    const { cambiarProductoABorrar, cambiarProductoAEditar, cambiarModoBorrado, cambiarModoEdicion } = useContext(ContextoProducto);

    useEffect(()=>{
        comprobarSesion();
        adaptarProductoEnListado();
    }, [])
    return (
        <div className='plantillaProducto'>
            <img src={datos.imagen} alt={datos.nombre} />
            <div className='datosPrincipales'>
                <h3>{datos.nombre}</h3>
                <p>{datos.descripcion}</p>
            </div>
            <div className='datosSecundarios'>
                <ul id="lista">
                    <li><strong>Precio: </strong>{precioFormateado}</li>
                    <li><strong>Peso: </strong>{datos.peso}</li>
                    <li><strong>Categoria: </strong>{datos.categoria}</li>
                </ul>
            </div>
            {usuarioLogueado && !productoEnListado && (<>
                <div id="cuadroBotones">
                    <img src={papelera} name="boton" alt="Eliminar producto" onClick={(evento) => {
                        cambiarProductoABorrar(datos);
                        cambiarModoBorrado(true);
                    }} />
                    <img src={edicion} name="boton" alt="Editar producto" onClick={(evento) => {
                        cambiarProductoAEditar(datos);
                        cambiarModoEdicion(true);
                    }} />
                </div>
            </>)}

        </div>
    )
}

export default ProductoDetalles;
