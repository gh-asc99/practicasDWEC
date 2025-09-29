"use strict";

import { esObjeto } from "../../comprobaciones.js";
import { imprimirArray } from "../../funcionalidades.js";

let mostrador = (curso) => {
  let informacion = [];
  for (let propiedad in curso) {
    if (typeof curso[propiedad] !== "function") {
      //Si la propiedad de curso no almacena una funcion.
      if (curso.hasOwnProperty(propiedad) && !esObjeto(curso[propiedad])) {
        //Si es propiedad específica del curso pero NO es un objeto.
        informacion = [
          ...informacion,
          `La propiedad ${propiedad} tiene como valor: ${curso[propiedad]}.`,
        ];
      }
      if (curso.hasOwnProperty(propiedad) && esObjeto(curso[propiedad])) {
        //Si es propiedad específica del curso pero es un objeto.
        if (Array.isArray(curso[propiedad])) {
          if (curso[propiedad].length == 0) {
            informacion = [
              ...informacion,
              `La propiedad ${propiedad} todavía no tiene valores asociados.`,
            ];
          } else {
            informacion = [
              ...informacion,
              `La propiedad ${propiedad} contiene:`,
            ];
            for (let elemento of curso[propiedad]) {
              informacion = [...informacion, JSON.stringify(elemento)];
            }
          }
        } else {
          informacion = [
            ...informacion,
            `La propiedad ${propiedad} tiene como valores: (`,
          ];
          for (let objeto in curso[propiedad]) {
            if (curso[propiedad].hasOwnProperty(objeto)) {
              let valor = curso[propiedad][objeto];
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
    }
  }

  imprimirArray(informacion);
};

export { mostrador };
