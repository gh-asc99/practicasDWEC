"use strict";
function esEntero(numero){
    let tipo = typeof numero;
    if (tipo == "number"){
        if ((numero%1) == 0){
            return true;
        }
    } else{
        return false;
    }
}

function esPositivo(numero){
    if(numero < 0){
        return false;
    }else{
        return true;
    }
}

export {esEntero, esPositivo};