"use strict";

const mostrarOcultar = (elemento) => {
    const cajaContenido = elemento.nextElementSibling;

      const contenido = cajaContenido.querySelector('.contenido_acordeon');

    contenido.classList.toggle('oculto');
    
};

export default mostrarOcultar;