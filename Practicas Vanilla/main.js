"use strict";
import {imprimirTitulos, traerDatos} from "./biblioteca.js";

window.onload = () => {
    const contenedorPeliculas = document.getElementById(peliculas);

    contenedorPeliculas.addEventListener("load", async() => {
            const peliculas = await traerDatos();
            imprimirTitulos(peliculas, contenedorPeliculas);
    });
} //Fin de window.onload