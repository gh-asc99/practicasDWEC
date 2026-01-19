import { createContext } from "react"

const ContextoProducto = createContext();

const ProveedorProducto = () => {
    const elementosExportados = {};
    return(
        <ContextoProducto value={elementosExportados}>{children}</ContextoProducto>
    )
}

export default ProveedorProducto;

export { ContextoProducto };