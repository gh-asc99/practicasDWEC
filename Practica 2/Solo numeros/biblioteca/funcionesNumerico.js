"use strict";
import { esEntero } from "../../comprobaciones.js";

function analisisNumerico (dato){
    if (esEntero(dato)){
        let parImpar = (dato%2) == 0 ? "par" : "impar";
        let negativoPositivo = dato < 0 ? "negativo" : "positivo";
        
        let primoNoprimo;
        let numeroDivisores = 0;
        for(let i = 1; i < dato; i++){
            if((dato%i) === 0){
                numeroDivisores++;
            }
        }
        if (numeroDivisores > 2){ //ya que hay que pasar por alto los casos que sean divisibles entre 1 y sí mismo. Quiero saber si aparte de estos 2 valores, tiene más divisores. En cuyo caso, no será primo.
            primoNoprimo = "no primo";
        } else{
            primoNoprimo = "primo";
        }

        return `El número ${dato} es: ${parImpar}, ${negativoPositivo} y ${primoNoprimo}.`;
    } else{
        return `Para usar la función debes introducir un valor numérico.`;
    }
}

export { analisisNumerico };