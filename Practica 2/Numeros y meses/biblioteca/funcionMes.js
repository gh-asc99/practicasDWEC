"use strict";
import { esEntero } from "../../comprobaciones.js";

function obtenerMes (numero){
    if(esEntero(numero)){
        if(numero >= 1 && numero < 11){
            const meses = ["enero","febrero","marzo","abril", "mayo","junio","julio", "agosto", "septiembre","octubre", "noviembre"];
            let mes = meses[numero-1];
            return `El mes número ${numero} es ${mes}`;
        } else if(numero == 12){
            let mes = "diciembre";
            return `El mes número ${numero} es ${mes}`;
        } else {
            return `El número ${numero} no se corresponde con ningún mes. Debes usar un número entre 1 y 12`;
        }
    } else{
        console.log("Debes introducir un número entero para usar la función.")
    }
}

export { obtenerMes };