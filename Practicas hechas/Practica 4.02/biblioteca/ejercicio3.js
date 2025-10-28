"use strict";

const variarEstilo = () => {
    let selectorTexto = parseInt(Math.random()*5);
    console.log(selectorTexto);

    const colores = ["deepPink", "coral", "gold", "magenta", "blueviolet", "lime", "springgreen", "teal"];
    //Los nombres de los colores los he sacado de: https://htmlcolorcodes.com/es/nombres-de-los-colores/
    let selectorColor = parseInt(Math.random()*colores.length);
    console.log(selectorColor);

    let textos = document.getElementsByTagName("p");
    textos[selectorTexto].setAttribute("color-fondo", colores[selectorColor]);

    textos[selectorTexto].style.backgroundColor = textos[selectorTexto].getAttribute("color-fondo");
}

export default variarEstilo;