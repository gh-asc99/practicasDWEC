import agregar from "../assets/img/agregar.png";
import "./ProductoResumido.css";

const ProductoResumido = ({datos}) => {

    const precioProducto = (datos.precio).toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
        });

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
                                <li><strong>Peso: </strong>{datos.peso}</li>
                            </ul>
                        </div>
                    </div>
                    <div id="segundaMitad">
                        <img src={agregar} alt="Incluir a la lista" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductoResumido
