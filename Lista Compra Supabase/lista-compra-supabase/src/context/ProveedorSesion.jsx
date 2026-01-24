import { createContext } from "react";
import useSesion from "../hooks/useSesion.js";

const ContextoSesion = createContext();

const ProveedorSesion = ({ children }) => {

    const sesion = useSesion();

    return (
        <ContextoSesion.Provider value={sesion}>
            {children}
        </ContextoSesion.Provider>
    );
};

export default ProveedorSesion;
export { ContextoSesion };
