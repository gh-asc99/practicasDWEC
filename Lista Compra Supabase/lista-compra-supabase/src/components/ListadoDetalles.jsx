import papelera from "../assets/img/borrar.png";
import detalles from "../assets/img/detalles.png";
import agregarEnistado from "../assets/img/agregarEnListado.png";
import "./ListadoDetalles.css";
import { useContext } from "react";
import { ContextoListado } from "../context/ProveedorListado";

const ListadoDetalles = ({ datos }) => {

    const { mostrarOcutarDatosSecundarios,
        listadoDetallesAbierto,
        cambiarListadoABorrar,
        cambiarModoBorradoListado,
        cambiarListadoSeleccionado,
        cambiarModoIncluirProductos } = useContext(ContextoListado);

    const articulosAlmacenados = datos.lista_producto ?? [];

    return (
        <div className='plantillaListado'>
            <div id="capaSuperior">
                <div className='datosPrincipales'>
                    <h3>{datos.nombre}</h3>
                    <p>{datos.descripcion}</p>
                </div>
                <div id="cuadroBotones">
                    <img src={detalles} name="boton" alt="Consultar listado" onClick={() => { 
                        mostrarOcutarDatosSecundarios(datos.id) ;
                        }} />
                    <img src={papelera} name="boton" alt="Eliminar listado" onClick={() => {
                        cambiarListadoABorrar(datos);
                        cambiarModoBorradoListado(true);
                    }} />
                    <img src={agregarEnistado} alt="Añadir productos al listado" onClick={() => {
                        cambiarListadoSeleccionado(datos);
                        cambiarModoIncluirProductos();
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



        </div>
    )
}

export default ListadoDetalles
