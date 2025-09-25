"use strict";

let mostrador = (curso) => {
    const informacion = [];
    for (let propiedad in curso) {
        if (curso.hasOwnProperty(propiedad)){
            informacion.push(`La propiedad ${propiedad} tiene como valor: ${curso[propiedad]}`);
        }
    }
    return informacion;
};

export { mostrador };