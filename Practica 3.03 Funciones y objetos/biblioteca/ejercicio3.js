"use strict";

let calcularMedia = (discente) => {
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

let imprimirAficiones = (discente) => {
    return `Las aficiones de ${discente.nombre} son: ${discente.aficiones}`;
}

let imprimirInforme = (discente) => {
    let arrayDatosExtraidos = [];
    for (let propiedad in discente){
        if (discente.hasOwnProperty(propiedad)){
            let valor = discente[propiedad];
            if (typeof valor === 'object'){
                if (Array.isArray(valor)) {
                    // Si es array, lo concatenamos como lista
                    arrayDatosExtraidos = [...arrayDatosExtraidos, `${propiedad}: [${valor.join(", ")}]`];
                } else {
                arrayDatosExtraidos = [...arrayDatosExtraidos, `${propiedad}: (`];
                /* let notasInternas = propiedad[valor];
                arrayDatosExtraidos = [...arrayDatosExtraidos, notasInternas]; */
                for (let subPropiedad in valor){
                    if (valor.hasOwnProperty(subPropiedad)){
                        arrayDatosExtraidos = [...arrayDatosExtraidos, `${subPropiedad}: ${valor[subPropiedad]}`];
                    }
                }
                arrayDatosExtraidos = [...arrayDatosExtraidos, `)`];
                }
            } else {
                arrayDatosExtraidos = [...arrayDatosExtraidos, `${propiedad}: ${valor}`];
            }
        }
    }
    return `Informe completo: ${arrayDatosExtraidos}`;
}

export { calcularMedia, imprimirAficiones, imprimirInforme };