import { createContext } from "react"
import useProducto from "../hooks/useProducto.js";

const ContextoProducto = createContext();

const ProveedorProducto = ({children}) => {

    const producto = useProducto();

    return(
        <ContextoProducto.Provider value={producto}>{children}</ContextoProducto.Provider>
    )
}

export default ProveedorProducto;

export { ContextoProducto };