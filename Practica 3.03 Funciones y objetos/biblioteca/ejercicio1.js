"use strict";

import { esNumero, esEnteroPositivo } from "../../comprobaciones.js";

let constructor = (nom, fecha, descrip) => {
    if (!(esNumero(fecha) && esEnteroPositivo(fecha))){ //en caso de que la fecha no sea valor numérico ni entero y positivo
        fecha = "Fecha no válida."
    }
    return {
        nombre: nom,
        any: fecha,
        descripcion: descrip,
        alumnado: [], 
        //esto forma parte del ejercicio 4
        matricular: function(discente){
            this.alumnado = [...this.alumnado, discente];
        }
    }
};

export { constructor };