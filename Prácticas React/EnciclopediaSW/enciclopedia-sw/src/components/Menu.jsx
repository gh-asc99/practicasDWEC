"use strict";

import { useEffect, useState } from "react";
import "./Menu.css";

const Menu = ({ setPeliculaSeleccionada }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/films/")
      .then(respuesta => respuesta.json())
      .then(datos => {
        setPeliculas(datos.results);
        setCargando(false);
      })
      .catch(error => {
        console.error("Error al obtener las películas:", error);
        setCargando(false);
      });
  }, []);

  return (
    <nav>
      {cargando && <p>Cargando películas...</p>}

      {!cargando && peliculas.length === 0 && (
        <p>No hay películas disponibles.</p>
      )}
        {peliculas.map(pelicula => (
            <a key={pelicula.episode_id}
              href="#"
              onClick={(evento) => {
                evento.preventDefault();
                setPeliculaSeleccionada(pelicula.episode_id);
              }}
            >
              {pelicula.title}
            </a>
        ))}
    </nav>
  );
};

export default Menu;