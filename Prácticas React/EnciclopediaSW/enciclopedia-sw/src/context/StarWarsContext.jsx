"use strict";

import { createContext, useState } from "react";

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

    return (
        <StarWarsContext.Provider value={{
            peliculaSeleccionada,
            setPeliculaSeleccionada,
            personajeSeleccionado,
            setPersonajeSeleccionado
        }}>
            {children}
        </StarWarsContext.Provider>
    );
};

export { StarWarsContext, StarWarsProvider };
