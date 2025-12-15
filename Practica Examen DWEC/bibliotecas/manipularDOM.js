"use strict";

import traerDatos from "./traerDatos.js";

const dibujarListado = (listado) => {
    const contenedorListado = document.getElementById("listadoPeliculas");
    let plantilla = "<ul>";
    if (Array.isArray(listado) && listado.length > 0) {
        listado.map((pelicula) => {
            plantilla += `<li><a>${pelicula.title}</a>(${pelicula.release_date})</li>`;
        })
        plantilla += "</ul>"
        contenedorListado.innerHTML = plantilla;
    }
    return plantilla;
};

const iniciarAplicacion = async (urlPeliculas, contenedorListado) => {
    const peliculas = await traerDatos(urlPeliculas);
    contenedorListado.innerHTML = dibujarListado(peliculas);
    const datosStorage = localStorage.getItem("peliculasFavoritas");
    if (datosStorage === null) {
        localStorage.setItem("peliculasFavoritas", traerPeliculasFavoritas());
    }
};

const dibujarDetallesPelicula = (pelicula) => {
    let plantilla = `
    <h3>${pelicula.title}</h3>
    <p>${pelicula.description}</p>
    <p><strong>Director:</strong>${pelicula.director}</p>
    <p><strong>Año:</strong>${pelicula.release_date}</p>
    <p><strong>Duración:</strong>${pelicula.running_time}</p>
    `;
    return plantilla;
};

const buscarPeliculaSeleccionada = (nombre, peliculas) => {
    const arrayPeliculas = Array.from(peliculas);
    for (let i = 0; i < arrayPeliculas.length; i++) {
        if (arrayPeliculas[i].title === nombre) {
            return arrayPeliculas[i];
        }
    }
    return `No se ha encontrado la película ${nombre} en la API.`
};

const pintarPelicula = async (nombre, url, contenedorDetalles) => {
    const peliculas = await traerDatos(url);
    const peliculaSeleccionada = buscarPeliculaSeleccionada(nombre, peliculas);
    contenedorDetalles.innerHTML = dibujarDetallesPelicula(peliculaSeleccionada);
};

const recogerDatosFormulario = (formulario) => {
    let objeto = {};
    const camposInternos = Array.from(formulario.children).filter((nodo) => nodo.tagName === "DIV");

    for (let i = 0; i < camposInternos.length; i++) {
        const div = camposInternos[i].children;
        for (let j = 0; j < div.length; j++) {
            if (div[j].tagName === "INPUT") {
                objeto[div[j].name] = div[j].value;
            }
        }
    }
    return objeto;
};

const guardarPeliculaLocalStorage = (pelicula) => {
    let peliculasAlmacenadas = traerPeliculasFavoritas();
    peliculasAlmacenadas = [...peliculasAlmacenadas, pelicula];
    localStorage.setItem("peliculasFavoritas", JSON.stringify(peliculasAlmacenadas));
};

const traerPeliculasFavoritas = () => {
    const datos = localStorage.getItem("peliculasFavoritas");
    if (datos === "undefined") {
        return [];
    }
    return JSON.parse(datos);
};

const pintarPeliculasFavoritas = (contenedorFavoritos) => {
    contenedorFavoritos.innerHTML = "";
    const peliculasAlmacenadas = traerPeliculasFavoritas();
    let tablaMostrador = document.createElement("table");
    peliculasAlmacenadas.map((pelicula) => {

        let fila = document.createElement("tr");
        let celda1 = document.createElement("td");
        celda1.innerHTML = `<strong>Nombre:</strong>${pelicula.nombre}`;
        let celda2 = document.createElement("td");
        celda2.innerHTML = `<strong>Comentario:</strong>${pelicula.comentario}`;
        let celda3 = document.createElement("td");
        celda3.innerHTML = `<strong>Puntuación:</strong>${pelicula.puntuacion}`;
        let celda4 = document.createElement("td");
        celda4.innerHTML = `<img name="imagenPapelera" class="imagenPapelera" src="../assets/img/papeleraBorrar.png"/>`;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);

        tablaMostrador.appendChild(fila);
    });
    contenedorFavoritos.appendChild(tablaMostrador);
};

const confirmarBorrado = () => {
    return confirm("¿Estás seguro de que quieres borrar la película?")
};

const borrarPelicula = (evento) => {
    //falta por implementar
};

export { dibujarListado, iniciarAplicacion, dibujarDetallesPelicula, buscarPeliculaSeleccionada, pintarPelicula, recogerDatosFormulario, guardarPeliculaLocalStorage, pintarPeliculasFavoritas };