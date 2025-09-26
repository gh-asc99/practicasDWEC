"use strict";

//Comprobaciones añadidas para práctica 3

let esNumero = (valor) => {
    return typeof valor === "number";
}

let esEnteroPositivo = (valor) => {
    return Number.isInteger(valor) && valor > 0;
}

let imprimirNumero = (numero) => {
    return (typeof numero === "number") ? numero.toLocaleString("es-ES") : null;
}

let esObjeto = (valor) => {
    return typeof valor === "object" && valor !== null;
}

export { esNumero, esEnteroPositivo, imprimirNumero, esObjeto};