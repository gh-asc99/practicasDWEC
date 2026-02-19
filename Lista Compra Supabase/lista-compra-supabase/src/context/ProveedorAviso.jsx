import { useState, createContext } from "react";
import Aviso from "../components/Aviso.jsx";

const ContextoAviso = createContext();

export const ProveedorAviso = ({ children }) => {

    const avisoInicial = {
            visible: false,
            tipo: "info",
            titulo: "",
            mensaje: ""
        };
        const [aviso, setAviso] = useState(avisoInicial);
    
        const mostrarAviso = ({ tipo = "info", titulo, mensaje }) => {
            setAviso({
                visible: true,
                tipo,
                titulo,
                mensaje
            });
        };
    
        const ocultarAviso = () => {
            setAviso(avisoInicial);
        };
    
        const datosInsertadosContexto = {
            aviso,
            mostrarAviso,
            ocultarAviso
        }

    return (
        <ContextoAviso.Provider value={datosInsertadosContexto}>
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