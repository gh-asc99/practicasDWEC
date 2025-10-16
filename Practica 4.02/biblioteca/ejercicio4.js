"use strict";

const mostrarCarrusel = () => {
  const imagenes = [
    "https://i.blogs.es/13b8c5/piratascaribe/1366_2000.jpg",
    "https://media.revistagq.com/photos/5eb13e411c7a78d7f484ced3/16:9/w_2560%2Cc_limit/harry-potter.png",
    "https://sm.ign.com/t/ign_es/lists/h/how-to-wat/how-to-watch-the-hunger-games-movies-in-chronological-order_kmmc.1200.jpg",
    "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSZXwuHFW4tcSobMXbzXe6MNSH5cbY-EqywV6Pd4_GtA3jLShHVR1skBNy4Casgza8hL4liyCLP7rdSQD99iVbByt-gdeg0Tdf4M.jpg?r=f03",
  ];

  let paquete = document.createElement("div");
  paquete.classList.add("carrusel");
  let contenedorImagen = document.createElement("img");
  contenedorImagen.src = imagenes[0];
  contenedorImagen.classList.add("imagenesCarrusel");
  paquete.appendChild(contenedorImagen);
  document.body.appendChild(paquete);

  let indice = 0;
  const cambiarImagen = () => {
    contenedorImagen.style.opacity = 0;

    setTimeout(() => {
      indice = (indice + 1) % imagenes.length;
      contenedorImagen.src = imagenes[indice];
      contenedorImagen.style.opacity = 1;
    }, 500);
  };
  setInterval(cambiarImagen, 2000);
};

export default mostrarCarrusel;
