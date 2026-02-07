import "./Confirmacion.css";
import useProducto from '../hooks/useProducto.js';
import useListado from '../hooks/useListado.js';

const Confirmacion = (props) => {

    const { traerProductosSupabase, 
        productoABorrar, 
        cambiarProductoABorrar, 
        cambiarModoBorrado, 
        borrarProductoSupabase } = useProducto();

    const { traerListadosSupabase, 
        listadoABorrar, 
        borrarListadoSupabase, 
        cambiarListadoABorrar, 
        cambiarModoBorradoListado } = useListado();

    let metodoBorrarSupabase;
    let metodoCambiarElementoABorrar;
    let metodoCambiarBorrado;
    let metodoTraerElementosSupabase;
    let elemento;

    if(props.campo === "producto"){
        metodoBorrarSupabase = borrarProductoSupabase;
        metodoCambiarElementoABorrar = cambiarProductoABorrar;
        metodoCambiarBorrado = cambiarModoBorrado;
        metodoTraerElementosSupabase = traerProductosSupabase;
        elemento = productoABorrar;
    } else if(props.campo === "listado"){
        metodoBorrarSupabase = borrarListadoSupabase;
        metodoCambiarElementoABorrar = cambiarListadoABorrar;
        metodoCambiarBorrado = cambiarModoBorradoListado;
        metodoTraerElementosSupabase = traerListadosSupabase;
        elemento = listadoABorrar;
    }

    return (
        <div id='marcoConfirmacion'>
            <h4>¿Seguro que quieres {props.accion} {props.elemento} {props.nombre}?</h4>
            <div className='decision'>
                <input type="button" value="Sí" onClick={async () => { 
                    await metodoBorrarSupabase(elemento.id);
                    await metodoTraerElementosSupabase();
                    metodoCambiarElementoABorrar(null);
                    metodoCambiarBorrado(false);
                    }} />
                <input type="button" value="No" onClick={() => {
                    metodoCambiarElementoABorrar(null);
                    metodoCambiarBorrado(false);
                }} />
            </div>
        </div>
    )
}

export default Confirmacion
