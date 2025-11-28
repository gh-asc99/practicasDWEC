"use strict";

const traerDatos = () => {
    return fetch(urlAPI2())
    .then((objeto) => {
        if (objeto.ok){
            return objeto.json();
        } else {
            throw new Error("Ha fallado la conexión a la API.");
        }
    })
    .then((datos) => {
        if (datos.results.length){
            return datos.results;
        } else {
            throw new Error("No se ha podido extraer el contenido de la API.");
        }
    })
    .catch ((error) => {
        console.log("No se ha podido establecer conexión con la API.");
    });
};

const imprimirTitulos = (listado, contenedor) => {
    let contenido = "";
    if (Array.isArray(listado) && listado.length){
        listado.map((elemento) => contenido += `<input type="button" value="${elemento.name}"/>`);
        contenedor.innerHTML = contenido;
    }
}

const urlAPI1 = () => {
    return "https://swapi.info/api/films";
};

const urlAPI2 = () => {
    return "https://swapi.dev/api/films/";
};

export { traerDatos, imprimirTitulos };