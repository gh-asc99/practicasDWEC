"use strict";

const crearTabla60x60 = () => {
  let tabla = document.createElement("table");

  for (let i = 0; i < 60; i++) {
    let fila = document.createElement("tr");
    for (let j = 0; j < 60; j++) {
      let celda = document.createElement("td");
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }

  document.getElementById('tablero').appendChild(tabla);
};

export default crearTabla60x60;
