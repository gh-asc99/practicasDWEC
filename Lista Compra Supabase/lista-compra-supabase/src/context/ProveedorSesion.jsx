import { createContext, useEffect } from "react";
import useSesion from "../hooks/useSesion.js";

const ContextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
    const sesion = useSesion();
    const { comprobarSesion } = sesion;
    useEffect(() => { //pasar al contexto los useEffect aquellas tarea que quiero que se ejecuten una sola vez
        comprobarSesion();

    }, []);
    return (
        <ContextoSesion.Provider value={sesion}>
            {children}
        </ContextoSesion.Provider>
    );
};

export default ProveedorSesion;
export { ContextoSesion };
