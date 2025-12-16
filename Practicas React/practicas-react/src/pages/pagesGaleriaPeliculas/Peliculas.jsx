"use strict";
import "./estiloPaginas.css";
import peliculas from "../../assets/json/peliculas.json";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Peliculas = () => {
  const navegar = useNavigate();
  return (
    <>
      <div>
        <h2>Listado de Películas</h2>
        <div>
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="tarjeta_pelicula">
              <img src={pelicula.cartel} alt={pelicula.titulo} />
              <h3>{pelicula.titulo}</h3>
              <p>({pelicula.anio})</p>
              <nav className="boton_detalles">
                <Link className="botonMenu" to={`/pelicula/${pelicula.id}`}>
                  Ver detalles
                </Link>
              </nav>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
      <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a Inicio
      </button>
    </>
  );
};

export default Peliculas;
