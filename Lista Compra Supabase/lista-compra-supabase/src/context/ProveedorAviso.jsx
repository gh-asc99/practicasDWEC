import { createContext } from "react";
import Aviso from "../components/Aviso.jsx";
import useAviso from "../hooks/useAviso.js";

const ContextoAviso = createContext();

export const ProveedorAviso = ({ children }) => {

    const contenidoAviso = useAviso();
    const{aviso, ocultarAviso} = contenidoAviso;

    return (
        <ContextoAviso.Provider value={contenidoAviso}>
            {children}

            <Aviso
                visible={aviso.visible}
                tipo={aviso.tipo}
                titulo={aviso.titulo}
                mensaje={aviso.mensaje}
                onClose={ocultarAviso}
            />
        </ContextoAviso.Provider>
    );
};

export default ProveedorAviso;

export {ContextoAviso};