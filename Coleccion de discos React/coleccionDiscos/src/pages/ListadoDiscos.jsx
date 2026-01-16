import { useState, useContext } from "react";
import { ContextoDiscos } from "../context/ProveedorDiscos.jsx";
import DiscoDetalles from "../components/DiscoDetalles.jsx";
import "./ListadoDiscos.css";
import gifCargando from "../assets/img/cargando.gif";
import { Outlet } from "react-router-dom";


const ListadoDiscos = () => {
    const [busqueda, setBusqueda] = useState("");
    const { listadoDiscos, cargando} = useContext(ContextoDiscos);

    const discosFiltrados = listadoDiscos.filter((disco) =>
        disco.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (cargando) {
        return <img src={gifCargando} alt="Cargando..." />;
    }

    return (
        <>
            <div id="cuerpoListadoDiscos">
                <h4>Listado de discos almacenados</h4>
                <div id="cuerpoCompleto">
                    <div id="marcoListado">
                        <div id="buscadorListado">
                            <label htmlFor="inputBuscador">Buscador de discos: </label>
                            <input type="search" name="buscador" id="inputBuscador" value={busqueda} onChange={(evento) => {
                                setBusqueda(evento.target.value);
                            }} />
                            <input type="button" value="Limpiar" id="inputLimpiar" onClick={() => { setBusqueda(""); }} />
                        </div>
                        <div id="contenedorListado" >
                            {discosFiltrados.length
                                ? discosFiltrados.map((disco, index) => {
                                    return <DiscoDetalles key={index} datos={disco} />;
                                }) : "Aún no se ha almacenado ningún disco."}
                        </div>
                    </div>
                    <div id="margenOutlet" className={"formularioEnListado"}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListadoDiscos;