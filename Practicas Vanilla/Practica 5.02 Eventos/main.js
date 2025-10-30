"use strict";

window.onload = () => {

    const seccion = document.body.firstElementChild;

seccion.addEventListener('click', (evento) => {
    if (!evento.target.classList.contains('oculto')){ //Si no tiene la clase oculto.
        let contenido = evento.target.nextElementSibling; //Guardo siguiente elemento html en una constante.
        if (contenido.classList.contains('oculto')){ //Si este elemento tiene la clase oculto.
            contenido.classList.remove('oculto'); //Se lo quito.
        } else {
            contenido.classList.add('oculto'); //Se lo añado.
        }
    }
});

}; //Fin del window.onload