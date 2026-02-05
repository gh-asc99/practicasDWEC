import { useContext } from "react";
import agregar from "../assets/img/agregar.png";
import "./ProductoResumido.css";
import { ContextoListado } from "../context/ProveedorListado.jsx";

const ProductoResumido = ({ datos }) => {

    const precioProducto = (datos.precio).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    });

    const formateadorPeso = new Intl.NumberFormat('es-ES', {
        style: 'unit',
        unit: 'gram',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const pesoProducto = formateadorPeso.format(datos.peso);

    const { listadoSeleccionado, 
        agregarProductoAListadoSupabase,
        traerListadosSupabase } = useContext(ContextoListado);

    const idListado = listadoSeleccionado?.id ?? null;
    const idProducto = datos.id;

    return (
        <>
            <div className="plantillaProductoResumido">
                <img src={datos.imagen} />
                <div id="datosProductoResumido">
                    <div id="primeraMitad">
                        <h5>{datos.nombre}</h5>
                        <div className="lista">
                            <ul>
                                <li><strong>Coste: </strong>{precioProducto}</li>
                                <li><strong>Peso: </strong>{pesoProducto}</li>
                            </ul>
                        </div>
                    </div>
                    <div id="segundaMitad">
                        <img src={agregar} alt="Incluir a la lista" onClick={() => {
                            agregarProductoAListadoSupabase( idListado, idProducto, 1);
                            traerListadosSupabase();
                        }}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductoResumido
