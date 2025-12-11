"use strict";

import { useEffect, useState } from "react";
import "./PeliculaDetalles.css";

const PeliculaDetalles = ({ peliculaSeleccionada, setPersonajeSeleccionado }) => {
    const [pelicula, setPelicula] = useState(null);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        if (!peliculaSeleccionada) return;

        const cargarPelicula = async () => {
            try {
                const respuesta = await fetch(`https://swapi.py4e.com/api/films/${peliculaSeleccionada}/`);
                const datos = await respuesta.json();
                setPelicula(datos);

                const primerosDiez = datos.characters.slice(0, 10);

                const promesas = primerosDiez.map(url => fetch(url).then(r => r.json()));
                const personajesCargados = await Promise.all(promesas);

                setPersonajes(personajesCargados);

            } catch (error) {
                console.error("Error cargando película:", error);
            }
        };

        cargarPelicula();
    }, [peliculaSeleccionada]);


    if (!peliculaSeleccionada) {
        return <p>Selecciona una película para ver sus detalles.</p>;
    }

    if (!pelicula) {
        return <p>Cargando película...</p>;
    }

    return (
        <div className="detalles">
            <h2 id="tituloPelicula">{pelicula.title}</h2>
            <p>{pelicula.opening_crawl}</p>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Productores:</strong> {pelicula.producer}</p>
            <p><strong>Fecha estreno:</strong> {pelicula.release_date}</p>

            <h4>Protagonistas:</h4>
            <div id="listaPersonajes">
                {personajes.map((pj, index) => (
                    <a
                        key={index}
                        className="nombrePersonaje"
                        onClick={() => setPersonajeSeleccionado(pj.url)}
                    >
                        {pj.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PeliculaDetalles;