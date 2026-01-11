"use strict";

const traerDatosConResults = (url) => {
    return(
        fetch(url)
        .then((resultados) => {
            return resultados.json();
        })
        .then((datos) => {
            return datos.results;
        })
        .catch((error) => {
            return `Ha habido un error: ${error.message}`;
        })
    );
};

const traerDatosSinResults = (url) => {
    return(
        fetch(url)
        .then((resultados) => {
            return resultados.json();
        })
        .then((datos) => {
            return datos;
        })
        .catch((error) => {
            return `Ha habido un error: ${error.message}`;
        })
    );
};

const cargarDatos = async (listadoURLs) => {
    const promesas = await listadoURLs.map((url) => traerDatosSinResults(url));
    const resultados = Promise.allSettled(promesas);
    return resultados;
}

export { traerDatosConResults, traerDatosSinResults, cargarDatos };