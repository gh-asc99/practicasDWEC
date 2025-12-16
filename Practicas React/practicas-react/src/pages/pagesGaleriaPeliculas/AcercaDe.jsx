"use strict";
import "./estiloPaginas.css";
import { useNavigate } from "react-router-dom";

const AcercaDe = () => {
    const navegar = useNavigate();
  return (
    <>
      <div className="bodyPagina">
        <h2>Especificaciones de la aplicación web</h2>
        <p>
          <strong>Versión actual: </strong>1.00.
        </p>
        <p>
          <strong>Creador: </strong>Alejandro Soler Cruz.
        </p>
        <p>
          <strong>Fecha de modificación: </strong>26 de octubre de 2025.
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
