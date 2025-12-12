"use strict";

const PersonajeListado = (props) => {
    const nombre = props.name;
    const url = props.url;
    
    return (
        <>
            <a onClick={setPersonajeSeleccionado(url)}>{nombre}</a>
        </>
    );
};

export default PersonajeListado