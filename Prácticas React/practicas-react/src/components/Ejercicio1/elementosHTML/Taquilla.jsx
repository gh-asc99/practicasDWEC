"use strict";
import React from "react";

const Taquilla = (props) => {
    //Este bloque (desde aquí ...
  const cambioDolarEuro = 0.92;

  const precioEnEuros = props.precio * cambioDolarEuro;

  const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(precioEnEuros);
  //... hasta aquí) lo he sacado de chatGPT

  return (
    <>
      <div className="taquilla">
        <p>La película ha recaudado a nivel mundial: <strong>{formatoEuro}</strong></p>
      </div>
    </>
  );
};

export default Taquilla;
