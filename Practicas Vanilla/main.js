"use strict";
import {iniciarAplicacion, pintarInformacion} from "./biblioteca.js";

window.onload = () => {
    
    iniciarAplicacion();

    const contenedorPeliculas = document.getElementById("peliculas");
    contenedorPeliculas.addEventListener("click", (evento)=>{
        pintarInformacion(evento.target);
    });
} //Fin de window.onload