"use strict";

import desordenarArray from "./biblioteca/desordenarArray.js";
import imagenes from "./imagenes/imagenes.js";
import ganarPartida from "./biblioteca/ganarPartida.js";

window.onload = () => {

let imagenesDesordenadas = desordenarArray(imagenes);

let idContador = 1;

for (let i = 0; i < imagenesDesordenadas.length; i++){
    let selectorImagen = document.createElement('img');
    selectorImagen.setAttribute("src", `./imagenes${imagenesDesordenadas[i]}`);
    selectorImagen.classList.add("pieza_arrastrable");
    selectorImagen.id = idContador; //Doy a cada imagen un id único.
    idContador++;
    document.getElementById('expositor_imagenes').appendChild(selectorImagen);
};

const expositorImagenes = document.getElementsByClassName("pieza_arrastrable");
for (let i=0 ; i < expositorImagenes.length; i++){
    expositorImagenes[i].setAttribute("draggable", true);
};

document.getElementById("piezas_arrastrables").addEventListener("dragstart",
    (evento) => {
        evento.dataTransfer.setData("identificador", evento.target.id)
        evento.dataTransfer.setData("tipo", evento.target.nodeName)
    },
    false
);

document.getElementById("piezas_arrastrables").addEventListener("dragover",
    (evento) => {
        evento.preventDefault();
    },
    false
);

const casillasPiezas = document.getElementsByTagName("td");
for (let i = 0; i < casillasPiezas.length; i++){
    casillasPiezas[i].classList.add("casilla_pieza");
};

document.getElementById("piezas_arrastrables").addEventListener("drop",
    (evento) => {
        evento.preventDefault();
        if (evento.target.classList.contains("casilla_pieza")){
            if(!evento.target.firstElementChild){ //Si no hay nodo hijo en td (es decir, si no tiene ya una imágen dentro).
                if ((evento.dataTransfer.getData("tipo")) === "IMG"){
                    evento.target.appendChild(document.getElementById(evento.dataTransfer.getData("identificador")));
                    if (ganarPartida()){
                        let mensaje = document.createElement("h1");
                        mensaje.textContent = "¡Enhorabuena, has completado el puzzle!"
                        document.body.appendChild(mensaje);
                    }
                }
            }
        }
    },
    false
);


//Parte añadida para poder llevar piezas desde el tablero hasta el expositor:
document.getElementById("expositor_imagenes").addEventListener("dragover",
    (evento) => {
        evento.preventDefault();
    },
    false
);

document.getElementById("expositor_imagenes").addEventListener("drop",
    (evento) => {
        evento.preventDefault();
        if (evento.target.id === "expositor_imagenes"){
            evento.target.appendChild(document.getElementById(evento.dataTransfer.getData("identificador")));
        } else if (evento.target.classList.contains("pieza_arrastrable")){
            if(evento.target.parentElement.id === "expositor_imagenes"){
                evento.target.parentElement.appendChild(document.getElementById(evento.dataTransfer.getData("identificador")));
            }
        }
    },
    false
);

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
}
);



}; //Fin de window.onload.