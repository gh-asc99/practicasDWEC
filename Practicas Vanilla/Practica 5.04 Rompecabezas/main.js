"use strict";

import ganarPartida from "./biblioteca/ganarPartida.js";
import incluirImagenesDesordenadas from "./biblioteca/incluirImagenesDesordenadas.js";
import incluirBotonReiniciar from "./biblioteca/incluirBotonReiniciar.js";

window.onload = () => {

incluirImagenesDesordenadas();

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

 incluirBotonReiniciar();

}; //Fin de window.onload.