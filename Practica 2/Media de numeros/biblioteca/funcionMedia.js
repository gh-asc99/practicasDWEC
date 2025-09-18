"use strict";
import {esEntero} from "../../comprobaciones.js";

function mediaAritmetica(){
    let sumaTotal = 0;
    for(let i=0; i<arguments.length; i++){
        if(esEntero(arguments[i])){
            sumaTotal += arguments[i];
        }else{
            return `La función no se puede usar ya que uno o más de los parámetros introducidos no es numérico. La lista introducida es: ${Array.from(arguments)}`;
            //${Array.from(arguments)} lo he sacado por ChatGPT, ahora ya se cómo mostrar la lista de parámetros por mensaje
        }
    }
    let media = sumaTotal / arguments.length;
    return `La media aritmética de los valores introducidos es: ${media}`;
}

export {mediaAritmetica};