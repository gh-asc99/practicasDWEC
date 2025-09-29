"use strict";

import { esNumero, esObjeto } from "../../comprobaciones.js";
import { getNumeroDecimalES, imprimirArray } from "../../funcionalidades.js";

let calcularMedia = (discente) => {
  let notasExtraidas = discente.notas;
  let sumaTotal = 0;
  let contador = 0;
  for (let evaluacion in notasExtraidas) {
    if (notasExtraidas.hasOwnProperty(evaluacion)) {
      let nota = notasExtraidas[evaluacion];
      if (esNumero(nota)) {
        sumaTotal += notasExtraidas[evaluacion];
        contador++;
      } else {
        return `No es posible calcular la media, ya que una o más notas no tiene valor numérico.`;
      }
    }
  }
  let media = sumaTotal / contador;
  let mediaES = getNumeroDecimalES(media);
  return `La media de las notas de ${discente.nombre} es: ${mediaES}.`;
};

let imprimirAficiones = (discente) => {
  let aficionesAlumno = discente.aficiones;
  if (aficionesAlumno.length === 0) {
    return `El discente ${discente.nombre} no tiene aficiones`;
  }
  return `Las aficiones de ${discente.nombre} son: ${discente.aficiones}.`;
};

let imprimirInforme = (discente) => {
    console.log(`Informe del discente ${discente.nombre}:`);
  let arrayDatosExtraidos = [];
  for (let propiedad in discente) {
    if (discente.hasOwnProperty(propiedad)) {
      let valor = discente[propiedad];
      if (esObjeto(valor)) {
        if (Array.isArray(valor)) {
          arrayDatosExtraidos = [...arrayDatosExtraidos,`${propiedad}: [${valor.join(", ")}]`];
        } else {
          arrayDatosExtraidos = [...arrayDatosExtraidos, `${propiedad}: (`];
          for (let subPropiedad in valor) {
            if (valor.hasOwnProperty(subPropiedad)) {
              arrayDatosExtraidos = [...arrayDatosExtraidos,`${subPropiedad}: ${valor[subPropiedad]}`];
            }
          }
          arrayDatosExtraidos = [...arrayDatosExtraidos, `).`];
        }
      } else {
        arrayDatosExtraidos = [...arrayDatosExtraidos, `${propiedad}: ${valor}`];
      }
    }
  }
  imprimirArray(arrayDatosExtraidos);
};

export { calcularMedia, imprimirAficiones, imprimirInforme };
