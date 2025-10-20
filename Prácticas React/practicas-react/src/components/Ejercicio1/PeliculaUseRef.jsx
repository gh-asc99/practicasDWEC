import React from "react";
import Contenedor from "../Lista/Contenedor.jsx";
import Interprete from "../Lista/Interprete.jsx";
import "../Lista/Pelicula.css";

const PeliculaUseRef = (props) => {
  return (
    <>
      <Contenedor className="peliculaContenedor_alert">
        <Interprete tipo="pelicula" nombre={props.titulo} foto={props.portada}>
          <p>Dirigida por: {props.director}</p>
          <div>{props.children}</div>
        </Interprete>
      </Contenedor>
    </>
  );
};

export default PeliculaUseRef;
