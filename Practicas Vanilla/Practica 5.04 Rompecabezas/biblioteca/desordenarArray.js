"use strict";

let desordenarArray = (lista) => {
  let arrayImagenes = Array.from(lista);
  let nuevaLista = [];
  let selector = 0;
  for (let i = 0; i < arrayImagenes.length; i++) {
    selector = Math.floor(Math.random() * arrayImagenes.length); // Genero número aleatorio para seleccionar una imagen random del array..
    if(nuevaLista.includes(arrayImagenes[selector])){
        do {
            selector = Math.floor(Math.random() * arrayImagenes.length); // Genero el número aleatorio nuevamente
        } while (nuevaLista.includes(arrayImagenes[selector]));
        //Cambia el selector hasta que el elemento al que apune no se encuentre en la nueva lista.
        nuevaLista.push(arrayImagenes[selector]);
    } else {
        nuevaLista.push(arrayImagenes[selector]);
    };
  };
  return nuevaLista;
};

export default desordenarArray;
