import { useContext } from "react";
import { ContextoRol } from "../context/ProveedorRol.jsx";

const useRol = () => {

    const contexto = useContext(ContextoRol);

    if(!contexto){
        throw new Error(
          "No se ha usado useRol dentro de ProveedorRol."  
        );
    }

    return contexto;

}

export default useRol;