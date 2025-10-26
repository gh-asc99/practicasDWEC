"use strict";
import "./estiloPaginas.css";
import Interprete from "../components/Lista/Interprete.jsx";
import peliculas from "../assets/json/peliculas.json";
import actores from "../assets/json/actores.json";

const Interpretes = () => {
    const todosLosInterpretes = [];
    
    peliculas.forEach((pelicula) => {
        pelicula.interpretes.forEach((nombre) => {
            if (!todosLosInterpretes.includes(nombre)) {
                todosLosInterpretes.push(nombre);
            }
        });
    });

    todosLosInterpretes.sort();

    const imagenGenerica = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    const obtenerFoto = (nombre) => {
        const actorEncontrado = actores.find((actor) => actor.nombre === nombre);
        return actorEncontrado ? actorEncontrado.foto : imagenGenerica;
    };

    return (
        <section className="pagina">
            <h2>Intérpretes</h2>
            <p>Listado de actores y actrices que aparecen en las películas:</p>

            <div className="contenedor-interpretes">
                {todosLosInterpretes.map((nombre, index) => (
                    <Interprete
                        key={index}
                        nombre={nombre}
                        foto={obtenerFoto(nombre)}
                        tipo="elenco"
                    >
                    </Interprete>
                ))}
            </div>
        </section>
    );
};

export default Interpretes;
