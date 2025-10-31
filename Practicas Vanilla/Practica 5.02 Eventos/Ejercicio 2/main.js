"use strict";

const divNombres = document.body.firstElementChild; //Guardo en una variable el primer div (con los nombres).

divNombres.addEventListener('click', (evento) => {
    let nombreSeleccionado = evento.target.innerText;
    if (nombreSeleccionado === "Alex") nombreSeleccionado = "Alejandro"; //Fíjate si me gusta que me llamen Alex, que a estos niveles llego.
    const divContenidos = divNombres.nextElementSibling;
    const nodosEnContenidos =divContenidos.children;
    let nodos = Array.from(nodosEnContenidos);
    for (let nodo of nodos){
        if (nodo.innerText.includes(nombreSeleccionado)){ // Si el nodo incluye en su texto el nombre seleccionado en el div anterior.
            if (nodo.classList.contains('oculto')){ //Si el nodo está oculto, le quito la clase oculto.
                nodo.classList.remove('oculto');
            }
        } else { //Si es al contrario, le añado la clase oculto.
            nodo.classList.add('oculto');
        }
    }
});