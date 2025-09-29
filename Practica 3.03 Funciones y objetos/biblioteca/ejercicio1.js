"use strict";

import { esNumero, esEnteroPositivo } from "../../comprobaciones.js";

let constructor = (nom, fecha, descrip) => {
    if (!(esNumero(fecha) && esEnteroPositivo(fecha))){ //En caso de que la fecha no sea valor numérico ni entero y positivo.
        fecha = "Fecha no válida."
    }
    console.log(`Se ha generado el curso de ${nom}`);
    return {
        nombre: nom,
        any: fecha,
        descripcion: descrip,
        alumnado: [], 
        //Esto forma parte del ejercicio 4.
        matricular: function(discente){
            this.alumnado = [...this.alumnado, discente];
            console.log(`El discente ${discente.nombre} ha sido matriculado en el curso de ${this.nombre}`);
        }
    }
};

export { constructor };