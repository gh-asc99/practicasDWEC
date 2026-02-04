import { useEffect } from "react";
import useListado from "../hooks/useListado";
import "./VerListados.css";
import ListadoDetalles from "../components/ListadoDetalles.jsx";

const VerListados = () => {

const {traerListadosSupabase, listaListados } = useListado();

useEffect(() => {
    traerListadosSupabase();
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

                    </div>
                </div>

            </div>
        </>
    )
}

export default VerListados;