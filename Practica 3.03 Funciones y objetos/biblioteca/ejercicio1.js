"use strict";

let constructor = (nom, fecha, descrip) => {
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