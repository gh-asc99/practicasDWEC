"use strict";

const ElementoMenu = ({ pelicula, onSeleccionar }) => {
    return (
        <a
            className="enlaceMenu"
            onClick={(e) => {
                e.preventDefault();
                onSeleccionar(pelicula.episode_id);
            }}
        >
            {pelicula.title}
        </a>

    );
};

export default ElementoMenu;
