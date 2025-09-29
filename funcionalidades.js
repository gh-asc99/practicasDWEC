"use strict";

let imprimirArray = (array) => {
    for (let elementos in array){
        console.log(array[elementos]);
    }
};

let getNumeroDecimalES = (numero) => {
    let numeroDosDecimales = numero.toFixed(2);
    let castingNumero = Number(numeroDosDecimales);
    let valorES = castingNumero.toLocaleString("es-ES");
    return valorES;
}

export { imprimirArray, getNumeroDecimalES };