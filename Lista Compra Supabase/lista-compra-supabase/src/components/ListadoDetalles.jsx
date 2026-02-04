import papelera from "../assets/img/borrar.png";
import detalles from "../assets/img/detalles.png";
import "./ListadoDetalles.css";

const ListadoDetalles = ({ datos }) => {

    const articulosAlmacenados = datos.articulos ?? [];

    return (
        <div className='plantillaListado'>
            <div id="capaSuperior">
                <div className='datosPrincipales'>
                    <h3>{datos.nombre}</h3>
                    <p>{datos.descripcion}</p>
                </div>
                <div id="cuadroBotones">
                    <img src={detalles} name="boton" alt="Consultar listado" />
                    <img src={papelera} name="boton" alt="Eliminar listado" />
                </div>
            </div>

            <div id='datosSecundarios'>
                {articulosAlmacenados.length
                    ? articulosAlmacenados.map((producto, index) => (
                        <ProductoDetalles key={index} datos={producto} />
                    ))
                    : "No se han encontrado productos en este listado."}
            </div>



        </div>
    )
}

export default ListadoDetalles
