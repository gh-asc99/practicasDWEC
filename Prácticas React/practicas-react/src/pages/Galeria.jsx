"use strict";
import "./estiloPaginas.css";
import { useState } from "react";

const Galeria = () => {
    const [mensaje, setMensaje] = useState("Selecciona una opción del submenú para ver las cartelas.");

    const opciones = (opcion) => {
        switch (opcion) {
            case "titulo":
                setMensaje("Has seleccionado filtrar por título.");
                break;
            case "interprete":
                setMensaje("Has seleccionado filtrar por intérprete.");
                break;
            case "director":
                setMensaje("Has seleccionado filtrar por director.");
                break;
            default:
                setMensaje("Selecciona una opción del submenú para ver las cartelas.");
        }
    };

    return (
        <>
            <section className="pagina">
                <h2>Galería de Carteles</h2>
                <nav className="submenu">
                    <button onClick={() => opciones("titulo")}>Por título</button>
                    <button onClick={() => opciones("interprete")}>Por intérprete</button>
                    <button onClick={() => opciones("director")}>Por director</button>
                </nav>
                <div className="contenido-galeria">
                    <p>{mensaje}</p>
                </div>
            </section>
        </>
    );
};

export default Galeria;
