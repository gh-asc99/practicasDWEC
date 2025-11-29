"use strict";

    const iniciarAplicacion = async () => {
            const contenedorPeliculas = document.getElementById("peliculas");

            const peliculas = await traerDatos();
            imprimirTitulos(peliculas, contenedorPeliculas);
    };

    const pintarInformacion = async (elemento) => {
        if (elemento.tagName === 'INPUT'){

        const peliculas = await traerDatos(); //ahora con filter me quedo con la peli que tenga el id del target
        const peliculaSeleccionada = peliculas.filter((pelicula) => pelicula.episode_id === Number(elemento.id));
        const pelicula = peliculaSeleccionada[0];

        pintarTituloPelicula(pelicula);
        pintarDatosPelicula(pelicula);
        }
        
    };

    const pintarTituloPelicula = (pelicula) => {
        const contenedorTitulo = document.getElementById("tituloPelicula");
        contenedorTitulo.innerHTML= `${pelicula.title}`;
    };

    const pintarDatosPelicula = (pelicula) => {
        const contenedorTitulo = document.getElementById("datosPelicula");
        contenedorTitulo.innerHTML= plantillaDatos(pelicula);
    };

    const convertirFechaEuropea = (fecha) => {
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
};

    const plantillaDatos = (pelicula) => {
        let plantilla = "";
        let fechaEuropea = convertirFechaEuropea(pelicula.release_date);
        plantilla =
        `<p class="sinopsis">${pelicula.opening_crawl}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Productor: </strong>${pelicula.producer}</p>
        <p><strong>Fecha de lanzamiento: </strong>${fechaEuropea}</p>
        `;

        return plantilla;
    };


const traerDatos = () => {
    return fetch(urlAPI2())
    .then((objeto) => {
        if (objeto.ok){
            return objeto.json();
        } else {
            throw new Error("Ha fallado la conexión a la API.");
        }
    })
    .then((datos) => {
        if (datos.results.length){
            return datos.results;
        } else {
            throw new Error("No se ha podido extraer el contenido de la API.");
        }
    })
    .catch ((error) => {
        console.log("No se ha podido establecer conexión con la API.");
        throw error;
    });
};

const imprimirTitulos = (listado, contenedor) => {
    let contenido = "";
    if (Array.isArray(listado) && listado.length){
        listado.map((elemento) => contenido += `<input type="button" id="${elemento.episode_id}" class="botonTitulo" value="${elemento.title}"/>`);
        contenedor.innerHTML = contenido;
    }
}



const urlAPI1 = () => {
    return "https://swapi.info/api/films";
};

const urlAPI2 = () => {
    return "https://swapi.dev/api/films/";
};

export { iniciarAplicacion, pintarInformacion };