"use strict";
import React from "react";

const Taquilla = (props) => {
  const cambioDolarEuro = 0.92;

  const precioEnEuros = props.precio * cambioDolarEuro;

  const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(precioEnEuros);

  return (
    <>
      <div className="taquilla">
        <p>
          La película ha recaudado a nivel mundial:{" "}
          <strong>{formatoEuro}</strong>
        </p>
      </div>
    </>
  );
};

export default Taquilla;
