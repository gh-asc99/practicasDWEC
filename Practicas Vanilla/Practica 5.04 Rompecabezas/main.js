"use strict";

import desordenarArray from "./biblioteca/desordenarArray.js";
import imagenes from "./imagenes/imagenes.js";

let imagenesDesordenadas = desordenarArray(imagenes);

for (let i = 0; i < imagenesDesordenadas.length; i++){
    let selectorImagen = document.createElement('img');
    selectorImagen.setAttribute("src", `./imagenes${imagenesDesordenadas[i]}`);
    document.getElementById('expositor_imagenes').appendChild(selectorImagen);
};