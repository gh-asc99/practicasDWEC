"use strict";

import papelera from "../assets/img/papelera.png";
import { useEffect, useState } from "react";
import "./ListarDisco.css";

const ListarDisco = () => {
    const [discosMostrados, setDiscosMostrados] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const imprimirDisco = (disco) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td><p>{disco.nombre}</p></td>
                        <td>
                            {disco.caratula ? (
                                <img className="caratulaDisco" src={disco.caratula} alt={disco.nombre} />
                            ) : (
                                <p>Sin imagen</p>
                            )}
                        </td>
                        <td><p>{disco.interprete}</p></td>
                        <td><p>{disco.year}</p></td>
                        <td><p>{disco.genero.join(", ")}</p></td>
                        <td><p>{disco.localizacion}</p></td>
                        <td><p>{disco.prestado}</p></td>

                        <td>
                            <img
                                src={papelera}
                                alt="Eliminar disco"
                                className="papelera"
                                onClick={() => eliminarDisco(disco.nombre)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };

    const buscarDisco = () => {
        const discosAlmacenados = JSON.parse(localStorage.getItem("discos")) || [];
        const filtrados = discosAlmacenados.filter(
            (disco) => disco.nombre.toLowerCase() === busqueda.toLowerCase()
        );
        setDiscosMostrados(filtrados);
    };

    const limpiarBusqueda = () => {
        const discosAlmacenados = JSON.parse(localStorage.getItem("discos")) || [];
        setBusqueda("");
        setDiscosMostrados(discosAlmacenados);
    };

    const eliminarDisco = (nombre) => {
        if (!confirm(`¿Seguro que quieres eliminar el disco "${nombre}"?`)) return;

        const discosAlmacenados = JSON.parse(localStorage.getItem("discos")) || [];
        const nuevos = discosAlmacenados.filter(disco => disco.nombre !== nombre);

        localStorage.setItem("discos", JSON.stringify(nuevos));
        setDiscosMostrados(nuevos);
    };

    useEffect(() => {
        const discosAlmacenados = JSON.parse(localStorage.getItem("discos")) || [];
        setDiscosMostrados(discosAlmacenados);
    }, []);

    return (
        <div className="marcoMostradorDiscos">
            <h4>Listado de discos</h4>

            <div className="botones">
                <input className="boton" type="button" value="Buscar" onClick={buscarDisco} />
                <input className="buscador" type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                <input className="boton" type="button" value="Limpiar" onClick={limpiarBusqueda} />
            </div>

            <div className="mostradorDiscos">
                {discosMostrados.map((disco) => (
                    <div key={disco.nombre}>{imprimirDisco(disco)}</div>
                ))}
            </div>
        </div>
    );
};

export default ListarDisco;
