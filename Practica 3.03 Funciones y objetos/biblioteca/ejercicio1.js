"use strict";

let constructor = (nom, fecha, descrip, alum) => {
    const alumnadoCurso = [...alum];
    return {
        nombre: nom,
        any: fecha,
        descripcion: descrip,
        alumnado: alumnadoCurso
    }
};

export { constructor };