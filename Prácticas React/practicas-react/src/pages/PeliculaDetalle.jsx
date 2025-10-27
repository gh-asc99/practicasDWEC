"use strict";
import { useParams } from "react-router-dom";
import "./estiloPaginas.css";
import peliculas from "../assets/json/peliculas.json";
import Interprete from "../components/Lista/Interprete.jsx";

const PeliculaDetalle = () => {
    const {id} = useParams();
    const listaPeliculas = peliculas;

    let peliculaSeleccionada = listaPeliculas.find(pelicula => pelicula.id === parseInt(id));

    if (!peliculaSeleccionada) {
        return <p>Película no encontrada.</p>;
    }
    return (
        <div className="detalles_pelicula">
            <p><strong>Director:</strong> {peliculaSeleccionada.director}</p>
            <p><strong>Género:</strong> {peliculaSeleccionada.genero}</p>
            <p><strong>Duración:</strong> {peliculaSeleccionada.duracion}</p>
            <h3>Reparto principal</h3>
      <div className="elenco">
        {peliculaSeleccionada.interpretes.map((interprete, index) => (
          <Interprete
            key={index}
            tipo="elenco"
            nombre={interprete.nombre}
            foto={interprete.foto}
            descripcion={interprete.descripcion}
          />
        ))}
      </div>
            <p><strong>Sinopsis:</strong> {peliculaSeleccionada.sinopsis}</p>
        </div>
    );
};

export default PeliculaDetalle;