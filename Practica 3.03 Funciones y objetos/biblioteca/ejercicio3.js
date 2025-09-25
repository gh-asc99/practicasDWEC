"use strict";

function calcularMedia (discente) {
    let notasExtraidas = discente.notas;
    let sumaTotal = 0;
    let contador = 0;
    for (let evaluaciones in notasExtraidas){
        if (notasExtraidas.hasOwnProperty(evaluaciones)){
            sumaTotal += notasExtraidas[evaluaciones];
            contador++;
        }
    }
    let media = sumaTotal/contador;
    return `La media de las notas de ${discente.nombre} es: ${media.toFixed(2)}`;
}

function imprimirAficiones (discente) {
    return `Las aficiones de ${discente.nombre} son: ${discente.aficiones}`;
}

function imprimirInforme (discente){
    let arrayDatosExtraidos = [];
    for (let propiedad in discente){
        if (discente.hasOwnProperty(propiedad)){
            let valor = discente[propiedad];
            if (typeof valor === 'object'){
                arrayDatosExtraidos.push(`${propiedad}: (`)
                for (let subPropiedad in valor){
                    if (valor.hasOwnProperty(subPropiedad)){
                        arrayDatosExtraidos.push(`${subPropiedad}: ${valor[subPropiedad]}`);
                    }
                }
                arrayDatosExtraidos.push(`)`)
            } else {
                arrayDatosExtraidos.push(`${propiedad}: ${valor}`);
            }
        }
    }
    return `Informe completo: ${arrayDatosExtraidos}`;
}

export { calcularMedia, imprimirAficiones, imprimirInforme };