"use strict";

const crearTabla10x10 = () => {
  let tabla = document.createElement("table");

  let contador = 0;
  for (let i = 0; i < 10; i++) {
    let fila = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      let columna = document.createElement("td");
      columna.style.border= "solid, 2px, black";
      columna.style.padding= "10px";
      columna.style.textAlign= "center";
      contador++;
      columna.textContent = contador;
      fila.appendChild(columna);
    }
    tabla.appendChild(fila);
  }

  document.body.appendChild(tabla);
};

const esNumeroPrimo = (numero) => {
    let esPrimo = true;
    if (numero < 2){
        esPrimo = false;
    } else {
        for (let i = 2; i < numero; i++){
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    return esPrimo;
}

const primosDOM = () => {
    const celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        let numero = parseInt(celda.textContent);
        if (esNumeroPrimo(numero)){
            celda.classList.add("primo");
        }
    });
};

export { crearTabla10x10, esNumeroPrimo, primosDOM };
