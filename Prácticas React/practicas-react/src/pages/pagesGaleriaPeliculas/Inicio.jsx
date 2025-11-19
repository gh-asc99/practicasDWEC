"use strict";
import "./estiloPaginas.css";

const Inicio = () => {
  return (
    <>
      <div className="bodyPagina">
        <h2>Bienvenido a la página de inicio.</h2>
        <p>Recorre las diferentes secciones de la página web para consultar la información de tus películas favoritas.</p>
        <div className="secciones">
        <h3>Secciones:</h3>
        <p><strong>Peliculas: </strong>Consulta el listado de películas.</p>
        <p><strong>Intérpretes: </strong>Consulta la información referente al reparto de las películas.</p>
        <p><strong>Galería: </strong>Consulta las carteleras de las películas.</p>
        <p><strong>Acerca de: </strong>Consulta información destacada sobre la aplicación web.</p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
