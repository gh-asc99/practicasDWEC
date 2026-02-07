import papelera from "../assets/img/borrar.png";
import detalles from "../assets/img/detalles.png";
import coche from "../assets/img/coche.png";
import agregarEnistado from "../assets/img/agregarEnListado.png";
import "./ListadoDetalles.css";
import ProductoDetalles from "../components/ProductoDetalles.jsx";
import ValoresFinalesListado from "./ValoresFinalesListado.jsx";
import useListado from "../hooks/useListado.js";

const ListadoDetalles = ({ datos }) => {

    const { mostrarOcutarDatosSecundarios,
        listadoDetallesAbierto,
        cambiarListadoABorrar,
        cambiarModoBorradoListado,
        cambiarListadoSeleccionado,
        cambiarModoIncluirProductos,
        calcularPesoListado } = useListado();

    const articulosAlmacenados = datos.lista_producto ?? [];

    const pesoDelListado = calcularPesoListado(datos.id);

    return (
        <div className='plantillaListado'>
            <div id="capaSuperior">
                {pesoDelListado > 10 && (<>
                <img id="iconoCoche" src={coche} alt="Esta compra requiere usar coche." />
                </>)}
                <div className='datosPrincipales'>
                    <h3>{datos.nombre}</h3>
                    <p>{datos.descripcion}</p>
                </div>
                <div id="cuadroBotones">
                    <img src={detalles} name="boton" alt="Consultar listado" onClick={() => { 
                        mostrarOcutarDatosSecundarios(datos.id) ;
                        }} />
                    <img src={agregarEnistado} alt="Añadir productos al listado" onClick={() => {
                        cambiarListadoSeleccionado(datos);
                        cambiarModoIncluirProductos();
                    }} />
                    <img src={papelera} name="boton" alt="Eliminar listado" onClick={() => {
                        cambiarListadoABorrar(datos);
                        cambiarModoBorradoListado(true);
                    }} />
                </div>
            </div>
            {listadoDetallesAbierto === datos.id && (<>
                <div id='datosSecundarios'>
                    {articulosAlmacenados.length
                        ? articulosAlmacenados.map((item, index) => (
                            <ProductoDetalles key={index} datos={item.producto} cantidad={item.cantidad} comprado={item.comprado} />
                        ))
                        : "No se han encontrado productos en este listado."}
                </div>
            </>)}

            {listadoDetallesAbierto === datos.id && (<>
                <ValoresFinalesListado idListado={datos.id} fecha={datos.fechaCreacion}/>
            </>)}

        </div>
    )
}

export default ListadoDetalles
