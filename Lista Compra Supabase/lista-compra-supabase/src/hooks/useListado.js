import { useContext } from "react";
import { ContextoListado } from "../context/ProveedorListado.jsx";

const useListado = () => {

    const contexto = useContext(ContextoListado);

    if(!contexto){
        throw new Error(
          "No se ha usado useListado dentro de ProveedorListado."  
        );
    }

    return contexto;

}

export default useListado
