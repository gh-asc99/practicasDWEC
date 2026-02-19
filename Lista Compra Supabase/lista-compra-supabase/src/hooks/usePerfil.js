import { useContext } from "react";
import { ContextoPerfil } from "../context/ProveedorPerfil.jsx";

const usePerfil = () => {

    const contexto = useContext(ContextoPerfil);

    if(!contexto){
        throw new Error(
          "No se ha usado usePerfil dentro de ProveedorPerfil."  
        );
    }

    return contexto;

}

export default usePerfil;
