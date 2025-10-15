"use strict";
import { esEntero } from "../../comprobaciones.js";

function operacion(numero1, numero2, operador){
    if(esEntero(numero1)&&esEntero(numero2)){
            switch(operador){
                case "+":
                    let resultado = numero1 + numero2;
                    return `${numero1} ${operador} ${numero2} = ${resultado}`;
                    break;
                case "-":
                    let resultado1 = numero1 - numero2;
                    return `${numero1} ${operador} ${numero2} = ${resultado1}`;
                    break;
                case "*":
                    let resultado2 = numero1 * numero2;
                    return `${numero1} ${operador} ${numero2} = ${resultado2}`;
                    break;
                case "/":
                    if (numero2===0){
                        return `${numero1} ${operador} ${numero2} = No es posible dividir entre 0.`;
                        break;
                    }else{
                        let resultado3 = numero1 / numero2;
                        return `${numero1} ${operador} ${numero2} = ${resultado3}`;
                        break;
                    }
                case "%":
                    let resultado4 = numero1 % numero2;
                    return `${numero1} ${operador} ${numero2} = ${resultado4}`;
                    break;
                default:
                    return `Para usar la función, el operador deben ser uno entre (+ - * / %). Has introducido: ${operador}`;
            }
        
    }else {
        return `Para usar la función, los operandos deben ser valores enteros de tipo numérico. Has introducido: ${numero1} y ${numero2}`;
    }
}

export { operacion };