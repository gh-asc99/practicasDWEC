"use strict";

const traerPeliculas = () => {
    fetch(urlAPI1())
    .then((objeto) => {
        if (objeto.ok){
            return objeto.json();
        } else {
            throw new Error("Ha fallado la conexión a la API.");
        }
    })
    .then((datos) => {
        if (datos.ok){
            console.log(datos);
            console.log(datos[0].title);
        } else {
            throw new Error("No se ha podido obtener contenido de la API");
        }
    })
    .catch ((error) => {

    });
};

const urlAPI1 = () => {
    return "https://swapi.info/api/films";
};

export { traerPeliculas };