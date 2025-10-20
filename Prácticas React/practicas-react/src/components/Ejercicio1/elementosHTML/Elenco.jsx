"use strict";
import React from "react";
import Interprete from "../../Lista/Interprete.jsx";

const Elenco = (props) => {
  return (
    <>
      <div>
        <Interprete
          tipo="elenco"
          className="peliculaElenco_alert"
          nombre={props.actor1}
          foto={props.fotoActor1}
        >
          <p>{props.descripcionActor1}</p>
        </Interprete>
        <Interprete tipo="elenco" nombre={props.actor2} foto={props.fotoActor2}>
          <p>{props.descripcionActor2}</p>
        </Interprete>
        <Interprete tipo="elenco" nombre={props.actor3} foto={props.fotoActor3}>
          <p>{props.descripcionActor3}</p>
        </Interprete>
      </div>
    </>
  );
};

export default Elenco;
