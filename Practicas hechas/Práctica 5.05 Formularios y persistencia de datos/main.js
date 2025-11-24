"use strict";

import {
  agregarDisco,
  buscarDisco,
  comprobarError,
  comprobarInputsFormulario,
  crearDisco,
  eliminarDisco,
  mostrarTodosLosDiscos,
  obtenerDatosFormulario,
  cargarDesdeStorage,
} from "./biblioteca.js";

window.onload = () => {
  const discosGuardados = cargarDesdeStorage();
  discosGuardados.forEach((disco) => crearDisco(disco));

  const botonGuardar = document.getElementById("botonGuardar");
  const botonMostrar = document.getElementById("botonMostrar");
  const botonBuscar = document.getElementById("botonBuscar");
  const botonLimpiar = document.getElementById("botonLimpiar");
  const cuadroInformador = document.getElementById("informadorErrores");
  const mostrador = document.getElementById("mostradorDiscos");

  mostrador.addEventListener("click", (evento) => {
    if (evento.target.name === "papelera") {
      const divDisco = evento.target.parentElement;
      if (confirm(`¿Quieres borrar el disco ${divDisco.id}?`))
        eliminarDisco(divDisco.id);
    }
  });

  botonBuscar.addEventListener("click", () => {
    buscarDisco();
  });

  botonLimpiar.addEventListener("click", () => {
    mostrarTodosLosDiscos();
  });

  botonMostrar.addEventListener("click", () => {
    const panelPrincipal = document.getElementById("panelPrincipal");
    panelPrincipal.classList.toggle("oculto");
  });

  botonGuardar.addEventListener("click", () => {
    Array.from(cuadroInformador.children).forEach((elemento) => {
      if (elemento.tagName !== "H3") elemento.remove();
    });

    if (comprobarInputsFormulario("formularioDisco", cuadroInformador)) {
      //Si todos los inputs se han validado correctamente.
      agregarDisco(obtenerDatosFormulario("formularioDisco"));
      const formulario = document.getElementById("formularioDisco");
      formulario.reset();
    }
  });

  const inputsText = Array.from(document.getElementsByTagName("input")).filter(
    (input) => input.type === "text"
  );

  inputsText.forEach((input) => {
    input.addEventListener("input", comprobarError);
  });
}; //Fin de window.onload.
