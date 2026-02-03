import { useContext } from 'react'
import { ContextoProducto } from '../context/ProveedorProducto.jsx'
import "./Confirmacion.css";

const Confirmacion = (props) => {

    const { productoABorrar, cambiarProductoABorrar, cambiarModoBorrado, borrarProductoSupabase } = useContext(ContextoProducto);

    return (
        <div id='marcoConfirmacion'>
            <h4>¿Seguro que quieres {props.accion} el producto {props.nombre}?</h4>
            <div className='decision'>
                <input type="button" value="Sí" onClick={() => { borrarProductoSupabase(productoABorrar.id) }} />
                <input type="button" value="No" onClick={() => {
                    cambiarProductoABorrar(null);
                    cambiarModoBorrado(false);
                }} />
            </div>
        </div>
    )
}

export default Confirmacion
