"use strict";
import "./estiloPaginas.css";
import { useNavigate } from "react-router-dom";

const AcercaDe = () => {
    const navegar = useNavigate();
  return (
    <>
      <div className="bodyPagina">
        <h2>Especificaciones sobre la versión del programa.</h2>
        <p>
          <strong>Versión actual: </strong>1.00
        </p>
        <button
          onClick={() => {navegar("/");
          }}
        >
          Volver a Inicio
        </button>
      </div>
    </>
  );
};

export default AcercaDe;
