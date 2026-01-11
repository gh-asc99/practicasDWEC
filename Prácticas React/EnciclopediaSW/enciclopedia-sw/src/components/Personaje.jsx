import { useContext, useState } from "react";
import { StarWarsContext } from "../context/StarWarsContext.jsx";
import { cargarDatos } from "../functions/traerDatos.jsx";

const Personaje = () => {
    const { personajeSeleccionado } = useContext(StarWarsContext);
    const [naves, setNaves] = useState([]);
    const [mostrar, setMostrar] = useState(false);

    if (!personajeSeleccionado) {
        return <p>Selecciona un personaje</p>;
    }

    const mostrarNaves = () => {
        const urls = [
            ...personajeSeleccionado.starships,
            ...personajeSeleccionado.vehicles
        ];

        if (urls.length === 0) {
            setNaves([]);
            setMostrar(true);
            return;
        }

        cargarDatos(urls).then(resultados => {
            setNaves(
                resultados
                    .filter(r => r.status === "fulfilled")
                    .map(r => r.value)
            );
            setMostrar(true);
        });
    };

    return (
        <>
            <h3>{personajeSeleccionado.name}</h3>
            <p>Color de ojos: {personajeSeleccionado.eye_color}</p>
            <p>Sexo: {personajeSeleccionado.gender}</p>
            <p>Año de nacimiento: {personajeSeleccionado.birth_year}</p>
            <button onClick={mostrarNaves}>Pilota</button>

            {mostrar && (
                naves.length > 0
                    ? naves.map(n => (
                        <div key={n.url}>
                            <p><strong>{n.name}</strong></p>
                            <p>Modelo: {n.model}</p>
                        </div>
                    ))
                    : <p>No pilota naves ni vehículos</p>
            )}
        </>
    );
};

export default Personaje;
