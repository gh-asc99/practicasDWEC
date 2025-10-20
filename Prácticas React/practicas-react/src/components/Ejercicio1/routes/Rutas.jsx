"use strict";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Elenco from "../elementosHTML/Elenco.jsx";
import Taquilla from "../elementosHTML/Taquilla.jsx";

const Rutas = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<p></p>} />
        <Route
          path="/elenco"
          element={
            <Elenco
              actor1={props.actor1}
              fotoActor1={props.fotoActor1}
              descripcionActor1={props.descripcionActor1}
              actor2={props.actor2}
              fotoActor2={props.fotoActor2}
              descripcionActor2={props.descripcionActor2}
              actor3={props.actor3}
              fotoActor3={props.fotoActor3}
              descripcionActor3={props.descripcionActor3}
            />
          }
        />
        <Route path="/taquilla" element={<Taquilla precio={props.precio} />} />
      </Routes>
    </>
  );
};

export default Rutas;
