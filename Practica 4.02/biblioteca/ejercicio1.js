"use strict";

/*
const censorDOM = () => {
    const cuerpo = document.body;
    const recorrerNodos = (nodo) => {
        nodo.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
            child.textContent = child.textContent.replace(/sexo/gi, "censurado");
        }
        else {
        recorrerNodos(child);
      }
    });
};
recorrerNodos(cuerpo);
};
*/

const censorDOM = () => {
    const cuerpo = document.body;
    let elementos = cuerpo.children;
    for(let i = 0; i<elementos.length ; i++){
        console.log(elementos[i]);
        if(elementos[i].innerHTML.includes("sexo")){
            let texto = elementos[i].textContent;
            let palabras = texto.split(" ");
            for (let j = 0; j<palabras.length ; j++){
                if(palabras[j]==="sexo" || palabras[j]==="sexo."){
                    palabras[j] = "Contenido Bloqueado";
                }
            }
            elementos[i].textContent = palabras.join(" ");
        }
    }
};

export default censorDOM;