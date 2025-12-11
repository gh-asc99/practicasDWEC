"use strict";

import { useEffect, useState } from "react";
import "./Personaje.css";

const Personaje = ({ personajeSeleccionado }) => {
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        if (!personajeSeleccionado) return;

        const cargarPersonaje = async () => {
            try {
                const respuesta = await fetch(personajeSeleccionado);
                const datos = await respuesta.json();
                setPersonaje(datos);

            } catch (error) {
                console.error("Error cargando personaje:", error);
            }
        };

        cargarPersonaje();
    }, [personajeSeleccionado]);

    if (!personajeSeleccionado) {
        return <p>Selecciona un personaje para ver su información.</p>;
    }

    if (!personaje) {
        return <p>Cargando personaje...</p>;
    }

    return (
        <div id="personajeDetalles">
            <h3>{personaje.name}</h3>
            <div id="datosPersonaje">
            <p><strong>Género:</strong> {personaje.gender}</p>
            <p><strong>Altura:</strong> {personaje.height} cm</p>
            <p><strong>Peso:</strong> {personaje.mass} kg</p>
            <p><strong>Color de pelo:</strong> {personaje.hair_color}</p>
            <p><strong>Color de ojos:</strong> {personaje.eye_color}</p>
            </div>
        </div>
    );
};

export default Personaje;