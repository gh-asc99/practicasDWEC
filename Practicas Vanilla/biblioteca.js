"use strict";

const comprobarInputsFormulario = () => {
  const inputsFormulario = document.getElementsByTagName("input");
  let valido = true;

  for (let i = 0; i < inputsFormulario.length; i++) {
    if (inputsFormulario[i].type === "text") { //Si el input es type "text".
        
      if (!(inputsFormulario[i].name === "localizacion")) { //Si el input no tiene el name "localizacion".
        if (!(inputsFormulario[i].value.length >= 5)) { //Si el input no tiene 5 carácteres o más.
          valido = false;
          console.log(
            `El input ${inputsFormulario[i].name} no tiene 5 carácteres o más.`
          );
          confirm(`El input ${inputsFormulario[i].name} no tiene 5 carácteres o más.`);
          break;
        }
      } else { //Si el input tiene el name "localizacion".
        const formato = new RegExp("^ES-[0-9]{3}[A-Z]{2}$");
        if (!(formato.test(inputsFormulario[i].value))){
            console.log(`El input ${inputsFormulario[i].name} no sigue el formato ES-000AA`)
        }
      }
    } else if (inputsFormulario[i].type === "number") {
    } else if (inputsFormulario[i].type === "radio") {
    } else {
      return false;
    }
  }
};

export { comprobarInputsFormulario };
