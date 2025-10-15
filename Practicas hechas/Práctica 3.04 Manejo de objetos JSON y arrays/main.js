"use strict";

import { imprimirArray } from "../funcionalidades.js";
/*
//Ejercicio 1
console.log("Nombres en mayúscula:");
const nombres = ["Daniel", "Javier", "Alex", "Jorge", "David"];
function imprimirArrayMayusculas(v, i, a){
    return v.toUpperCase();
}

let nombresMayuscula = nombres.map(imprimirArrayMayusculas);
imprimirArray(nombresMayuscula);

console.log("\nNombres ordenados alfabéticamente al revés:");
let nombresAlfabeticamenteAlReves = nombres.sort().toReversed();
imprimirArray(nombresAlfabeticamenteAlReves);

console.log("\nArray de objetos JSON:");
function toObjetoJSON(v, i, a){
    return {
        id: i,
        nombre: v
    }
}
let arrayObjetosJSON = nombres.map(toObjetoJSON);
for (let objeto in arrayObjetosJSON){
    console.log(`${arrayObjetosJSON[objeto].nombre} está en la posición ${arrayObjetosJSON[objeto].id}.`);
};
*/

/*
//Ejercicio 2
let crearArray10 = () => {
    let numeros = new Array(10);
    for (let i = 0; i < numeros.length; i++){
        numeros[i] = ((Math.random()*10).toFixed());
    }
    return numeros;
};


let lista1 = crearArray10();
let lista2 = crearArray10();
let lista3 = crearArray10();

console.log("\nLista conjunta de números aleatorios mayores que 5:");
let arrayConjunto = [...lista1, ...lista2, ...lista3];
let arrayFiltrado = arrayConjunto.filter(valor => valor > 5);
imprimirArray(arrayFiltrado);
*/

//Ejercicio 3
const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];

function introducirUsuario (usuarios, nuevoUsuario) {
    usuarios = [...usuarios, nuevoUsuario]
    return usuarios;
}

function mayoresDeEdad (usuarios) {
    return usuarios.filter(persona => persona.preferencias.edad >= 18);
}

function usuariosConYahoo (usuarios) {
    return usuarios.filter(persona => persona.contacto.correoelectronico.includes("yahoo"));
}

function temaClaroMayoresEdadEspaña (usuarios){
    return usuarios.filter(persona => persona.preferencias.tema == "claro")
    .filter(persona => persona.preferencias.edad >= 18)
    .filter(persona => persona.contacto.direccion.pais == "España");
}

function usuariosIncompletos(usuarios) {
  return usuarios.filter(persona => {
    let faltanDatos = false;

    if (!persona.nombre) faltanDatos = true;

    if (!persona.preferencias?.tema || !persona.preferencias?.idioma || !persona.preferencias?.edad) {
      faltanDatos = true;
    }

    if (!persona.contacto?.correoelectronico || !persona.contacto?.telefono) {
      faltanDatos = true;
    }

    if (!persona.contacto?.direccion?.calle || !persona.contacto?.direccion?.localidad || !persona.contacto?.direccion?.pais) {
      faltanDatos = true;
    }

    return faltanDatos;
  });
}

function incluirApellidos (usuarios) {
    return usuarios.map(persona => {
        return {...persona, apellidos: "No indicado"};
    });
}

function agregarCodigoPostal(usuarios) {
  return usuarios.map(persona => {
    return {...persona, contacto: {...persona.contacto, direccion: {...persona.contacto.direccion, codigo: "00000"}}};
  });
}



/*
let listaConNuevoUsuario = introducirUsuario(usuarios, {
    nombre: "Alejandro",
    preferencias: { tema: "claro", idioma: "español", edad: 26 },
    contacto: {
      direccion: {
        calle: "Calle Murillo, 77",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correodeAlex@yahoo.com",
      telefono: "626626626",
    },
  });

  console.log(listaConNuevoUsuario);

let usuariosMayoresDeEdad = mayoresDeEdad(usuarios);
console.log(usuariosMayoresDeEdad);

let usuariosYahoo = usuariosConYahoo(usuarios);
console.log(usuariosYahoo);

let usuariosClaroMayoresEspaña = temaClaroMayoresEdadEspaña(listaConNuevoUsuario);
console.log(usuariosClaroMayoresEspaña);
*/