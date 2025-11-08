"use strict";
import crearTabla60x60 from "./biblioteca/crearTabla60x60.js";

window.onload = () => {
  //Primero hago la creación de la tabla de 60 x 60.
  crearTabla60x60();
  //Fin de creación de la tabla.

  let colorSeleccionado = null;

  const contenedorColores = document.getElementById("colores");
  const mostradorColor = document.querySelector(".indicador_color");
  const indicador = document.getElementById("indicador");

  contenedorColores.addEventListener("click", (evento) => {
    if (evento.target.tagName === "DIV") {
      colorSeleccionado = evento.target.id;

      mostradorColor.classList.remove("oculto");
      indicador.innerHTML = `Color seleccionado: <span class="seleccionado">${colorSeleccionado}</span>`;
    }
  });


  const coloresDisponibles = ["azul", "verde", "dorado", "rojo", "negro", "blanco"];
  //Guardar los colores disponibles me servirá para poder eliminarlo e intercambiarlos facilmente en los eventListener.

  const tableroDibujo = document.getElementById("tablero");

  let pintando = false;

  tableroDibujo.addEventListener("click", (evento) => { //Cuando hago clic.
    if (colorSeleccionado && evento.target.nodeName === "TD") {
        evento.target.classList.remove(...coloresDisponibles); //Elimina este color.
        evento.target.classList.add(colorSeleccionado); //Añade el nuevo color seleccionado.
    }
  });

  tableroDibujo.addEventListener("mousedown", (evento) => { //Cuando el clic está pulsado.
    pintando = true;
    if (colorSeleccionado && evento.target.nodeName === "TD") {
        evento.target.classList.remove(...coloresDisponibles); //Elimina este color.
        evento.target.classList.add(colorSeleccionado); //Añade el nuevo color seleccionado.
    }
  });

  tableroDibujo.addEventListener("mouseover", (evento) => { //Cuandopaso por encima.
    if (pintando && colorSeleccionado && evento.target.nodeName === "TD") {
        evento.target.classList.remove(...coloresDisponibles); //Elimina este color.
        evento.target.classList.add(colorSeleccionado); //Añade el nuevo color seleccionado.
    }
  });

  tableroDibujo.addEventListener("mouseup", () => { //Cuando dejo de pulsar el clic.
    pintando = false;
  });

  const botonReiniciar = document.getElementById('borrar');
  botonReiniciar.addEventListener('click', (evento) => {
    let celdasTablero = document.getElementsByTagName("td");
    for (let celda of celdasTablero){
        celda.classList.remove(...coloresDisponibles); //Eliminar cualquier color almacenado en las celdas.
    }
  });
}; //Fin de window.onload
