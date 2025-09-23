"use strict";

import { esNumero } from "../../../../comprobaciones.js";

const args = Array.from(arguments);

function sumando (args){
    if (esNumero(args)){
        if(args.length >= 2){
            let suma = 0;
            for (let i = 0; i < arguments.length; i++) {
                suma += arguments[i];
                
            }
            return `La suma total de los valores introducidos es: ${suma}`;
        }else{
            return `Para usar la función debes introducir 2 parámetros como mínimo.`;
        }
    } else {
        return `Uno o más valores introducido no es de tipo numérico. Has introducido: ${Array.from(arguments)}`;
    }
}

export { sumando };