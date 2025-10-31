"use strict";

window.onload = () => {

    const seccion = document.body.firstElementChild;

seccion.addEventListener('click', (evento) => {
    if (evento.target.tagName === 'P'){ //En caso de haber hecho click en el texto.
        let contenedor = evento.target.parentElement; //Guardo en una variable el elemnto padre, en este caso el div que lo contiene.
        if (!contenedor.classList.contains('oculto')){ //Si dicho div no tiene la clase oculto.
        let siguienteContenedor = contenedor.nextElementSibling; //Guardo el siguiente elemento hermano html (siguiente div) en una variable.
        if (siguienteContenedor.classList.contains('oculto')){ //Si este nuevo div tiene la clase oculto.
            siguienteContenedor.classList.remove('oculto'); //Se la quito.
        } else {
            siguienteContenedor.classList.add('oculto'); //Se la añado.
        }
    }
    }
});

}; //Fin del window.onload