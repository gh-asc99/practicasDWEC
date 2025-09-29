"use strict";

import { esObjeto } from "../../comprobaciones.js";
import { imprimirArray } from "../../funcionalidades.js";

let imprimir = (objeto) => {
  if (esObjeto(objeto)) {
    console.log("Impresión del objeto:");
    for (let propiedad in objeto){
        if (objeto.hasOwnProperty(propiedad)){
            let valor = objeto[propiedad];
            let tipoValor = typeof valor;
            if (Array.isArray(objeto[propiedad])) {
                console.log(`La propiedad ${propiedad} tiene como valores asociados:`);
                imprimirArray(objeto[propiedad]);
            } else if (esObjeto(objeto[propiedad])) {
                let datosExtraidos = [];
                for (let elemento in objeto[propiedad]){
                    if (valor.hasOwnProperty(elemento)){
                        let subValor = valor[elemento];
                    if (typeof subValor !== "object"){
                        datosExtraidos = [...datosExtraidos, `La propiedad ${elemento} tiene como valor: ${objeto[propiedad][elemento]}.`];
                    } else {
                        if (Array.isArray(subValor)){
                            datosExtraidos = [...datosExtraidos, `La propiedad ${elemento} tiene como valores asociados: ${objeto[propiedad][elemento]}.`];
                        } else if ((esObjeto(subValor))) {
                            imprimir(subValor);
                        } else if (typeof subValor === "function"){
                            datosExtraidos = [...datosExtraidos, `La propiedad ${elemento} tiene como valor una función.`];
                        } else {
                            datosExtraidos = [...datosExtraidos, "No se reconoce el tipo de elemento."];
                        }
                    }
                    }
                }
                imprimirArray(datosExtraidos);
            } else if (tipoValor === "function") {
          console.log(`La propiedad ${propiedad} contiene una función.`);

        } else {
          console.log(`La propiedad ${propiedad} tiene como valor: ${valor} (${tipoValor}).`);
        }
        }
    }
  } else {
    console.log(objeto);
  }
};

export { imprimir };
