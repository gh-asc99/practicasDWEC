import { useContext } from "react"

const ContextoSesion = useContext();

const ProveedorSesion = () => {

    const elementosExportados = {};
    return(
        <ContextoSesion value={elementosExportados}>{children}</ContextoSesion>
    )
}

export default ProveedorSesion;

export { ContextoSesion };