import { useContext } from "react";
import { ContextoDiscos } from "../context/ProveedorDiscos";
import DiscoDetalles from "../components/DiscoDetalles";
import "./ListadoDiscos.css";

const ListadoDiscos = (props) => {

    const { listadoDiscos } = useContext(ContextoDiscos);

    return (
        <>
            <div id="cuerpoListadoDiscos">
                <h4>Listado de discos almacenados</h4>
                <div id="marcoListado">
                    <div id="contenedorListado">
                        {Array.isArray(listadoDiscos) && listadoDiscos.length
                        ? listadoDiscos.map((disco, index) => {
                            return <DiscoDetalles key={index} datos={disco}/>;
                        }) : "Aún no se ha almacenado ningún disco."}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListadoDiscos;