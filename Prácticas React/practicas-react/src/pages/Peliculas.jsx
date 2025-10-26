"use strict";
import "./estiloPaginas.css";
import { useState } from "react";
import PeliculaDetalle from "./PeliculaDetalle.jsx";
import peliculas from "../assets/json/peliculas.json";

const Peliculas = () => {
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

    const selectorPelicula = (pelicula) => {
        setPeliculaSeleccionada(pelicula);
    };

    const Volver = () => {
        setPeliculaSeleccionada(null);
    };

    if (peliculaSeleccionada) {
        return (
            <section className="pagina">
                <PeliculaDetalle pelicula={peliculaSeleccionada} onVolver={Volver} />
            </section>
        );
    }
    return (
        <section className="pagina">
            <h2>Listado de Películas</h2>
            <div className="listado-peliculas">
                {peliculas.map((pelicula) => (
                    <div
                        key={pelicula.id}
                        className="tarjeta_pelicula"
                        onClick={() => selectorPelicula(pelicula)}
                    >
                        <img
                            src={pelicula.cartel}
                            alt={pelicula.titulo}
                            className="miniatura-cartel"
                        />
                        <h3>{pelicula.titulo}</h3>
                        <p>({pelicula.anio})</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Peliculas;
