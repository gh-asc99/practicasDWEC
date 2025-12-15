"use strict";

import {guardarPeliculaLocalStorage, iniciarAplicacion, pintarPelicula, pintarPeliculasFavoritas, recogerDatosFormulario } from "./bibliotecas/manipularDOM.js";

window.onload = () => {

    const urlPeliculas = "https://ghibliapi.vercel.app/films";
    const contenedorListado = document.getElementById("listadoPeliculas");
    const contenedorDetalles = document.getElementById("detallesPelicula");
    const formularioFavoritas = document.getElementById("formularioPeliculaFavorita");
    const botonGuardarFavorito = document.getElementById("botonGuardarFavorito");
    const mostradorFavoritos = document.getElementById("mostradorFavoritos");
    const botonMostrarFavorito = document.getElementById("botonMostrarFavorito");
    const imagenesPapelera = document.getElementsByName("imagenPapelera");

    let nombrePeliculaSeleccionada = "";

    iniciarAplicacion(urlPeliculas, contenedorListado);

    contenedorListado.addEventListener("click", (evento) => {
        if (evento.target.tagName === "A") {
            nombrePeliculaSeleccionada = evento.target.innerText;
            pintarPelicula(nombrePeliculaSeleccionada, urlPeliculas, contenedorDetalles);
        }
    });

    botonGuardarFavorito.addEventListener("click", (evento) => {
            //1. comprobar/validar cada input del formulario
            //2. recoger los datos del formulario
            let objetoFormulario = recogerDatosFormulario (formularioFavoritas);
            //3. guardar en localStorage
            console.log(objetoFormulario);
            guardarPeliculaLocalStorage(objetoFormulario);
    });

    botonMostrarFavorito.addEventListener("click", (evento) => {
        pintarPeliculasFavoritas(mostradorFavoritos);
        //asignar evento a las imagenes de papelera
        imagenesPapelera.addEventListener("click", (evento) => {
            
            //borrarPelicula()
        })
    });

};