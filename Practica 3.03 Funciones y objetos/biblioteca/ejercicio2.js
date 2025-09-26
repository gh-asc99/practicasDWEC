"use strict";

import { esObjeto } from "../../comprobaciones.js";

let mostrador = (curso) => {
    let informacion = [];
    for (let propiedad in curso) {
        if (curso.hasOwnProperty(propiedad)){
            informacion = [...informacion, `La propiedad ${propiedad} tiene como valor: ${curso[propiedad]}.`]
        }
        if (esObjeto(curso[propiedad])){
            informacion = [...informacion, `La propiedad ${propiedad} tiene como valores: (`];
            let subpropiedad = curso[propiedad];
            for (let objeto in subpropiedad) {
                if (subpropiedad.hasOwnProperty(objeto)){
                    let valor = subpropiedad[objeto];
                    if (esObjeto(valor)) {
                        informacion = [...informacion, JSON.stringify(valor)];
                    } else {
                        informacion = [...informacion, `${valor}`];
                    }
                }
            }
            informacion = [...informacion, `).`];
        }
    }
    return informacion;
};

export { mostrador };