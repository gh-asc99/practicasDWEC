"use strict";

import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="paginaInicio">
        <h1 className="tituloPrincipal">
          ¡Bienvenido a tu colección de discos!
        </h1>
        <h4>
          Dirigete a <span className="referencia">Insertar disco</span> para
          añadir tus discos favoritos a tu colección.
        </h4>
        <h5>
          (O bien, ve a <span className="referencia">Listar disco</span> para
          consultar tus discos almacenados).
        </h5>
      </div>
    </>
  );
};

export default Inicio;
