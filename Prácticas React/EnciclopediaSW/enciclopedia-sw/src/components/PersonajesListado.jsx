"use strict";

import PersonajeListado from "./PersonajeListado.jsx";
import "./PersonajesListado.css";


const PersonajesListado = ({ personajes, onSeleccionar }) => {
    return (
        <div id="listaPersonajes">
            {personajes.map(pj => (
                <PersonajeListado
                    key={pj.url}
                    personaje={pj}
                    onSeleccionar={onSeleccionar}
                />
            ))}
        </div>
    );
};

export default PersonajesListado;
