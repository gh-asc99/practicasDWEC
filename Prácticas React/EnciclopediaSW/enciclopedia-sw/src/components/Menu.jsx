import { useContext, useEffect, useState } from "react";
import { StarWarsContext } from "../context/StarWarsContext.jsx";
import { traerDatosConResults } from "../functions/traerDatos.jsx";
import ElementoMenu from "./ElementoMenu.jsx";
import "./Menu.css";

const Menu = () => {
    const { setPeliculaSeleccionada } = useContext(StarWarsContext);
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        traerDatosConResults("https://swapi.py4e.com/api/films/")
            .then(setPeliculas);
    }, []);

    return (
        <nav>
            {peliculas.map(pelicula => (
                <ElementoMenu
                    key={pelicula.episode_id}
                    pelicula={pelicula}
                    onSeleccionar={setPeliculaSeleccionada}
                />
            ))}
        </nav>
    );
};

export default Menu;
