import React from "react";
import "./Listado.css";

const Listado = (props) => {
  return (
    <>
      <div>
        <p>{props.children}</p>
        <button>Generar</button>
        <button>Eliminar</button>
      </div>
    </>
  );
};

export default Listado;