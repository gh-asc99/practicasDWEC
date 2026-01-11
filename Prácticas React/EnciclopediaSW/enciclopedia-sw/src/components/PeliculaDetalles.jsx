import { useContext, useEffect, useState } from "react";
import { StarWarsContext } from "../context/StarWarsContext.jsx";
import { traerDatosSinResults, cargarDatos } from "../functions/traerDatos.jsx";
import PersonajesListado from "./PersonajesListado.jsx";
import "./PeliculaDetalles.css";

const PeliculaDetalles = () => {
    const { peliculaSeleccionada, setPersonajeSeleccionado } = useContext(StarWarsContext);
    const [pelicula, setPelicula] = useState(null);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        if (!peliculaSeleccionada) return;

        traerDatosSinResults(`https://swapi.py4e.com/api/films/${peliculaSeleccionada}/`)
            .then(datos => {
                setPelicula(datos);
                return datos.characters.slice(0, 10);
            })
            .then(cargarDatos)
            .then(resultados => {
                setPersonajes(
                    resultados
                        .filter(r => r.status === "fulfilled")
                        .map(r => r.value)
                );
            });
    }, [peliculaSeleccionada]);

    if (!peliculaSeleccionada) return <p>Selecciona una película</p>;

    if (!pelicula) {
        return <p>Cargando película...</p>;
    }

    return (
        <>
            <h2>{pelicula.title}</h2>
            <p>{pelicula.opening_crawl}</p>
            <PersonajesListado
                personajes={personajes}
                onSeleccionar={setPersonajeSeleccionado}
            />
        </>
    );
};

export default PeliculaDetalles;
