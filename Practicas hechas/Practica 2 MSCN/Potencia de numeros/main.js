"use strict";
import { potencia } from "./biblioteca/funcionPotencia.js";

console.log(potencia(2,6));
console.log(potencia(3,3));
console.log(potencia(5,2));
console.log(potencia(5,-2)); 
/*ya que es posible que un número esté elevado a un exponente negativo,
no es impedimento para usar la función el hecho de que el segundo valor
introducido (el exponente) sea negativo*/
console.log(potencia(2,"asc"));
console.log(potencia(true,6));