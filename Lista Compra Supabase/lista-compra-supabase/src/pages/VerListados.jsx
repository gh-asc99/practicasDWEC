import { useEffect} from "react";
import "./VerListados.css";
import ListadoDetalles from "../components/ListadoDetalles.jsx";
import Confirmacion from "../components/Confirmacion.jsx";
import ListaAgregarProductos from "../components/ListaAgregarProductos.jsx";
import useListado from "../hooks/useListado.js";


const VerListados = () => {

    const { traerListadosSupabase,
        listaListados,
        listadoABorrar,
        modoBorradoListado,
        modoIncluirProductos,
        cambiarModoBorradoListado } = useListado();

    useEffect(() => {
        traerListadosSupabase();
        cambiarModoBorradoListado(false);
    }, [])

    return (
        <>
            <div id="cuerpoVerListados">
                <h3 id="tituloPagina">Listas de la compra</h3>

                <div id="cuerpoCompleto">
                    <div id="marcoListado">

                        <div id="seccionListado">
                            <div id="contenedorListado">
                                {listaListados.length
                                    ? listaListados.map((listado, index) => (
                                        <ListadoDetalles key={index} datos={listado} />
                                    ))
                                    : "No se han encontrado listas de la compra."}
                            </div>
                        </div>

                        {modoBorradoListado && (
                            <Confirmacion
                                accion="eliminar"
                                elemento="la lista de compra"
                                campo="listado"
                                nombre={listadoABorrar?.nombre}
                            />
                        )}



                    </div>
                </div>
                {modoIncluirProductos && (
                    <ListaAgregarProductos />
                )}
            </div>


        </>
    )
}

export default VerListados;