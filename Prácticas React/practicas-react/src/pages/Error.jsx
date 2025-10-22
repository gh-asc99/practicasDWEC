"use strict";
import "./estiloPaginas.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navegar = useNavigate();
  return (
    <>
      <div className="bodyPagina">
        <h2>!Vaya, parece que ha habido algún problema¡</h2>
        <p>
          Comprueba si la ruta que has escrito por URL es correcta e inténtalo
          de nuevo.
        </p>
        <button
          onClick={() => {
            navegar("/");
          }}
        >
          Volver a Inicio
        </button>
      </div>
    </>
  );
};

export default Error;
