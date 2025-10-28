"use strict";

const censorDOM = () => {
    const elementos = document.body.getElementsByTagName("*");

    for(let i = 0; i<elementos.length ; i++){
        if(elementos[i].innerHTML.includes("sexo")){
            console.log(elementos[i]);
            let texto = elementos[i].textContent;
            let palabras = texto.split(" ");
            for (let j = 0; j<palabras.length ; j++){
                if (palabras[j].trim() === "sexo") {
                    let span = document.createElement("span");
                    let contenido = document.createTextNode("Contenido Bloqueado");
                    span.appendChild(contenido);

                    span.style.color = "red";
                    span.style.fontWeight = "bold";
                    span.style.fontStyle = "italic";

                    palabras[j] = span.outerHTML;
                } else if (palabras[j].trim() === "sexo.") {
                    let span = document.createElement("span");
                    let contenido = document.createTextNode("Contenido Bloqueado.");
                    span.appendChild(contenido);

                    span.style.color = "red";
                    span.style.fontWeight = "bold";
                    span.style.fontStyle = "italic";

                    palabras[j] = span.outerHTML;
                }
                
            }
            elementos[i].innerHTML = palabras.join(" ");
        }
    }
};

export default censorDOM;