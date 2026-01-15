import { useState, useContext } from "react";
import { ContextoDiscos } from "../context/ProveedorDiscos.jsx";
import DiscoDetalles from "../components/DiscoDetalles.jsx";
import "./ListadoDiscos.css";
import CampoFormulario from "../components/Formulario/CampoFormulario.jsx";

const ListadoDiscos = () => {
    const [busqueda, setBusqueda] = useState("");
    const { listadoDiscos } = useContext(ContextoDiscos);

const discosFiltrados = listadoDiscos.filter((disco) =>
  disco.nombre.toLowerCase().includes(busqueda.toLowerCase())
);


    return (
        <>
            <div id="cuerpoListadoDiscos">
                <h4>Listado de discos almacenados</h4>
                <div id="marcoListado">
                    <div id="buscadorListado">
                        <label htmlFor="inputBuscador">Buscador de discos: </label>
                        <input type="search" name="buscador" id="inputBuscador" value={busqueda} onChange={(evento) => {setBusqueda(evento.target.value);
                        }}/>
                    </div>
                    <div id="contenedorListado">
                        {discosFiltrados.length
                        ? discosFiltrados.map((disco, index) => {
                            return <DiscoDetalles key={index} datos={disco}/>;
                        }) : "Aún no se ha almacenado ningún disco."}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListadoDiscos;