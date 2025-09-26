"use strict";

import { esObjeto } from "../../comprobaciones.js";

let imprimir = (objeto, nivel = 0) => {
    if (esObjeto(objeto)) {
        let indent = '  '.repeat(nivel);
        let arrayDatosExtraidos = [];

        for (let propiedad in objeto) {
            if (objeto.hasOwnProperty(propiedad)) {
                let valor = objeto[propiedad];
                let tipo = Array.isArray(valor) ? "array" : typeof valor;

                if (tipo === "array") {
                    arrayDatosExtraidos.push(
                        `${indent}${propiedad} (array): [${valor.map(v => esObjeto(v) ? '{...}' : v).join(", ")}]`
                    );

                    valor.forEach((elemento, index) => {
                        if (esObjeto(elemento)) {
                            arrayDatosExtraidos.push(`${indent}  [${index}] (objeto):`);
                            arrayDatosExtraidos.push(imprimir(elemento, nivel + 2));
                        }
                    });

                } else if (esObjeto(valor)) {
                    arrayDatosExtraidos.push(`${indent}${propiedad} (objeto): (`);
                    arrayDatosExtraidos.push(imprimir(valor, nivel + 1));
                    arrayDatosExtraidos.push(`${indent})`);

                } else if (tipo === "function") {
                    arrayDatosExtraidos.push(`${indent}${propiedad} (función)`);

                } else {
                    arrayDatosExtraidos.push(`${indent}${propiedad} (${tipo}): ${valor}`);
                }
            }
        }

        return arrayDatosExtraidos.join("\n");
    } else {
        return `El valor introducido no es un objeto (${objeto}).`;
    }
};


export { imprimir};