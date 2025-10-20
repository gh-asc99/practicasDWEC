"use strict";
import React, { useRef } from "react";
import Elenco from "./elementosHTML/Elenco";
import Taquilla from "./elementosHTML/Taquilla";
import "./referencias.css";

const Referencias = () => {
  const contenedorElenco = useRef(null);
  const contenedorTaquilla = useRef(null);

  const mostrarElenco = () => {
    contenedorElenco.current.classList.toggle("oculto");
  };

  const mostrarTaquilla = () => {
    contenedorTaquilla.current.classList.toggle("oculto");
  };

  return (
    <>
      <div>
        <button onClick={() => {
            mostrarElenco(contenedorElenco);
          }}>
          Elenco
        </button>
        <button onClick={() => {
            mostrarTaquilla(contenedorTaquilla);
          }}>
          Taquilla
        </button>
      </div>

      <div ref={contenedorElenco}>
        <Elenco />
      </div>

      <div ref={contenedorTaquilla}>
        <Taquilla />
      </div>
    </>
  );
};

export default Referencias;