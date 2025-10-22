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
        <button
          onClick={() => {
            mostrarElenco(contenedorElenco);
          }}
        >
          Elenco
        </button>
        <button
          onClick={() => {
            mostrarTaquilla(contenedorTaquilla);
          }}
        >
          Taquilla
        </button>
      </div>

      <div ref={contenedorElenco} className="oculto">
        <Elenco
          actor1="Johnny Depp"
          fotoActor1="https://m.media-amazon.com/images/M/MV5BZjA3NzZiZDktZjc2My00MzY2LThhOWMtZGFjYzg4ZDI2ZWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          descripcionActor1="En la piel del Capitán Jack Sparrow."
          actor2="Orlando Bloom"
          fotoActor2="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_Bloom_Cannes_2013.jpg/250px-Orlando_Bloom_Cannes_2013.jpg"
          descripcionActor2="En la piel del joven bucanero William Turner."
          actor3="Keira Knightley"
          fotoActor3="https://www.lavanguardia.com/peliculas-series/images/all/profile/1985/3/116/w1280/pxzcVzTyJBKwfuyRLDtax1Jmr7o.jpg"
          descripcionActor3="En la piel de Elizabeth Swann, la hija del gobernador."
        />
      </div>

      <div ref={contenedorTaquilla} className="oculto">
        <Taquilla precio="1066179725" />
      </div>
    </>
  );
};

export default Referencias;
