"use strict";

const promesa = new Promise((resolver, rechazar) => {
    let numero = Math.floor((Math.random())*101);
    setTimeout(() => {
        if (numero % 2 === 0){
            resolver(numero);
        } else {
            rechazar(new Error("El número es impar."))
        }
    }, 2000);
});

promesa
    .then ((resultado) => {
        console.log(resultado);
    });