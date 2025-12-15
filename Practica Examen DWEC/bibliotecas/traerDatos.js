"use strict";

const traerDatos = (url) => {
    return (
        fetch(url)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((datos) => {
                return datos;
            })
            .catch((error) => {
                return `Ha fallado la conexión a la API: ${error.message}`;
            })
    );
};

export default traerDatos;