"use strict";

import { constructor } from "./biblioteca/ejercicio1.js";
import { mostrador } from "./biblioteca/ejercicio2.js";
import { calcularMedia, imprimirAficiones, imprimirInforme } from "./biblioteca/ejercicio3.js";

/*
//Ejercicio 1
console.log(constructor("Ingles", 2025, "Modulo de Inglés, impartido por Mercedes", ["Alex", "Dani", "Javi"]));
console.log(constructor("Itinerario Personal para la Empleabilidad", 2025, "Modulo de IPE, impartido por Marga", ["Jorge", "Oscar", "Salvado", "Pepe", "Victor"]));
console.log(constructor("Despliegue de Aplicaciones Web", 2025, "Modulo de DAW, impartido por David", ["Naim", "Rubén", "Marcos","Ana", "Andrea"]));
*/

/*
//Ejercicio 2
let cursoIngles = constructor("Ingles", 2025, "Modulo de Inglés, impartido por Mercedes", ["Alex", "Dani", "Javi"]);
let cursoIPE = constructor("Itinerario Personal para la Empleabilidad", 2025, "Modulo de IPE, impartido por Marga", ["Jorge", "Oscar", "Salvado", "Pepe", "Victor"]);
let cursoDAW = constructor("Despliegue de Aplicaciones Web", 2025, "Modulo de DAW, impartido por David", ["Naim", "Rubén", "Marcos","Ana", "Andrea"]);
console.log(mostrador(cursoIngles));
console.log(mostrador(cursoIPE));
console.log(mostrador(cursoDAW));
*/

let discente = {
    id: 1,
    nombre: "Alejandro",
    apellidos: "Soler Cruz",
    aficiones: ["leer", "cantar", "dibujar", "jugar a videojuegos", "ver películas"],
    notas: {
        primera: 6,
        segunda: 7,
        tercera: 9
    }
};
console.log(calcularMedia(discente));
console.log(imprimirAficiones(discente));
console.log(imprimirInforme(discente));