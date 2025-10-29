"use strict";
import mostrarOcultar from "./mostrarOcultar.js";

window.onload = () => {

let contenidoDeElementos = document.getElementsByClassName('caja_titulo_acordeon');

for (let elemento of contenidoDeElementos){
    elemento.addEventListener('click', (evento) => {
        const elementoSeleccionado = evento.currentTarget;
        mostrarOcultar(elementoSeleccionado);
    })
}

}; //Fin del window.onload