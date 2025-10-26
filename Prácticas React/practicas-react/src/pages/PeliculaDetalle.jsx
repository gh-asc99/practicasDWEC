"use strict";
import "./estiloPaginas.css";

const PeliculaDetalle = ({ pelicula, onVolver }) => {
    return (
        <div className="detalle-pelicula">
            <h2>{pelicula.titulo}</h2>
            <img src={pelicula.cartel} alt={pelicula.titulo} />
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Año:</strong> {pelicula.anio}</p>
            <p><strong>Género:</strong> {pelicula.genero}</p>
            <p><strong>Duración:</strong> {pelicula.duracion}</p>
            <p><strong>Intérpretes:</strong> {pelicula.interpretes.join(", ")}</p>
            <p><strong>Sinopsis:</strong> {pelicula.sinopsis}</p>

            {/* Botón para volver al listado */}
            <button onClick={onVolver}>Volver al listado</button>
        </div>
    );
};

export default PeliculaDetalle;