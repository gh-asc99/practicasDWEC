import { useContext } from "react";
import { ContextoAviso } from "../context/ProveedorAviso.jsx";

const useAviso = () => {
    const contexto = useContext(ContextoAviso);

    if(!contexto){
        throw new Error(
          "No se ha usado useAviso dentro de ProveedorAviso."  
        );
    }

    return contexto;
}

export default useAviso;