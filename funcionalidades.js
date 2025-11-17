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

const convertirArrayEnString = (array) => {
    let listaString = "";
    for (let i = 0; i < array.length; i++){
        if ((i !== array.length-1)){
            listaString += `${array[i]}, `;
        } else{
            listaString += `${array[i]}.`;
        }
    }
    return listaString;
};

export { imprimirArray, getNumeroDecimalES, convertirArrayEnString};