"use strict";

const incluirBotonReiniciar = () => {
const botonReiniciar = document.getElementById("boton_reiniciar");
    
botonReiniciar.addEventListener("click", () => {
    const casillasPuzzle = document.getElementsByClassName("casilla_pieza");
    const expositor = document.getElementById("expositor_imagenes");
    for(let i = 0; i < casillasPuzzle.length; i++){
        const img = casillasPuzzle[i].querySelector("img");
        if (img) {
            expositor.appendChild(img);
        }
    }
    const mensajePartidaGanada = document.querySelector("h1");
    if (mensajePartidaGanada){
        mensajePartidaGanada.remove();

    }
    mensajePartidaGanada?mensajePartidaGanada.remove():null;
})
};

export default incluirBotonReiniciar;