"use strict";
import "./estiloPaginas.css";
import Interprete from "../components/Lista/Interprete.jsx";
import peliculas from "../assets/json/peliculas.json";
import { useNavigate } from "react-router-dom";

const Interpretes = () => {
    const navegar = useNavigate();
    const todosLosInterpretes = [];
    
    peliculas.forEach((pelicula) => {
        pelicula.interpretes.forEach((nombre) => {
            if (!todosLosInterpretes.includes(nombre)) {
                todosLosInterpretes.push(nombre);
            }
        });
    });

    todosLosInterpretes.sort();

    return (
        <>
        <div>
            <h2>Intérpretes</h2>
            <p>Listado de actores y actrices que aparecen en las películas:</p>

            <div className="contenedor-interpretes">
                {todosLosInterpretes.map((actor, index) => (
                    <Interprete
                        key={index}
                        nombre={actor.nombre}
                        foto={actor.foto}
                        descripcion={actor.descripcion}
                        tipo="elenco"
                    >
                    </Interprete>
                ))}
            </div>
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

export default Interpretes;
