"use strict";

const PersonajeListado = ({ personaje, onSeleccionar }) => {
    return (
        <a
            className="nombrePersonaje"
            onClick={() => onSeleccionar(personaje)}
        >
            {personaje.name}

        </a>
    );
};

export default PersonajeListado;
