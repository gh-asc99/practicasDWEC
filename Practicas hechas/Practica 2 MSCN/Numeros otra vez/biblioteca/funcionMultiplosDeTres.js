"use strict";
import { esEntero, esPositivo } from "../../comprobaciones.js";

function obtenerMultiplosDeTres (numero){
    if(esEntero(numero)){
        if(esPositivo(numero)){
            const multiplosDeTres = [];
            for (let i = 1; i < numero; i++){
                if((i%3)===0){
                    multiplosDeTres.push(i);
                }
            }
            return `Los múltiplos de 3 por debajo de ${numero} son: ${multiplosDeTres}`;
        } else{
            return `El número introducido para usar la función debe ser positivo. Has introducido: ${numero}`;
        }
    } else{
        return `El valor introducido para usar la función debe ser numérico. Has introducido: ${numero}`;
    }
}

export { obtenerMultiplosDeTres };