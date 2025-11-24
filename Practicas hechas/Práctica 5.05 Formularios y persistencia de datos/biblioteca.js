"use strict";

import { convertirArrayEnString } from "../../funcionalidades.js";

const comprobarError = (evento) => {
  if (!comprobarInputText(evento.target)) {
    evento.target.classList.add("error");
  } else {
    evento.target.classList.remove("error");
  }
};

const comprobarInputsFormulario = (idFormulario, cuadroInformador) => {
  const formulario = document.getElementById(idFormulario);
  const inputsFormulario = formulario.getElementsByTagName("input");
  let valido = true;
  let elementosChecked = 0;

  for (let i = 0; i < inputsFormulario.length; i++) {
    if (inputsFormulario[i].type === "text") {
      valido = comprobarInputText(inputsFormulario[i]);
      if (!valido) lanzarAvisoError(inputsFormulario[i], cuadroInformador);
    } else if (inputsFormulario[i].type === "number") {
      valido = comprobarInputNumber(inputsFormulario[i]);
      if (!valido) lanzarAvisoError(inputsFormulario[i], cuadroInformador);
    } else if (inputsFormulario[i].type === "checkbox") {
      if (inputsFormulario[i].checked) elementosChecked++;
    } else if (inputsFormulario[i].type === "url") {
      continue;
    }
  }

  valido = validarCheckboxes(elementosChecked);
  if (!valido)
    lanzarAvisoError(document.getElementById("generoPop"), cuadroInformador); //Cojo un input checkbox cualquiera para informar del
  // error (el error es que no se ha seleccionado ninguna opción del listado de géneros musicales).

  return valido;
};

const lanzarAvisoError = (input, cuadroInformador) => {
  if (input.type === "text") {
    if (!(input.name === "localizacion")) {
      const mensaje = `El ${input.name} del disco no tiene 5 carácteres o más.`;
      const p = document.createElement("p");
      p.textContent = mensaje;
      p.style = "color:red;";
      cuadroInformador.appendChild(p);
    } else {
      const mensaje = `La ${input.name} del disco no sigue el formato ES-000AA.`;
      const p = document.createElement("p");
      p.textContent = mensaje;
      p.style = "color:red;";
      cuadroInformador.appendChild(p);
    }
  } else if (input.type === "number") {
    const mensaje = `El año del disco no está conformado por 4 números.`; //En este caso he escrito "directamente" para no usar "year" (el name del
    //año de publicación).
    const p = document.createElement("p");
    p.textContent = mensaje;
    p.style = "color:red;";
    cuadroInformador.appendChild(p);
  } else if (input.type === "checkbox") {
    let checkboxGenerosMusicales = document.getElementById(
      "checkboxGenerosMusicales"
    ).innerText;
    const mensaje = `No se ha seleccionado ningún ${checkboxGenerosMusicales}.`;
    const p = document.createElement("p");
    p.textContent = mensaje;
    p.style = "color:red;";
    cuadroInformador.appendChild(p);
  }
};

const comprobarInputText = (input) => {
  //Si el input es type "text".
  if (!(input.name === "localizacion")) {
    //Si el input no tiene el name "localizacion".
    if (!(input.value.length >= 5)) {
      //Si el input no tiene 5 carácteres o más.
      return false;
    }
  } else {
    //Si el input tiene el name "localizacion".
    const formato = new RegExp("^ES-[0-9]{3}[A-Z]{2}$");
    if (!formato.test(input.value)) {
      return false;
    }
  }
  return true;
};

const comprobarInputNumber = (input) => {
  if (input.value < 1000 || input.value > 9999) {
    return false;
  } else {
    return true;
  }
};

const validarCheckboxes = (cantidadCheckboxes) => {
  if (cantidadCheckboxes === 0) {
    return false;
  } else {
    return true;
  }
};

