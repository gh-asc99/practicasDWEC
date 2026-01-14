"use strict";

const arrayToString = (lista) => {
    let resultado = "";
    for(let i = 0; i < lista.length ; i++){
        if(i === lista.length-1){
            resultado += `${lista[i]}.`;
        }else {
            resultado += `${lista[i]}, `;
        }
    }
    return resultado;
};

export { arrayToString };