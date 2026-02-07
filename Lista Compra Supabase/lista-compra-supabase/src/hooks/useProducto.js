import { useContext } from "react";
import { ContextoProducto } from "../context/ProveedorProducto.jsx";

const useProducto = () => {

    const contexto = useContext(ContextoProducto);

    if(!contexto){
        throw new Error(
          "No se ha usado useProducto dentro de ProveedorProducto."  
        );
    }

    return contexto;

}

export default useProducto;