const obtenerDatosFormulario = (idFormulario) => {
  let datosFormulario = {
    nombre: "",
    caratula: "",
    interprete: "",
    year: "",
    genero: [],
    localizacion: "",
    prestado: "",
  };

  const formulario = document.getElementById(idFormulario);

  if (formulario.tagName === "FORM") {
    const elementos = formulario.getElementsByTagName("input");

    let cantidadCheckboxes = 0;
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].type === "checkbox") {
        cantidadCheckboxes++;
      }
    }

    let contadorCheckboxes = 0;

    for (let i = 0; i < elementos.length; i++) {
      const input = elementos[i];

      if (input.type === "text") {
        if (input.name === "nombre") {
          datosFormulario.nombre = input.value;
        } else if (input.name === "interprete") {
          datosFormulario.interprete = input.value;
        } else if (input.name === "localizacion") {
          datosFormulario.localizacion = input.value;
        }
      } else if (input.type === "url") {
        if (input.name === "caratula") {
          datosFormulario.caratula = input.value;
        }
      } else if (input.type === "number") {
        if (input.name === "year") {
          datosFormulario.year = Number(input.value);
        }
      } else if (input.type === "checkbox") {
        contadorCheckboxes++;
        if (input.checked) {
          datosFormulario.genero.push(input.name);
        }
      } else if (input.type === "radio") {
        if (input.checked) {
          datosFormulario.prestado = input.value;
        }
      }
    }
  } else {
    console.log(
      "El id pasado por parámetro no pertenece a un elemento formulario."
    );
  }

  return datosFormulario;
};

const crearDisco = (discoJSON) => {
  const mostradorDiscos = document.getElementById("mostradorDiscos");
  const divDisco = document.createElement("div");
  divDisco.id = discoJSON.nombre;
  divDisco.classList.add("cuadroImpresionDisco");

  const pNombre = document.createElement("p");
  pNombre.textContent = discoJSON.nombre;
  divDisco.appendChild(pNombre);

  const pCaratula = document.createElement("img");
  pCaratula.id = "portadaDisco";
  pCaratula.src = discoJSON.caratula;
  divDisco.appendChild(pCaratula);

  const pInterprete = document.createElement("p");
  pInterprete.textContent = discoJSON.interprete;
  divDisco.appendChild(pInterprete);

  const pYear = document.createElement("p");
  pYear.textContent = discoJSON.year;
  divDisco.appendChild(pYear);

  const pGenero = document.createElement("p");
  pGenero.textContent = convertirArrayEnString(discoJSON.genero);
  divDisco.appendChild(pGenero);

  const pLocalizacion = document.createElement("p");
  pLocalizacion.textContent = discoJSON.localizacion;
  divDisco.appendChild(pLocalizacion);

  const pPrestado = document.createElement("p");
  pPrestado.textContent = discoJSON.prestado;
  divDisco.appendChild(pPrestado);

  const papelera = document.createElement("img");
  papelera.name = "papelera";
  papelera.src = "./papelera.png";
  papelera.width = 40;
  papelera.height = 50;
  divDisco.appendChild(papelera);

  mostradorDiscos.appendChild(divDisco);
};

const buscarDisco = () => {
  const textoBusqueda = document.getElementById("busqueda").value;
  const mostradorDiscos = document.getElementById("mostradorDiscos");

  const discos = Array.from(mostradorDiscos.children).filter(elemento => elemento.tagName === "DIV");

  for (let i = 0; i < discos.length; i++) {
    const nombre = discos[i].id;

    if (nombre === textoBusqueda) {
      discos[i].classList.remove("oculto");
    } else {
      discos[i].classList.add("oculto");
    }
    mostradorDiscos.appendChild(discos[i]); //acabbo de añadirla
  }
};

const mostrarTodosLosDiscos = () => {
  const mostradorDiscos = document.getElementById("mostradorDiscos");
  const discos = Array.from(mostradorDiscos.children);

    for (let i = 0; i < discos.length; i++) {
      discos[i].classList.remove("oculto");
    }

};

const eliminarDisco = (idDisco) => {
  const disco = document.getElementById(idDisco);
  if (disco) disco.remove();

  let discos = cargarDesdeStorage();
  discos = discos.filter(d => d.nombre !== idDisco);
  guardarEnStorage(discos);
};

const guardarEnStorage = (discos) => {
  localStorage.setItem("discos", JSON.stringify(discos));
};

const cargarDesdeStorage = () => {
  const datos = localStorage.getItem("discos");
  return datos ? JSON.parse(datos) : [];
};

const agregarDisco = (discoJSON) => {
  crearDisco(discoJSON);

  const discos = cargarDesdeStorage();
  discos.push(discoJSON);
  guardarEnStorage(discos);
};

export {
  comprobarInputsFormulario,
  comprobarError,
  obtenerDatosFormulario,
  crearDisco,
  buscarDisco,
  mostrarTodosLosDiscos,
  eliminarDisco,
  cargarDesdeStorage,
  agregarDisco
};
