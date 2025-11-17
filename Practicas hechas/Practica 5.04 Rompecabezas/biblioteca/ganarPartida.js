"use strict";

import imagenes from "../imagenes/imagenes.js";

let imagenesOrdenCorrecto = [...imagenes];

const ganarPartida = () => {
    const casillas = document.getElementsByTagName("td");

    for (let i = 0; i < casillas.length; i++){
        const img = casillas[i].querySelector("img");

        if (!img || !img.src.includes(imagenesOrdenCorrecto[i])){
            return false;
        } 
    }

    return true;
};

export default ganarPartida;