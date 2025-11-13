"use strict";

import { comprobarInputsFormulario } from "./biblioteca.js";

window.onload = () => {

    const botonGuardar = document.getElementById("botonGuardar");

    botonGuardar.addEventListener('click', () => {
        comprobarInputsFormulario();
    });

};//Fin de window.onload