"use strict";

import imagenes from "../imagenes/imagenes.js";

let imprimirImagenesAleatorio = () => {
    let arrayImagenes = Array.from(imagenes);
    for (let imagen of arrayImagenes){
        console.log(imagen);
    }
};

export default imprimirImagenesAleatorio;