"use strict";

import imagenes from "../imagenes/imagenes.js";
import desordenarArray from "./desordenarArray.js";

const incluirImagenesDesordenadas = () => {
  let imagenesDesordenadas = desordenarArray(imagenes);

  let idContador = 1;

  for (let i = 0; i < imagenesDesordenadas.length; i++) {
    let selectorImagen = document.createElement("img");
    selectorImagen.setAttribute("src", `./imagenes${imagenesDesordenadas[i]}`);
    selectorImagen.classList.add("pieza_arrastrable");
    selectorImagen.id = idContador; //Doy a cada imagen un id único.
    idContador++;
    document.getElementById("expositor_imagenes").appendChild(selectorImagen);
  }

  const expositorImagenes = document.getElementsByClassName("pieza_arrastrable");
  for (let i = 0; i < expositorImagenes.length; i++) {
    expositorImagenes[i].setAttribute("draggable", true);
  }
};

export default incluirImagenesDesordenadas;
