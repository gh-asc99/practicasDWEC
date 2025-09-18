"use strict";
import { esEntero } from "../../comprobaciones.js";

function potencia(base, exponente){
    if(esEntero(base) && esEntero(exponente)){
        let contador = 1;
        let resultado = 1;
        while(contador <= exponente){
            resultado *= base; 
            contador++;
        }
        return `${base} elevado a ${exponente} es: ${resultado}`;
    } else{
        return `Los valores introducidos deben ser de tipo numérico y enteros para usar la función. Has introducido: ${base} y ${exponente}`;
    }
}

export { potencia };