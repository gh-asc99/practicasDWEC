"use strict";

import { constructor } from "./biblioteca/ejercicio1.js";
import { mostrador } from "./biblioteca/ejercicio2.js";
import { calcularMedia, imprimirAficiones, imprimirInforme } from "./biblioteca/ejercicio3.js";
import { imprimir } from "./biblioteca/ejercicio5.js";


/*
//Ejercicio 1
console.log(constructor("Ingles", 2025, "Modulo de Inglés, impartido por Mercedes"));
console.log(constructor("Itinerario Personal para la Empleabilidad", 2025, "Modulo de IPE, impartido por Marga"));
console.log(constructor("Despliegue de Aplicaciones Web", 2025, "Modulo de DAW, impartido por David"));
*/

/*
//Ejercicio 2
let cursoIngles = constructor("Ingles", 2025, "Modulo de Inglés, impartido por Mercedes");
let cursoIPE = constructor("Itinerario Personal para la Empleabilidad", 2025, "Modulo de IPE, impartido por Marga");
let cursoDAW = constructor("Despliegue de Aplicaciones Web", 2025, "Modulo de DAW, impartido por David");
console.log(mostrador(cursoIngles));
console.log(mostrador(cursoIPE));
console.log(mostrador(cursoDAW));
*/

/*
//Ejercicio 3
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

console.log(typeof discente.notas.primera);
*/

/*
//Ejercicio 4
let cursoDWEC = constructor("Desarrollo Web en Entorno Cliente", 2025, "Modulo de DWEC, impartido por Juan Carlos");
let discenteFeo = {
    id: 2,
    nombre: "Feo",
    apellidos: "Con Ganas",
    aficiones: ["mirarse al espejo", "llorar", "beber alcohol"],
    notas: {
        primera: 4,
        segunda: 7,
        tercera: 3.5
    }
};
let discenteGuapo = {
    id: 3,
    nombre: "Guapo",
    apellidos: "Guapísimo Monísimo",
    aficiones: ["jugar al futbol", "entrenar", "leer", "hacerse selfies"],
    notas: {
        primera: 8,
        segunda: 6.5,
        tercera: 6
    }
};
cursoDWEC.matricular(discenteFeo);
cursoDWEC.matricular(discenteGuapo);

mostrador(cursoDWEC);
*/


//Ejercicio 5
let discenteGuapo = {
    id: 3,
    nombre: "Guapo",
    apellidos: "Guapísimo Monísimo",
    aficiones: ["jugar al futbol", "entrenar", "leer", "hacerse selfies"],
    notas: {
        primera: 8,
        segunda: 6.5,
        tercera: 6
    }
};

let cursoDWEC = constructor("Desarrollo Web en Entorno Cliente", 2025, "Modulo de DWEC, impartido por Juan Carlos");

imprimir(discenteGuapo);
cursoDWEC.matricular(discenteGuapo);
console.log(imprimir(cursoDWEC));
