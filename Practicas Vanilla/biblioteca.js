"use strict";

const comprobarInputsFormulario = () => {
  const inputsFormulario = document.getElementsByTagName("input");
  let valido = true;

  let elementosChecked = 0;
  for (let i = 0; i < inputsFormulario.length; i++) {
    if (inputsFormulario[i].type === "text") {
      //Si el input es type "text".
      valido = comprobarInputText(inputsFormulario[i]);

    } else if (inputsFormulario[i].type === "number") {
      if (
        inputsFormulario[i].value < 1000 ||
        inputsFormulario[i].value > 9999
      ) {
        confirm(
          `El input ${inputsFormulario[i].name} no está conformado por 4 números`
        );
        valido = false;
      }
    } else if (inputsFormulario[i].type === "checkbox") {
      if (inputsFormulario[i].checked) elementosChecked++;
    }
  }

  if (elementosChecked === 0){
    let checkboxGenerosMusicales = document.getElementById("checkboxGenerosMusicales").innerText;
    confirm(
          `El input ${checkboxGenerosMusicales} no tiene seleccionado ningún elemento.`
        );
    valido = false;
  } else {

  }

  return valido;
};

const comprobarInputText = (input) => {
  //Si el input es type "text".
      if (!(input.name === "localizacion")) {
        //Si el input no tiene el name "localizacion".
        if (!(input.value.length >= 5)) {
          //Si el input no tiene 5 carácteres o más.
          confirm(
            `El input ${input.name} no tiene 5 carácteres o más.`
          );
          return false;
        }
      } else {
        //Si el input tiene el name "localizacion".
        const formato = new RegExp("^ES-[0-9]{3}[A-Z]{2}$");
        if (!formato.test(input.value)) {
          confirm(
            `El input ${input.name} no sigue el formato ES-000AA`
          );
          return false;
        }
      }
      return true;
};

export { comprobarInputsFormulario };
