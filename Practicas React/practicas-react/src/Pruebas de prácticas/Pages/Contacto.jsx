"use strict";
import "./estiloPaginas.css";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
    const navegar = useNavigate();
  return (
    <>
      <div className="bodyPagina">
        <h2>Información de contacto:</h2>
        <p>
          <strong>Teléfono: </strong>463-746-372
        </p>
        <p>
          <strong>Correo: </strong>gamecity34@outlook.com
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

export default Contacto;
